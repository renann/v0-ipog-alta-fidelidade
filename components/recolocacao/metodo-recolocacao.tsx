import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Users, Briefcase, Network } from "lucide-react"
import Link from "next/link"

export function MetodoRecolocacao() {
  const diferenciais = [
    {
      icon: Users,
      titulo: "Mentoria Estruturada",
      descricao: "Acompanhamento com especialistas de mercado que entendem o processo de recolocação.",
    },
    {
      icon: Briefcase,
      titulo: "Portfólio Comprovado",
      descricao: "Projetos reais e aplicáveis que você pode apresentar em processos seletivos.",
    },
    {
      icon: Network,
      titulo: "Networking Estratégico",
      descricao: "Conexões diretas com profissionais e empresas que podem abrir portas.",
    },
  ]

  const trilha = [
    {
      numero: 1,
      titulo: "Diagnóstico de carreira",
      descricao: "Identifique suas forças e oportunidades de reposicionamento.",
      status: "current" as const,
    },
    {
      numero: 2,
      titulo: "Escolha do curso de impacto",
      descricao: "Selecione a formação que mais agrega ao seu perfil.",
      status: "future" as const,
    },
    {
      numero: 3,
      titulo: "Construção de portfólio prático",
      descricao: "Desenvolva projetos reais durante o curso.",
      status: "future" as const,
    },
    {
      numero: 4,
      titulo: "Networking e recolocação",
      descricao: "Conecte-se com o mercado e conquiste novas oportunidades.",
      status: "future" as const,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reposicione-se com portfólio e networking de alto valor.
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada curso é uma ponte entre aprendizado e oportunidade — com projetos reais e mentorias aplicadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {diferenciais.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{item.descricao}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Sua trilha de recolocação</h3>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {trilha.map((etapa, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 bg-background flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {etapa.status === "current" ? (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    ) : (
                      <Circle className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>

                  <Card
                    className={`flex-1 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                    }`}
                  >
                    <CardContent className="p-6">
                      {etapa.status === "current" && <Badge className="mb-3">Comece aqui</Badge>}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{etapa.numero}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2">{etapa.titulo}</h4>
                          <p className="text-sm text-muted-foreground">{etapa.descricao}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/catalogo?tipo=extensao">Comece sua recolocação agora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
