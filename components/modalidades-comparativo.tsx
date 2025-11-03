import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function ModalidadesComparativo() {
  const modalidades = [
    {
      nome: "EAD",
      destaque: false,
      caracteristicas: [
        { texto: "Aulas 100% online", disponivel: true },
        { texto: "Flexibilidade total de horários", disponivel: true },
        { texto: "Estude de qualquer lugar", disponivel: true },
        { texto: "Encontros presenciais opcionais", disponivel: true },
        { texto: "Mensalidade reduzida", disponivel: true },
        { texto: "Aulas presenciais semanais", disponivel: false },
      ],
    },
    {
      nome: "Semipresencial",
      destaque: true,
      caracteristicas: [
        { texto: "Aulas 100% online", disponivel: true },
        { texto: "Flexibilidade total de horários", disponivel: true },
        { texto: "Estude de qualquer lugar", disponivel: true },
        { texto: "Encontros presenciais opcionais", disponivel: true },
        { texto: "Mensalidade reduzida", disponivel: false },
        { texto: "Aulas presenciais semanais", disponivel: true },
      ],
    },
    {
      nome: "Presencial",
      destaque: false,
      caracteristicas: [
        { texto: "Aulas 100% online", disponivel: false },
        { texto: "Flexibilidade total de horários", disponivel: false },
        { texto: "Estude de qualquer lugar", disponivel: false },
        { texto: "Encontros presenciais opcionais", disponivel: false },
        { texto: "Mensalidade reduzida", disponivel: false },
        { texto: "Aulas presenciais semanais", disponivel: true },
      ],
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare as Modalidades</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha a modalidade que melhor se adapta ao seu estilo de vida e objetivos profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modalidades.map((modalidade, index) => (
            <Card key={index} className={modalidade.destaque ? "border-primary shadow-lg" : ""}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{modalidade.nome}</h3>
                  {modalidade.destaque && (
                    <Badge variant="default" className="mb-2">
                      Mais Popular
                    </Badge>
                  )}
                </div>
                <ul className="space-y-3">
                  {modalidade.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {caracteristica.disponivel ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={caracteristica.disponivel ? "" : "text-muted-foreground"}>
                        {caracteristica.texto}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
