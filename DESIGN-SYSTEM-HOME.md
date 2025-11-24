# Design System - Home IPOG
*Documentação completa dos componentes da página inicial*

---

## 📋 Índice
1. [Sistema de Design Base](#sistema-de-design-base)
2. [Componentes da Home](#componentes-da-home)
3. [Hierarquia Visual](#hierarquia-visual)
4. [Especificações Técnicas](#especificacoes-tecnicas)

---

## 🎨 Sistema de Design Base

### Paleta de Cores

#### Modo Claro (Light Mode)
\`\`\`
--background: oklch(1 0 0)              // Branco puro
--foreground: oklch(0.145 0 0)          // Preto escuro (texto principal)
--primary: oklch(0.205 0 0)             // Preto (primária)
--primary-foreground: oklch(0.985 0 0)  // Branco (texto sobre primária)
--secondary: oklch(0.97 0 0)            // Cinza muito claro
--secondary-foreground: oklch(0.205 0 0)// Preto
--muted: oklch(0.97 0 0)                // Cinza claro (fundo alternativo)
--muted-foreground: oklch(0.556 0 0)    // Cinza médio (texto secundário)
--accent: oklch(0.97 0 0)               // Cinza claro (acentos)
--accent-foreground: oklch(0.205 0 0)   // Preto
--border: oklch(0.922 0 0)              // Cinza muito claro (bordas)
--card: oklch(1 0 0)                    // Branco (fundo de cards)
--card-foreground: oklch(0.145 0 0)     // Preto escuro
\`\`\`

#### Modo Escuro (Dark Mode)
\`\`\`
--background: oklch(0.145 0 0)          // Preto escuro
--foreground: oklch(0.985 0 0)          // Branco (texto principal)
--primary: oklch(0.985 0 0)             // Branco (primária)
--primary-foreground: oklch(0.205 0 0)  // Preto
--muted: oklch(0.269 0 0)               // Cinza escuro
--muted-foreground: oklch(0.708 0 0)    // Cinza médio
--border: oklch(0.269 0 0)              // Cinza escuro (bordas)
\`\`\`

### Tipografia

#### Família de Fontes
- **Sans-serif**: Inter (sistema de fontes padrão)
- **Monospace**: Geist Mono (para código/dados)

#### Escala Tipográfica
\`\`\`
text-xs:    0.75rem  (12px)   - Tags, badges, metadados
text-sm:    0.875rem (14px)   - Texto secundário, descrições
text-base:  1rem     (16px)   - Texto corpo padrão
text-lg:    1.125rem (18px)   - Subtítulos, leads
text-xl:    1.25rem  (20px)   - Títulos de cards
text-2xl:   1.5rem   (24px)   - Títulos de seções mobile
text-3xl:   1.875rem (30px)   - Títulos de seções
text-4xl:   2.25rem  (36px)   - Títulos principais
text-5xl:   3rem     (48px)   - Hero titles
\`\`\`

#### Pesos de Fonte
\`\`\`
font-normal:   400 - Texto corpo
font-medium:   500 - Ênfase leve
font-semibold: 600 - Subtítulos
font-bold:     700 - Títulos, CTAs
\`\`\`

#### Line Heights
\`\`\`
leading-none:     1
leading-tight:    1.25
leading-normal:   1.5
leading-relaxed:  1.625  (preferencial para texto corpo)
leading-loose:    2
\`\`\`

### Espaçamento

#### Sistema de Espaços (rem/px)
\`\`\`
gap-1:  0.25rem  (4px)
gap-2:  0.5rem   (8px)
gap-3:  0.75rem  (12px)
gap-4:  1rem     (16px)   - Espaçamento interno padrão
gap-6:  1.5rem   (24px)   - Espaçamento entre elementos
gap-8:  2rem     (32px)   - Espaçamento entre seções
gap-12: 3rem     (48px)
gap-16: 4rem     (64px)   - Espaçamento entre seções principais

py-6:   1.5rem   (24px)   - Padding vertical seções mobile
py-8:   2rem     (32px)
py-12:  3rem     (48px)   - Padding vertical seções desktop
py-16:  4rem     (64px)
py-24:  6rem     (96px)

px-4:   1rem     (16px)   - Padding horizontal container
px-6:   1.5rem   (24px)
\`\`\`

### Raios de Borda (Border Radius)

\`\`\`
--radius: 0.625rem (10px) - Base

rounded-sm:   calc(var(--radius) - 4px)  = 6px
rounded-md:   calc(var(--radius) - 2px)  = 8px
rounded-lg:   var(--radius)              = 10px  (padrão para cards)
rounded-xl:   calc(var(--radius) + 4px)  = 14px  (botões, inputs)
rounded-2xl:  1rem                       = 16px  (containers grandes)
rounded-full: 9999px                            (círculos, badges)
\`\`\`

### Sombras

\`\`\`
shadow-sm:  pequena (hover states)
shadow:     média (cards)
shadow-lg:  grande (cards em destaque, megamenu)
shadow-xl:  extra grande (modais, dropdowns)
\`\`\`

---

## 🧩 Componentes da Home

### 1. HomeHeader (Cabeçalho e Navegação)

#### Estrutura
- **Posição**: Sticky top (fixa no topo ao rolar)
- **Altura**: 64px (h-16)
- **Fundo**: bg-background/95 com backdrop-blur
- **Border**: border-b

#### Elementos Desktop

##### Logo
- **Componente**: `<Logo variant="dark" />`
- **Altura**: 28px (h-7)
- **Localização**: Esquerda do header

##### Navegação Principal
- **Items**: Graduação, Pós-Graduação, Extensão, Enterprise, Institucional
- **Estilo**: 
  - Font: text-sm font-medium
  - Padding: px-4 py-2
  - Hover: hover:text-primary
  - Ícone: ChevronDown h-4 w-4

##### Megamenu (Dropdown)
**Container**
- Largura: max-w-7xl
- Padding: px-6 py-8
- Layout: grid grid-cols-12 gap-8
- Animação: animate-in slide-in-from-top-2 duration-200

**Estrutura em 3 colunas**:

*Coluna 1: Perfis (col-span-3)*
- Cards com: bg-muted/40 hover:bg-muted
- Padding: p-4
- Radius: rounded-lg
- Ícone: h-4 w-4
- Título: font-semibold text-sm
- Descrição: text-xs text-muted-foreground

*Coluna 2: Lista de Items (col-span-5)*
- Items com: flex items-center gap-3
- Padding: px-3 py-2.5
- Ícone container: h-9 w-9 rounded-md bg-muted/60
- Texto: text-sm font-medium

*Coluna 3: Destaque (col-span-4)*
- Card: bg-muted/30 hover:bg-muted/50
- Padding: p-6
- Imagem: aspect-video rounded-md
- Título: text-base font-bold
- Descrição: text-sm text-muted-foreground

##### Actions (Direita)
- **LocationIndicator**: Componente de localização
- **Search Icon**: Button variant="ghost" size="icon"
- **User Menu**: Sheet lateral direito (w-340px)

#### Elementos Mobile

##### Menu Lateral (Sheet)
- **Largura**: 340px
- **Side**: left
- **Seções**:
  - Experiência Educacional
  - Para você que busca por
- **Items**: 
  - Ícones: h-5 w-5
  - Texto: text-base
  - Hover: hover:text-primary

---

### 2. HeroSection (Carrossel de Destaques)

#### Estrutura
- **Componente**: Carousel (shadcn/ui)
- **Aspect Ratio**: 
  - Mobile: aspect-[16/9] max-h-[300px]
  - Desktop: aspect-[21/9] max-h-[400px]

#### Slides
**Overlay Gradient**
- bg-gradient-to-t from-black/60 via-black/30 to-transparent

**Conteúdo**
- Container: max-w-3xl
- Padding: p-4 md:p-8
- Posição: justify-end (bottom)

**Título**
- Mobile: text-xl
- Tablet: text-3xl
- Desktop: text-4xl
- Peso: font-bold
- Cor: text-white
- Line height: leading-tight

**Descrição**
- Tamanho: text-sm md:text-base
- Cor: text-white/90
- Line height: leading-relaxed

---

### 3. ShowcaseGridDesktop (Grid de Destaque)

#### Layout
- **Grid**: grid-cols-1 lg:grid-cols-3
- **Gap**: 0 (cards colados)
- **Visibilidade**: hidden lg:block

#### Card Grande (2 colunas)
- **Span**: lg:col-span-2
- **Altura mínima**: min-h-[600px]
- **Overlay**: bg-gradient-to-t from-black/80 via-black/50 to-black/30
- **Padding conteúdo**: p-8 md:p-10
- **Badge**: bg-white/20 backdrop-blur-sm
- **Título**: text-3xl md:text-4xl font-bold
- **Descrição**: text-lg text-white/90

#### Cards Pequenos (1 coluna cada)
- **Altura mínima**: min-h-[300px]
- **Layout**: Empilhados verticalmente
- **Padding**: p-6
- **Título**: text-xl md:text-2xl font-bold
- **Descrição**: text-sm

---

### 4. Seção de Valor (IPOG: A escolha inteligente)

#### Container
- **Max width**: max-w-screen-xl
- **Padding**: py-6 md:py-8
- **Background**: bg-background

#### Título Principal
- **Tamanho**: 
  - Mobile: text-2xl
  - Tablet: text-3xl
  - Desktop: text-5xl
- **Peso**: font-bold
- **Alinhamento**: text-center
- **Margem**: mb-6

#### Subtítulo
- **Tamanho**: text-base md:text-lg lg:text-xl
- **Cor**: text-muted-foreground

---

### 5. Cards de Diferenciais (4 cards)

#### Layout
- **Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- **Gap**: gap-4 md:gap-6
- **Background seção**: bg-muted/30
- **Padding**: py-8 md:py-12

#### Card Individual
**Container**
- Padding: p-6
- Background: bg-background
- Border: border border-border
- Radius: rounded-lg
- Shadow: shadow-sm hover:shadow-md

**Layout Interno**
- Display: flex items-start gap-4

**Ícone Container**
- Tamanho: w-12 h-12
- Radius: rounded-full
- Background: bg-primary/10
- Ícone: w-6 h-6 text-primary

**Texto**
- Título: text-base font-semibold line-clamp-1
- Descrição: text-sm text-muted-foreground line-clamp-2

---

### 6. CourseSearch (Busca de Cursos)

#### Container Principal
- **Padding**: px-4 py-6
- **Card interno**: bg-white rounded-2xl p-6 md:p-8

#### Título
- **Tamanho**: text-2xl md:text-3xl font-bold
- **Alinhamento**: text-center (mobile e desktop)

#### Campo de Busca
**Popover (Combobox)**
- Altura: h-12 md:h-14
- Radius: rounded-xl
- Border: border-gray-200
- Ícone Search: h-5 w-5 text-muted-foreground

**Botão de Busca**
- Tamanho: h-12 w-12 md:h-14 md:w-14
- Radius: rounded-xl
- Background: bg-black hover:bg-black/90
- Ícone: ArrowRight h-5 w-5

#### Links Rápidos
- **Tamanho**: text-sm md:text-base
- **Cor**: text-muted-foreground
- **Hover**: hover:text-foreground
- **Separador**: "|" entre links

---

### 7. AssistenteTrilha (Personas)

#### Layout
- **Grid**: grid-cols-2 md:grid-cols-4
- **Gap**: gap-4
- **Background**: bg-muted/30
- **Padding**: py-12

#### Título Seção
- **Tamanho**: text-2xl md:text-3xl font-bold
- **Alinhamento**: text-center

#### Card de Persona
**Container**
- Hover: hover:shadow-lg hover:scale-105
- Transition: transition-all

**Ícone Container**
- Tamanho: h-16 w-16
- Radius: rounded-full
- Background: bg-primary/10
- Ícone: h-8 w-8 text-primary

**Texto**
- Título: font-semibold
- Descrição: text-sm text-muted-foreground
- Alinhamento: text-center

---

### 8. QuatroVerticais (Caminhos de Formação)

#### Layout
- **Grid**: grid md:grid-cols-2
- **Gap**: gap-6
- **Padding**: py-16

#### Título Seção
- **Tamanho**: text-3xl md:text-4xl font-bold
- **Subtítulo**: text-lg text-muted-foreground

#### Card Vertical
**Header**
- Layout: flex items-start gap-4
- Ícone container: h-12 w-12 rounded-lg bg-muted
- Tag: text-sm font-semibold uppercase text-muted-foreground
- Título: text-xl font-bold

**Promessa**
- Tamanho: text-lg font-medium

**Diferenciais**
- Lista com Check icons: h-4 w-4
- Texto: text-sm
- Espaçamento: space-y-2

**CTA**
- Botão: w-full size-lg
- Ícone: ArrowRight ml-2 h-4 w-4

---

### 9. MetodologiaUnificada (Modalidades)

#### Layout
- **Mobile**: Carousel (basis-[85%])
- **Desktop**: grid md:grid-cols-3
- **Gap**: gap-6
- **Background**: bg-muted/30
- **Padding**: py-16

#### Card de Modalidade
**Ícone**
- Container: h-16 w-16 rounded-full bg-primary/10
- Ícone: h-8 w-8 text-primary

**Título**
- Tamanho: text-xl font-bold

**Descrição**
- Cor: text-muted-foreground

**Features**
- Bullet: h-1.5 w-1.5 rounded-full bg-primary
- Texto: text-sm
- Espaçamento: space-y-2

---

### 10. ResultadosComprovados (Estatísticas)

#### Layout
- **Mobile**: Carousel (basis-[85%] sm:basis-1/2)
- **Desktop**: grid-cols-2 lg:grid-cols-5
- **Padding**: py-16

#### Card Estatística
**Ícone**
- Container: h-12 w-12 rounded-full bg-primary/10
- Ícone: h-6 w-6 text-primary
- Alinhamento: center

**Valor**
- Tamanho: text-3xl md:text-4xl font-bold

**Label**
- Tamanho: text-sm text-muted-foreground

---

### 11. ProfessorsSection (Corpo Docente)

#### Layout
- **Carousel**: basis-[85%] md:basis-[45%] lg:basis-[30%]
- **Padding**: py-12 md:py-16

#### Card Professor
**Imagem**
- Aspect: aspect-square
- Background: bg-muted
- Radius: rounded-t-lg

**Conteúdo**
- Padding: p-6
- Espaçamento: space-y-3

**Nome**
- Tamanho: text-lg font-semibold

**Descrição**
- Tamanho: text-sm text-muted-foreground
- Clamp: line-clamp-3

**Tags**
- Badge: variant="secondary" text-xs
- Layout: flex flex-wrap gap-2

**Link Bio**
- Tamanho: text-sm font-medium
- Hover: hover:underline

---

### 12. DepoimentosDeTexto (Testimonials)

#### Layout
- **Carousel**: md:basis-1/2 lg:basis-1/3
- **Background**: bg-background
- **Padding**: py-16 md:py-24

#### Card Depoimento (Texto)
**Quote Icon**
- Tamanho: h-8 w-8 text-muted-foreground
- Margem: mb-4

**Texto**
- Tamanho: text-sm text-foreground
- Clamp: line-clamp-[8]
- Com aspas: `"${texto}"`

**Autor**
- Nome: font-semibold text-foreground
- Cargo: text-sm text-muted-foreground
- Resultado: text-sm font-medium text-primary

#### Card Depoimento (Vídeo)
**Vídeo Container**
- Aspect: aspect-[9/16]
- Max-width: max-w-[300px]
- Radius: rounded-lg

**Play Button Overlay**
- Background: bg-primary/90 rounded-full p-4
- Ícone: h-8 w-8 fill-current

---

### 13. AcaoFinal (CTA Final)

#### Container
- **Card**: p-8 md:p-12 bg-muted
- **Max width conteúdo**: max-w-3xl mx-auto
- **Alinhamento**: text-center

#### Título
- **Tamanho**: text-3xl md:text-4xl font-bold
- **Margem**: mb-4
- **Balance**: text-balance

#### Descrição
- **Tamanho**: text-lg text-muted-foreground
- **Margem**: mb-8
- **Pretty**: text-pretty

#### Botões
**Layout**
- Flex: flex-col sm:flex-row gap-4
- Justificação: justify-center

**Botão Primário**
- Size: lg
- Width: w-full sm:w-auto
- Fonte: text-base

**Botão Secundário**
- Variant: ghost
- Size: lg
- Width: w-full sm:w-auto

---

### 14. Footer (Rodapé)

#### Container Principal
- **Background**: bg-zinc-900
- **Padding**: py-12
- **Margem**: mt-12

#### Layout Desktop
**Grid**: grid-cols-4 gap-8

**Coluna 1: Branding**
- Logo: h-8 w-auto
- Texto: text-sm text-zinc-300 leading-relaxed
- Botão: bg-white text-black rounded-full
- Social icons: h-5 w-5 text-zinc-400 hover:text-white

**Coluna 2: Selo MEC**
- Imagem: width={100} height={150}
- Hover: hover:opacity-80

**Coluna 3: Links**
- Título: text-sm font-semibold text-white mb-4
- Links: text-sm text-zinc-300 hover:text-white
- Espaçamento: space-y-3

**Coluna 4: Copyright**
- Texto: text-xs text-zinc-400
- Políticas: text-xs space-y-2

#### Layout Mobile
- Centralizado: text-center
- Empilhado verticalmente
- Logo: mx-auto mb-6
- Social: flex justify-center gap-4
- Links: bg-zinc-800 border-zinc-700 rounded-2xl p-6

---

## 📐 Hierarquia Visual

### Níveis de Hierarquia

**Nível 1: Hero/Títulos Principais**
- Tamanho: text-4xl / text-5xl
- Peso: font-bold
- Uso: Hero section, títulos de página

**Nível 2: Títulos de Seção**
- Tamanho: text-3xl / text-4xl
- Peso: font-bold
- Uso: Títulos de blocos principais

**Nível 3: Subtítulos de Seção**
- Tamanho: text-2xl / text-3xl
- Peso: font-bold / font-semibold
- Uso: Cards, componentes destacados

**Nível 4: Títulos de Card**
- Tamanho: text-xl / text-2xl
- Peso: font-bold / font-semibold
- Uso: Títulos de cards, items

**Nível 5: Texto Corpo**
- Tamanho: text-base / text-lg
- Peso: font-normal / font-medium
- Uso: Descrições, parágrafos

**Nível 6: Texto Secundário**
- Tamanho: text-sm
- Peso: font-normal
- Cor: text-muted-foreground
- Uso: Metadados, subtítulos

**Nível 7: Texto Auxiliar**
- Tamanho: text-xs
- Peso: font-normal
- Cor: text-muted-foreground
- Uso: Tags, badges, legendas

---

## ⚙️ Especificações Técnicas

### Breakpoints Responsivos

\`\`\`
sm:  640px  - Tablet pequeno
md:  768px  - Tablet
lg:  1024px - Desktop pequeno
xl:  1280px - Desktop
2xl: 1536px - Desktop grande
\`\`\`

### Container Max-Width
- **Padrão**: max-w-screen-xl (1280px)
- **Conteúdo**: max-w-3xl / max-w-5xl (quando aplicável)

### Animações e Transições

\`\`\`
transition-colors:    Mudança de cor
transition-shadow:    Mudança de sombra
transition-all:       Todas as propriedades
transition-transform: Transformações (scale, translate)

duration-200:  200ms (animações rápidas)
duration-300:  300ms (animações padrão)
duration-500:  500ms (animações lentas)

hover:scale-105:      Aumento sutil
hover:translate-x-1:  Deslocamento horizontal
\`\`\`

### Estados de Interação

**Hover**
\`\`\`
hover:text-primary         - Mudança de cor de texto
hover:bg-muted            - Mudança de fundo
hover:shadow-lg           - Aumento de sombra
hover:scale-105           - Aumento de escala
hover:translate-x-0.5     - Deslocamento
\`\`\`

**Active/Focus**
\`\`\`
focus:ring-2              - Anel de foco
focus:ring-primary        - Cor do anel
active:scale-95           - Pressão visual
\`\`\`

### Acessibilidade

**Screen Reader**
- Use `sr-only` para textos apenas para leitores de tela
- Sempre forneça `aria-label` para ícones/botões sem texto

**Contraste**
- Texto regular sobre fundo: mínimo 4.5:1
- Texto grande sobre fundo: mínimo 3:1
- Elementos interativos: mínimo 3:1

**Foco**
- Sempre visível em elementos interativos
- Usar `outline-ring/50` como padrão

---

## 🎯 Padrões de Uso

### Cards
- Border radius: rounded-lg (10px)
- Padding: p-6
- Shadow: shadow-sm hover:shadow-lg
- Border: border border-border (opcional)
- Background: bg-card / bg-background

### Botões

**Primary**
- Background: bg-primary (preto)
- Text: text-primary-foreground (branco)
- Hover: hover:bg-primary/90
- Size: h-10 px-4 (padrão) | h-11 px-8 (lg)

**Secondary**
- Background: bg-secondary
- Text: text-secondary-foreground
- Border: border border-input

**Ghost**
- Background: transparent
- Hover: hover:bg-accent hover:text-accent-foreground

### Icons
- **Pequeno**: h-4 w-4 (16px)
- **Médio**: h-5 w-5 (20px) / h-6 w-6 (24px)
- **Grande**: h-8 w-8 (32px)

### Badges
- Radius: rounded-full / rounded-md
- Padding: px-2.5 py-0.5
- Tamanho: text-xs
- Peso: font-semibold

### Spacing Entre Seções
- **Pequeno**: py-8 (32px)
- **Médio**: py-12 (48px)
- **Grande**: py-16 (64px)
- **Extra grande**: py-24 (96px)

---

## 📱 Responsividade

### Mobile First
- Começar sempre com layout mobile
- Adicionar breakpoints progressivamente
- Usar classes md:, lg:, xl: para adaptações

### Padrões Mobile
- Padding horizontal: px-4 (16px)
- Grid: grid-cols-1 / grid-cols-2
- Carousels para listas longas
- Botões full-width: w-full

### Padrões Desktop
- Padding horizontal: px-6 (24px)
- Grid: grid-cols-3 / grid-cols-4
- Listas horizontais
- Botões com width auto

---

## 🔧 Utilitários Comuns

### Truncamento de Texto
\`\`\`
line-clamp-1  - 1 linha
line-clamp-2  - 2 linhas
line-clamp-3  - 3 linhas
line-clamp-[8] - 8 linhas (personalizado)
\`\`\`

### Text Balance/Pretty
\`\`\`
text-balance  - Balanceamento de linhas (títulos)
text-pretty   - Otimização de quebras (parágrafos)
\`\`\`

### Backdrop Effects
\`\`\`
backdrop-blur-sm  - Blur leve
backdrop-blur     - Blur médio
backdrop-blur-lg  - Blur forte
\`\`\`

### Aspect Ratios
\`\`\`
aspect-square    - 1:1
aspect-video     - 16:9
aspect-[16/9]    - Custom 16:9
aspect-[21/9]    - Custom 21:9
aspect-[9/16]    - Custom 9:16 (vertical vídeo)
\`\`\`

---

## 📋 Checklist de Implementação

### Ao criar um novo componente:

- [ ] Usar cores do design system (via tokens CSS)
- [ ] Aplicar tipografia da escala definida
- [ ] Respeitar espaçamentos do sistema (gap-4, py-6, etc.)
- [ ] Adicionar estados hover/focus
- [ ] Garantir responsividade (mobile-first)
- [ ] Testar contraste de cores (WCAG AA)
- [ ] Adicionar aria-labels quando necessário
- [ ] Usar border-radius consistente (rounded-lg, rounded-xl)
- [ ] Aplicar sombras apropriadas
- [ ] Adicionar transições suaves

---

## 🚀 Próximos Passos

### Para expandir este design system:

1. Documentar componentes de outras páginas
2. Criar biblioteca de componentes reutilizáveis
3. Definir padrões para formulários
4. Estabelecer guidelines de animações
5. Criar system de ilustrações/ícones
6. Documentar estados de erro/sucesso
7. Definir padrões de loading states
8. Criar guia de acessibilidade completo

---

*Documento gerado em: 2025*  
*Versão: 1.0*  
*Baseado na análise da Home Page do IPOG*
