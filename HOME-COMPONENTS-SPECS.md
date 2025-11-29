# Especificações de Design - Componentes da Home Page

## Paleta de Cores Base
- **Vermelho Protagonismo**: #D71C37 (RGB 215, 28, 55)
- **Cinza Conexão**: #7F7F7F (RGB 127, 127, 127)
- **Branco Essencial**: #FFFFFF (RGB 255, 255, 255)
- **Vinho Determinação**: #481A1F (RGB 72, 26, 31)
- **Vermelho Excelência**: #8A212E (RGB 138, 33, 46)

## Border-Radius IPOG Shape
Todos os cards e containers principais devem usar:
- **45px** nos três primeiros cantos (top-left, top-right, bottom-left)
- **15px** no último canto (bottom-right)
- **Tailwind**: `rounded-tl-[45px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[15px]`
- **CSS**: `border-radius: 45px 45px 45px 15px;`

---

## 1. HomeHeader

**Descrição**: Header fixo com navegação principal, logo IPOG e ações de usuário.

### Estrutura
- Logo IPOG à esquerda (vermelho #D71C37)
- Menu de navegação centralizado com dropdowns
- Ícones de ações à direita (localização, busca, perfil)

### Especificações
- **Background**: Branco Essencial (#FFFFFF)
- **Altura**: ~80px
- **Shadow**: Sutil (shadow-sm)
- **Sticky**: Sim (sticky top-0)
- **Z-index**: 50

### Tipografia
- **Links do menu**: text-sm, font-medium, text-foreground
- **Hover**: Sublinhado ou mudança de cor para Vermelho Protagonismo

### Espaçamento
- **Padding horizontal**: px-8 (32px)
- **Gap entre itens**: gap-6 (24px)

---

## 2. HeroSection (Mobile)

**Descrição**: Carousel de destaques para dispositivos móveis com sobreposição de gradiente.

### Estrutura
- Carousel com 3 slides
- Imagem de fundo
- Overlay com gradiente escuro
- Título e descrição sobre o gradiente

### Especificações
- **Aspect Ratio**: 16/9 (mobile), 21/9 (desktop)
- **Altura máxima**: 300px (mobile), 400px (desktop)
- **Overlay**: Gradiente de preto transparente no topo para preto 60% na base
  - `bg-gradient-to-t from-black/60 via-black/30 to-transparent`

### Tipografia
- **Título**: text-xl md:text-3xl lg:text-4xl, font-bold, text-white
- **Descrição**: text-sm md:text-base, text-white/90

### Espaçamento
- **Padding interno**: p-4 md:p-8
- **Espaço entre título e descrição**: space-y-1 md:space-y-2

---

## 3. ShowcaseGridDesktop (Desktop)

**Descrição**: Grid de showcase com 1 card grande (2 colunas) e 2 cards pequenos (1 coluna) para desktop.

### Estrutura
- Grid 3 colunas em desktop (lg:grid-cols-3)
- Card grande: 2 colunas, altura mínima 600px
- Cards pequenos: 1 coluna cada, altura mínima 297px
- Background com imagem
- Overlay gradiente sobre a imagem
- Badge de tag
- Título, descrição e link "Saiba mais"

### Especificações
- **Container width**: 80% da viewport (w-[80%])
- **Border-radius**: IPOG Shape (45px_45px_45px_15px)
- **Shadow**: shadow-lg, hover:shadow-xl
- **Transição**: duration-300 (sombra), duration-500 (zoom imagem)

### Cores de Tags (Badge)
- **Primary**: bg-[#D71C37] text-white (Vermelho Protagonismo)
- **Secondary**: bg-[#7F7F7F] text-white (Cinza Conexão)
- **Wine**: bg-[#481A1F] text-white (Vinho Determinação)
- **Excellence**: bg-[#8A212E] text-white (Vermelho Excelência)
- **Com overlay**: bg-white/20 backdrop-blur-sm text-white border-white/30

### Overlay
- **Gradiente**: `bg-gradient-to-t from-black/80 via-black/50 to-black/30`

### Hover Effects
- **Imagem**: scale-105 (zoom 5%)
- **Sombra**: shadow-lg → shadow-xl
- **"Saiba mais"**: opacity-0 → opacity-100

### Tipografia
- **Tag (Badge)**: Varia conforme tema (ver Cores de Tags)
- **Título Card Grande**: text-3xl md:text-4xl, font-bold, text-white
- **Título Card Pequeno**: text-xl md:text-2xl, font-bold
- **Descrição**: text-lg (grande) ou text-sm (pequeno), text-white/90 ou text-muted-foreground
- **Link "Saiba mais"**: text-sm (grande) ou text-xs (pequeno), font-medium

### Espaçamento
- **Gap entre cards**: gap-6 (24px)
- **Padding interno cards**: p-8 md:p-10 (grande), p-6 (pequeno)
- **Margin bottom tag**: mb-4 (grande), mb-3 (pequeno)

### Acessibilidade
- **will-change-transform**: Para otimização de animação GPU
- **Cursor**: pointer em hover
- **Transition**: Suave e performática

---

## 4. Seção "IPOG: A escolha inteligente"

**Descrição**: Título e subtítulo centralizados introduzindo os benefícios do IPOG.

### Especificações
- **Background**: Branco Essencial (#FFFFFF)
- **Container**: max-w-screen-xl mx-auto
- **Alinhamento**: text-center

### Tipografia
- **Título**: text-2xl md:text-3xl lg:text-5xl, font-bold, mb-6
- **Subtítulo**: text-base md:text-lg lg:text-xl, text-muted-foreground

### Espaçamento
- **Padding vertical**: py-12 md:py-16
- **Padding horizontal**: px-8
- **Espaço entre título e subtítulo**: mb-6

---

## 5. Grid de Benefícios (4 Cards)

**Descrição**: Grid responsivo com 4 cards horizontais mostrando certificação MEC, tradição, networking e metodologia.

### Estrutura
- Grid: 1 coluna (mobile), 2 colunas (tablet), 4 colunas (desktop)
- Cada card: Ícone circular + Título + Descrição

### Especificações
- **Background cards**: bg-[#8A212E]/5 (Vermelho Excelência com 5% opacidade)
- **Border-radius cards**: rounded-lg
- **Padding cards**: p-6
- **Gap entre cards**: gap-4 md:gap-6

### Ícones
- **Container ícone**: w-12 h-12, rounded-full, bg-[#D71C37]/10, flex items-center justify-center
- **Ícone**: w-6 h-6, text-[#D71C37] (Vermelho Protagonismo)
- **Ícones usados**: Award, TrendingUp, Users, Lightbulb (lucide-react)

### Tipografia
- **Título**: text-base, font-semibold, text-foreground, mb-1, line-clamp-1
- **Descrição**: text-sm, text-muted-foreground, line-clamp-2

### Layout Card
- **Flex**: flex items-start gap-4
- **Ícone**: flex-shrink-0
- **Conteúdo**: flex-1 min-w-0

### Espaçamento
- **Container**: max-w-screen-xl mx-auto
- **Padding vertical**: py-12 md:py-16
- **Padding horizontal**: px-8

---

## 6. CourseSearch

**Descrição**: Componente de busca de cursos com seleção de área de atuação e links rápidos para formações.

### Estrutura
- Container com background cinza claro
- Título e descrição centralizados
- Campo de busca (Popover) + Botão de ação
- Links para Graduação, Pós-graduação e Extensão

### Especificações
- **Background**: bg-[#7F7F7F]/10 (Cinza Conexão com 10% opacidade)
- **Border-radius**: IPOG Shape (45px_45px_45px_15px)
- **Padding interno**: p-8 md:p-10
- **Container**: max-w-screen-xl mx-auto

### Campo de Busca
- **Botão**: flex-1, height h-12 md:h-14, border-gray-200, rounded-xl, bg-transparent, hover:bg-gray-50
- **Ícone**: Search, h-5 w-5, text-muted-foreground
- **Placeholder**: text-muted-foreground

### Botão de Ação
- **Size**: h-12 w-12 md:h-14 w-14
- **Background**: bg-foreground, hover:bg-foreground/90
- **Border-radius**: rounded-xl
- **Ícone**: ArrowRight, h-5 w-5

### Popover
- **Width**: Mesma largura do trigger
- **Padding**: p-0
- **Campo de busca interna**: pl-9 h-10, border-none
- **Altura máxima lista**: max-h-[300px]
- **Item hover**: hover:bg-gray-100

### Links Rápidos
- **Cor**: text-muted-foreground
- **Hover**: hover:text-foreground
- **Separador**: `|` entre os links
- **Alinhamento**: flex items-center justify-center gap-2

### Tipografia
- **Título**: text-2xl md:text-3xl, font-bold
- **Descrição**: text-sm md:text-base, text-muted-foreground
- **Placeholder busca**: text-base
- **Links**: text-sm md:text-base

### Espaçamento
- **Padding vertical**: py-12 md:py-16
- **Padding horizontal**: px-8
- **Gap entre elementos**: space-y-6
- **Gap entre busca e botão**: gap-3

---

## 7. ProfessorsSection

**Descrição**: Carrossel de professores atuantes com cards de perfil e drawer de detalhes.

### Estrutura
- Título centralizado
- Carrossel horizontal
- Cards de professor (imagem + nome + área + tags)
- Card CTA final (Vermelho Excelência)
- Dots de paginação
- Drawer lateral (30% da tela)

### Especificações Cards
- **Width**: 56% (mobile), 28% (tablet), 18% (desktop)
- **Border-radius**: IPOG Shape (45px_45px_45px_15px)
- **Background**: bg-background (Branco Essencial)
- **Shadow**: shadow-md, hover:shadow-lg
- **Padding**: p-0 (sem padding no card para imagem flush)

### Imagem
- **Aspect ratio**: 4:3
- **Border-radius**: Herdado do card (top corners)
- **Hover**: scale-105, transition-transform duration-300
- **Overflow**: hidden

### Conteúdo do Card
- **Padding**: p-6
- **Background**: bg-background

### Tags (Badges)
- **Variant**: secondary
- **Size**: Padrão
- **Cores**: Cinza padrão do sistema

### Card CTA (Ver Corpo Docente)
- **Background**: bg-[#8A212E] (Vermelho Excelência)
- **Text**: text-white
- **Hover**: hover:bg-[#8A212E]/90
- **Ícone**: ArrowRight com animação translate-x

### Dots de Paginação
- **Tamanho inativo**: w-4 h-4 (16px)
- **Tamanho ativo**: w-16 h-4 (64px x 16px, alongado)
- **Cor inativa**: bg-[#7F7F7F] (Cinza Conexão)
- **Cor ativa**: bg-[#D71C37] (Vermelho Protagonismo)
- **Hover inativo**: hover:bg-[#8A212E] (Vermelho Excelência)
- **Transição**: transition-all duration-300
- **Espaçamento**: gap-2

### Drawer (Sheet)
- **Side**: right
- **Width**: 30vw (30% da viewport)
- **Background**: bg-[#8A212E] (Vermelho Excelência)
- **Text**: text-white
- **Border-radius**: rounded-tl-[45px] rounded-bl-[45px] (cantos esquerdos)
- **Overlay**: Removido (sem fundo escuro)

### Hover Effects
- **Card**: shadow-md → shadow-lg
- **Imagem**: scale-105
- **Card CTA**: Ícone translada para direita (group-hover:translate-x-1)

### Tipografia
- **Título seção**: text-2xl md:text-3xl lg:text-4xl, font-bold, text-center
- **Nome professor**: text-xl, font-bold
- **Área**: text-sm, text-muted-foreground
- **Tags**: Padrão do Badge component

### Espaçamento
- **Container**: px-8 (32px lateral)
- **Padding vertical**: py-12 md:py-16
- **Gap entre cards**: gap-4
- **Padding carousel**: py-4, pb-8
- **Dots margin top**: mt-8

### Performance
- **will-change-transform**: Aplicado na imagem
- **Transições**: 300ms para hover, 500ms para zoom

---

## 8. Componentes Adicionais

### AssistenteTrilha
- Componente de IA para recomendação de cursos
- Segue paleta e IPOG Shape
- Background Cinza Conexão ou Vermelho Protagonismo

### QuatroVerticais
- Grid de 4 cards verticais com ícones
- Background Branco Essencial
- IPOG Shape nos cards

### MetodologiaUnificada
- Apresentação da metodologia em 3 pilares
- Background Cinza Conexão/10
- Cards com IPOG Shape

### ResultadosComprovados
- Métricas e resultados do IPOG
- Background Vermelho Excelência
- Text branco

### DepoimentosDeTexto
- Cards de depoimentos com foto/vídeo
- Background Branco Essencial
- IPOG Shape nos cards

### AcaoFinal (CTA)
- Seção de call-to-action final
- Background Vermelho Protagonismo
- Botões primário e secundário

### LatestBlogPosts
- Grid de posts recentes do blog
- Cards com imagem + título + excerpt
- IPOG Shape nos cards

---

## Checklist de Implementação

### Para cada novo componente da home:

- [ ] Usar paleta de cores IPOG (máximo 5 cores)
- [ ] Aplicar IPOG Shape em cards e containers (45px_45px_45px_15px)
- [ ] Respeitar margens laterais de 32px (px-8)
- [ ] Container principal com max-w-screen-xl mx-auto
- [ ] Usar semantic tokens quando possível (bg-background, text-foreground)
- [ ] Aplicar text-balance ou text-pretty em títulos
- [ ] Shadows: shadow-md padrão, shadow-lg em hover
- [ ] Transições suaves: duration-300 (hover), duration-500 (animações)
- [ ] Hover effects performáticos com will-change-transform
- [ ] Responsividade mobile-first
- [ ] Gap consistente: gap-4 (16px), gap-6 (24px)
- [ ] Padding vertical padrão: py-12 md:py-16
- [ ] Tipografia com leading-relaxed para body text
- [ ] Ícones de lucide-react com tamanho consistente (w-5 h-5 ou w-6 h-6)

---

## Observações Importantes

1. **Performance**: Sempre usar `will-change-transform` em elementos com animação de scale ou transform
2. **Acessibilidade**: Garantir contraste adequado em textos sobre imagens (usar overlays)
3. **Mobile First**: Desenvolver primeiro para mobile, depois expandir para desktop
4. **Consistência**: Manter o mesmo padrão de espaçamento, cores e border-radius em todos os componentes
5. **Imagens**: Usar aspect-ratio adequado e object-fit: cover para manter proporções

---

**Versão**: 1.0  
**Última atualização**: Nov 2025  
**Projeto**: IPOG Alta Fidelidade
