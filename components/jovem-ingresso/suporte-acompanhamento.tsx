"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Award, Users, BookOpen, GraduationCap } from "lucide-react"
import { DocenteModal } from "@/components/docente-modal"

export function SuporteAcompanhamento() {
  const topicos = [
    { icon: Award, texto: "MEC Credenciado" },
    { icon: Users, texto: "+100 Professores Mestres e Doutores" },
    { icon: BookOpen, texto: "20+ Anos de Experiência" },
    { icon: GraduationCap, texto: "Metodologia Validada" },
  ]

  const professores = [
    {
      nome: "Dr. João Santos",
      area: "Administração",
      bio: "Doutor em Administração com 15 anos de experiência em gestão estratégica e liderança empresarial.",
      tags: ["Gestão Estratégica", "Liderança", "Administração"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio: "Doutor em Administração com 15 anos de experiência em gestão estratégica e liderança empresarial.",
      bioCompleta:
        "Doutor em Administração pela FGV (2012), com MBA em Gestão Estratégica pela Fundação Dom Cabral. Atua como consultor empresarial há 15 anos, tendo assessorado mais de 80 empresas em processos de reestruturação e crescimento. Professor do IPOG desde 2014, ministra disciplinas de Gestão Estratégica, Planejamento e Liderança. Autor de diversos artigos científicos sobre gestão empresarial.",
      linkedin: "https://linkedin.com/in/joaosantos",
    },
    {
      nome: "Dra. Ana Costa",
      area: "Psicologia",
      bio: "Mestre em Psicologia Organizacional, especialista em desenvolvimento humano e carreira.",
      tags: ["Psicologia", "Desenvolvimento", "Carreira"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio: "Mestre em Psicologia Organizacional, especialista em desenvolvimento humano e carreira.",
      bioCompleta:
        "Mestre em Psicologia Organizacional pela UnB (2015), com especialização em Coaching pela ICI. Psicóloga clínica e organizacional há 12 anos, atua com desenvolvimento de carreira e orientação profissional. Professora do IPOG desde 2017, ministra disciplinas de Psicologia Organizacional e Gestão de Pessoas. Coordenadora de projetos de mentoria para jovens profissionais.",
      linkedin: "https://linkedin.com/in/anacosta",
    },
    {
      nome: "Dr. Carlos Lima",
      area: "Direito",
      bio: "PhD em Direito Empresarial, advogado atuante e consultor jurídico corporativo.",
      tags: ["Direito Empresarial", "Consultoria", "Advocacia"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio: "PhD em Direito Empresarial, advogado atuante e consultor jurídico corporativo.",
      bioCompleta:
        "Doutor em Direito Empresarial pela USP (2013), com LLM pela Columbia Law School. Advogado inscrito na OAB há 18 anos, sócio de escritório especializado em direito corporativo. Professor do IPOG desde 2015, ministra disciplinas de Direito Empresarial e Compliance. Palestrante em eventos jurídicos nacionais e internacionais.",
      linkedin: "https://linkedin.com/in/carloslima",
    },
    {
      nome: "Dra. Paula Oliveira",
      area: "Administração",
      bio: "Doutora em Inovação, consultora empresarial e especialista em empreendedorismo.",
      tags: ["Inovação", "Empreendedorismo", "Consultoria"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio: "Doutora em Inovação, consultora empresarial e especialista em empreendedorismo.",
      bioCompleta:
        "Doutora em Inovação e Empreendedorismo pela UNICAMP (2016), com MBA em Gestão de Negócios pela FIA. Empreendedora serial, fundou 3 startups de tecnologia. Consultora de inovação para empresas de diversos setores. Professora do IPOG desde 2018, ministra disciplinas de Empreendedorismo, Inovação e Novos Negócios. Mentora de startups em aceleradoras nacionais.",
      linkedin: "https://linkedin.com/in/paulaoliveira",
    },
    {
      nome: "Dr. Fernando Costa",
      area: "Metodologias Ativas",
      bio: "Especialista em metodologias ativas de aprendizagem com 12 anos de experiência em educação superior.",
      tags: ["Metodologias Ativas", "Educação", "Inovação"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio: "Especialista em metodologias ativas de aprendizagem com 12 anos de experiência em educação superior.",
      bioCompleta:
        "Doutor em Educação pela UNICAMP (2015), com pós-doutorado em Metodologias Ativas pela Universidade de Harvard. Coordenador pedagógico em instituições de ensino superior por 12 anos. Professor do IPOG desde 2017, ministra disciplinas de Metodologias de Ensino e Aprendizagem Ativa. Autor de 2 livros sobre inovação educacional.",
      linkedin: "https://linkedin.com/in/fernandocosta",
    },
    {
      nome: "Profa. Mariana Oliveira",
      area: "Orientação de Carreira",
      bio: "Psicóloga especializada em orientação profissional com 10 anos de experiência em aconselhamento de jovens.",
      tags: ["Orientação", "Carreira", "Jovens"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Psicóloga especializada em orientação profissional com 10 anos de experiência em aconselhamento de jovens.",
      bioCompleta:
        "Mestre em Psicologia pela USP (2016), com especialização em Orientação Profissional pela PUC-SP. Atua há 10 anos com orientação de carreira para jovens em início de jornada profissional. Professor do IPOG desde 2018, ministra disciplinas de Desenvolvimento de Carreira e Projeto de Vida. Coordenadora do programa de mentoria para jovens ingressantes.",
      linkedin: "https://linkedin.com/in/marianaoliveira",
    },
    {
      nome: "Prof. Lucas Ferreira",
      area: "Empreendedorismo Jovem",
      bio: "Empreendedor e mentor com 8 anos de experiência em startups e desenvolvimento de negócios inovadores.",
      tags: ["Empreendedorismo", "Startups", "Inovação"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio: "Empreendedor e mentor com 8 anos de experiência em startups e desenvolvimento de negócios inovadores.",
      bioCompleta:
        "MBA em Empreendedorismo pela FGV (2018), fundador de 3 startups de tecnologia. Mentor em aceleradoras de startups há 8 anos. Professor do IPOG desde 2020, ministra disciplinas de Empreendedorismo e Inovação. Palestrante em eventos de empreendedorismo jovem e autor do blog 'Jovem Empreendedor'.",
      linkedin: "https://linkedin.com/in/lucasferreira",
    },
    {
      nome: "Prof. Gabriel Santos",
      area: "Tecnologia e Inovação Digital",
      bio: "Especialista em tecnologia e transformação digital com 15 anos de experiência em desenvolvimento de soluções inovadoras.",
      tags: ["Tecnologia", "Digital", "Inovação"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Especialista em tecnologia e transformação digital com 15 anos de experiência em desenvolvimento de soluções inovadoras.",
      bioCompleta:
        "Mestre em Ciência da Computação pela UFMG (2014), com MBA em Transformação Digital pela FGV. CTO em startups de tecnologia por 15 anos. Professor do IPOG desde 2019, ministra disciplinas de Tecnologia, Inovação Digital e Desenvolvimento de Produtos. Mentor de projetos de tecnologia para jovens empreendedores.",
      linkedin: "https://linkedin.com/in/gabrielsantos",
    },
    {
      nome: "Profa. Beatriz Lima",
      area: "Comunicação e Marketing",
      bio: "Especialista em comunicação estratégica e marketing com 11 anos de experiência em branding e posicionamento de marca.",
      tags: ["Comunicação", "Marketing", "Branding"],
      foto: "/placeholder.svg?height=200&width=200",
      miniBio:
        "Especialista em comunicação estratégica e marketing com 11 anos de experiência em branding e posicionamento de marca.",
      bioCompleta:
        "Mestre em Comunicação pela ECA-USP (2015), com MBA em Marketing pela ESPM. Diretora de marketing em empresas de tecnologia por 11 anos. Professor do IPOG desde 2020, ministra disciplinas de Comunicação Estratégica e Marketing Digital. Consultora de branding para startups e pequenas empresas.",
      linkedin: "https://linkedin.com/in/beatrizlima",
    },
  ]

  const [selectedProfessor, setSelectedProfessor] = useState<(typeof professores)[0] | null>(null)

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Professores de mercado</h2>
          <p className="text-muted-foreground">Aprenda com quem atua e transforma o mercado</p>
        </div>

        <div className="mb-12">
          <ul className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {topicos?.map((topico, index) => {
              const Icon = topico.icon
              return (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="font-medium">{topico.texto}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Conheça alguns de nossos professores</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {professores?.map((professor, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-[45%] lg:basis-[30%]">
                  <Card
                    className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedProfessor(professor)}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                        <Users className="w-10 h-10 text-muted-foreground" />
                      </div>
                      <h4 className="font-semibold text-lg">{professor.nome}</h4>
                      <p className="text-sm font-medium text-muted-foreground">{professor.area}</p>
                      <p className="text-sm text-muted-foreground line-clamp-3">{professor.bio}</p>
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
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {selectedProfessor && (
        <DocenteModal
          docente={{
            nome: selectedProfessor.nome,
            area: selectedProfessor.area,
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
