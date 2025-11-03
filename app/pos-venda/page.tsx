"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { StepProgress } from "@/components/step-progress"
import { DocumentUpload } from "@/components/document-upload"
import { VestibularScheduling } from "@/components/vestibular-scheduling"
import { DocumentoGraduacaoUpload } from "@/components/pos-graduacao/documento-graduacao-upload"
import { CheckCircle2, Mail, ExternalLink, FileText, Calendar, AlertCircle, Info } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { getCourse, type Course } from "@/lib/mock-courses"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"

interface UploadedFile {
  name: string
  size: number
  type: string
  url: string
}

interface SchedulingOption {
  id: string
  date: string
  time: string
  mode: "remote" | "presencial"
  location?: string
}

function PosVendaContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get("course") || "psicologia-ead"
  const metodoIngresso = searchParams.get("metodo") || ""
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    const loadedCourse = getCourse(courseId)
    setCourse(loadedCourse)
  }, [courseId])

  const inscricao = {
    nome: "João Silva",
    email: "joao.silva@email.com",
    protocolo: course?.type === "Graduação" ? "GRAD-2024-001234" : "POS-2024-005678",
  }

  const [emailValidado] = useState(true)
  const [documentoPessoal, setDocumentoPessoal] = useState<UploadedFile | null>(null)
  const [certificadoEnsinoMedio, setCertificadoEnsinoMedio] = useState<UploadedFile | null>(null)
  const [documentoSecundario, setDocumentoSecundario] = useState<UploadedFile | null>(null)
  const [vestibularAgendado, setVestibularAgendado] = useState<SchedulingOption | null>(null)

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  const isGraduacao = course.type === "Graduação"
  const isPosGraduacao = course.type === "Pós-Graduação"
  const isVestibular = metodoIngresso === "vestibular"

  const step1Complete = emailValidado
  const step2Complete =
    isGraduacao && isVestibular
      ? !!documentoPessoal && !!certificadoEnsinoMedio && !!documentoSecundario
      : !!documentoPessoal && !!documentoSecundario
  const step3Complete = isGraduacao ? !!vestibularAgendado : true // Pós doesn't need vestibular
  const allStepsComplete = step1Complete && step2Complete && step3Complete

  const steps = [
    {
      id: 1,
      title: "Validação de E-mail",
      description: "Confirme seu e-mail",
      completed: step1Complete,
      active: step1Complete ? false : true,
    },
    {
      id: 2,
      title: "Documentação",
      description: "Envie seus documentos",
      completed: step2Complete,
      active: step2Complete ? false : step1Complete,
    },
    {
      id: 3,
      title: isGraduacao ? "Agendamento" : "Confirmação",
      description: isGraduacao ? "Agende seu vestibular" : "Matrícula confirmada",
      completed: step3Complete,
      active: step3Complete ? false : step2Complete,
    },
  ]

  const completedSteps = steps.filter((s) => s.completed).length

  return (
    <div className="min-h-screen bg-background">
      <Header hideMenu={true} />

      <div className="w-full py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <BreadcrumbWithItems items={[{ label: "Início", href: "/" }, { label: "Pós-Venda" }]} />
        </div>
      </div>

      <main className="w-full py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-4">
          {/* Success Header */}
          <div className="mb-8 text-center md:mb-12">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 md:mb-6 md:h-20 md:w-20">
              <CheckCircle2 className="h-10 w-10 text-gray-900 dark:text-gray-100 md:h-12 md:w-12" />
            </div>
            <h1 className="mb-3 text-2xl font-bold md:mb-4 md:text-4xl">
              {isGraduacao ? "Inscrição realizada com sucesso!" : "Matrícula realizada com sucesso!"}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Parabéns, {inscricao.nome}! Complete as etapas abaixo para finalizar sua{" "}
              {isGraduacao ? "inscrição" : "matrícula"}.
            </p>
          </div>

          {/* Protocolo */}
          <Card className="mb-6 border-gray-300 dark:border-gray-700 md:mb-8">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-1 text-sm text-muted-foreground">
                    Protocolo de {isGraduacao ? "inscrição" : "matrícula"}
                  </p>
                  <p className="font-mono text-lg font-bold md:text-xl">{inscricao.protocolo}</p>
                </div>
                <Badge
                  variant="secondary"
                  className="w-fit border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  Confirmado
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Pós-Graduação Info Alert */}
          {isPosGraduacao && (
            <Alert className="mb-6 border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900 md:mb-8">
              <Info className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <AlertDescription className="text-sm text-gray-700 dark:text-gray-300">
                As matrículas em cursos de pós-graduação estão disponíveis para alunos até o 4º módulo. Em caso de
                dúvidas, entre em contato com o suporte acadêmico.
              </AlertDescription>
            </Alert>
          )}

          {/* Progress Summary */}
          <Card className="mb-6 md:mb-8">
            <CardContent className="p-4 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold md:text-xl">Seu Progresso</h2>
                <Badge variant="secondary" className="text-sm">
                  {completedSteps}/3 etapas
                </Badge>
              </div>
              <StepProgress steps={steps} />
            </CardContent>
          </Card>

          {/* Step 1: Email Validation */}
          <Card
            className={cn(
              "mb-6 md:mb-8",
              step1Complete && "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",
            )}
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    step1Complete ? "bg-gray-900 dark:bg-gray-100" : "bg-gray-200 dark:bg-gray-800",
                  )}
                >
                  {step1Complete ? (
                    <CheckCircle2 className="h-5 w-5 text-white dark:text-gray-900" />
                  ) : (
                    <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-semibold">{step1Complete ? "E-mail validado" : "Valide seu e-mail"}</h3>
                  {step1Complete ? (
                    <p className="text-sm text-muted-foreground">
                      Seu e-mail <strong>{inscricao.email}</strong> foi validado com sucesso.
                    </p>
                  ) : (
                    <>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Enviamos um link de validação para <strong>{inscricao.email}</strong>. Clique no link para
                        continuar.
                      </p>
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <Button variant="outline" size="sm">
                          Reenviar e-mail
                        </Button>
                        <Button variant="ghost" size="sm">
                          Alterar e-mail
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Document Upload */}
          <Card
            className={cn(
              "mb-6 md:mb-8",
              !step1Complete && "opacity-60",
              step2Complete && "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",
            )}
          >
            <CardContent className="p-4 md:p-6">
              <div className="mb-4 flex items-start gap-3 md:gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    step2Complete
                      ? "bg-gray-900 dark:bg-gray-100"
                      : step1Complete
                        ? "bg-gray-700 dark:bg-gray-300"
                        : "bg-gray-300 dark:bg-gray-700",
                  )}
                >
                  {step2Complete ? (
                    <CheckCircle2 className="h-5 w-5 text-white dark:text-gray-900" />
                  ) : (
                    <FileText
                      className={cn(
                        "h-5 w-5",
                        step1Complete ? "text-white dark:text-gray-900" : "text-gray-500 dark:text-gray-500",
                      )}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-semibold">Envio de Documentação</h3>
                  <p className="text-sm text-muted-foreground">
                    Faça upload dos documentos necessários para sua {isGraduacao ? "inscrição" : "matrícula"}
                  </p>
                </div>
              </div>

              {step1Complete && !step2Complete && (
                <div className="space-y-6">
                  <DocumentUpload
                    label="Documento com Foto"
                    description="RG, CPF ou CNH (frente e verso)"
                    onUploadComplete={setDocumentoPessoal}
                    uploadedFile={documentoPessoal}
                  />

                  {isGraduacao && isVestibular && (
                    <DocumentUpload
                      label="Certificado do Ensino Médio"
                      description="Certificado de conclusão do Ensino Médio (frente e verso)"
                      onUploadComplete={setCertificadoEnsinoMedio}
                      uploadedFile={certificadoEnsinoMedio}
                    />
                  )}

                  {isGraduacao ? (
                    <DocumentUpload
                      label="Histórico do Ensino Médio"
                      description="Histórico escolar completo do Ensino Médio (frente e verso)"
                      onUploadComplete={setDocumentoSecundario}
                      uploadedFile={documentoSecundario}
                    />
                  ) : (
                    <DocumentoGraduacaoUpload
                      onDocumentComplete={setDocumentoSecundario}
                      uploadedFile={documentoSecundario}
                    />
                  )}
                </div>
              )}

              {step2Complete && (
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Documentos enviados com sucesso!
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Seus documentos estão em análise. Você receberá uma confirmação em breve.
                  </p>
                </div>
              )}

              {!step1Complete && (
                <div className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-900">
                  <AlertCircle className="h-5 w-5 shrink-0 text-gray-500" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Complete a validação de e-mail para desbloquear esta etapa
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 3: Vestibular Scheduling (Graduação) or Confirmation (Pós) */}
          {isGraduacao ? (
            <Card
              className={cn(
                "mb-6 md:mb-8",
                !step2Complete && "opacity-60",
                step3Complete && "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",
              )}
            >
              <CardContent className="p-4 md:p-6">
                <div className="mb-4 flex items-start gap-3 md:gap-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                      step3Complete
                        ? "bg-gray-900 dark:bg-gray-100"
                        : step2Complete
                          ? "bg-gray-700 dark:bg-gray-300"
                          : "bg-gray-300 dark:bg-gray-700",
                    )}
                  >
                    {step3Complete ? (
                      <CheckCircle2 className="h-5 w-5 text-white dark:text-gray-900" />
                    ) : (
                      <Calendar
                        className={cn(
                          "h-5 w-5",
                          step2Complete ? "text-white dark:text-gray-900" : "text-gray-500 dark:text-gray-500",
                        )}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold">Agendamento do Vestibular</h3>
                    <p className="text-sm text-muted-foreground">
                      Escolha a melhor data e horário para realizar sua prova
                    </p>
                  </div>
                </div>

                {step2Complete && (
                  <VestibularScheduling
                    onSchedulingComplete={setVestibularAgendado}
                    selectedOption={vestibularAgendado}
                  />
                )}

                {!step2Complete && (
                  <div className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-900">
                    <AlertCircle className="h-5 w-5 shrink-0 text-gray-500" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complete o envio de documentos para desbloquear esta etapa
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="mb-6 border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900 md:mb-8">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-100">
                    <CheckCircle2 className="h-5 w-5 text-white dark:text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-semibold">Matrícula Confirmada</h3>
                    <p className="text-sm text-muted-foreground">
                      Sua matrícula foi confirmada com sucesso. Você receberá mais informações sobre o início das aulas
                      em breve.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Final CTA */}
          {!(isGraduacao && isVestibular) && (
            <Card className="mb-6 md:mb-8">
              <CardContent className="p-4 md:p-6">
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-semibold">
                    {isGraduacao ? "Acesso à Prova" : "Acesso à Plataforma"}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {allStepsComplete
                      ? isGraduacao
                        ? "Todas as etapas foram concluídas! Você já pode acessar o link da prova."
                        : "Todas as etapas foram concluídas! Você receberá o acesso à plataforma em breve."
                      : `Complete todas as etapas (${completedSteps}/3) para ${isGraduacao ? "acessar o link da prova" : "finalizar sua matrícula"}.`}
                  </p>
                  {isGraduacao && (
                    <Button asChild={allStepsComplete} size="lg" className="w-full" disabled={!allStepsComplete}>
                      {allStepsComplete ? (
                        <Link href="/prova/vestibular" target="_blank">
                          Acessar link da prova
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      ) : (
                        <>Acessar link da prova</>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Course Summary */}
          <Card className="mb-6 md:mb-8">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 font-semibold">Resumo da sua {isGraduacao ? "inscrição" : "matrícula"}</h3>
              <div className="space-y-3">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-muted-foreground md:text-base">Curso</span>
                  <span className="text-right text-sm font-medium md:text-base">{course.name}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-muted-foreground md:text-base">Modalidade</span>
                  <span className="text-sm font-medium md:text-base">{course.modality}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-muted-foreground md:text-base">Duração</span>
                  <span className="text-sm font-medium md:text-base">{course.duration}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <div className="text-center">
            <p className="mb-4 text-muted-foreground">Precisa de ajuda?</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="outline" asChild>
                <Link href="/falar-com-consultor">Falar com consultor</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/suporte">Central de ajuda</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function PosVendaPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      }
    >
      <PosVendaContent />
    </Suspense>
  )
}
