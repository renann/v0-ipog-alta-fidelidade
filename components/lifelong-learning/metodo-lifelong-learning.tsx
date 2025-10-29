import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Route, TrendingUp, Shield, Award, Users, Briefcase, Target } from "lucide-react"

export function MetodoLifelongLearning() {
  const pilares = [
    {
      icon: Route,
      title: "Roteiros Personalizados",
      description: "Aproveitamento de formações anteriores para criar trilhas únicas e eficientes",
    },
    {
      icon: TrendingUp,
      title: "Evolução Escalável",
      description: "Módulos complementares sem redundância, focados no seu crescimento contínuo",
    },
    {
      icon: Shield,
      title: "Governança de Conteúdo",
      description: "Curadoria que garante relevância contínua e alinhamento com o mercado",
    },
  ]

  const beneficios = [
    {
      icon: Award,
      title: "Desconto progressivo",
      description: "Bolsas por fidelidade que valorizam sua jornada contínua",
    },
    {
      icon: Users,
      title: "Mentorias masterclass",
      description: "Eventos executivos e agenda trimestral com especialistas",
    },
    {
      icon: Briefcase,
      title: "Consultoria de carreira",
      description: "LinkedIn, currículo e plano de carreira continuados",
    },
    {
      icon: Target,
      title: "Rede de egressos",
      description: "Clube de vantagens e parceiros exclusivos",
    },
  ]

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trilhas personalizadas que somam ao que você já construiu
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {pilares.map((pilar, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border bg-background">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        <pilar.icon className="h-8 w-8 text-foreground" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{pilar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pilar.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Benefícios IPOG+ */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-lg border border-border bg-muted/30 p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-foreground">Benefícios IPOG+</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background">
                    <beneficio.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">{beneficio.title}</h4>
                    <p className="text-sm text-muted-foreground">{beneficio.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
