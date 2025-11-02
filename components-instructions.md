# Documentação de Componentes Genéricos - IPOG

Este documento contém todos os componentes genéricos reutilizáveis do projeto IPOG com suas interfaces, props e exemplos de uso para reprodução em outros projetos.

**Última atualização:** Janeiro 2025

---

## Índice

1. [Hero](#hero)
2. [CtaFinal](#ctafinal)
3. [AcaoFinal](#acaofinal)
4. [Modalidades](#modalidades)
5. [Beneficios](#beneficios)
6. [FAQSection](#faqsection)
7. [MetodosPagamento](#metodospagamento)
8. [SectionWrapper](#sectionwrapper)
9. [RoiSection](#roisection)
10. [MetodologiaUnificada](#metodologiaunificada)
11. [ResultadosComprovados](#resultadoscomprovados)
12. [ExperienceSection](#experiencesection)
13. [CicloInfo](#cicloinfo)
14. [QuatroVerticais](#quatroverticais)

---

## Hero

Componente de seção hero/banner principal com badge, título, descrição, badges de valor e CTAs.

### Interface

\`\`\`typescript
interface ValueBadge {
  icon?: ReactNode
  text: string
}

interface CTA {
  text: string
  href?: string
  onClick?: (() => void) | string
  variant?: "default" | "outline"
  icon?: ReactNode
}

interface HeroProps {
  badge: string
  title: string
  description: string
  valueBadges: ValueBadge[]
  primaryCTA: CTA
  secondaryCTA?: CTA
  backgroundImage?: string
  minHeight?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<Hero
  badge="Graduação EAD"
  title="Psicologia - Bacharelado"
  description="Forme-se em uma das profissões mais valorizadas do mercado"
  valueBadges={[
    { text: "Reconhecido pelo MEC" },
    { text: "4 anos de duração" },
    { text: "100% online" }
  ]}
  primaryCTA={{
    text: "Inscreva-se agora",
    href: "/inscricao"
  }}
  secondaryCTA={{
    text: "Fale com consultor",
    onClick: "openAssistantForConsultor"
  }}
  minHeight="600px"
/>
\`\`\`

---

## CtaFinal

Componente de CTA final com preços, informações de matrícula e blur reveal.

### Interface

\`\`\`typescript
interface CtaFinalProps {
  title?: string
  description?: string
  enrollmentFee?: string
  monthlyFee?: string
  duration?: string
  totalCost?: string
  nextClassDate?: string
  promotionDeadline?: string
  isGraduacao?: boolean
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<CtaFinal
  title="Invista na sua carreira com o IPOG"
  description="Taxa de Inscrição: R$ 100,00 | Mensalidades: a partir de R$ 499,00+"
  enrollmentFee="R$ 100,00"
  monthlyFee="R$ 499,00"
  duration="18 meses"
  totalCost="R$ 12.582,00"
  nextClassDate="Novembro"
  promotionDeadline="30 de Outubro"
  isGraduacao={true}
/>
\`\`\`

### Comportamento Especial

- Detecta automaticamente se é graduação pela prop `isGraduacao` ou pela presença de "Taxa de Inscrição" na descrição
- Graduação usa "Taxa de inscrição" e "Inscrever-se no processo seletivo"
- Pós-graduação/Extensão usa "Taxa de matrícula" e "Pagar matrícula agora"
- Blur reveal no card de preços (clique para revelar)

---

## AcaoFinal

Componente de call-to-action com dois botões (primário e secundário).

### Interface

\`\`\`typescript
interface AcaoFinalProps {
  title: string
  descricao: string
  botaoPrimario: {
    texto: string
    href?: string
    onClick?: () => void
    icone?: ReactNode
  }
  botaoSecundario: {
    texto: string
    href?: string
    onClick?: () => void
    icone?: ReactNode
  }
  corFundo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<AcaoFinal
  title="Pronto para transformar sua carreira?"
  descricao="Junte-se a mais de 70 mil alunos que escolheram o IPOG"
  botaoPrimario={{
    texto: "Inscreva-se agora",
    href: "/inscricao"
  }}
  botaoSecundario={{
    texto: "Fale com consultor",
    onClick: openAssistantForConsultor
  }}
  corFundo="bg-muted"
/>
\`\`\`

---

## Modalidades

Componente de carrossel de modalidades de curso (Presencial, EAD, Híbrido).

### Interface

\`\`\`typescript
interface Modalidade {
  badge: string
  titulo: string
  descricao: string
  beneficios: string[]
  link: string
  buttonText: string
}

interface ModalidadesProps {
  title: string
  subtitle?: string
  modalidades: Modalidade[]
  backgroundColor?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<Modalidades
  title="Escolha sua modalidade"
  subtitle="Flexibilidade para estudar do seu jeito"
  modalidades={[
    {
      badge: "Presencial",
      titulo: "Aulas no Campus",
      descricao: "Experiência completa com networking",
      beneficios: [
        "Aulas presenciais",
        "Networking direto",
        "Laboratórios equipados"
      ],
      link: "/graduacao/presencial",
      buttonText: "Ver cursos presenciais"
    },
    {
      badge: "EAD",
      titulo: "100% Online",
      descricao: "Estude de onde estiver",
      beneficios: [
        "Flexibilidade total",
        "Plataforma moderna",
        "Suporte 24/7"
      ],
      link: "/graduacao/ead",
      buttonText: "Ver cursos EAD"
    }
  ]}
  backgroundColor="bg-gray-50"
/>
\`\`\`

---

## Beneficios

Componente de carrossel de benefícios com ícones e listas.

### Interface

\`\`\`typescript
interface Beneficio {
  icone: ReactNode
  titulo: string
  subtitulo: string
  itens: string[]
}

interface BeneficiosProps {
  title: string
  subtitle: string
  beneficios: Beneficio[]
  textoBotao?: string
  onClickBotao?: () => void
  corFundo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<Beneficios
  title="Por que escolher o IPOG?"
  subtitle="Diferenciais que fazem a diferença na sua formação"
  beneficios={[
    {
      icone: <GraduationCap className="w-8 h-8" />,
      titulo: "Professores Mestres e Doutores",
      subtitulo: "Corpo docente qualificado",
      itens: [
        "100% com titulação",
        "Experiência de mercado",
        "Metodologia aplicada"
      ]
    },
    {
      icone: <Award className="w-8 h-8" />,
      titulo: "Reconhecimento MEC",
      subtitulo: "Qualidade garantida",
      itens: [
        "Nota máxima no MEC",
        "Diploma reconhecido",
        "Credibilidade nacional"
      ]
    }
  ]}
  textoBotao="Conheça todos os benefícios"
  onClickBotao={openAssistantForConsultor}
  corFundo="bg-muted/30"
/>
\`\`\`

---

## FAQSection

Componente de perguntas frequentes com accordion.

### Interface

\`\`\`typescript
interface FAQItem {
  pergunta: string
  resposta: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  bgColor?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<FAQSection
  title="Dúvidas Frequentes"
  subtitle="Tire suas principais dúvidas sobre o curso"
  items={[
    {
      pergunta: "O curso é reconhecido pelo MEC?",
      resposta: "Sim, todos os nossos cursos de graduação são reconhecidos pelo MEC com nota máxima."
    },
    {
      pergunta: "Qual a duração do curso?",
      resposta: "O curso tem duração de 4 anos (8 semestres) na modalidade regular."
    },
    {
      pergunta: "Posso transferir de outra instituição?",
      resposta: "Sim, aceitamos transferências. Entre em contato para análise do seu histórico."
    }
  ]}
  bgColor="bg-background"
/>
\`\`\`

---

## MetodosPagamento

Componente que exibe métodos de pagamento aceitos com carregamento dinâmico.

### Interface

\`\`\`typescript
interface MetodosPagamentoProps {
  title?: string
  className?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<MetodosPagamento
  title="Formas de Pagamento"
  className="max-w-3xl mx-auto"
/>
\`\`\`

### Comportamento Especial

- Carrega métodos de pagamento dinamicamente via `getAvailablePaymentMethods()`
- Exibe loading state durante carregamento
- Suporta badges (ex: "Recomendado", "Sem juros")
- Mostra informações de parcelamento quando disponível

---

## SectionWrapper

Componente wrapper que força título obrigatório em seções (sistema de prevenção).

### Interface

\`\`\`typescript
interface SectionWrapperProps {
  /**
   * Título obrigatório da seção - garante que nenhuma seção fique sem título
   */
  titulo: string
  /**
   * Conteúdo da seção
   */
  children: ReactNode
  /**
   * ID opcional para navegação/âncoras
   */
  id?: string
  /**
   * Classes CSS adicionais
   */
  className?: string
  /**
   * Cor de fundo da seção
   */
  bgColor?: string
  /**
   * Nível do título (h2, h3, etc)
   * @default "h2"
   */
  nivelTitulo?: "h2" | "h3" | "h4"
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<SectionWrapper
  titulo="Diferenciais do Curso"
  id="diferenciais"
  bgColor="bg-gray-50"
  nivelTitulo="h2"
>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Conteúdo da seção */}
  </div>
</SectionWrapper>
\`\`\`

### Propósito

Este componente foi criado como parte do sistema de prevenção de seções sem título. Ele força que toda seção tenha um título obrigatório, evitando o problema recorrente de seções sem identificação.

---

## RoiSection

Componente de seção de ROI (Retorno sobre Investimento).

### Interface

\`\`\`typescript
interface RoiSectionProps {
  titulo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<RoiSection titulo="Retorno Sobre Investimento" />
\`\`\`

### Valor Padrão

- `titulo`: "Retorno Sobre Investimento"

---

## MetodologiaUnificada

Componente que apresenta a metodologia IPOG.

### Interface

\`\`\`typescript
interface MetodologiaUnificadaProps {
  titulo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<MetodologiaUnificada titulo="Metodologia IPOG: teoria + prática + mentoria" />
\`\`\`

### Valor Padrão

- `titulo`: "Metodologia IPOG: teoria + prática + mentoria"

---

## ResultadosComprovados

Componente de seção de resultados e estatísticas.

### Interface

\`\`\`typescript
interface ResultadosComprovadosProps {
  titulo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<ResultadosComprovados titulo="Mais de 20 anos transformando carreiras e empresas" />
\`\`\`

### Valor Padrão

- `titulo`: "Mais de 20 anos transformando carreiras e empresas"

---

## ExperienceSection

Componente de seção de experiência IPOG.

### Interface

\`\`\`typescript
interface ExperienceSectionProps {
  titulo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<ExperienceSection titulo="Experiência IPOG" />
\`\`\`

### Valor Padrão

- `titulo`: "Experiência IPOG"

---

## CicloInfo

Componente de informações sobre ciclos de matrícula.

### Interface

\`\`\`typescript
interface CicloInfoProps {
  titulo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<CicloInfo titulo="Ciclos de Matrícula" />
\`\`\`

### Valor Padrão

- `titulo`: "Ciclos de Matrícula"

---

## QuatroVerticais

Componente que apresenta as quatro verticais de ensino (Graduação, Pós, Extensão, etc).

### Interface

\`\`\`typescript
interface QuatroVerticaisProps {
  titulo?: string
}
\`\`\`

### Exemplo de Uso

\`\`\`tsx
<QuatroVerticais titulo="Escolha o caminho que combina com sua trajetória" />
\`\`\`

### Valor Padrão

- `titulo`: "Escolha o caminho que combina com sua trajetória"

---

## Regras de Uso - IMPORTANTE

### Regra de Ouro para Títulos

**TODOS os componentes reutilizáveis DEVEM aceitar prop `titulo`**

1. **Componentes reutilizáveis NÃO devem ter títulos hardcoded**
   - ❌ ERRADO: `<h2>Métodos de Pagamento</h2>` dentro do componente
   - ✅ CORRETO: `<h2>{titulo}</h2>` com prop obrigatória

2. **Páginas são responsáveis por TODOS os títulos de seções**
   - ✅ CORRETO: `<MetodosPagamento titulo="Formas de Pagamento" />`
   - ✅ CORRETO: `<FAQSection title="Dúvidas Frequentes" items={...} />`

3. **Use valores padrão para compatibilidade retroativa**
   \`\`\`typescript
   interface ComponenteProps {
     titulo?: string // Opcional com valor padrão
   }
   
   export function Componente({ titulo = "Título Padrão" }: ComponenteProps) {
     return <h2>{titulo}</h2>
   }
   \`\`\`

4. **Use SectionWrapper quando precisar garantir título obrigatório**
   \`\`\`tsx
   <SectionWrapper titulo="Título Obrigatório">
     <ConteudoDaSecao />
   </SectionWrapper>
   \`\`\`

### Hierarquia de Títulos

\`\`\`
H1 - Título da página (Hero) - 1 por página
H2 - Títulos de seções principais - Múltiplos
H3 - Subtítulos dentro de seções - Múltiplos
H4+ - Títulos menores conforme necessário
\`\`\`

### Estrutura Padrão de Página de Curso

Todas as páginas de cursos devem seguir esta estrutura:

1. **Hero** - Seção principal com título do curso
2. **Diferenciais** - Benefícios e diferenciais do curso
3. **Metodologia** (opcional) - Como funciona o curso
4. **Resultados** (opcional) - Estatísticas e cases
5. **Métodos de Pagamento** - Formas de pagamento aceitas
6. **FAQ** - Perguntas frequentes (OBRIGATÓRIO)
7. **CtaFinal** - Call-to-action final com preços

### Validação Automática

Execute o script de validação para detectar problemas:

\`\`\`bash
npm run validate:titles
\`\`\`

O script verifica:
- Componentes com títulos hardcoded
- Seções sem título
- Títulos duplicados
- Hierarquia incorreta

---

## Dependências Necessárias

Para reproduzir estes componentes em outro projeto, você precisará:

### Componentes UI (shadcn/ui)

\`\`\`bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add accordion
npx shadcn@latest add carousel
\`\`\`

### Ícones

\`\`\`bash
npm install lucide-react
\`\`\`

### Utilitários

\`\`\`typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
\`\`\`

### Funções de Assistente (opcional)

\`\`\`typescript
// lib/assistant-events.ts
export function openAssistantForConsultor() {
  // Implementação específica do projeto
  console.log("Abrindo assistente para consultor")
}

export function openAssistantForPrice() {
  // Implementação específica do projeto
  console.log("Abrindo assistente para preço")
}
\`\`\`

---

## Checklist de Implementação

Ao implementar estes componentes em um novo projeto:

- [ ] Instalar dependências (shadcn/ui, lucide-react)
- [ ] Criar utilitário `cn()` em `lib/utils.ts`
- [ ] Implementar funções de assistente (ou adaptar)
- [ ] Copiar componentes para `components/`
- [ ] Garantir que todos os componentes aceitam prop `titulo`
- [ ] Criar `SectionWrapper` para prevenção
- [ ] Documentar regras em `GUIDELINES-SECOES.md`
- [ ] Criar script de validação `validate-titles.js`
- [ ] Adicionar comando `validate:titles` ao `package.json`
- [ ] Testar todos os componentes em páginas de exemplo

---

## Suporte e Manutenção

Para dúvidas ou problemas:

1. Consulte `GUIDELINES-SECOES.md` para regras detalhadas
2. Execute `npm run validate:titles` para detectar problemas
3. Verifique a hierarquia de títulos (H1 > H2 > H3)
4. Garanta que todas as seções têm títulos

**Última atualização:** Janeiro 2025  
**Versão:** 1.0.0
