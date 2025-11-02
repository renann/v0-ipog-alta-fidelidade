import { Card } from "@/components/ui/card"
import { Building2, Award, Users, Target, TrendingUp, Shield } from "lucide-react"

const credenciais = [
  {
    icon: Building2,
    titulo: "500+ Empresas",
    descricao: "Organizações transformadas",
  },
  {
    icon: Award,
    titulo: "Certificação MEC",
    descricao: "Reconhecimento oficial",
  },
  {
    icon: Users,
    titulo: "20+ Anos",
    descricao: "De experiência corporativa",
  },
  {
    icon: Target,
    titulo: "ROI Comprovado",
    descricao: "Resultados mensuráveis",
  },
  {
    icon: TrendingUp,
    titulo: "95% Satisfação",
    descricao: "Avaliação dos clientes",
  },
  {
    icon: Shield,
    titulo: "Presença Nacional",
    descricao: "Todo território brasileiro",
  },
]

const empresasClientes = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
  "Empresa G",
  "Empresa H",
]

export function CredenciaisParcerias() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">A credibilidade que seu investimento exige</h2>
          <p className="text-muted-foreground">
            Mais de 500 organizações confiam no IPOG Enterprise para desenvolver seus times e líderes, respaldados por:
            +20 Anos de Experiência, Certificação MEC, 95% de Satisfação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {credenciais.map((credencial, index) => {
            const Icon = credencial.icon
            return (
              <Card key={index} className="p-4 text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="font-bold text-sm mb-1">{credencial.titulo}</p>
                <p className="text-xs text-muted-foreground">{credencial.descricao}</p>
              </Card>
            )
          })}
        </div>

        <div className="bg-background rounded-lg p-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Empresas que confiam no IPOG Enterprise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {empresasClientes.map((empresa, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-muted rounded-lg">
                <div className="w-full h-12 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-muted-foreground" />
                  <span className="ml-2 text-sm font-medium text-muted-foreground">{empresa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
