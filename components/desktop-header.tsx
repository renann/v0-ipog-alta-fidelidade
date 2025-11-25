"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Pitchbar } from "@/components/pitchbar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"

interface MegaMenuItem {
  title: string
  href: string
  description?: string
}

interface MegaMenuSection {
  title: string
  items: MegaMenuItem[]
}

const extensaoItems: MegaMenuSection[] = [
  {
    title: "Perfis",
    items: [
      { title: "Atualização Profissional", href: "/extensao/atualizacao", description: "Mantenha-se atualizado" },
      { title: "Gap Imediato", href: "/extensao/gap-imediato", description: "Preencha lacunas de conhecimento" },
      { title: "Recolocação Profissional", href: "/extensao/recolocacao", description: "Retorne ao mercado" },
    ],
  },
  {
    title: "Cursos em Destaque",
    items: [
      { title: "Gestão de Projetos Ágeis", href: "/extensao/curso/gestao-projetos-ageis" },
      { title: "Inteligência Artificial Aplicada", href: "/extensao/curso/inteligencia-artificial-aplicada" },
      { title: "Marketing Digital", href: "/extensao/curso/marketing-digital" },
      { title: "Gestão de Pessoas", href: "/extensao/curso/gestao-pessoas" },
      { title: "Compliance", href: "/extensao/curso/compliance" },
    ],
  },
]

const graduacaoItems: MegaMenuSection[] = [
  {
    title: "Perfis",
    items: [
      { title: "Jovem Ingresso", href: "/graduacao/jovem-ingresso", description: "Primeira graduação" },
      { title: "Segunda Graduação", href: "/graduacao/segunda-graduacao", description: "Nova formação" },
      { title: "Transferência", href: "/graduacao/transferencia", description: "Transfira seu curso" },
    ],
  },
  {
    title: "Cursos em Destaque",
    items: [
      { title: "Psicologia EAD", href: "/graduacao/curso/psicologia-ead" },
      { title: "Direito", href: "/graduacao/curso/direito" },
      { title: "Arquitetura e Urbanismo", href: "/graduacao/curso/arquitetura" },
      { title: "Administração", href: "/graduacao/curso/administracao" },
    ],
  },
]

const posGraduacaoItems: MegaMenuSection[] = [
  {
    title: "Perfis",
    items: [
      { title: "Primeira Pós", href: "/pos-graduacao/primeira-pos", description: "Especialize-se" },
      { title: "Lifelong Learning", href: "/pos-graduacao/lifelong-learning", description: "Aprendizado contínuo" },
      { title: "Transição de Área", href: "/pos-graduacao/transicao-area", description: "Mude de carreira" },
    ],
  },
  {
    title: "Cursos em Destaque",
    items: [
      { title: "Avaliação Psicológica", href: "/pos-graduacao/curso/avaliacao-psicologica" },
      { title: "Engenharia Estrutural", href: "/pos-graduacao/curso/engenharia-estrutural" },
      { title: "Intervenção ABA", href: "/pos-graduacao/curso/intervencao-aba" },
    ],
  },
]

const institucionalItems: MegaMenuItem[] = [
  { title: "Sobre Nós", href: "/sobre", description: "Conheça o IPOG" },
  { title: "História", href: "/sobre/historia", description: "Nossa trajetória" },
  { title: "Governança", href: "/sobre/governanca", description: "Gestão transparente" },
  { title: "Corpo Docente", href: "/corpo-docente", description: "Nossos professores" },
  { title: "Unidades", href: "/unidades", description: "Encontre uma unidade" },
  { title: "Parcerias Internacionais", href: "/parceiros-internacionais", description: "Conexões globais" },
  { title: "Blog", href: "/blog", description: "Insights e tendências" },
]

export function DesktopHeader() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/busca?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      <Pitchbar />
      <header className="hidden lg:block border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-8 w-auto" />
            </Link>

            {/* Mega Menu */}
            <NavigationMenu className="flex-1 mx-8">
              <NavigationMenuList>
                {/* Extensão */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    <Link href="/extensao" className="hover:underline">
                      Extensão
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6">
                      <div className="mb-4 pb-4 border-b">
                        <Link href="/extensao" className="text-sm font-medium text-primary hover:underline">
                          Ver todos os cursos de Extensão →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        {extensaoItems.map((section) => (
                          <div key={section.title}>
                            <h3 className="font-semibold text-sm text-muted-foreground mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                              {section.items.map((item) => (
                                <li key={item.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={item.href}
                                      className="block group hover:bg-accent rounded-md p-3 transition-colors"
                                    >
                                      <div className="font-medium text-sm group-hover:text-primary">{item.title}</div>
                                      {item.description && (
                                        <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Graduação */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    <Link href="/graduacao" className="hover:underline">
                      Graduação
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6">
                      <div className="mb-4 pb-4 border-b">
                        <Link href="/graduacao" className="text-sm font-medium text-primary hover:underline">
                          Ver todos os cursos de Graduação →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        {graduacaoItems.map((section) => (
                          <div key={section.title}>
                            <h3 className="font-semibold text-sm text-muted-foreground mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                              {section.items.map((item) => (
                                <li key={item.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={item.href}
                                      className="block group hover:bg-accent rounded-md p-3 transition-colors"
                                    >
                                      <div className="font-medium text-sm group-hover:text-primary">{item.title}</div>
                                      {item.description && (
                                        <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pós-Graduação */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    <Link href="/pos-graduacao" className="hover:underline">
                      Pós-Graduação
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6">
                      <div className="mb-4 pb-4 border-b">
                        <Link href="/pos-graduacao" className="text-sm font-medium text-primary hover:underline">
                          Ver todos os cursos de Pós-Graduação →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        {posGraduacaoItems.map((section) => (
                          <div key={section.title}>
                            <h3 className="font-semibold text-sm text-muted-foreground mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                              {section.items.map((item) => (
                                <li key={item.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={item.href}
                                      className="block group hover:bg-accent rounded-md p-3 transition-colors"
                                    >
                                      <div className="font-medium text-sm group-hover:text-primary">{item.title}</div>
                                      {item.description && (
                                        <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Enterprise */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    <Link href="/enterprise" className="hover:underline">
                      Enterprise
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6">
                      <div className="mb-4 pb-4 border-b">
                        <Link href="/enterprise" className="text-sm font-medium text-primary hover:underline">
                          Ver soluções Enterprise →
                        </Link>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/enterprise/ceo"
                              className="block group hover:bg-accent rounded-md p-3 transition-colors"
                            >
                              <div className="font-medium text-sm group-hover:text-primary">Para CEOs</div>
                              <div className="text-xs text-muted-foreground mt-1">Soluções para líderes executivos</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/enterprise/rh"
                              className="block group hover:bg-accent rounded-md p-3 transition-colors"
                            >
                              <div className="font-medium text-sm group-hover:text-primary">Para RH</div>
                              <div className="text-xs text-muted-foreground mt-1">Desenvolvimento de equipes</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Institucional */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base">
                    <Link href="/sobre" className="hover:underline">
                      Institucional
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6">
                      <div className="mb-4 pb-4 border-b">
                        <Link href="/sobre" className="text-sm font-medium text-primary hover:underline">
                          Conheça o IPOG →
                        </Link>
                      </div>
                      <ul className="grid grid-cols-2 gap-3">
                        {institucionalItems.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block group hover:bg-accent rounded-md p-3 transition-colors"
                              >
                                <div className="font-medium text-sm group-hover:text-primary">{item.title}</div>
                                {item.description && (
                                  <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Bar & User Icon */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar cursos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4"
                  />
                </div>
              </form>

              {/* User Login */}
              <Button variant="ghost" size="icon" asChild>
                <Link href="/login" aria-label="Área do aluno">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
