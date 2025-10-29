import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function EmployabilitySection() {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-base font-semibold">Empregabilidade IPOG</h2>
            <p className="text-sm text-muted-foreground">
              Indicadores de empregabilidade e serviços exclusivos para impulsionar sua carreira
            </p>
          </div>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-[85%] md:basis-[45%]">
                <Card>
                  <CardContent className="p-4 space-y-1">
                    <p className="text-xs text-muted-foreground uppercase">Taxa de colocação</p>
                    <p className="text-3xl font-bold">82%</p>
                    <p className="text-xs text-muted-foreground">Alunos empregados após o curso</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-[85%] md:basis-[45%]">
                <Card>
                  <CardContent className="p-4 space-y-1">
                    <p className="text-xs text-muted-foreground uppercase">Média salarial</p>
                    <p className="text-3xl font-bold">4.6 m</p>
                    <p className="text-xs text-muted-foreground">Salário médio dos alunos</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
