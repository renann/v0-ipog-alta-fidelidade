"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Award, Users, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import { DocenteModal } from "@/components/docente-modal"

export function MentoriaNetworking() {
  const professores = [
    {
      nome: "Dr. Roberto Almeida",
      especialidade: "Transição de Carreira",
      experiencia:
        "Especialista em recolocação profissional com 15 anos de experiência em coaching executivo e transição de carreira.",
      tags: ["Coaching", "Recolocação", "Carreira"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Especialista em recolocação profissional com 15 anos de experiência em coaching executivo e transição de carreira.",
      bioCompleta:
        "Doutor em Psicologia Organizacional pela PUC-SP (2014), com certificação internacional em Coaching Executivo pela ICF. Atua há 15 anos com processos de transição de carreira, tendo auxiliado mais de 500 profissionais em mudanças de área. Professor do IPOG desde 2016, ministra disciplinas de Desenvolvimento de Carreira e Coaching. Autor do livro 'Transição de Carreira: Um Guia Prático'.",
      linkedin: "https://linkedin.com/in/robertoalmeida",
    },
    {
      nome: "Dra. Juliana Santos",
      especialidade: "Gestão de Pessoas",
      experiencia:
        "Mestre em RH estratégico com 20 anos de experiência em desenvolvimento organizacional e gestão de talentos.",
      tags: ["RH Estratégico", "Gestão", "Talentos"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Mestre em RH estratégico com 20 anos de experiência em desenvolvimento organizacional e gestão de talentos.",
      bioCompleta:
        "Mestre em Gestão de Pessoas pela FGV (2010), com MBA em RH Estratégico pela FIA. Diretora de RH em multinacionais por 20 anos, liderou processos de transformação cultural e desenvolvimento de talentos. Professora do IPOG desde 2013, ministra disciplinas de Gestão de Pessoas e Desenvolvimento Organizacional. Consultora especializada em programas de sucessão e retenção de talentos.",
      linkedin: "https://linkedin.com/in/julianasantos",
    },
    {
      nome: "Prof. Marcos Silva",
      especialidade: "Gestão de Projetos",
      experiencia: "Especialista em PMO e consultoria com 18 anos de experiência em gestão de projetos complexos.",
      tags: ["PMO", "Projetos", "Consultoria"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio: "Especialista em PMO e consultoria com 18 anos de experiência em gestão de projetos complexos.",
      bioCompleta:
        "MBA em Gestão de Projetos pela FGV (2011), com certificações PMP, PMI-ACP e Prince2. Gerente de PMO em grandes corporações por 18 anos, liderou projetos de transformação digital e reestruturação organizacional. Professor do IPOG desde 2015, ministra disciplinas de Gestão de Projetos e Metodologias Ágeis. Consultor especializado em implantação de escritórios de projetos.",
      linkedin: "https://linkedin.com/in/marcossilva",
    },
    {
      nome: "Dra. Fernanda Martins",
      especialidade: "Desenvolvimento de Liderança",
      experiencia:
        "Especialista em desenvolvimento de lideranças com 16 anos de experiência em programas de formação executiva.",
      tags: ["Liderança", "Desenvolvimento", "Executivo"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Especialista em desenvolvimento de lideranças com 16 anos de experiência em programas de formação executiva.",
      bioCompleta:
        "Doutora em Administração pela FGV (2012), com MBA em Liderança pela Fundação Dom Cabral. Consultora de desenvolvimento de lideranças em grandes corporações por 16 anos. Professor do IPOG desde 2014, ministra disciplinas de Liderança Estratégica e Desenvolvimento Executivo. Autora do livro 'Liderança em Tempos de Mudança'.",
      linkedin: "https://linkedin.com/in/fernandamartins",
    },
    {
      nome: "Prof. André Carvalho",
      especialidade: "Estratégia e Inovação",
      experiencia:
        "Consultor estratégico com 14 anos de experiência em processos de inovação e transformação organizacional.",
      tags: ["Estratégia", "Inovação", "Transformação"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Consultor estratégico com 14 anos de experiência em processos de inovação e transformação organizacional.",
      bioCompleta:
        "MBA em Estratégia Empresarial pela FGV (2013), com especialização em Inovação pela Stanford University. Consultor de estratégia e inovação para empresas de diversos setores por 14 anos. Professor do IPOG desde 2017, ministra disciplinas de Estratégia Empresarial e Gestão da Inovação. Palestrante em eventos de inovação e transformação digital.",
      linkedin: "https://linkedin.com/in/andrecarvalho",
    },
    {
      nome: "Dra. Camila Rodrigues",
      especialidade: "Inteligência Emocional e Soft Skills",
      experiencia:
        "Psicóloga especializada em inteligência emocional com 12 anos de experiência em desenvolvimento de competências comportamentais.",
      tags: ["Inteligência Emocional", "Soft Skills", "Comportamento"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Psicóloga especializada em inteligência emocional com 12 anos de experiência em desenvolvimento de competências comportamentais.",
      bioCompleta:
        "Doutora em Psicologia pela USP (2015), com especialização em Inteligência Emocional pela Yale University. Atua há 12 anos com desenvolvimento de soft skills e inteligência emocional em contextos corporativos. Professora do IPOG desde 2018, ministra disciplinas de Inteligência Emocional e Desenvolvimento de Competências. Autora de artigos sobre competências comportamentais no ambiente de trabalho.",
      linkedin: "https://linkedin.com/in/camilarodrigues",
    },
  ]

  const credenciais = [
    {
      icon: Award,
      texto: "MEC Credenciado",
    },
    {
      icon: Users,
      texto: "+100 Professores Mestres e Doutores",
    },
    {
      icon: BookOpen,
      texto: "20+ Anos de Experiência",
    },
    {
      icon: GraduationCap,
      texto: "Metodologia Validada",
    },
  ]

  const [selectedProfessor, setSelectedProfessor] = useState<(typeof professores)[0] | null>(null)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mentoria, professores de mercado e rede de apoio ativa
          </h2>
          <p className="text-lg text-muted-foreground">
            O IPOG conecta você a quem já trilhou esse caminho de transição.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-center mb-8">Professores Especialistas</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {professores.map((professor, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="p-6 text-center h-full hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedProfessor(professor)}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-20 h-20 rounded-full bg-muted mx-auto" />
                      <h4 className="font-bold text-lg">{professor.nome}</h4>
                      <p className="text-sm font-medium text-muted-foreground">{professor.especialidade}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{professor.experiencia}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
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
                  </Card>
                </CarouselItem>
              ))}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Link href="/corpo-docente">
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow cursor-pointer border-dashed border-2 flex flex-col items-center justify-center min-h-[320px]">
                    <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Conheça todo o corpo docente</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explore todos os professores mestres e doutores do IPOG
                    </p>
                    <span className="text-sm font-medium flex items-center gap-2 text-foreground">
                      Ver corpo docente <ArrowRight className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-bold text-center mb-8">Credibilidade Comprovada</h3>
          <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {credenciais.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="font-medium">{item.texto}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background">
            Participar da comunidade IPOG
          </Button>
        </div>
      </div>

      {selectedProfessor && (
        <DocenteModal
          docente={{
            nome: selectedProfessor.nome,
            area: selectedProfessor.especialidade,
            miniBio: selectedProfessor.miniBio,
            bioCompleta: selectedProfessor.bioCompleta,
            linkedin: selectedProfessor.linkedin,
            foto: selectedProfessor.foto,
          }}
          open={!!selectedProfessor}
          onOpenChange={(open) => !open && setSelectedProfessor(null)}
        />
      )}
    </section>
  )
}
