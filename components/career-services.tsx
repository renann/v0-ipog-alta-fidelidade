import { CheckCircle2, Play, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = ["Formação de currículo e LinkedIn", "Simulação de entrevista", "Preparação para processos seletivos"]

export function CareerServices() {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-base font-semibold">Serviços de Carreira</h2>

          <div className="space-y-2">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">{service}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-muted-foreground opacity-30" />
              </div>
              <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full relative z-10">
                <Play className="h-5 w-5 fill-current" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Ouça o relato direto de quem já passou por aqui</p>
          </div>
        </div>
      </div>
    </section>
  )
}
