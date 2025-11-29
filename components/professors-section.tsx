"use client"

import { useState } from "react"
import Link from "next/link"
import { ImageIcon, ArrowRight, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ArrowRight, Linkedin } from "lucide-react"

const professors = [
  {
    name: "Dr. José Maria Gonçalves",
    area: "Gestão Estratégica",
    description:
      "Especialista em gestão estratégica com mais de 15 anos de experiência em transformação digital e liderança empresarial.",
    tags: ["Gestão Estratégica", "Transformação Digital", "Liderança"],
    foto: "/images/professors/jose-maria.jpg",
    miniBio:
      "Especialista em gestão estratégica com mais de 15 anos de experiência em transformação digital e liderança empresarial.",
    bioCompleta:
      "Doutor em Administração pela FGV (2015), com especialização em Gestão Estratégica pela Harvard Business School. Atua como consultor empresarial desde 2008, tendo liderado projetos de transformação digital em mais de 50 empresas de médio e grande porte. Professor do IPOG desde 2016, ministra disciplinas de Gestão Estratégica, Liderança e Inovação. Autor de 3 livros sobre gestão e transformação digital.",
    linkedin: "https://linkedin.com/in/josemariagoncalves",
  },
  {
    name: "Dra. Michela Silva",
    area: "Inovação e Empreendedorismo",
    description:
      "Doutora em Administração, consultora empresarial focada em inovação, empreendedorismo e desenvolvimento organizacional.",
    tags: ["Inovação", "Empreendedorismo", "Consultoria"],
    foto: "/images/professors/michela-silva.jpg",
    miniBio:
      "Doutora em Administração, consultora empresarial focada em inovação, empreendedorismo e desenvolvimento organizacional.",
    bioCompleta:
      "Doutora em Administração pela USP (2018), com MBA em Inovação e Empreendedorismo pela Stanford University. Fundadora de 2 startups de tecnologia e consultora de inovação para empresas Fortune 500. Professora do IPOG desde 2019, especialista em metodologias ágeis, design thinking e desenvolvimento de novos negócios. Palestrante internacional com mais de 100 apresentações em eventos de inovação.",
    linkedin: "https://linkedin.com/in/michelasilva",
  },
  {
    name: "Prof. Carlos Eduardo Mendes",
    area: "Marketing Digital e Estratégia",
    description:
      "Especialista em marketing digital com 12 anos de experiência em estratégias de crescimento e transformação de marcas.",
    tags: ["Marketing Digital", "Growth", "Branding"],
    foto: "/images/professors/carlos-eduardo.jpg",
    miniBio:
      "Especialista em marketing digital com 12 anos de experiência em estratégias de crescimento e transformação de marcas.",
    bioCompleta:
      "Mestre em Marketing pela ESPM (2016), com MBA em Marketing Digital pela FGV. Liderou estratégias de marketing em startups unicórnio e grandes corporações. Professor do IPOG desde 2018, ministra disciplinas de Marketing Digital, Growth Hacking e Estratégia de Marca. Consultor de marketing para mais de 80 empresas.",
    linkedin: "https://linkedin.com/in/carloseduardomendes",
  },
  {
    name: "Dra. Patricia Rodrigues",
    area: "Gestão de Pessoas e Cultura Organizacional",
    description:
      "Doutora em Psicologia Organizacional com 18 anos de experiência em desenvolvimento humano e cultura corporativa.",
    tags: ["RH Estratégico", "Cultura", "Desenvolvimento"],
    foto: "/images/professors/patricia-rodrigues.jpg",
    miniBio:
      "Doutora em Psicologia Organizacional com 18 anos de experiência em desenvolvimento humano e cultura corporativa.",
    bioCompleta:
      "Doutora em Psicologia Organizacional pela UnB (2013), com pós-doutorado em Comportamento Organizacional pela USP. Diretora de RH em multinacionais por 18 anos. Professor do IPOG desde 2015, especialista em cultura organizacional, engajamento e desenvolvimento de lideranças. Autora de 2 livros sobre gestão de pessoas.",
    linkedin: "https://linkedin.com/in/patriciarodrigues",
  },
  {
    name: "Prof. Ricardo Alves",
    area: "Finanças Corporativas e Controladoria",
    description:
      "Especialista em finanças corporativas com 20 anos de experiência em planejamento financeiro e controladoria estratégica.",
    tags: ["Finanças", "Controladoria", "Planejamento"],
    foto: "/images/professors/ricardo-alves.jpg",
    miniBio:
      "Especialista em finanças corporativas com 20 anos de experiência em planejamento financeiro e controladoria estratégica.",
    bioCompleta:
      "MBA em Finanças pela FGV (2010), com certificação CFA (Chartered Financial Analyst). CFO em empresas de médio e grande porte por 20 anos. Professor do IPOG desde 2014, ministra disciplinas de Finanças Corporativas, Controladoria e Análise de Investimentos. Consultor financeiro para empresas em processos de reestruturação.",
    linkedin: "https://linkedin.com/in/ricardoalves",
  },
  {
    name: "Dra. Amanda Costa",
    area: "Direito Empresarial e Compliance",
    description:
      "Advogada especialista em direito empresarial com 14 anos de experiência em compliance, governança corporativa e M&A.",
    tags: ["Direito Empresarial", "Compliance", "Governança"],
    foto: "/images/professors/amanda-costa.jpg",
    miniBio:
      "Advogada especialista em direito empresarial com 14 anos de experiência em compliance, governança corporativa e M&A.",
    bioCompleta:
      "Doutora em Direito Empresarial pela USP (2017), com LLM em Corporate Law pela NYU. Sócia de escritório de advocacia empresarial, especializada em compliance e governança. Professora do IPOG desde 2019, ministra disciplinas de Direito Empresarial, Compliance e Governança Corporativa. Consultora jurídica para empresas listadas na B3.",
    linkedin: "https://linkedin.com/in/amandacosta",
  },
]

export function ProfessorsSection() {
  const [selectedProfessor, setSelectedProfessor] = useState<(typeof professors)[0] | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="w-full px-4 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Professores atuantes</h2>
            <p className="text-muted-foreground">Aprenda com quem atua e transforma o mercado</p>
          </div>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {professors.map((professor) => (
                <CarouselItem key={professor.name} className="pl-2 md:pl-4 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                  <Card
                    className="h-full hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedProfessor(professor)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted flex items-center justify-center rounded-t-lg">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="font-semibold text-lg">{professor.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{professor.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {professor.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-sm text-foreground hover:underline pt-2 inline-block font-medium">
                          Ver bio completa →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
              <CarouselItem className="pl-2 md:pl-4 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                <Link href="/corpo-docente">
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-dashed border-2">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted/50 flex items-center justify-center rounded-t-lg">
                        <Users className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <div className="p-6 space-y-3 text-center">
                        <h3 className="font-semibold text-lg">Conheça todo o corpo docente</h3>
                        <p className="text-sm text-muted-foreground">
                          Explore todos os professores mestres e doutores do IPOG
                        </p>
                        <span className="text-sm font-medium flex items-center justify-center gap-2 text-foreground pt-2">
                          Ver corpo docente <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>

      <Sheet open={!!selectedProfessor} onOpenChange={(open) => !open && setSelectedProfessor(null)}>
        <SheetContent
          side="right"
          className="bg-[#8A212E] text-white border-l-0 w-full md:w-[30vw] overflow-y-auto p-0"
          style={{ borderRadius: "45px 0 0 45px" }}
        >
          <div className="p-6">
            {selectedProfessor && (
              <div className="space-y-6">
                <SheetHeader className="space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={selectedProfessor.foto || "/placeholder.svg"}
                      alt={`Foto de ${selectedProfessor.name}`}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <SheetTitle className="text-white text-2xl text-center">{selectedProfessor.name}</SheetTitle>
                  <SheetDescription className="text-white/90 text-center text-base">
                    {selectedProfessor.area}
                  </SheetDescription>
                </SheetHeader>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedProfessor.tags.map((tag) => (
                      <Badge key={tag} className="bg-white/20 hover:bg-white/30 text-white border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4">
                    <h3 className="font-semibold text-lg text-white">Sobre</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{selectedProfessor.bioCompleta}</p>
                  </div>

                  {selectedProfessor.linkedin && (
                    <a
                      href={selectedProfessor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors pt-4"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">Ver perfil no LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
