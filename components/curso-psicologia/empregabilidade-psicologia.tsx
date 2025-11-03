import { Empregabilidade } from "@/components/empregabilidade"
import { Briefcase, TrendingUp, Users } from "lucide-react"

export function EmpregabilidadePsicologia() {
  return (
    <Empregabilidade
      title="Matricule-se na Graduação IPOG"
      subtitle="Indicadores de empregabilidade e serviços exclusivos para impulsionar sua carreira em Psicologia"
      estatisticas={[
        {
          icon: <TrendingUp className="w-8 h-8 text-primary" />,
          valor: "92%",
          descricao: "De empregabilidade dos egressos",
        },
        {
          icon: <Briefcase className="w-8 h-8 text-primary" />,
          valor: "85%",
          descricao: "Atuando na área de formação",
        },
        {
          icon: <Users className="w-8 h-8 text-primary" />,
          valor: "4.500+",
          descricao: "Psicólogos formados pelo IPOG",
        },
      ]}
      layoutEstatisticas="grid"
      servicos={[
        { texto: "Orientação de carreira personalizada" },
        { texto: "Conexão com clínicas e consultórios parceiros" },
        { texto: "Workshops de desenvolvimento profissional" },
        { texto: "Mentoria com psicólogos experientes" },
        { texto: "Acesso à rede de alumni IPOG" },
      ]}
      depoimentos={[
        {
          texto:
            "A graduação em Psicologia do IPOG me preparou não só tecnicamente, mas emocionalmente para atuar na área. Hoje trabalho em uma clínica renomada e me sinto realizada profissionalmente.",
          autor: "Ana Paula Silva",
          cargo: "Psicóloga Clínica",
        },
        {
          texto:
            "O suporte de carreira do IPOG foi fundamental. Consegui meu primeiro emprego antes mesmo de me formar, graças às conexões e orientações que recebi durante o curso.",
          autor: "Carlos Eduardo Santos",
          cargo: "Psicólogo Organizacional",
        },
        {
          texto:
            "A flexibilidade do EAD me permitiu conciliar estudos com trabalho. Hoje atuo em consultório próprio e continuo aplicando tudo que aprendi no IPOG.",
          autor: "Mariana Costa",
          cargo: "Psicóloga e Empreendedora",
        },
      ]}
      bgColor="bg-background"
    />
  )
}
