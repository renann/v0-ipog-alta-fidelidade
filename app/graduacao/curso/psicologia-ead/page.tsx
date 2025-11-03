import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { PropostaValorPsicologia } from "@/components/curso-psicologia/proposta-valor-psicologia"
import { JornadaAcademicaPsicologia } from "@/components/curso-psicologia/jornada-academica-psicologia"
import { Modalidades } from "@/components/modalidades"
import { RetornoInvestimentoPsicologia } from "@/components/curso-psicologia/retorno-investimento-psicologia"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { FaqPsicologia } from "@/components/curso-psicologia/faq-psicologia"
import { GraduationCap, Clock, Award } from "lucide-react"
import { TrendingUp, Briefcase } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { FormasIngresso } from "@/components/formas-ingresso"
import { Autoridade } from "@/components/autoridade"
import { CtaFinal } from "@/components/cta-final"

export default function PsicologiaEadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Graduação", href: "/graduacao" },
                { label: "Psicologia EAD" },
              ]}
            />
          </div>
        </div>
        {/* Fim da adição */}
        <Hero
          badge="GRADUAÇÃO"
          title="Psicologia EAD"
          description="Forme-se em Psicologia com flexibilidade, qualidade e reconhecimento MEC."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Reconhecido pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Flexibilidade Total" },
            { icon: <Award className="h-5 w-5" />, text: "Professores Especialistas" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <PropostaValorPsicologia />
        <JornadaAcademicaPsicologia />
        <Modalidades
          title="Compare as modalidades e escolha a que mais combina com você"
          subtitle="O mesmo curso, com diferentes formatos de aprendizado — escolha pelo seu ritmo, rotina e objetivos."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem busca autonomia e flexibilidade total",
              beneficios: [
                "Estude no seu ritmo;",
                "Conteúdos atualizados e interativos;",
                "Tutoria online e suporte contínuo;",
                "Certificação igual ao curso presencial.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem valoriza interação e networking",
              beneficios: [
                "Aulas presenciais com vivências práticas;",
                "Interação direta com professores e colegas;",
                "Estrutura moderna e laboratórios equipados;",
                "Networking acadêmico e profissional.",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />
        <RetornoInvestimentoPsicologia />
        <Empregabilidade
          title="Apply for the selection process"
          subtitle="Projection of salary evolution after the course, based on average market ranges."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "82%",
              descricao: "employed or promoted",
              label: "EMPLOYMENT RATE*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "4-6 m",
              descricao: "to new position",
              label: "AVERAGE TIME*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+45%",
              descricao: "on average after graduation",
              label: "SALARY INCREASE*",
            },
          ]}
          layoutEstatisticas="carousel"
          depoimentos={[
            {
              texto:
                "The flexibility of EAD allowed me to balance work, family, and studies. Today I am a clinical psychologist and run my own clinic. IPOG made my dream possible.",
              autor: "Patrícia Souza",
              cargo: "Clinical Psychologist",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              texto:
                "I live in the interior and IPOG's EAD gave me access to national reference teachers. The quality is the same as the face-to-face course and today I work in a renowned clinic in my city.",
              autor: "Ricardo Oliveira",
              cargo: "Organizational Psychologist",
            },
            {
              texto:
                "I work on a full-time schedule and EAD was the only way to fulfill my dream of becoming a psychologist. The platform is excellent and the teachers' support is incredible. I am already interning in the field.",
              autor: "Amanda Silva",
              cargo: "EAD Psychology Student",
            },
          ]}
          bgColor="bg-background"
        />
        <Trilha
          titulo="Learning Path"
          subtitulo="Get to know the course structure and how you will evolve throughout your graduation"
          etapas={[
            {
              titulo: "Fundamentals of Psychology (1st and 2nd semester)",
              descricao:
                "Build a solid foundation with the study of the main theoretical currents, from Psychoanalysis to Behavior Analysis, and understand the biological bases in Neuroanatomofisiology.",
              beneficios: ["Understanding of the main concepts and theories", "Critical view of different approaches"],
              badges: ["1st and 2nd semester"],
            },
            {
              titulo: "Processes and Evaluation (3rd and 4th semester)",
              descricao:
                "Deepen your knowledge in Social Psychology, Educational Psychology, and Mental Health Psychology, mastering the first Psychological Evaluation Techniques for precise diagnoses.",
              beneficios: ["Mastering evaluation instruments", "Case study analysis"],
              badges: ["3rd and 4th semester"],
            },
            {
              titulo: "Interventions and Practices (5th and 6th semester)",
              descricao:
                "Develop intervention skills in Organizational and Institutional Psychology, learning Group Techniques and starting supervised basic internships.",
              beneficios: ["Supervised clinical internship experience", "Community intervention projects"],
              badges: ["5th and 6th semester"],
            },
            {
              titulo: "Internships and TCC (7th to 10th semester)",
              descricao:
                "Apply your knowledge in real contexts with 800h of supervised internship in areas such as Mental Health and Clinical Practices, while developing your TCC with individualized orientation.",
              beneficios: ["800h of supervised internship", "Individualized orientation for TCC"],
              badges: ["7th to 10th semester"],
              destaque: true,
            },
          ]}
          botaoCta={{
            texto: "Download complete curriculum",
            href: "#grade",
            observacao: "PDF with details of all disciplines",
          }}
          backgroundColor="bg-muted/30"
        />

        <Autoridade
          titulo="Course Teaching Staff"
          subtitulo="Learn from recognized experts in Psychology"
          credenciais={[
            "Masters and Doctors in Psychology",
            "Clinical and organizational experience",
            "Publications in scientific journals",
            "Action in renowned hospitals and clinics",
          ]}
          professores={[
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Ana Carolina Ferreira",
              area: "Clinical Psychology",
              descricao:
                "Doctor in Clinical Psychology from USP, specialist in Cognitive-Behavioral Therapy with over 15 years of clinical attendance and supervision experience.",
              especialidades: ["TCC", "Anxiety", "Depression"],
              biografia:
                "Doctor in Clinical Psychology from the University of São Paulo (USP), with specialization in Cognitive-Behavioral Therapy from the Beck Institute. Acts for more than 15 years in private practice and as clinical supervisor. Author of various scientific articles about anxiety and depression disorders. Coordinates the TCC Study Nucleus of IPOG and teaches courses for psychologist training.",
              linkedin: "https://linkedin.com/in/ana-carolina-ferreira",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Roberto Almeida Santos",
              area: "Organizational Psychology",
              descricao:
                "Master in Organizational Psychology, HR consultant in large companies and specialist in psychological assessment and leadership development.",
              especialidades: ["HR", "Leadership", "Psychological Assessment"],
              biografia:
                "Master in Organizational Psychology from PUC-SP, with MBA in Human Resources. Acts as an organizational consultant for 12 years, having worked with companies such as Ambev, Natura and Magazine Luiza. Specialist in assessment processes, leadership development and corporate well-being programs. Invited professor in MBA and postgraduate programs.",
              linkedin: "https://linkedin.com/in/roberto-almeida-santos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Juliana Martins Costa",
              area: "Neuropsychology",
              descricao:
                "Doctor in Neuropsychology, specialist in neuropsychological assessment and cognitive rehabilitation, with action in specialized hospitals and clinics.",
              especialidades: ["Neuropsychology", "Cognitive Rehabilitation", "Assessment"],
              biografia:
                "Doctor in Neuropsychology from UNIFESP, with postdoctorate in Neuroscience. Acts in São Paulo Hospital and private practice. Specialist in neuropsychological assessment of children, adults and the elderly, focusing on neurodevelopmental disorders and degenerative diseases. Coordinates Neuropsychology Laboratory of IPOG.",
              linkedin: "https://linkedin.com/in/juliana-martins-costa",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Prof. Dr. Marcelo Henrique Silva",
              area: "Psychoanalysis",
              descricao:
                "Doctor in Psychoanalysis, member of the Brazilian Society of Psychoanalysis, with vast experience in clinical psychoanalysis and analyst training.",
              especialidades: ["Psychoanalysis", "Clinical", "Analyst Training"],
              biografia:
                "Doctor in Psychoanalysis from UFRJ, effective member of the Brazilian Psychoanalysis Society of São Paulo. Acts for 20 years in private practice and as analyst trainer, training new psychoanalysts. Author of three books about contemporary psychoanalytic theory and regular contributor to specialized journals. Coordinates study groups on Freud and Lacan.",
              linkedin: "https://linkedin.com/in/marcelo-henrique-silva",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dra. Fernanda Oliveira Ramos",
              area: "Social Psychology",
              descricao:
                "Doctor in Social Psychology, researcher in public policies and community mental health, with projects in vulnerable communities.",
              especialidades: ["Social Psychology", "Public Policies", "Community Mental Health"],
              biografia:
                "Doctor in Social Psychology from USP, with research focused on public policies for mental health and community interventions. Coordinates social projects in vulnerable communities for 10 years, developing programs for mental health prevention and promotion. Consultant to the Ministry of Health and author of publications on community psychology.",
              linkedin: "https://linkedin.com/in/fernanda-oliveira-ramos",
            },
            {
              foto: "/placeholder.svg?height=400&width=400",
              nome: "Dr. Paulo Ricardo Mendes",
              area: "Developmental Psychology",
              descricao:
                "Master in Developmental Psychology, specialist in childhood and adolescence, with action in schools and child care clinics.",
              especialidades: ["Child Development", "School Psychology", "Adolescence"],
              biografia:
                "Master in Developmental Psychology from UFRGS, specialist in child and adolescent clinical care. Acts for 14 years in private practice and as school psychologist. Develops programs for parents and teachers about child development and learning difficulties. Author of articles about neurodevelopmental disorders.",
              linkedin: "https://linkedin.com/in/paulo-ricardo-mendes",
            },
          ]}
        />

        <CtaFinal
          title="Invest in your career with the national reference institution."
          description="Enrollment Fee: R$ 100,00 | Monthly Installments: starting from R$ 499,00+"
          enrollmentFee="R$ 100,00"
          monthlyFee="R$ 499,00"
          duration="5 years"
          totalCost="R$ 29.940,00"
          nextClassDate="November"
          promotionDeadline="October 30"
        />

        <FaqPsicologia />
        <FormasIngresso />
      </main>
      <Footer />
    </div>
  )
}
