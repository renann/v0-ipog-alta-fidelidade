"use client"

import {
  Search,
  Menu,
  User,
  Home,
  GraduationCap,
  Building2,
  TrendingUp,
  Factory,
  BookOpen,
  Compass,
  ClipboardList,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { Logo } from "@/components/logo"
import { GeoLink } from "@/components/geo-link"
import { LocationIndicator } from "@/components/location-indicator"
import { Pitchbar } from "@/components/pitchbar"

interface HeaderProps {
  hideMenu?: boolean
  onOpenLocationDialog?: () => void
}

export function Header({ hideMenu = false, onOpenLocationDialog }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <>
      <Pitchbar />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4">
          {!hideMenu && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu" className="shrink-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[340px] overflow-y-auto">
                <div className="flex flex-col h-full">
                  {/* Header with home icon and close button */}
                  <div className="flex items-center justify-between mb-8 pt-2">
                    <div className="flex items-center gap-3">
                      <GeoLink href="/" onClick={() => setOpen(false)}>
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
                          onClick={() => setOpen(false)}
                        >
                          <GraduationCap className="h-5 w-5" />
                          <span>Graduação</span>
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao"
                          className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <Building2 className="h-5 w-5" />
                          <span>Pós Graduação</span>
                        </GeoLink>
                        <GeoLink
                          href="/extensao"
                          className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <TrendingUp className="h-5 w-5" />
                          <span>Cursos de Extensão</span>
                        </GeoLink>
                        <GeoLink
                          href="/enterprise"
                          className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <Factory className="h-5 w-5" />
                          <span>Enterprise</span>
                        </GeoLink>
                        <GeoLink
                          href="/central-matricula"
                          className="flex items-center gap-3 text-base text-primary font-medium hover:text-primary/80 transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <ClipboardList className="h-5 w-5" />
                          <span>Matrículas</span>
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
                          onClick={() => setOpen(false)}
                        >
                          Primeira Graduação
                        </GeoLink>
                        <GeoLink
                          href="/graduacao/segunda-graduacao"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Segunda Graduação
                        </GeoLink>
                        <GeoLink
                          href="/graduacao/transferencia"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Transferência de Instituição
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao/primeira-pos"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Primeira Especializacao (Pós)
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao/transicao-area"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Mudar de Área
                        </GeoLink>
                        <GeoLink
                          href="/pos-graduacao/lifelong-learning"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Lifelong Learning
                        </GeoLink>
                        <GeoLink
                          href="/extensao/gap-imediato"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Desenvolver uma nova habilidade
                        </GeoLink>
                        <GeoLink
                          href="/extensao/recolocacao"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Curso de extensão para recolocação
                        </GeoLink>
                        <GeoLink
                          href="/extensao/atualizacao"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
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
                          onClick={() => setOpen(false)}
                        >
                          Sobre nós
                        </GeoLink>
                        <GeoLink
                          href="/sobre/estrutura"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Estrutura
                        </GeoLink>
                        <GeoLink
                          href="/parceiros-internacionais"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Parceiros Internacionais
                        </GeoLink>
                        <GeoLink
                          href="/unidades"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Unidades
                        </GeoLink>
                        <GeoLink
                          href="/programas-beneficios/ipog-plus"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Programas e benefícios
                        </GeoLink>
                        <GeoLink
                          href="/corpo-docente"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Corpo docente
                        </GeoLink>
                        <GeoLink
                          href="/blog"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Blog
                        </GeoLink>
                        <GeoLink
                          href="/central-atendimento"
                          className="text-base text-foreground hover:text-primary transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          Central de Atendimento
                        </GeoLink>
                      </div>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}

          {hideMenu && <div className="w-10" />}

          <div className="absolute left-1/2 -translate-x-1/2">
            <GeoLink href="/">
              <Logo variant="dark" className="h-6 w-auto" />
            </GeoLink>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button variant="ghost" size="icon" aria-label="Search" asChild>
              <GeoLink href="/busca">
                <Search className="h-5 w-5" />
              </GeoLink>
            </Button>
            <Sheet open={userMenuOpen} onOpenChange={setUserMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="User">
                  <User className="h-5 w-5" />
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
      </header>
    </>
  )
}
