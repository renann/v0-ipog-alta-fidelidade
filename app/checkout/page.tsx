"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Home, Copy, Loader2, Check, X, Info, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  type DiscountType,
  type AgreementCode,
  type AlumniDiscount,
  validateAgreementCode,
  calculateDiscount,
  validateCPF,
  maskCPF,
  mockValidateAlumni,
  DISCOUNT_CONFIG,
} from "@/lib/discount-types"
import { calculateInstallmentPayment, calculateRecurringPayment, calculateTotal } from "@/lib/payment-types"
import { TurmaSelector } from "@/components/turma-selector"
import { CicloSelector } from "@/components/ciclo-selector"
import { CursosAlternativos } from "@/components/pos-graduacao/cursos-alternativos"
import { CursoRestritoBadge } from "@/components/curso-restrito-badge"
import { getCourse } from "@/lib/mock-courses"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get("course") || "psicologia-ead"
  const course = getCourse(courseId)

  // Form state
  const [selectedTurma, setSelectedTurma] = useState("")
  const [selectedCiclo, setSelectedCiclo] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [parcelas, setParcelas] = useState("1")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [lgpdAccepted, setLgpdAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pixKeyCopied, setPixKeyCopied] = useState(false)

  const [cpf, setCpf] = useState("")
  const [cpfError, setCpfError] = useState("")
  const [isValidatingAlumni, setIsValidatingAlumni] = useState(false)
  const [alumniDiscount, setAlumniDiscount] = useState<AlumniDiscount | null>(null)

  const [agreementCode, setAgreementCode] = useState("")
  const [validatedAgreement, setValidatedAgreement] = useState<AgreementCode | null>(null)
  const [isValidatingCode, setIsValidatingCode] = useState(false)
  const [codeError, setCodeError] = useState("")

  // PIX timer (30 minutes = 1800 seconds)
  const [pixTimer, setPixTimer] = useState(1800)

  // All useEffect hooks must be called before any conditional returns
  useEffect(() => {
    if (paymentMethod === "pix" && pixTimer > 0) {
      const interval = setInterval(() => {
        setPixTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [paymentMethod, pixTimer])

  useEffect(() => {
    const cleanCPF = cpf.replace(/\D/g, "")

    if (cleanCPF.length === 11) {
      if (!validateCPF(cpf)) {
        setCpfError("CPF inválido")
        setAlumniDiscount(null)
        return
      }

      const checkAlumni = async () => {
        setIsValidatingAlumni(true)
        setCpfError("")

        try {
          const alumniData = await mockValidateAlumni(cpf)

          if (alumniData) {
            setAlumniDiscount(alumniData)
            setCpfError("")
          } else {
            setAlumniDiscount(null)
          }
        } catch (error) {
          setAlumniDiscount(null)
        } finally {
          setIsValidatingAlumni(false)
        }
      }

      checkAlumni()
    } else if (cleanCPF.length > 0) {
      setCpfError("")
      setAlumniDiscount(null)
    }
  }, [cpf])

  useEffect(() => {
    if (paymentMethod === "parcelado" || paymentMethod === "recorrente") {
      setValidatedAgreement(null)
      setAgreementCode("")
      setCodeError("")
    }
  }, [paymentMethod])

  if (!course) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Curso não encontrado</h2>
            <p className="text-muted-foreground mb-6">
              O curso solicitado não existe. Por favor, selecione um curso válido.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Cursos disponíveis para teste:</h3>
                <div className="grid gap-2 text-sm">
                  <div>
                    <p className="font-medium">Graduação:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>
                        <a href="/checkout?course=psicologia-ead" className="underline">
                          Psicologia EAD
                        </a>
                      </li>
                      <li>
                        <a href="/checkout?course=administracao" className="underline">
                          Administração
                        </a>
                      </li>
                      <li>
                        <a href="/checkout?course=direito" className="underline">
                          Direito
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Pós-Graduação:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>
                        <a href="/checkout?course=mba-gestao" className="underline">
                          MBA Gestão
                        </a>
                      </li>
                      <li>
                        <a href="/checkout?course=mba-marketing" className="underline">
                          MBA Marketing
                        </a>
                      </li>
                      <li>
                        <a href="/checkout?course=especializacao-psicologia" className="underline">
                          Especialização Psicologia (Restrito)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Extensão:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>
                        <a href="/checkout?course=lideranca" className="underline">
                          Liderança
                        </a>
                      </li>
                      <li>
                        <a href="/checkout?course=excel-avancado" className="underline">
                          Excel Avançado
                        </a>
                      </li>
                      <li>
                        <a href="/checkout?course=comunicacao" className="underline">
                          Comunicação
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const isPosGraduacao = course.type === "Pós-Graduação"
  const isGraduacao = course.type === "Graduação"
  const isRestricted = course.restricted && course.requiredDegree

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const copyPixKey = () => {
    navigator.clipboard.writeText(
      "00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890520400005303986540512582.005802BR5913IPOG EDUCACAO6008BRASILIA62070503***6304ABCD",
    )
    setPixKeyCopied(true)
    setTimeout(() => setPixKeyCopied(false), 2000)
  }

  const handleValidateAgreement = () => {
    if (!agreementCode.trim()) {
      setCodeError("Por favor, insira um código de convênio")
      return
    }

    setIsValidatingCode(true)
    setCodeError("")

    setTimeout(() => {
      const validated = validateAgreementCode(agreementCode)

      if (validated) {
        setValidatedAgreement(validated)
        setCodeError("")
      } else {
        setValidatedAgreement(null)
        setCodeError("Código de convênio inválido")
      }

      setIsValidatingCode(false)
    }, 500)
  }

  const handleRemoveAgreement = () => {
    setValidatedAgreement(null)
    setAgreementCode("")
    setCodeError("")
  }

  const getDiscountInfo = () => {
    let discountType: DiscountType = null

    if (alumniDiscount) {
      discountType = "alumni"
    } else if (validatedAgreement) {
      discountType = "agreement"
    } else if (paymentMethod === "pix") {
      discountType = "pix"
    } else if (paymentMethod === "boleto") {
      discountType = "cash"
    }

    if (discountType) {
      const customDiscount = alumniDiscount?.discount || validatedAgreement?.discount
      const totalValue = course.price + course.enrollmentValue
      return calculateDiscount(totalValue, discountType, customDiscount)
    }

    return null
  }

  const getPaymentCalculation = () => {
    const discountInfo = getDiscountInfo()
    const discountPercentage = discountInfo?.discountPercentage || 0

    if (paymentMethod === "parcelado") {
      const numParcelas = Number.parseInt(parcelas)
      return calculateInstallmentPayment(course.price, course.enrollmentValue, numParcelas, discountPercentage)
    }

    if (paymentMethod === "recorrente") {
      return calculateRecurringPayment(course.monthlyPrice, course.enrollmentValue, 18, discountPercentage)
    }

    return calculateTotal(course.price, course.enrollmentValue, discountPercentage)
  }

  const getPaymentLabel = () => {
    const calculation = getPaymentCalculation()

    if (paymentMethod === "parcelado") {
      const numParcelas = Number.parseInt(parcelas)
      if (calculation.firstInstallment && calculation.remainingInstallments) {
        return `1ª parcela: R$ ${calculation.firstInstallment.toFixed(2).replace(".", ",")} + ${calculation.remainingInstallments.quantity}x de R$ ${calculation.remainingInstallments.value.toFixed(2).replace(".", ",")}`
      }
      return `${parcelas}x de R$ ${(calculation.total / numParcelas).toFixed(2).replace(".", ",")}`
    }

    if (paymentMethod === "recorrente") {
      if (calculation.firstInstallment && calculation.remainingInstallments) {
        return `1ª parcela: R$ ${calculation.firstInstallment.toFixed(2).replace(".", ",")} + ${calculation.remainingInstallments.quantity}x de R$ ${calculation.remainingInstallments.value.toFixed(2).replace(".", ",")}`
      }
      return `18x de R$ ${course.monthlyPrice.toFixed(2).replace(".", ",")}`
    }

    if (paymentMethod === "pix" || paymentMethod === "boleto") {
      return `R$ ${calculation.total.toFixed(2).replace(".", ",")} à vista`
    }

    return "Selecione uma forma de pagamento"
  }

  const isFormValid = () => {
    const hasValidSelection = isGraduacao ? selectedCiclo : selectedTurma
    return hasValidSelection && paymentMethod && termsAccepted && lgpdAccepted
  }

  const handleSubmit = async () => {
    if (!isFormValid()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)

    window.location.href = `/pos-venda?course=${courseId}`
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Finalizar matrícula</h1>

      {isPosGraduacao && (
        <div className="mb-6 space-y-4">
          {/* Enrollment Limit Alert */}
          <Alert className="border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
            <Info className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <AlertDescription className="text-sm text-gray-700 dark:text-gray-300">
              As matrículas em cursos de pós-graduação estão disponíveis para alunos até o 4º módulo. Em caso de
              dúvidas, entre em contato com o suporte acadêmico.
            </AlertDescription>
          </Alert>

          {/* Graduation Requirement Alert */}
          <Alert className="border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
            <AlertCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <AlertDescription className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Importante:</strong> A matrícula em cursos de pós-graduação exige comprovante de conclusão de
              graduação. Você terá 60 dias após a matrícula para enviar a documentação.
            </AlertDescription>
          </Alert>

          {/* Restricted Course Alert */}
          {isRestricted && (
            <Alert className="border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
              <AlertCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <AlertDescription className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Curso Restrito:</strong> Este curso é destinado exclusivamente a profissionais graduados em{" "}
                <strong>{course.requiredDegree}</strong>. Ao prosseguir, você declara possuir a formação exigida.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}

      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Left column - Accordions */}
        <div className="space-y-4">
          <Accordion type="single" collapsible defaultValue="curso">
            {/* Curso Section */}
            <AccordionItem value="curso">
              <AccordionTrigger className="text-lg font-semibold">Curso</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <Card className="bg-muted">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-border rounded flex-shrink-0" />
                      <div className="flex-1">
                        <div className="mb-2 flex items-start justify-between gap-2">
                          <h3 className="font-semibold">{course.name}</h3>
                          {isRestricted && <CursoRestritoBadge requiredDegree={course.requiredDegree!} />}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{course.modality}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {course.duration} • {course.type}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {isGraduacao ? (
                  <CicloSelector value={selectedCiclo} onValueChange={setSelectedCiclo} />
                ) : (
                  <TurmaSelector
                    courseId={course.courseId}
                    modality={course.modality}
                    unit={course.unit}
                    value={selectedTurma}
                    onValueChange={setSelectedTurma}
                  />
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Dados do Aluno Section */}
            <AccordionItem value="dados">
              <AccordionTrigger className="text-lg font-semibold">Dados do Aluno</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input id="nome" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input id="telefone" placeholder="(00) 00000-0000" required />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="cpf">CPF *</Label>
                    <div className="relative">
                      <Input
                        id="cpf"
                        placeholder="000.000.000-00"
                        value={cpf}
                        onChange={(e) => setCpf(maskCPF(e.target.value))}
                        required
                        className={cpfError ? "border-destructive" : ""}
                      />
                      {isValidatingAlumni && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    {cpfError && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <X className="h-3 w-3" />
                        {cpfError}
                      </p>
                    )}
                    {alumniDiscount && (
                      <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md">
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex-shrink-0">
                          <Check className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            Desconto Ex-Aluno aplicado com sucesso!
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {alumniDiscount.discount}% de desconto exclusivo
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="cep">CEP *</Label>
                      <Input id="cep" placeholder="00000-000" required />
                    </div>
                    <div className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="endereco">Endereço *</Label>
                      <Input id="endereco" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="numero">Número *</Label>
                      <Input id="numero" required />
                    </div>
                    <div className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="complemento">Complemento</Label>
                      <Input id="complemento" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="bairro">Bairro *</Label>
                      <Input id="bairro" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input id="cidade" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="estado">Estado *</Label>
                      <Select>
                        <SelectTrigger id="estado">
                          <SelectValue placeholder="UF" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AC">AC</SelectItem>
                          <SelectItem value="AL">AL</SelectItem>
                          <SelectItem value="AP">AP</SelectItem>
                          <SelectItem value="AM">AM</SelectItem>
                          <SelectItem value="BA">BA</SelectItem>
                          <SelectItem value="CE">CE</SelectItem>
                          <SelectItem value="DF">DF</SelectItem>
                          <SelectItem value="ES">ES</SelectItem>
                          <SelectItem value="GO">GO</SelectItem>
                          <SelectItem value="MA">MA</SelectItem>
                          <SelectItem value="MT">MT</SelectItem>
                          <SelectItem value="MS">MS</SelectItem>
                          <SelectItem value="MG">MG</SelectItem>
                          <SelectItem value="PA">PA</SelectItem>
                          <SelectItem value="PB">PB</SelectItem>
                          <SelectItem value="PR">PR</SelectItem>
                          <SelectItem value="PE">PE</SelectItem>
                          <SelectItem value="PI">PI</SelectItem>
                          <SelectItem value="RJ">RJ</SelectItem>
                          <SelectItem value="RN">RN</SelectItem>
                          <SelectItem value="RS">RS</SelectItem>
                          <SelectItem value="RO">RO</SelectItem>
                          <SelectItem value="RR">RR</SelectItem>
                          <SelectItem value="SC">SC</SelectItem>
                          <SelectItem value="SP">SP</SelectItem>
                          <SelectItem value="SE">SE</SelectItem>
                          <SelectItem value="TO">TO</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Pagamento Section */}
            <AccordionItem value="pagamento">
              <AccordionTrigger className="text-lg font-semibold">Pagamento</AccordionTrigger>
              <AccordionContent className="space-y-6">
                {!alumniDiscount && (
                  <div className="space-y-3 p-4 bg-muted rounded-lg">
                    <Label htmlFor="agreement-code" className="text-base font-medium">
                      Código de Convênio (opcional)
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Possui um código de convênio ou parceria? Insira abaixo para obter desconto exclusivo.
                    </p>

                    {!validatedAgreement ? (
                      <div className="flex gap-2">
                        <Input
                          id="agreement-code"
                          placeholder="Digite o código"
                          value={agreementCode}
                          onChange={(e) => {
                            setAgreementCode(e.target.value.toUpperCase())
                            setCodeError("")
                          }}
                          disabled={isValidatingCode}
                        />
                        <Button
                          type="button"
                          onClick={handleValidateAgreement}
                          disabled={!agreementCode.trim() || isValidatingCode}
                        >
                          {isValidatingCode ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Validando
                            </>
                          ) : (
                            "Aplicar"
                          )}
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full">
                            <Check className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-gray-100">Convênio aplicado</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{validatedAgreement.name}</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              {validatedAgreement.discount}% de desconto
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={handleRemoveAgreement}
                          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}

                    {codeError && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <X className="h-3 w-3" />
                        {codeError}
                      </p>
                    )}
                  </div>
                )}

                {alumniDiscount && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex-shrink-0">
                        <Check className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Desconto Ex-Aluno Ativo</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Você tem direito a {alumniDiscount.discount}% de desconto como ex-aluno IPOG. Este desconto
                          será aplicado automaticamente no valor final.
                        </p>
                        <Badge className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                          {alumniDiscount.discount}% OFF
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  {/* Cartão Parcelado */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="parcelado" id="parcelado" />
                      <Label htmlFor="parcelado" className="font-medium cursor-pointer">
                        Cartão de crédito parcelado
                      </Label>
                    </div>

                    {paymentMethod === "parcelado" && (
                      <div className="ml-6 space-y-4 border-l-2 border-muted pl-4">
                        <div className="grid gap-2">
                          <Label htmlFor="card-number">Número do cartão</Label>
                          <Input id="card-number" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="card-name">Nome no cartão</Label>
                          <Input id="card-name" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="card-expiry">Validade</Label>
                            <Input id="card-expiry" placeholder="MM/AA" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="card-cvv">CVV</Label>
                            <Input id="card-cvv" placeholder="000" maxLength={3} />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="parcelas">Número de parcelas</Label>
                          <Select value={parcelas} onValueChange={setParcelas}>
                            <SelectTrigger id="parcelas">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => {
                                const calc = calculateInstallmentPayment(course.price, course.enrollmentValue, num)
                                return (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num === 1
                                      ? `À vista: R$ ${calc.total.toFixed(2).replace(".", ",")}`
                                      : `${num}x - 1ª: R$ ${calc.firstInstallment?.toFixed(2).replace(".", ",")} + ${num - 1}x de R$ ${calc.remainingInstallments?.value.toFixed(2).replace(".", ",")}`}
                                  </SelectItem>
                                )
                              })}
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground">
                            A matrícula (R$ {course.enrollmentValue.toFixed(2).replace(".", ",")}) é paga 100% na
                            primeira parcela
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mensalidade Recorrente */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="recorrente" id="recorrente" />
                      <Label htmlFor="recorrente" className="font-medium cursor-pointer">
                        Mensalidade recorrente
                      </Label>
                    </div>

                    {paymentMethod === "recorrente" && (
                      <div className="ml-6 space-y-4 border-l-2 border-muted pl-4">
                        <div className="space-y-2">
                          <p className="text-sm font-medium">
                            1ª parcela: R$ {(course.enrollmentValue + course.monthlyPrice).toFixed(2).replace(".", ",")}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Matrícula (R$ {course.enrollmentValue.toFixed(2).replace(".", ",")}) + 1ª mensalidade (R${" "}
                            {course.monthlyPrice.toFixed(2).replace(".", ",")})
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Demais parcelas: 17x de R$ {course.monthlyPrice.toFixed(2).replace(".", ",")}
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="card-number-rec">Número do cartão</Label>
                          <Input id="card-number-rec" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="card-name-rec">Nome no cartão</Label>
                          <Input id="card-name-rec" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="card-expiry-rec">Validade</Label>
                            <Input id="card-expiry-rec" placeholder="MM/AA" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="card-cvv-rec">CVV</Label>
                            <Input id="card-cvv-rec" placeholder="000" maxLength={3} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* PIX */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pix" id="pix" />
                        <Label htmlFor="pix" className="font-medium cursor-pointer">
                          PIX
                        </Label>
                      </div>
                      {!validatedAgreement && !alumniDiscount && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        >
                          {DISCOUNT_CONFIG.pix.percentage}% de desconto
                        </Badge>
                      )}
                    </div>

                    {paymentMethod === "pix" && (
                      <div className="ml-6 space-y-4 border-l-2 border-muted pl-4">
                        <div className="flex flex-col items-center gap-4 p-4 bg-muted rounded-lg">
                          <div className="w-48 h-48 bg-border rounded flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">QR Code</span>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium mb-1">Tempo restante</p>
                            <p className="text-2xl font-bold">{formatTimer(pixTimer)}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Chave PIX</Label>
                          <div className="flex gap-2">
                            <Input
                              value="00020126580014br.gov.bcb.pix0136a1b2c3d4..."
                              readOnly
                              className="font-mono text-xs"
                            />
                            <Button type="button" variant="outline" size="icon" onClick={copyPixKey}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          {pixKeyCopied && <p className="text-sm text-muted-foreground">Chave copiada!</p>}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Escaneie o QR Code ou copie a chave PIX para realizar o pagamento. O pagamento deve ser
                          confirmado em até 30 minutos.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Boleto */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="boleto" id="boleto" />
                        <Label htmlFor="boleto" className="font-medium cursor-pointer">
                          Boleto bancário
                        </Label>
                      </div>
                      {!validatedAgreement && !alumniDiscount && (
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        >
                          {DISCOUNT_CONFIG.cash.percentage}% de desconto
                        </Badge>
                      )}
                    </div>

                    {paymentMethod === "boleto" && (
                      <div className="ml-6 space-y-2 border-l-2 border-muted pl-4">
                        <p className="text-sm text-muted-foreground">Vencimento em 3 dias úteis</p>
                        <p className="text-sm text-muted-foreground">
                          O boleto será gerado após a confirmação da matrícula. A compensação pode levar até 2 dias
                          úteis.
                        </p>
                      </div>
                    )}
                  </div>
                </RadioGroup>

                {/* Terms and Conditions */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      Li e aceito os{" "}
                      <a href="#" className="underline">
                        Termos de Uso
                      </a>{" "}
                      e a{" "}
                      <a href="#" className="underline">
                        Política de Privacidade
                      </a>{" "}
                      *
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="lgpd"
                      checked={lgpdAccepted}
                      onCheckedChange={(checked) => setLgpdAccepted(checked as boolean)}
                    />
                    <Label htmlFor="lgpd" className="text-sm leading-relaxed cursor-pointer">
                      Autorizo o uso dos meus dados para fins educacionais e comunicação sobre o curso (LGPD) *
                    </Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {isPosGraduacao && (
            <div className="mt-6">
              <CursosAlternativos />
            </div>
          )}
        </div>

        {/* Right column - Summary (Sticky) */}
        <div className="lg:sticky lg:top-4 h-fit">
          <Card>
            <CardHeader>
              <CardTitle>Resumo da matrícula</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="w-full h-32 bg-muted rounded" />
                <div>
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-semibold">{course.name}</h3>
                    {isRestricted && <CursoRestritoBadge requiredDegree={course.requiredDegree!} />}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{course.modality}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {course.duration} • {course.type}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{isGraduacao ? "Ciclo:" : "Turma:"}</span>
                  <span className="font-medium">
                    {isGraduacao
                      ? selectedCiclo || "Não selecionado"
                      : selectedTurma
                        ? selectedTurma.replace("-", " ").toUpperCase()
                        : "Não selecionada"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Forma de pagamento:</span>
                  <span className="font-medium">
                    {paymentMethod ? paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1) : "Não selecionada"}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Valor do curso</span>
                  <span className={getDiscountInfo() ? "line-through text-muted-foreground" : "font-medium"}>
                    R$ {course.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Matrícula</span>
                  <span className="font-medium">R$ {course.enrollmentValue.toFixed(2).replace(".", ",")}</span>
                </div>

                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Subtotal</span>
                  <span className={getDiscountInfo() ? "line-through text-muted-foreground" : ""}>
                    R$ {(course.price + course.enrollmentValue).toFixed(2).replace(".", ",")}
                  </span>
                </div>

                {getDiscountInfo() && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        {alumniDiscount
                          ? `${DISCOUNT_CONFIG.alumni.label} (${getDiscountInfo()!.discountPercentage}%)`
                          : validatedAgreement
                            ? `Desconto convênio (${getDiscountInfo()!.discountPercentage}%)`
                            : paymentMethod === "pix"
                              ? `${DISCOUNT_CONFIG.pix.label} (${DISCOUNT_CONFIG.pix.percentage}%)`
                              : `${DISCOUNT_CONFIG.cash.label} (${DISCOUNT_CONFIG.cash.percentage}%)`}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        - R$ {getDiscountInfo()!.discountAmount.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </>
                )}

                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Você paga</span>
                  <span className={getDiscountInfo() ? "text-gray-900 dark:text-gray-100" : ""}>
                    {getPaymentLabel()}
                  </span>
                </div>

                {(paymentMethod === "parcelado" || paymentMethod === "recorrente") && (
                  <p className="text-xs text-muted-foreground pt-2">* Matrícula paga 100% na primeira parcela</p>
                )}
              </div>

              <Button className="w-full" size="lg" disabled={!isFormValid() || isSubmitting} onClick={handleSubmit}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  "Finalizar matrícula"
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header hideMenu={true} />
      <main className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Checkout</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <CheckoutContent />
      </main>
    </div>
  )
}
