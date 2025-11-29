# Especificações de Design - IPOG Alta Fidelidade

## 🎨 Paleta de Cores

### Cores Principais

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Vermelho Protagonismo** | `#D71C37` | `rgb(215, 28, 55)` | Cor principal de destaque, CTAs primários, elementos de ênfase |
| **Cinza Conexão** | `#7F7F7F` | `rgb(127, 127, 127)` | Textos secundários, ícones, elementos neutros |
| **Branco Essencial** | `#FFFFFF` | `rgb(255, 255, 255)` | Backgrounds, textos em fundos escuros |
| **Vinho Determinação** | `#481A1F` | `rgb(72, 26, 31)` | Backgrounds alternativos, seções de destaque |
| **Vermelho Excelência** | `#8A212E` | `rgb(138, 33, 46)` | CTAs secundários, hover states, elementos de apoio |

### Design Tokens (CSS Variables)

\`\`\`css
:root {
  --vermelho-protagonismo: #D71C37;
  --cinza-conexao: #7F7F7F;
  --branco-essencial: #FFFFFF;
  --vinho-determinacao: #481A1F;
  --vermelho-excelencia: #8A212E;
}
\`\`\`

### Aplicação em Tailwind

\`\`\`javascript
// tailwind.config.js ou globals.css
@theme {
  --color-protagonismo: #D71C37;
  --color-conexao: #7F7F7F;
  --color-essencial: #FFFFFF;
  --color-determinacao: #481A1F;
  --color-excelencia: #8A212E;
}
\`\`\`

## 🔶 IPOG Shape (Border Radius)

### Especificação

O IPOG Shape é o padrão de border-radius característico da marca, com três cantos arredondados em 45px e um canto em 15px.

**Padrão:**
- Top Left: `45px`
- Top Right: `45px`
- Bottom Left: `45px`
- Bottom Right: `15px`

### Implementação em Tailwind

\`\`\`html
<!-- Classe Tailwind -->
<div class="rounded-tl-[45px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[15px]">
  Conteúdo
</div>
\`\`\`

### Implementação em CSS

\`\`\`css
.ipog-shape {
  border-radius: 45px 45px 45px 15px;
}
\`\`\`

### Casos de Uso

- Cards de conteúdo
- Seções de destaque
- Imagens principais
- Containers de componentes
- Modais e drawers (apenas nos cantos visíveis)

## 📐 Grid e Espaçamento

### Margens Laterais

**Desktop/Tablet:**
- Padding lateral padrão: `32px` (Tailwind: `px-8`)
- Margem lateral mínima: `36px` em seções full-width

**Mobile:**
- Padding lateral: `16px` (Tailwind: `px-4`)

### Espaçamento Vertical

- Entre seções: `80px` (Tailwind: `py-20`)
- Entre componentes: `48px` (Tailwind: `py-12`)
- Entre elementos: `24px` (Tailwind: `py-6`)
- Entre texto: `16px` (Tailwind: `py-4`)

### Gap

Preferir `gap` ao invés de margin para espaçamento em flex/grid:

\`\`\`html
<div class="flex gap-4">  <!-- 16px -->
<div class="flex gap-6">  <!-- 24px -->
<div class="flex gap-8">  <!-- 32px -->
\`\`\`

## 🔤 Tipografia

### Hierarquia de Tamanhos

| Elemento | Tamanho | Tailwind | Weight |
|----------|---------|----------|--------|
| H1 (Hero) | 48-64px | `text-5xl` ou `text-6xl` | Bold (700) |
| H2 (Section) | 36-48px | `text-4xl` ou `text-5xl` | Bold (700) |
| H3 (Subsection) | 24-30px | `text-2xl` ou `text-3xl` | Semibold (600) |
| H4 (Card Title) | 20-24px | `text-xl` ou `text-2xl` | Semibold (600) |
| Body Large | 18-20px | `text-lg` ou `text-xl` | Regular (400) |
| Body | 16px | `text-base` | Regular (400) |
| Body Small | 14px | `text-sm` | Regular (400) |
| Caption | 12px | `text-xs` | Regular (400) |

### Line Height

- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625) ou `leading-6`
- Parágrafos: `leading-7` ou `leading-8`

### Text Balance

Para títulos importantes, usar:
\`\`\`html
<h1 class="text-balance">Título Otimizado</h1>
\`\`\`

## 🎭 Shadows

### Padrões de Sombra

\`\`\`css
/* Sombra leve */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
/* Tailwind: shadow-sm */

/* Sombra média */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
/* Tailwind: shadow-md */

/* Sombra grande */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
/* Tailwind: shadow-lg */

/* Sombra extra grande */
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
/* Tailwind: shadow-xl */
\`\`\`

### Aplicação

- Cards: `shadow-md` (padrão) → `shadow-xl` (hover)
- Modais/Drawers: `shadow-2xl`
- Dropdowns: `shadow-lg`

## 🎬 Animações e Transições

### Durações Padrão

\`\`\`css
/* Rápida - Hover, focus */
transition-duration: 150ms;
/* Tailwind: duration-150 */

/* Média - Transições gerais */
transition-duration: 300ms;
/* Tailwind: duration-300 */

/* Lenta - Animações complexas */
transition-duration: 500ms;
/* Tailwind: duration-500 */
\`\`\`

### Easing

\`\`\`css
/* Padrão */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
/* Tailwind: ease-in-out */
\`\`\`

### Hover States

\`\`\`html
<!-- Scale suave -->
<div class="transition-transform duration-300 hover:scale-105">

<!-- Sombra no hover -->
<div class="transition-shadow duration-300 shadow-md hover:shadow-xl">

<!-- Cor no hover -->
<button class="transition-colors duration-150 hover:bg-red-600">
\`\`\`

### GPU Acceleration

Para animações performáticas:
\`\`\`html
<div class="will-change-transform translate-z-0">
\`\`\`

## 🖼️ Imagens

### Aspect Ratios

- Hero images: `16:9` ou `21:9`
- Card images: `4:3` ou `16:9`
- Profile images: `1:1` (quadrado)
- Thumbnails: `16:9`

### Implementação

\`\`\`html
<div class="aspect-video">
  <img src="..." class="object-cover w-full h-full" />
</div>
\`\`\`

### Placeholder

\`\`\`html
<img src="/placeholder.svg?height=400&width=600" />
\`\`\`

## 🔘 Botões

### Variantes

**Primário (Protagonismo)**
\`\`\`html
<button class="bg-[#D71C37] text-white hover:bg-[#8A212E] transition-colors duration-150 px-6 py-3 rounded-lg font-semibold">
  CTA Principal
</button>
\`\`\`

**Secundário (Outline)**
\`\`\`html
<button class="border-2 border-[#D71C37] text-[#D71C37] hover:bg-[#D71C37] hover:text-white transition-colors duration-150 px-6 py-3 rounded-lg font-semibold">
  CTA Secundário
</button>
\`\`\`

**Terciário (Ghost)**
\`\`\`html
<button class="text-[#D71C37] hover:bg-red-50 transition-colors duration-150 px-6 py-3 rounded-lg font-semibold">
  CTA Terciário
</button>
\`\`\`

### Tamanhos

- Small: `px-4 py-2 text-sm`
- Medium: `px-6 py-3 text-base` (padrão)
- Large: `px-8 py-4 text-lg`

## 📱 Breakpoints

### Tailwind Breakpoints

\`\`\`javascript
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet portrait
lg: '1024px'  // Tablet landscape / Desktop
xl: '1280px'  // Desktop large
2xl: '1536px' // Desktop extra large
\`\`\`

### Mobile First

Sempre desenvolver mobile-first:

\`\`\`html
<!-- Base = mobile -->
<div class="text-base">
  <!-- Tablet e acima -->
  <div class="md:text-lg">
    <!-- Desktop e acima -->
    <div class="lg:text-xl">
\`\`\`

## 🎪 Componentes Específicos

### Cards

\`\`\`html
<div class="bg-white rounded-tl-[45px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[15px] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
  <img src="..." class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="text-xl font-semibold mb-2">Título</h3>
    <p class="text-muted-foreground">Descrição</p>
  </div>
</div>
\`\`\`

### Badges/Tags

\`\`\`html
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
  Tag
</span>
\`\`\`

### Carrossel - Dots de Paginação

\`\`\`html
<!-- Dot inativo -->
<button class="w-4 h-4 rounded-full bg-[#7F7F7F] transition-all duration-300" />

<!-- Dot ativo -->
<button class="w-16 h-4 rounded-full bg-[#D71C37] transition-all duration-300" />
\`\`\`

## 📋 Checklist de Implementação

Ao criar um novo componente, verificar:

- [ ] Cores seguem a paleta IPOG
- [ ] Border-radius usa IPOG Shape onde apropriado
- [ ] Espaçamento usa escala Tailwind (4, 6, 8, 12, 16, 20)
- [ ] Tipografia segue hierarquia definida
- [ ] Transições são suaves (150-300ms)
- [ ] Hover states são consistentes
- [ ] Componente é responsivo (mobile-first)
- [ ] Imagens têm alt text
- [ ] Contraste de cores é adequado (WCAG AA)
- [ ] Sombras seguem padrões definidos

## 🔗 Links Úteis

- Tailwind CSS Documentation: https://tailwindcss.com/docs
- shadcn/ui Components: https://ui.shadcn.com
- WCAG Contrast Checker: https://webaim.org/resources/contrastchecker/

---

**Última atualização:** Novembro 2025
**Versão:** 1.0
**Projeto:** IPOG - Alta Fidelidade
