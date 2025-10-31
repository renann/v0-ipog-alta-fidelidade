# Guia de Seções e Títulos - IPOG

## 🎯 Objetivo
Garantir que todas as seções do site tenham títulos claros e evitar duplicação de títulos.

---

## Regras Obrigatórias

### REGRA 1: Componentes Reutilizáveis NÃO devem ter títulos hardcoded

ERRADO:
\`\`\`tsx
export function MetodosPagamento() {
  return (
    <section>
      <h2>Métodos de Pagamento Aceitos</h2>
      {/* conteúdo */}
    </section>
  )
}
\`\`\`

CORRETO:
\`\`\`tsx
interface MetodosPagamentoProps {
  title: string // Obrigatório
}

export function MetodosPagamento({ title }: MetodosPagamentoProps) {
  return (
    <section>
      <h2>{title}</h2>
      {/* conteúdo */}
    </section>
  )
}
\`\`\`

### REGRA 2: Páginas são responsáveis por TODOS os títulos de seções

CORRETO:
\`\`\`tsx
<MetodosPagamento title="Formas de Pagamento" />
<Diferenciais title="Por que escolher o IPOG?" />
<FAQ title="Dúvidas Frequentes" />
\`\`\`

### REGRA 3: Use SectionWrapper para garantir padrão

RECOMENDADO:
\`\`\`tsx
import { SectionWrapper } from "@/components/section-wrapper"

<SectionWrapper titulo="Métodos de Pagamento">
  <MetodosPagamentoContent />
</SectionWrapper>
\`\`\`

---

## Hierarquia de Títulos

\`\`\`
H1 - Título da página (Hero) - 1 por página
H2 - Títulos de seções principais - Múltiplos
H3 - Subtítulos dentro de seções - Múltiplos
H4+ - Títulos menores conforme necessário
\`\`\`

---

## Checklist de Code Review

Antes de qualquer commit/PR:

- [ ] Todos os componentes de seção têm prop titulo?
- [ ] Nenhum título está hardcoded em componentes reutilizáveis?
- [ ] Hierarquia de títulos está correta (H1 > H2 > H3)?
- [ ] Não há seções sem título?
- [ ] Não há títulos duplicados?

---

## Componentes que Precisam de Atenção

### Componentes Reutilizáveis (devem aceitar prop titulo):
- `MetodosPagamento` - JÁ CORRETO (aceita prop title)
- `Diferenciais`
- `FormasPagamento`
- Qualquer componente usado em múltiplas páginas

### Componentes Específicos (podem ter título interno):
- Componentes em pastas específicas de curso (ex: `components/curso-psicologia/`)
- Componentes usados em UMA página apenas

---

## Exemplos Práticos

### Exemplo 1: Página de Curso
\`\`\`tsx
// CORRETO
<MetodosPagamento title="Formas de Pagamento do Curso" />

// ERRADO - Título duplicado
<section>
  <h2>Formas de Pagamento</h2>
  <MetodosPagamento /> {/* Componente já tem título interno */}
</section>
\`\`\`

### Exemplo 2: Usando SectionWrapper
\`\`\`tsx
// CORRETO - Força título obrigatório
<SectionWrapper titulo="Diferenciais do IPOG">
  <DiferenciaisContent />
</SectionWrapper>
\`\`\`

---

## Problemas Comuns e Soluções

### Problema: Seção sem título
**Solução:** Use SectionWrapper ou adicione prop titulo ao componente

### Problema: Título duplicado
**Solução:** Remova o wrapper de seção ou passe título vazio para o componente

### Problema: Título hardcoded
**Solução:** Transforme em prop obrigatória

---

## Processo de Atualização

1. **Antes de criar novo componente:**
   - Pergunte: Este componente será reutilizado?
   - Se SIM: Adicione prop `titulo: string` obrigatória
   - Se NÃO: Pode ter título interno

2. **Antes de usar componente existente:**
   - Verifique se ele aceita prop titulo
   - Se SIM: Passe o título apropriado
   - Se NÃO: Não adicione wrapper com título

3. **Ao revisar código:**
   - Use o checklist acima
   - Busque por `<h2>` hardcoded em components/
   - Verifique hierarquia de títulos

---

**Última atualização:** 2025-01-31
**Responsável:** Equipe de Desenvolvimento IPOG
