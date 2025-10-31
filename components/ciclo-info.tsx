import { Calendar } from "lucide-react"

interface CicloInfoProps {
  titulo?: string
}

export function CicloInfo({ titulo = "Ciclos de Matrícula" }: CicloInfoProps) {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{titulo}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Na graduação, a matrícula é vinculada ao curso e período de ingresso, não a turmas específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-background border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                <span className="text-lg font-bold text-primary">1º</span>
              </div>
              <h3 className="text-xl font-semibold">Primeiro Ciclo</h3>
            </div>
            <p className="text-muted-foreground mb-3">Período de matrícula:</p>
            <p className="text-lg font-semibold">Novembro a Fevereiro</p>
          </div>

          <div className="p-6 bg-background border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                <span className="text-lg font-bold text-primary">2º</span>
              </div>
              <h3 className="text-xl font-semibold">Segundo Ciclo</h3>
            </div>
            <p className="text-muted-foreground mb-3">Período de matrícula:</p>
            <p className="text-lg font-semibold">Agosto a Setembro</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg max-w-4xl mx-auto">
          <p className="text-sm text-blue-900 dark:text-blue-100 text-center">
            <strong>Importante:</strong> Você escolherá sua turma específica após o início do ciclo selecionado
          </p>
        </div>
      </div>
    </section>
  )
}
