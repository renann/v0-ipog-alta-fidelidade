"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { LocationIndicator } from "@/components/location-indicator"
import { GeoLink } from "@/components/geo-link"
import {
  Search,
  User,
  Menu,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Briefcase,
  Building2,
  Info,
  ChevronDown,
  Users,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  BarChart,
  Home,
  Factory,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "Graduação",
    href: "/graduacao",
    profiles: [
      {
        title: "Jovem Ingresso",
        description: "Primeira graduação com metodologia inovadora",
        href: "/graduacao/jovem-ingresso",
        icon: GraduationCap,
      },
      {
        title: "Segunda Graduação",
        description: "Amplie suas possibilidades profissionais",
        href: "/graduacao/segunda-graduacao",
        icon: BookOpen,
      },
      {
        title: "Transferência",
        description: "Continue seus estudos no IPOG",
        href: "/graduacao/transferencia",
        icon: ArrowRight,
      },
    ],
    items: [
      {
        title: "Administração",
        href: "/graduacao/curso/administracao",
        icon: Briefcase,
      },
      {
        title: "Psicologia EAD",
        href: "/graduacao/curso/psicologia-ead",
        icon: Users,
      },
      {
        title: "Direito",
        href: "/graduacao/curso/direito",
        icon: BookOpen,
      },
      {
        title: "Arquitetura e Urbanismo",
        href: "/graduacao/curso/arquitetura",
        icon: Building2,
      },
    ],
    featured: {
      title: "Vestibular 2025",
      description:
        "Inscrições abertas com bolsas de até 50%. Graduação EAD e Presencial com empregabilidade garantida.",
      href: "/graduacao",
    },
  },
  {
    title: "Pós-Graduação",
    href: "/pos-graduacao",
    profiles: [
      {
        title: "Primeira Pós",
        description: "Especialize-se e destaque-se no mercado",
        href: "/pos-graduacao/primeira-pos",
        icon: Award,
      },
      {
        title: "Lifelong Learning",
        description: "Aprendizado contínuo ao longo da carreira",
        href: "/pos-graduacao/lifelong-learning",
        icon: TrendingUp,
      },
      {
        title: "Transição de Área",
        description: "Mude de carreira com segurança",
        href: "/pos-graduacao/transicao-area",
        icon: Target,
      },
    ],
    items: [
      {
        title: "Avaliação Psicológica",
        href: "/pos-graduacao/curso/avaliacao-psicologica",
        icon: Users,
      },
      {
        title: "Engenharia Estrutural e Fundações",
        href: "/pos-graduacao/curso/engenharia-estrutural",
        icon: Building2,
      },
      {
        title: "Intervenção ABA Aplicada ao TEA",
        href: "/pos-graduacao/curso/intervencao-aba",
        icon: Lightbulb,
      },
    ],
    featured: {
      title: "Certificação MEC",
      description: "Todos os cursos reconhecidos pelo MEC com metodologia que alia teoria e prática do mercado.",
      href: "/pos-graduacao",
    },
  },
  {
    title: "Extensão",
    href: "/extensao",
    profiles: [
      {
        title: "Atualização Profissional",
        description: "Mantenha-se atualizado no mercado",
        href: "/extensao/atualizacao",
        icon: TrendingUp,
      },
      {
        title: "Gap Imediato",
        description: "Preencha lacunas de conhecimento rapidamente",
        href: "/extensao/gap-imediato",
        icon: Target,
      },
      {
        title: "Recolocação Profissional",
        description: "Retorne ao mercado com novas competências",
        href: "/extensao/recolocacao",
        icon: Briefcase,
      },
    ],
    items: [
      {
        title: "Gestão de Projetos Ágeis",
        href: "/extensao/curso/gestao-projetos-ageis",
        icon: BarChart,
      },
      {
        title: "Inteligência Artificial Aplicada",
        href: "/extensao/curso/inteligencia-artificial-aplicada",
        icon: Lightbulb,
      },
      {
        title: "Marketing Digital",
        href: "/extensao/curso/marketing-digital",
        icon: TrendingUp,
      },
      {
        title: "Gestão de Pessoas",
        href: "/extensao/curso/gestao-pessoas",
        icon: Users,
      },
      {
        title: "Compliance",
        href: "/extensao/curso/compliance",
        icon: Award,
      },
    ],
    featured: {
      title: "Aprenda em semanas",
      description: "Cursos de curta duração com certificado reconhecido para impulsionar sua carreira rapidamente.",
      href: "/extensao",
    },
  },
  {
    title: "Enterprise",
    href: "/enterprise",
    profiles: [
      {
        title: "CEO / Diretor Executivo",
        description: "Soluções estratégicas para líderes",
        href: "/enterprise/ceo",
        icon: Target,
      },
      {
        title: "Gestora de RH",
        description: "Desenvolva talentos na sua organização",
        href: "/enterprise/rh",
        icon: Users,
      },
    ],
    items: [
      {
        title: "Soluções Corporativas",
        href: "/enterprise",
        icon: Building2,
      },
      {
        title: "Programas In Company",
        href: "/enterprise",
        icon: Briefcase,
      },
      {
        title: "Consultoria Educacional",
        href: "/enterprise",
        icon: Lightbulb,
      },
    ],
    featured: {
      title: "Transformação organizacional",
      description: "Desenvolva talentos e impulsione resultados com programas de educação corporativa personalizados.",
      href: "/enterprise",
    },
  },
  {
    title: "Institucional",
    href: "/sobre",
    profiles: [
      {
        title: "História do IPOG",
        description: "Conheça nossa trajetória de excelência",
        href: "/sobre/historia",
        icon: BookOpen,
      },
      {
        title: "Governança",
        description: "Transparência e gestão responsável",
        href: "/sobre/governanca",
        icon: Award,
      },
      {
        title: "Nossa Estrutura",
        description: "Infraestrutura de ponta para seu aprendizado",
        href: "/sobre/estrutura",
        icon: Building2,
      },
    ],
    items: [
      {
        title: "Sobre Nós",
        href: "/sobre",
        icon: Info,
      },
      {
        title: "Parcerias Internacionais",
        href: "/parceiros-internacionais",
        icon: Award,
      },
      {
        title: "Unidades IPOG",
        href: "/unidades",
        icon: Building2,
      },
      {
        title: "Corpo Docente",
        href: "/corpo-docente",
        icon: Users,
      },
      {
        title: "FAQ",
        href: "/faq",
        icon: Info,
      },
    ],
    featured: {
      title: "+20 anos de excelência",
      description: "Tradição em educação com presença nacional e metodologia inovadora que transforma carreiras.",
      href: "/sobre",
    },
  },
]

export function HomeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleOpenMegaMenu = (title: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveMegaMenu(title)
  }

  const handleCloseMegaMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Wrapper consistente com max-width para alinhar com megamenu */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[340px] overflow-y-auto">
                <div className="flex flex-col h-full">
                  {/* Header with home icon and close button */}
                  <div className="flex items-center justify-between mb-8 pt-2">
                    <div className="flex items-center gap-3">
                      <GeoLink href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Home className="h-6 w-6 text-foreground" />
                      </GeoLink>
                      <LocationIndicator />
                    </div>
                  </div>

                  <nav className="flex flex-col gap-8">
                    {/* Experiência Educacional Section */}
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-foreground">Experiência Educacional</h2>
                      <div className="flex flex-col gap-3">
                        <GeoLink
                          href="/graduacao"
                          className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <GraduationCap className="h-5 w-5" />
                          <span>Graduação</span>
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao"
                          className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Building2 className="h-5 w-5" />
                          <span>Pós Graduação</span>
                        </GeoLink>
                        <GeoLink
                          href="/extensao"
                          className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <TrendingUp className="h-5 w-5" />
                          <span>Cursos de Extensão</span>
                        </GeoLink>
                        <GeoLink
                          href="/enterprise"
                          className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Factory className="h-5 w-5" />
                          <span>Enterprise</span>
                        </GeoLink>
                      </div>
                    </div>

                    {/* Para você que busca por Section */}
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-foreground">Para você que busca por</h2>
                      <div className="flex flex-col gap-3">
                        <GeoLink
                          href="/graduacao/jovem-ingresso"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Primeira Graduação
                        </GeoLink>
                        <GeoLink
                          href="/graduacao/segunda-graduacao"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Segunda Graduação
                        </GeoLink>
                        <GeoLink
                          href="/graduacao/transferencia"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Transferência de Instituição
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao/primeira-pos"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Primeira Especializacao (Pós)
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao/transicao-area"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Mudar de Área
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao/lifelong-learning"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Lifelong Learning
                        </GeoLink>
                        <GeoLink
                          href="/extensao/gap-imediato"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Desenvolver uma nova habilidade
                        </GeoLink>
                        <GeoLink
                          href="/extensao/recolocacao"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Curso de extensão para recolocação
                        </GeoLink>
                        <GeoLink
                          href="/extensao/atualizacao"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Atualização Profissional
                        </GeoLink>
                      </div>
                    </div>

                    {/* Institucional Section */}
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-foreground">Institucional</h2>
                      <div className="flex flex-col gap-3">
                        <GeoLink
                          href="/sobre"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Sobre nós
                        </GeoLink>
                        <GeoLink
                          href="/sobre/estrutura"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Estrutura
                        </GeoLink>
                        <GeoLink
                          href="/parceiros-internacionais"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Parceiros Internacionais
                        </GeoLink>
                        <GeoLink
                          href="/unidades"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Unidades
                        </GeoLink>
                        <GeoLink
                          href="/programas-beneficios/ipog-plus"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Programas e benefícios
                        </GeoLink>
                        <GeoLink
                          href="/corpo-docente"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Corpo docente
                        </GeoLink>
                        <GeoLink
                          href="/central-atendimento"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Central de Atendimento
                        </GeoLink>
                      </div>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-7 w-auto" variant="dark" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleOpenMegaMenu(item.title)}
                onMouseLeave={handleCloseMegaMenu}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                  {item.title}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* LocationIndicator */}
            <div className="hidden md:block">
              <LocationIndicator />
            </div>

            {/* Search */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/busca">
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar</span>
              </Link>
            </Button>

            <Sheet open={userMenuOpen} onOpenChange={setUserMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Área do aluno</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[340px]">
                <div className="flex flex-col h-full">
                  {/* Header with home icon */}
                  <div className="flex items-center mb-8 pt-2">
                    <GeoLink href="/" onClick={() => setUserMenuOpen(false)}>
                      <Home className="h-6 w-6 text-foreground" />
                    </GeoLink>
                  </div>

                  {/* Acesso Rápido Section */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Acesso Rápido</h2>
                    <nav className="flex flex-col gap-4">
                      <a
                        href="https://aluno.ipog.edu.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GraduationCap className="h-5 w-5" />
                        <span>Portal do Aluno</span>
                      </a>
                      <a
                        href="https://professor.ipog.edu.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Building2 className="h-5 w-5" />
                        <span>Portal do Professor</span>
                      </a>
                      <a
                        href="https://coordenador.ipog.edu.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Compass className="h-5 w-5" />
                        <span>Portal do Coordenador</span>
                      </a>
                      <a
                        href="https://biblioteca.ipog.edu.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <BookOpen className="h-5 w-5" />
                        <span>Biblioteca</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {activeMegaMenu && (
        <div
          className="absolute left-0 right-0 top-16 border-t bg-background shadow-lg animate-in slide-in-from-top-2 duration-200"
          onMouseEnter={() => handleOpenMegaMenu(activeMegaMenu)}
          onMouseLeave={handleCloseMegaMenu}
        >
          <div className="mx-auto max-w-7xl px-6 py-8">
            {menuItems
              .filter((item) => item.title === activeMegaMenu)
              .map((item) => (
                <div key={item.title} className="grid grid-cols-12 gap-8">
                  {/* Coluna 1: Perfis */}
                  <div className="col-span-3 space-y-4">
                    {item.profiles.map((profile) => {
                      const Icon = profile.icon
                      return (
                        <Link
                          key={profile.title}
                          href={profile.href}
                          className="group block rounded-lg bg-muted/40 p-4 transition-all hover:bg-muted hover:shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1.5 flex-1">
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-muted-foreground" />
                                <h3 className="font-semibold text-sm leading-none">{profile.title}</h3>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">{profile.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                          </div>
                        </Link>
                      )
                    })}
                  </div>

                  {/* Coluna 2: Lista de itens */}
                  <div className="col-span-5 space-y-1">
                    {item.items.map((subItem) => {
                      const Icon = subItem.icon
                      return (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-muted/50"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/60 group-hover:bg-muted transition-colors">
                            <Icon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <span className="text-sm font-medium">{subItem.title}</span>
                        </Link>
                      )
                    })}
                  </div>

                  {/* Coluna 3: Destaque */}
                  <div className="col-span-4">
                    <Link
                      href={item.featured.href}
                      className="group block h-full rounded-lg bg-muted/30 p-6 transition-all hover:bg-muted/50 hover:shadow-sm"
                    >
                      <div className="flex h-full flex-col">
                        <div className="mb-4 aspect-video w-full rounded-md bg-muted flex items-center justify-center">
                          <div className="h-16 w-16 rounded-lg bg-muted-foreground/10 flex items-center justify-center">
                            <GraduationCap className="h-8 w-8 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-base font-bold leading-tight">{item.featured.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.featured.description}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-primary mt-4 pt-4 border-t">
                          <span>Saiba mais</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </header>
  )
}
