import { ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const professors = [
  {
    name: "José Maria Gonçalves",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Michela Silva",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export function ProfessorsSection() {
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
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted flex items-center justify-center rounded-t-lg">
                        <ImageIcon className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="p-6 space-y-2">
                        <h3 className="font-semibold text-lg">{professor.name}</h3>
                        <p className="text-sm text-muted-foreground">{professor.description}</p>
                        <button className="text-sm text-foreground hover:underline pt-2">Saiba mais →</button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
