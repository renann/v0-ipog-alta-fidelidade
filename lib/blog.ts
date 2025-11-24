export interface BlogAuthor {
  name: string
  avatar: string
  role: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: BlogAuthor
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  readingTime: number
  featured: boolean
}

export interface BlogCategory {
  slug: string
  name: string
  description: string
  postCount: number
}

// Posts de exemplo (em produção, viriam de um CMS ou banco de dados)
export const blogPosts: BlogPost[] = [
  {
    slug: "transformacao-digital-educacao-superior",
    title: "A Transformação Digital na Educação Superior: Desafios e Oportunidades",
    excerpt:
      "Explore como a tecnologia está revolucionando o ensino superior e preparando profissionais para o futuro do trabalho.",
    content: `# A Transformação Digital na Educação Superior

A educação superior está passando por uma revolução sem precedentes. A transformação digital não é mais uma opção, mas uma necessidade para instituições que desejam permanecer relevantes no século XXI.

## O Novo Paradigma Educacional

Com a chegada de tecnologias como inteligência artificial, realidade virtual e plataformas de aprendizado adaptativo, o modelo tradicional de ensino está sendo repensado. As instituições precisam se adaptar rapidamente para atender às demandas de um mercado em constante evolução.

## Desafios da Implementação

A transformação digital traz consigo diversos desafios: resistência à mudança, necessidade de capacitação docente, investimentos em infraestrutura e a criação de experiências de aprendizado verdadeiramente engajadoras.

## Oportunidades para o Futuro

Apesar dos desafios, as oportunidades são imensas. A personalização do ensino, o acesso democratizado ao conhecimento e a preparação de profissionais mais alinhados com as demandas do mercado são apenas alguns dos benefícios dessa transformação.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dr. Carlos Mendes",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Diretor de Inovação Acadêmica",
    },
    publishedAt: "2024-01-15",
    category: "Inovação",
    tags: ["Educação", "Tecnologia", "Transformação Digital"],
    readingTime: 8,
    featured: true,
  },
  {
    slug: "importancia-pos-graduacao-carreira",
    title: "Por Que Investir em uma Pós-Graduação Pode Transformar Sua Carreira",
    excerpt:
      "Descubra como uma especialização pode abrir portas e acelerar seu crescimento profissional no mercado competitivo atual.",
    content: `# Por Que Investir em uma Pós-Graduação

O mercado de trabalho está cada vez mais competitivo e exigente. Profissionais que buscam se destacar precisam ir além da graduação e investir em especialização contínua.

## Diferenciação no Mercado

Uma pós-graduação oferece conhecimentos aprofundados e específicos que fazem toda a diferença na hora de competir por posições de destaque. Empresas valorizam profissionais que demonstram comprometimento com o desenvolvimento contínuo.

## Networking Qualificado

Além do conhecimento técnico, uma pós-graduação proporciona conexões valiosas com professores renomados e colegas de diferentes áreas, criando uma rede de contatos que pode abrir portas ao longo de toda a carreira.

## Retorno sobre o Investimento

Estudos mostram que profissionais com pós-graduação têm salários até 118% maiores que aqueles com apenas graduação. O investimento em educação continuada se paga rapidamente através de melhores oportunidades e remuneração.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dra. Ana Paula Silva",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Coordenadora de Pós-Graduação",
    },
    publishedAt: "2024-01-10",
    category: "Carreira",
    tags: ["Pós-Graduação", "Carreira", "Desenvolvimento Profissional"],
    readingTime: 6,
    featured: true,
  },
  {
    slug: "inteligencia-artificial-educacao",
    title: "Inteligência Artificial na Educação: Personalização em Escala",
    excerpt: "Como a IA está permitindo experiências de aprendizado personalizadas e adaptativas para cada estudante.",
    content: `# Inteligência Artificial na Educação

A inteligência artificial está revolucionando a forma como ensinamos e aprendemos. Pela primeira vez na história, é possível oferecer experiências de aprendizado verdadeiramente personalizadas em escala.

## Aprendizado Adaptativo

Sistemas de IA podem analisar o desempenho de cada aluno em tempo real, identificando pontos fortes e fracos, e ajustando o conteúdo e o ritmo de ensino de acordo com as necessidades individuais. Isso maximiza o potencial de aprendizado de cada estudante.

## Feedback Instantâneo e Preciso

Com IA, estudantes recebem feedback imediato sobre seu desempenho, permitindo correções rápidas e aprendizado mais eficiente. Professores também se beneficiam de insights detalhados sobre o progresso da turma.

## Democratização do Acesso

A IA está tornando educação de qualidade mais acessível, oferecendo tutoria personalizada 24/7, tradução automática de conteúdos e adaptação para diferentes estilos de aprendizagem, quebrando barreiras geográficas e socioeconômicas.

## O Papel do Professor

Longe de substituir educadores, a IA os libera de tarefas repetitivas, permitindo que foquem no que fazem de melhor: inspirar, mentorear e desenvolver o pensamento crítico dos alunos.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dr. Ricardo Santos",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Especialista em IA Educacional",
    },
    publishedAt: "2024-01-20",
    category: "Inovação",
    tags: ["Inteligência Artificial", "Tecnologia Educacional", "Personalização"],
    readingTime: 7,
    featured: true,
  },
  {
    slug: "networking-profissional-estrategico",
    title: "Networking Estratégico: Construindo Conexões que Impulsionam Carreiras",
    excerpt:
      "Aprenda a construir e manter uma rede de contatos profissionais que realmente faz diferença na sua trajetória.",
    content: `# Networking Estratégico

Em um mercado cada vez mais conectado, sua rede de contatos pode ser tão importante quanto suas habilidades técnicas. Mas networking eficaz vai muito além de colecionar cartões de visita.

## Qualidade Sobre Quantidade

O networking estratégico foca em construir relacionamentos genuínos e mutuamente benéficos. Não se trata de conhecer milhares de pessoas, mas de cultivar conexões significativas com profissionais que compartilham seus valores e objetivos.

## Onde Construir Sua Rede

Programas de pós-graduação e extensão oferecem ambientes ideais para networking: você interage com profissionais de diversas áreas, em diferentes estágios de carreira, todos comprometidos com desenvolvimento contínuo. Essas conexões frequentemente se transformam em parcerias de longo prazo.

## Mantendo Relacionamentos Ativos

Networking não termina após o primeiro contato. É essencial manter relacionamentos ativos através de interações regulares, compartilhamento de conhecimento e apoio mútuo. Redes sociais profissionais facilitam essa manutenção.

## Retorno do Investimento

Pesquisas mostram que até 85% das vagas são preenchidas através de networking. Além disso, uma rede forte proporciona mentoria, oportunidades de negócio, parcerias e acesso a conhecimento privilegiado do mercado.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Prof. Marcelo Ferreira",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Consultor de Carreira",
    },
    publishedAt: "2024-01-18",
    category: "Carreira",
    tags: ["Networking", "Desenvolvimento Profissional", "Relacionamentos"],
    readingTime: 6,
    featured: true,
  },
  {
    slug: "metodologias-ativas-aprendizagem",
    title: "Metodologias Ativas: O Futuro da Aprendizagem Está Aqui",
    excerpt:
      "Entenda como as metodologias ativas estão revolucionando a forma como aprendemos e desenvolvemos competências essenciais.",
    content: `# Metodologias Ativas de Aprendizagem

As metodologias ativas representam uma mudança fundamental na forma como encaramos o processo de ensino-aprendizagem. Em vez de alunos passivos, temos protagonistas ativos de sua própria jornada educacional.

## O Que São Metodologias Ativas

Metodologias ativas são abordagens pedagógicas que colocam o aluno no centro do processo de aprendizagem. Através de problemas reais, projetos práticos e discussões colaborativas, os estudantes desenvolvem não apenas conhecimento técnico, mas também habilidades essenciais como pensamento crítico e trabalho em equipe.

## Principais Metodologias

Entre as metodologias mais eficazes estão a Aprendizagem Baseada em Problemas (PBL), Sala de Aula Invertida, Aprendizagem Baseada em Projetos e Gamificação. Cada uma oferece benefícios únicos e pode ser adaptada a diferentes contextos educacionais.

## Resultados Comprovados

Pesquisas demonstram que alunos expostos a metodologias ativas apresentam melhor retenção de conhecimento, maior engajamento e desenvolvimento superior de competências socioemocionais, preparando-os melhor para os desafios do mercado de trabalho.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Prof. Roberto Almeida",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Especialista em Metodologias de Ensino",
    },
    publishedAt: "2024-01-05",
    category: "Educação",
    tags: ["Metodologias Ativas", "Pedagogia", "Inovação Educacional"],
    readingTime: 7,
    featured: false,
  },
  {
    slug: "soft-skills-mercado-trabalho",
    title: "Soft Skills: As Competências Mais Valorizadas pelo Mercado",
    excerpt:
      "Conheça as habilidades comportamentais que fazem a diferença na carreira e como desenvolvê-las através da educação continuada.",
    content: `# Soft Skills no Mercado de Trabalho

Em um mundo cada vez mais automatizado, as soft skills se tornaram o grande diferencial competitivo dos profissionais. Enquanto máquinas podem executar tarefas técnicas, habilidades como empatia, liderança e comunicação permanecem exclusivamente humanas.

## As Competências Mais Demandadas

Segundo pesquisas recentes, as soft skills mais valorizadas incluem comunicação eficaz, trabalho em equipe, adaptabilidade, pensamento crítico e inteligência emocional. Empresas buscam profissionais que não apenas dominem aspectos técnicos, mas que também saibam colaborar e liderar.

## Como Desenvolver Soft Skills

O desenvolvimento de soft skills requer prática deliberada e exposição a situações desafiadoras. Programas educacionais que incorporam trabalhos em grupo, apresentações, resolução de problemas complexos e feedback constante são fundamentais nesse processo.

## O Papel da Educação Continuada

Cursos de pós-graduação e extensão oferecem ambientes ideais para o desenvolvimento dessas competências, combinando teoria com prática e proporcionando interação com profissionais de diversas áreas e níveis de experiência.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dra. Mariana Costa",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Consultora de Desenvolvimento Profissional",
    },
    publishedAt: "2023-12-28",
    category: "Carreira",
    tags: ["Soft Skills", "Desenvolvimento Profissional", "Competências"],
    readingTime: 5,
    featured: false,
  },
  {
    slug: "educacao-executiva-lideranca",
    title: "Educação Executiva: Formando Líderes para o Futuro",
    excerpt:
      "Entenda como programas executivos estão preparando profissionais para os desafios da liderança no século XXI.",
    content: `# Educação Executiva e Liderança

A educação executiva evoluiu significativamente nas últimas décadas. Hoje, não se trata apenas de transmitir conhecimento técnico, mas de desenvolver líderes capazes de navegar em ambientes complexos e incertos.

## O Perfil do Líder Moderno

O líder do século XXI precisa ser versátil, adaptável e capaz de inspirar equipes diversas. Programas executivos focam no desenvolvimento de visão estratégica, capacidade de inovação e habilidades de gestão de mudanças.

## Metodologia Diferenciada

Programas executivos utilizam metodologias que combinam teoria com prática intensiva, estudos de caso reais, simulações empresariais e networking com executivos experientes. O aprendizado é imediato e aplicável.

## Impacto na Organização

Profissionais que passam por programas executivos retornam às suas organizações com novas perspectivas, ferramentas práticas e uma rede de contatos valiosa, gerando impacto positivo imediato em suas equipes e resultados.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dr. Fernando Oliveira",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Diretor de Programas Executivos",
    },
    publishedAt: "2023-12-20",
    category: "Liderança",
    tags: ["Educação Executiva", "Liderança", "Gestão"],
    readingTime: 6,
    featured: false,
  },
  {
    slug: "internacionalizacao-ensino-superior",
    title: "Internacionalização: Expandindo Horizontes na Educação Superior",
    excerpt:
      "Descubra como parcerias internacionais e programas de intercâmbio enriquecem a experiência educacional e profissional.",
    content: `# Internacionalização do Ensino Superior

A internacionalização da educação superior deixou de ser um diferencial para se tornar uma necessidade. Em um mundo globalizado, profissionais precisam ter visão internacional e capacidade de atuar em contextos multiculturais.

## Benefícios da Experiência Internacional

Estudantes que participam de programas internacionais desenvolvem competências interculturais, fluência em idiomas, adaptabilidade e uma rede global de contatos. Essas experiências são altamente valorizadas pelo mercado de trabalho.

## Parcerias Estratégicas

Instituições de ensino estão estabelecendo parcerias com universidades renomadas ao redor do mundo, oferecendo dupla certificação, programas de intercâmbio e projetos de pesquisa colaborativos que enriquecem a experiência acadêmica.

## Preparação para o Mercado Global

A exposição a diferentes culturas, metodologias de ensino e perspectivas profissionais prepara os alunos para atuar em empresas multinacionais e em projetos que transcendem fronteiras geográficas.`,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      name: "Dra. Juliana Martins",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Coordenadora de Relações Internacionais",
    },
    publishedAt: "2023-12-15",
    category: "Inovação",
    tags: ["Internacionalização", "Educação Global", "Parcerias"],
    readingTime: 7,
    featured: false,
  },
]

export const blogCategories: BlogCategory[] = [
  {
    slug: "inovacao",
    name: "Inovação",
    description: "Tendências e novidades em educação e tecnologia",
    postCount: 4,
  },
  {
    slug: "carreira",
    name: "Carreira",
    description: "Dicas e insights para desenvolvimento profissional",
    postCount: 4,
  },
  {
    slug: "educacao",
    name: "Educação",
    description: "Metodologias e práticas pedagógicas",
    postCount: 1,
  },
  {
    slug: "lideranca",
    name: "Liderança",
    description: "Gestão e desenvolvimento de líderes",
    postCount: 1,
  },
]

// Funções auxiliares
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, limit)
}

export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  )
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((cat) => cat.slug === slug)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
