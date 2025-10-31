/**
 * Script de Validação de Títulos
 *
 * Detecta automaticamente:
 * 1. Componentes reutilizáveis com títulos hardcoded
 * 2. Seções sem título
 * 3. Títulos duplicados na mesma página
 *
 * Uso: node scripts/validate-titles.js
 */

import { readFileSync, readdirSync, statSync } from "fs"
import { join } from "path"

const ERRORS = []
const WARNINGS = []

// Padrões problemáticos
const TITLE_PATTERNS = [/<h1[^>]*>.*?<\/h1>/gi, /<h2[^>]*>.*?<\/h2>/gi, /<h3[^>]*>.*?<\/h3>/gi]

const COMPONENT_DIRS_TO_CHECK = ["components"]
const PAGE_DIRS_TO_CHECK = ["app"]

// Componentes que PODEM ter títulos hardcoded (específicos de página)
const ALLOWED_HARDCODED_COMPONENTS = [
  "components/curso-psicologia/",
  "components/graduacao/",
  "components/pos-graduacao/",
  "components/extensao/",
]

function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir)

  files.forEach((file) => {
    const filePath = join(dir, file)
    if (statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList)
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fileList.push(filePath)
    }
  })

  return fileList
}

function isAllowedHardcodedComponent(filePath) {
  return ALLOWED_HARDCODED_COMPONENTS.some((allowed) => filePath.includes(allowed))
}

function checkComponentForHardcodedTitles(filePath, content) {
  // Pular componentes específicos de página
  if (isAllowedHardcodedComponent(filePath)) {
    return
  }

  // Verificar se é um componente reutilizável (exporta função/componente)
  const isComponent = /export (function|const|default)/.test(content)
  if (!isComponent) return

  // Verificar se tem títulos hardcoded
  const hasH2 = /<h2[^>]*>(?!{)/.test(content)
  const hasH3 = /<h3[^>]*>(?!{)/.test(content)

  if (hasH2 || hasH3) {
    // Verificar se aceita prop titulo
    const hasTituloProps = /titulo[?]?:\s*string/.test(content) || /title[?]?:\s*string/.test(content)

    if (!hasTituloProps) {
      ERRORS.push({
        file: filePath,
        type: "HARDCODED_TITLE",
        message: "Componente reutilizável tem título hardcoded mas não aceita prop titulo/title",
      })
    }
  }
}

function checkPageForMissingTitles(filePath, content) {
  // Verificar se é uma página
  if (!filePath.includes("/page.tsx")) return

  // Contar seções
  const sectionMatches = content.match(/<section/g) || []
  const sectionCount = sectionMatches.length

  if (sectionCount === 0) return // Página sem seções

  // Contar títulos H2 (títulos de seção)
  const h2Matches = content.match(/<h2/g) || []
  const h2Count = h2Matches.length

  // Verificar componentes que têm títulos internos
  const componentWithTitles = [
    "MetodosPagamento",
    "Hero",
    "CtaFinal",
    "AcaoFinal",
    "FAQSection",
    "Jornadas",
    "Cursos",
    "Modalidades",
    "Trilha",
    "Dilema",
    "Beneficios",
    "ResultadosReais",
    "Empregabilidade",
    "DepoimentosDeTexto",
    "Autoridade",
    "FormasIngresso",
    "MetodologiaUnificada",
    "ResultadosComprovados",
    "QuatroVerticais",
    "RoiSection",
    "ExperienceSection",
    "CicloInfo",
  ]

  let componentTitleCount = 0
  componentWithTitles.forEach((comp) => {
    const matches = content.match(new RegExp(`<${comp}`, "g")) || []
    componentTitleCount += matches.length
  })

  const totalTitles = h2Count + componentTitleCount

  // Se há seções mas poucos títulos, pode haver problema
  if (sectionCount > totalTitles + 2) {
    WARNINGS.push({
      file: filePath,
      type: "POSSIBLE_MISSING_TITLES",
      message: `Página tem ${sectionCount} seções mas apenas ${totalTitles} títulos detectados. Verifique se todas as seções têm títulos.`,
    })
  }
}

function checkForDuplicateTitles(filePath, content) {
  if (!filePath.includes("/page.tsx")) return

  // Extrair todos os textos de títulos H2
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi
  const titles = []
  let match

  while ((match = h2Regex.exec(content)) !== null) {
    const titleText = match[1].replace(/<[^>]*>/g, "").trim()
    if (titleText && !titleText.startsWith("{")) {
      titles.push(titleText)
    }
  }

  // Verificar duplicatas
  const duplicates = titles.filter((title, index) => titles.indexOf(title) !== index)

  if (duplicates.length > 0) {
    ERRORS.push({
      file: filePath,
      type: "DUPLICATE_TITLES",
      message: `Títulos duplicados encontrados: ${[...new Set(duplicates)].join(", ")}`,
    })
  }
}

// Executar validações
console.log("🔍 Iniciando validação de títulos...\n")

// Validar componentes
COMPONENT_DIRS_TO_CHECK.forEach((dir) => {
  const files = getAllFiles(dir)
  files.forEach((file) => {
    const content = readFileSync(file, "utf-8")
    checkComponentForHardcodedTitles(file, content)
  })
})

// Validar páginas
PAGE_DIRS_TO_CHECK.forEach((dir) => {
  const files = getAllFiles(dir)
  files.forEach((file) => {
    const content = readFileSync(file, "utf-8")
    checkPageForMissingTitles(file, content)
    checkForDuplicateTitles(file, content)
  })
})

// Exibir resultados
console.log("📊 RESULTADOS DA VALIDAÇÃO\n")

if (ERRORS.length === 0 && WARNINGS.length === 0) {
  console.log("✅ Nenhum problema encontrado! Todos os títulos estão corretos.\n")
  process.exit(0)
}

if (ERRORS.length > 0) {
  console.log(`❌ ERROS (${ERRORS.length}):\n`)
  ERRORS.forEach((error, index) => {
    console.log(`${index + 1}. ${error.file}`)
    console.log(`   Tipo: ${error.type}`)
    console.log(`   ${error.message}\n`)
  })
}

if (WARNINGS.length > 0) {
  console.log(`⚠️  AVISOS (${WARNINGS.length}):\n`)
  WARNINGS.forEach((warning, index) => {
    console.log(`${index + 1}. ${warning.file}`)
    console.log(`   Tipo: ${warning.type}`)
    console.log(`   ${warning.message}\n`)
  })
}

console.log("\n📖 Consulte GUIDELINES-SECOES.md para mais informações sobre as regras.\n")

process.exit(ERRORS.length > 0 ? 1 : 0)
