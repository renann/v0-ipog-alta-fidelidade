# Especificações de Design IPOG

## Paleta de Cores

### Cores Principais

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Vermelho Protagonismo** | `#D71C37` | `rgb(215, 28, 55)` | CTAs principais, elementos de destaque, links ativos, ícones importantes |
| **Cinza Conexão** | `#7F7F7F` | `rgb(127, 127, 127)` | Textos secundários, bordas, elementos neutros, dots inativos |
| **Branco Essencial** | `#FFFFFF` | `rgb(255, 255, 255)` | Backgrounds principais, textos em fundos escuros |
| **Vinho Determinação** | `#481A1F` | `rgb(72, 26, 31)` | Backgrounds de seções, elementos de contraste |
| **Vermelho Excelência** | `#8A212E` | `rgb(138, 33, 46)` | Backgrounds de destaque, drawers, cards CTA |

---

## IPOG Shape (Border Radius)

### Especificação do Formato

O IPOG Shape é um padrão de border-radius assimétrico que cria uma identidade visual única:

\`\`\`
┌─────────────────────────────┐
│  45px                 45px  │  ← Cantos superiores
│                             │
│                             │
│  45px                 15px  │  ← Cantos inferiores
└─────────────────────────────┘
\`\`\`

### Implementação em Tailwind CSS

\`\`\`css
/* Classe padrão */
rounded-tl-[45px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[15px]

/* Classe customizada sugerida */
.ipog-shape {
  border-radius: 45px 45px 45px 15px;
}
\`\`\`

### Variações de Tamanho

| Tamanho | Top-Left | Top-Right | Bottom-Left | Bottom-Right | Uso |
|---------|----------|-----------|-------------|--------------|-----|
| **Grande** | 45px | 45px | 45px | 15px | Cards grandes, seções, imagens hero |
| **Médio** | 24px | 24px | 24px | 8px | Cards médios, botões grandes |
| **Pequeno** | 16px | 16px | 16px | 6px | Badges, tags, elementos menores |

---

## Tipografia

### Fonte Principal
- **Font Family**: Geist Sans (variável)
- **Fallback**: system-ui, sans-serif

### Hierarquia de Títulos

| Elemento | Tamanho Mobile | Tamanho Desktop | Peso | Line Height |
|----------|----------------|-----------------|------|-------------|
| H1 | text-3xl | text-5xl | font-bold | leading-tight |
| H2 | text-2xl | text-3xl | font-bold | leading-tight |
| H3 | text-xl | text-2xl | font-semibold | leading-snug |
| Body | text-sm | text-base | font-normal | leading-relaxed |
| Caption | text-xs | text-sm | font-normal | leading-normal |

---

## Espaçamento

### Margens Laterais Padrão

| Breakpoint | Margem | Classe Tailwind |
|------------|--------|-----------------|
| Mobile | 16px | px-4 |
| Tablet | 32px | px-8 |
| Desktop | 36px | px-9 |

### Espaçamento entre Seções

| Tipo | Valor | Classe Tailwind |
|------|-------|-----------------|
| Pequeno | 32px | py-8 |
| Médio | 48px | py-12 |
| Grande | 64px | py-16 |
| Extra Grande | 80px | py-20 |

---

## Componentes

### Cards de Professor

\`\`\`tsx
// Estrutura do Card
<Card className="overflow-hidden rounded-tl-[45px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[15px] bg-white">
  {/* Imagem com zoom no hover */}
  <div className="overflow-hidden">
    <Image className="transition-transform duration-300 group-hover:scale-105" />
  </div>
  
  {/* Conteúdo */}
  <div className="p-4">
    <h3>Nome do Professor</h3>
    <p>Descrição</p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">Tag</Badge>
    </div>
  </div>
</Card>
\`\`\`

### Largura dos Cards no Carrossel

| Breakpoint | Largura | Classe |
|------------|---------|--------|
| Mobile | 56% | basis-[56%] |
| Tablet (md) | 28% | md:basis-[28%] |
| Desktop (lg) | 18% | lg:basis-[18%] |

### Dots de Paginação

\`\`\`tsx
// Dot Inativo
<button className="w-4 h-4 rounded-full bg-[#7F7F7F] hover:bg-[#8A212E]" />

// Dot Ativo
<button className="w-16 h-4 rounded-full bg-[#D71C37]" />
\`\`\`

---

## Backgrounds de Seções

### Padrões de Uso

| Seção | Background | Texto |
|-------|------------|-------|
| Padrão | Branco Essencial (#FFFFFF) | Foreground padrão |
| Destaque | Vinho Determinação (#481A1F) | Branco Essencial (#FFFFFF) |
| CTA | Vermelho Excelência (#8A212E) | Branco Essencial (#FFFFFF) |
| Neutro | Cinza claro (#F5F5F5) | Foreground padrão |

---

## Drawer/Sheet (Professor Bio)

\`\`\`tsx
<SheetContent 
  side="right"
  className="w-[90vw] md:w-[30vw] bg-[#8A212E] text-white rounded-tl-[45px] rounded-bl-[45px]"
>
  {/* Conteúdo */}
</SheetContent>
\`\`\`

### Especificações
- **Largura Mobile**: 90vw
- **Largura Desktop**: 30vw
- **Background**: Vermelho Excelência (#8A212E)
- **Texto**: Branco Essencial (#FFFFFF)
- **Border Radius**: 45px nos cantos esquerdos

---

## Efeitos e Transições

### Hover em Cards

\`\`\`css
/* Sombra no hover */
transition-shadow duration-300
hover:shadow-lg

/* Zoom na imagem */
transition-transform duration-300
group-hover:scale-105

/* GPU Acceleration */
will-change-transform
transform: translateZ(0)
\`\`\`

### Duração de Transições

| Tipo | Duração | Uso |
|------|---------|-----|
| Rápida | 150ms | Hover em botões, links |
| Normal | 300ms | Hover em cards, zoom |
| Lenta | 500ms | Animações de entrada |

---

## Logo IPOG

### Arquivo
- **Caminho**: `/public/logo-ipog.svg`
- **ViewBox**: `0 0 3939 532`

### Cores do Logo
- **Elementos Geométricos (IPOG)**: Vermelho Protagonismo (#D71C37)
- **Texto (Instituto de...)**: Cinza Conexão (#808080)

### Variantes

\`\`\`tsx
// Dark (padrão) - para fundos claros
<Logo variant="dark" />

// Light - para fundos escuros (usa filtro CSS para inverter)
<Logo variant="light" className="brightness-0 invert" />
\`\`\`

---

## Regras de Contraste

| Background | Cor do Texto | Cor dos Links |
|------------|--------------|---------------|
| Branco (#FFFFFF) | Foreground padrão | Vermelho Protagonismo (#D71C37) |
| Vinho (#481A1F) | Branco (#FFFFFF) | Branco (#FFFFFF) |
| Vermelho Excelência (#8A212E) | Branco (#FFFFFF) | Branco (#FFFFFF) |

---

## Design Tokens (globals.css)

\`\`\`css
@theme inline {
  --color-vermelho-protagonismo: #D71C37;
  --color-cinza-conexao: #7F7F7F;
  --color-branco-essencial: #FFFFFF;
  --color-vinho-determinacao: #481A1F;
  --color-vermelho-excelencia: #8A212E;
  
  --radius-ipog-lg: 45px 45px 45px 15px;
  --radius-ipog-md: 24px 24px 24px 8px;
  --radius-ipog-sm: 16px 16px 16px 6px;
}
