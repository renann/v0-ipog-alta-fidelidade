import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MetodoIpog } from "@/components/graduacao/metodo-ipog"
import { Cursos } from "@/components/cursos"
import { Jornadas } from "@/components/jornadas"
import { ResultadosReais } from "@/components/resultados-reais"
import { Autoridade } from "@/components/autoridade"
import { AcaoFinal } from "@/components/acao-final"
import { Footer } from "@/components/footer"
import { GraduationCap, Briefcase, ArrowRightLeft, TrendingUp, Users, Building2, Award, BookOpen } from "lucide-react"
import { Dilema } from "@/components/dilema"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

export default function GraduacaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Graduação" }]} />
          </div>
        </div>

        <Hero
          badge="GRADUAÇÃO"
          title="Comece sua carreira com uma graduação que prepara você para o mercado"
          description="Formação completa, flexível e reconhecida pelo MEC. Escolha entre EAD ou Presencial e construa seu futuro profissional com quem forma especialistas há mais de 20 anos"
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <GraduationCap className="h-5 w-5" />, text: "Professores Especialistas" },
            { icon: <GraduationCap className="h-5 w-5" />, text: "Flexibilidade Total" },
          ]}
          primaryCTA={{ text: "Encontre seu curso", href: "/catalogo?formacao=graduacao" }}
          secondaryCTA={{ text: "Falar com consultor", href: "/central-atendimento" }}
        />
        <Dilema
          titulo="O mercado exige profissionais preparados"
          subtitulo="Mas escolher a graduação certa e conciliar estudos com vida pessoal parece cada vez mais desafiador"
          solucao="A Graduação IPOG conecta você a um aprendizado prático, com suporte acadêmico real e empregabilidade comprovada"
        />
        <MetodoIpog />
        <Cursos
          badge="GRADUAÇÃO"
          title="Escolha o curso que combina com sua trajetória profissional"
          cursos={[
            {
              nome: "Administração",
              duracao: "4 anos",
              descricao:
                "Gestão estratégica e liderança empresarial para formar profissionais preparados para o mercado.",
              modalidade: "EAD • Presencial",
            },
            {
              nome: "Psicologia",
              duracao: "5 anos",
              descricao:
                "Ciências humanas e comportamento para transformar vidas através da compreensão do ser humano.",
              modalidade: "EAD • Presencial",
            },
            {
              nome: "Direito",
              duracao: "5 anos",
              descricao: "Ciências jurídicas e advocacia com foco em justiça e transformação social.",
              modalidade: "EAD • Presencial",
            },
            {
              nome: "Engenharia",
              duracao: "5 anos",
              descricao: "Tecnologia e inovação para desenvolver soluções que transformam o mundo.",
              modalidade: "EAD • Presencial",
            },
          ]}
          ctaText="Ver curso"
          ctaLink="/catalogo?formacao=graduacao"
        />
        <Jornadas
          title="Encontre sua jornada acadêmica"
          jornadas={[
            {
              icon: <GraduationCap className="w-8 h-8 text-primary" />,
              titulo: "Jovem Ingresso",
              promessa: "Diferencie-se no mercado com conteúdo prático e certificação reconhecida",
              dores: "Excesso de teoria e falta de tempo",
              ganho: "Empregabilidade e networking desde o primeiro semestre",
              cta: "Comece sua graduação",
              href: "/graduacao/jovem-ingresso",
            },
            {
              icon: <Briefcase className="w-8 h-8 text-primary" />,
              titulo: "Segunda Graduação",
              promessa: "Acelere sua nova formação com validação de conhecimentos",
              dores: "Sobrecarga e falta de personalização",
              ganho: "Eficiência e continuidade na formação",
              cta: "Acelere sua nova formação",
              href: "/graduacao/segunda-graduacao",
            },
            {
              icon: <ArrowRightLeft className="w-8 h-8 text-primary" />,
              titulo: "Transferência",
              promessa: "Continue sua jornada com melhor estrutura e suporte",
              dores: "Falta de suporte e estrutura inadequada",
              ganho: "Continuidade sem perda de tempo",
              cta: "Simule sua transferência",
              href: "/graduacao/transferencia",
            },
          ]}
        />
        <ResultadosReais
          titulo="Mais de 20 anos formando profissionais de alto impacto"
          subtitulo="Resultados comprovados que transformam carreiras"
          estatisticas={[
            {
              icone: <TrendingUp className="w-12 h-12 text-primary" />,
              valor: "89%",
              label: "Avanço na carreira em menos de 6 meses",
            },
            {
              icone: <Users className="w-12 h-12 text-primary" />,
              valor: "95%",
              label: "Egressos empregados na área de formação",
            },
            {
              icone: <Building2 className="w-12 h-12 text-primary" />,
              valor: "+2.000",
              label: "Empresas com egressos IPOG",
            },
          ]}
          depoimentos={[
            {
              tipo: "simples",
              texto:
                "A graduação IPOG transformou minha carreira. Em 6 meses já estava em uma nova posição na empresa.",
              nome: "Maria Silva",
              cargo: "Administração - Turma 2023",
            },
            {
              tipo: "simples",
              texto:
                "Professores atuantes no mercado fazem toda a diferença. Aprendi na prática o que uso no dia a dia.",
              nome: "João Santos",
              cargo: "Psicologia - Turma 2022",
            },
          ]}
        />
        <Autoridade
          titulo="Professores de mercado"
          subtitulo="Aprenda com quem atua e transforma o mercado"
          credenciais={[
            { icone: <Award className="w-5 h-5 text-muted-foreground" />, texto: "MEC Credenciado" },
            {
              icone: <Users className="w-5 h-5 text-muted-foreground" />,
              texto: "+100 Professores Mestres e Doutores",
            },
            { icone: <BookOpen className="w-5 h-5 text-muted-foreground" />, texto: "20+ Anos de Experiência" },
            { icone: <GraduationCap className="w-5 h-5 text-muted-foreground" />, texto: "Metodologia Validada" },
          ]}
          professores={[
            {
              nome: "Dr. João Silva",
              bio: "Doutor em Psicologia Clínica, 15 anos de experiência em avaliação psicológica",
              area: "Psicologia Clínica",
            },
            {
              nome: "Dra. Maria Santos",
              bio: "Mestre em Neuropsicologia, especialista em testes projetivos",
              area: "Neuropsicologia",
            },
            {
              nome: "Prof. Carlos Oliveira",
              bio: "PhD em Psicometria, autor de 3 livros sobre avaliação",
              area: "Psicometria",
            },
            {
              nome: "Dra. Ana Costa",
              bio: "Doutora em Psicologia Organizacional, consultora de RH",
              area: "Psicologia Organizacional",
            },
          ]}
          tituloProfessores="Conheça alguns de nossos professores"
          bgColor="bg-muted/30"
        />
        <AcaoFinal
          titulo="Comece sua graduação com quem forma especialistas"
          descricao="Escolha entre EAD ou Presencial e construa seu futuro profissional com suporte real"
          botaoPrimario={{
            texto: "Encontre seu curso",
            href: "/catalogo?formacao=graduacao",
          }}
          botaoSecundario={{
            texto: "Falar com consultor",
            href: "/central-atendimento",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
