"use client"

import type React from "react"

import { useState, useEffect, useMemo, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { HomeHeader } from "@/components/home-header"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Home, Copy, Loader2, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  type DiscountType,
  type AgreementCode,
  type AlumniDiscount,
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
import { formatCurrency } from "@/lib/utils"

interface CouponCode {
  code: string
  discount: number
  type: "coupon"
}

const validCoupons = [
  { code: "IPOG10", discount: 10 },
  { code: "IPOG20", discount: 20 },
  { code: "IPOG30", discount: 30 },
]

const INSCRICAO_GRADUACAO = 80.0

function CheckoutContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get("course") || "psicologia-ead"
  const course = getCourse(courseId)

  // Form state
  const [selectedTurma, setSelectedTurma] = useState("")
  const [selectedCiclo, setSelectedCiclo] = useState("")
  const [metodoIngresso, setMetodoIngresso] = useState("")
  const [documentoIngressoAceito, setDocumentoIngressoAceito] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [parcelas, setParcelas] = useState("1")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [lgpdAccepted, setLgpdAccepted] = useState(false)
  const [contractAccepted, setContractAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pixKeyCopied, setPixKeyCopied] = useState(false)

  const [cpf, setCpf] = useState("")
  const [cpfError, setCpfError] = useState("")
  const [isValidatingAlumni, setIsValidatingAlumni] = useState(false)
  const [alumniDiscount, setAlumniDiscount] = useState<AlumniDiscount | null>(null)

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")

  const [selectedCompany, setSelectedCompany] = useState("")
  const [validatedAgreement, setValidatedAgreement] = useState<AgreementCode | null>(null)
  const [comprovante, setComprovante] = useState<File | null>(null)

  const [couponCode, setCouponCode] = useState("")
  const [validatedCoupon, setValidatedCoupon] = useState<CouponCode | null>(null)
  const [couponError, setCouponError] = useState("")
  const [isValidatingCoupon, setIsValidatingCoupon] = useState(false)

  // PIX timer (30 minutes = 1800 seconds)
  const [pixTimer, setPixTimer] = useState(1800)

  const [openAccordion, setOpenAccordion] = useState("curso")
  const [hasMovedToDados, setHasMovedToDados] = useState(false)
  const [hasMovedToPagamento, setHasMovedToPagamento] = useState(false)

  const empresasConvenio = [
    { value: "accenture", label: "Accenture", discount: 15 },
    { value: "ambev", label: "Ambev S.A.", discount: 20 },
    { value: "americanas", label: "Americanas S.A.", discount: 12 },
    { value: "banco-do-brasil", label: "Banco do Brasil", discount: 18 },
    { value: "bradesco", label: "Bradesco", discount: 15 },
    { value: "btg-pactual", label: "BTG Pactual", discount: 20 },
    { value: "carrefour", label: "Carrefour Brasil", discount: 10 },
    { value: "cielo", label: "Cielo S.A.", discount: 15 },
    { value: "claro", label: "Claro Brasil", discount: 12 },
    { value: "coca-cola", label: "Coca-Cola FEMSA", discount: 18 },
    { value: "correios", label: "Correios", discount: 20 },
    { value: "cpfl-energia", label: "CPFL Energia", discount: 15 },
    { value: "dell", label: "Dell Technologies", discount: 18 },
    { value: "deloitte", label: "Deloitte", discount: 20 },
    { value: "embraer", label: "Embraer S.A.", discount: 22 },
    { value: "eletrobras", label: "Eletrobras", discount: 18 },
    { value: "ernst-young", label: "Ernst & Young (EY)", discount: 20 },
    { value: "fiat", label: "Fiat Chrysler", discount: 15 },
    { value: "gerdau", label: "Gerdau S.A.", discount: 18 },
    { value: "globo", label: "Grupo Globo", discount: 15 },
    { value: "google", label: "Google Brasil", discount: 25 },
    { value: "hp", label: "HP Brasil", discount: 18 },
    { value: "ibm", label: "IBM Brasil", discount: 20 },
    { value: "ifood", label: "iFood", discount: 12 },
    { value: "intel", label: "Intel Brasil", discount: 18 },
    { value: "itau", label: "Itaú Unibanco", discount: 20 },
    { value: "jbs", label: "JBS S.A.", discount: 15 },
    { value: "kpmg", label: "KPMG", discount: 20 },
    { value: "localiza", label: "Localiza", discount: 12 },
    { value: "lojas-renner", label: "Lojas Renner", discount: 10 },
    { value: "magazine-luiza", label: "Magazine Luiza", discount: 15 },
    { value: "marfrig", label: "Marfrig Global Foods", discount: 12 },
    { value: "mercado-livre", label: "Mercado Livre", discount: 18 },
    { value: "microsoft", label: "Microsoft Brasil", discount: 25 },
    { value: "natura", label: "Natura &Co", discount: 20 },
    { value: "nestle", label: "Nestlé Brasil", discount: 18 },
    { value: "nubank", label: "Nubank", discount: 15 },
    { value: "oi", label: "Oi S.A.", discount: 12 },
    { value: "oracle", label: "Oracle Brasil", discount: 20 },
    { value: "petrobras", label: "Petrobras", discount: 22 },
    { value: "porto-seguro", label: "Porto Seguro", discount: 15 },
    { value: "pwc", label: "PwC Brasil", discount: 20 },
    { value: "raizen", label: "Raízen", discount: 18 },
    { value: "raia-drogasil", label: "Raia Drogasil", discount: 12 },
    { value: "sabesp", label: "Sabesp", discount: 15 },
    { value: "samsung", label: "Samsung Brasil", discount: 18 },
    { value: "santander", label: "Santander Brasil", discount: 20 },
    { value: "sap", label: "SAP Brasil", discount: 18 },
    { value: "siemens", label: "Siemens Brasil", discount: 20 },
    { value: "suzano", label: "Suzano S.A.", discount: 15 },
    { value: "telefonica", label: "Telefônica Brasil (Vivo)", discount: 15 },
    { value: "tim", label: "TIM Brasil", discount: 12 },
    { value: "totvs", label: "TOTVS", discount: 18 },
    { value: "uber", label: "Uber Brasil", discount: 10 },
    { value: "unilever", label: "Unilever Brasil", discount: 18 },
    { value: "vale", label: "Vale S.A.", discount: 22 },
    { value: "volkswagen", label: "Volkswagen Brasil", discount: 18 },
    { value: "walmart", label: "Walmart Brasil", discount: 12 },
    { value: "whirlpool", label: "Whirlpool Brasil", discount: 15 },
    { value: "xp-investimentos", label: "XP Investimentos", discount: 20 },
  ]

  const [empresaSearch, setEmpresaSearch] = useState("")
  const [showEmpresaDropdown, setShowEmpresaDropdown] = useState(false)
  const empresaInputRef = useRef<HTMLInputElement>(null)
  const empresaDropdownRef = useRef<HTMLDivElement>(null)

  // Filtrar empresas baseado na busca
  const filteredEmpresas = useMemo(() => {
    if (!empresaSearch.trim()) return empresasConvenio
    const searchLower = empresaSearch.toLowerCase()
    return empresasConvenio.filter(
      (empresa) =>
        empresa.label.toLowerCase().includes(searchLower) || empresa.value.toLowerCase().includes(searchLower),
    )
  }, [empresaSearch])

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        empresaDropdownRef.current &&
        !empresaDropdownRef.current.contains(event.target as Node) &&
        empresaInputRef.current &&
        !empresaInputRef.current.contains(event.target as Node)
      ) {
        setShowEmpresaDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handler para selecionar empresa do autocomplete
  const handleEmpresaSelect = (empresa: (typeof empresasConvenio)[0]) => {
    setSelectedCompany(empresa.value)
    setEmpresaSearch(empresa.label)
    setShowEmpresaDropdown(false)
    // Aplicar o convênio automaticamente
    setValidatedAgreement({
      name: empresa.label,
      discount: empresa.discount,
    })
  }

  // Handler para limpar empresa selecionada
  const handleClearEmpresa = () => {
    setSelectedCompany("")
    setEmpresaSearch("")
    setValidatedAgreement(null)
    setComprovante(null)
  }

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
      // CHANGE: Resetando selectedCompany e comprovante ao invés de agreementCode
      setSelectedCompany("")
      setComprovante(null)
      // END CHANGE
      setValidatedCoupon(null)
      setCouponCode("")
      setCouponError("")
    }
  }, [paymentMethod])

  useEffect(() => {
    if (hasMovedToPagamento) return // Já foi para pagamento, não forçar novamente

    const camposObrigatoriosPreenchidos =
      nome.trim() !== "" &&
      email.trim() !== "" &&
      telefone.replace(/\D/g, "").length >= 10 &&
      cpf.replace(/\D/g, "").length === 11 &&
      !cpfError &&
      cep.replace(/\D/g, "").length === 8 &&
      endereco.trim() !== "" &&
      numero.trim() !== "" &&
      bairro.trim() !== "" &&
      cidade.trim() !== "" &&
      estado !== ""

    if (camposObrigatoriosPreenchidos && openAccordion === "dados") {
      setOpenAccordion("pagamento")
      setHasMovedToPagamento(true)
    }
  }, [
    nome,
    email,
    telefone,
    cpf,
    cpfError,
    cep,
    endereco,
    numero,
    bairro,
    cidade,
    estado,
    openAccordion,
    hasMovedToPagamento,
  ])

  useEffect(() => {
    if (hasMovedToDados) return // Já foi para dados, não forçar novamente

    const isGraduacao = course.type === "Graduação"
    if (isGraduacao && metodoIngresso && documentoIngressoAceito && openAccordion === "curso") {
      setOpenAccordion("dados")
      setHasMovedToDados(true)
    }
  }, [documentoIngressoAceito, metodoIngresso, course.type, openAccordion, hasMovedToDados])

  useEffect(() => {
    if (hasMovedToDados) return // Já foi para dados, não forçar novamente

    const isGraduacao = course.type === "Graduação"
    if (!isGraduacao && selectedTurma && openAccordion === "curso") {
      setOpenAccordion("dados")
      setHasMovedToDados(true)
    }
  }, [selectedTurma, course.type, openAccordion, hasMovedToDados])

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

  const handleCompanySelect = (companyValue: string) => {
    setSelectedCompany(companyValue)

    if (companyValue) {
      const company = empresasConvenio.find((c) => c.value === companyValue)
      if (company) {
        setValidatedAgreement({
          code: companyValue.toUpperCase(),
          name: company.label,
          discount: company.discount,
          type: "agreement",
        })
        setValidatedCoupon(null)
        setCouponCode("")
        setCouponError("")
      }
    } else {
      setValidatedAgreement(null)
      setComprovante(null)
    }
  }

  const handleRemoveAgreement = () => {
    setValidatedAgreement(null)
    // CHANGE: Resetando selectedCompany e comprovante ao invés de agreementCode
    setSelectedCompany("")
    setComprovante(null)
    // END CHANGE
  }

  // CHANGE: Nova função para lidar com upload de comprovante
  const handleComprovanteUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setComprovante(file)
    }
  }
  // END CHANGE

  const maskTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim()
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim()
  }

  const maskCEP = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    return numbers.replace(/(\d{5})(\d{0,3})/, "$1-$2").trim()
  }

  const handleValidateCoupon = async () => {
    if (!couponCode.trim()) {
      setCouponError("Digite um código de cupom")
      return
    }

    setIsValidatingCoupon(true)
    setCouponError("")

    // Simulando validação assíncrona
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const validCoupon = validCoupons.find((c) => c.code.toUpperCase() === couponCode.toUpperCase())

    if (validCoupon) {
      setValidatedCoupon({
        code: validCoupon.code,
        discount: validCoupon.discount,
        type: "coupon",
      })
      setCouponError("")
      // Removendo convênio se cupom for aplicado
      setValidatedAgreement(null)
      setSelectedCompany("")
      setComprovante(null)
    } else {
      setCouponError("Cupom inválido ou expirado")
      setValidatedCoupon(null)
    }

    setIsValidatingCoupon(false)
  }

  const handleRemoveCoupon = () => {
    setValidatedCoupon(null)
    setCouponCode("")
    setCouponError("")
  }

  const handleTurmaChange = (value: string) => {
    setSelectedTurma(value)
    if (value) {
      setOpenAccordion("dados")
    }
  }

  const getDiscountInfo = () => {
    let discountType: DiscountType = null

    if (alumniDiscount) {
      discountType = "alumni"
    } else if (validatedAgreement) {
      discountType = "agreement"
    } else if (validatedCoupon) {
      discountType = "agreement" // Usando o mesmo tipo para cálculo
    } else if (paymentMethod === "pix") {
      discountType = "pix"
    } else if (paymentMethod === "boleto") {
      discountType = "cash"
    }

    if (discountType) {
      const totalValue = course.price + course.enrollmentValue
      // Ensure customDiscount is only used when it's available from validated sources
      const customDiscount =
        (alumniDiscount?.discount || validatedAgreement?.discount || validatedCoupon?.discount) ?? 0
      return calculateDiscount(totalValue, discountType, customDiscount)
    }

    return null
  }

  const getPaymentCalculation = () => {
    const discountInfo = getDiscountInfo()
    const discountPercentage = discountInfo?.discountPercentage || 0

    if (isGraduacao) {
      return calculateTotal(0, INSCRICAO_GRADUACAO, discountPercentage)
    }

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

    if (isGraduacao) {
      return `R$ ${formatCurrency(calculation.total)} (Inscrição no processo seletivo)`
    }

    if (paymentMethod === "parcelado") {
      const numParcelas = Number.parseInt(parcelas)
      if (calculation.firstInstallment && calculation.remainingInstallments) {
        return `1ª parcela: R$ ${formatCurrency(calculation.firstInstallment)} + ${calculation.remainingInstallments.quantity}x de R$ ${formatCurrency(calculation.remainingInstallments.value)}`
      }
      return `${parcelas}x de R$ ${formatCurrency(calculation.total / numParcelas)}`
    }

    if (paymentMethod === "recorrente") {
      if (calculation.firstInstallment && calculation.remainingInstallments) {
        return `1ª parcela: R$ ${formatCurrency(calculation.firstInstallment)} + ${calculation.remainingInstallments.quantity}x de R$ ${formatCurrency(calculation.remainingInstallments.value)}`
      }
      return `18x de R$ ${formatCurrency(course.monthlyPrice)}`
    }

    if (paymentMethod === "pix" || paymentMethod === "boleto") {
      return `R$ ${formatCurrency(calculation.total)} à vista`
    }

    return "Selecione uma forma de pagamento"
  }

  const isFormValid = () => {
    const hasValidSelection = isGraduacao ? selectedCiclo && metodoIngresso : selectedTurma
    const requiresDocumentCheck = isGraduacao && ["enem", "portador-diploma", "transferencia"].includes(metodoIngresso)
    const hasDocumentAcceptance = !requiresDocumentCheck || documentoIngressoAceito
    const hasComprovante = !selectedCompany || (selectedCompany && comprovante)
    return (
      hasValidSelection &&
      paymentMethod &&
      termsAccepted &&
      lgpdAccepted &&
      contractAccepted &&
      hasComprovante &&
      hasDocumentAcceptance
    )
  }

  const handleSubmit = async () => {
    if (!isFormValid()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)

    const params = new URLSearchParams({ course: courseId })
    if (isGraduacao && metodoIngresso) {
      params.append("metodo", metodoIngresso)
    }
    window.location.href = `/pos-venda?${params.toString()}`
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Finalizar matrícula</h1>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Left column - Accordions */}
        <div className="space-y-4">
          <Accordion type="single" collapsible value={openAccordion} onValueChange={setOpenAccordion}>
            {/* Curso Section */}
            <AccordionItem value="curso">
              <AccordionTrigger className="text-lg font-semibold">Curso</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <Card className="bg-muted">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-border rounded flex-shrink-0" />
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="font-semibold">{course.name}</h3>
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
                  <div className="space-y-6">
                    <CicloSelector value={selectedCiclo} onValueChange={setSelectedCiclo} />

                    <div className="space-y-2">
                      <Label>
                        Método de ingresso <span className="text-destructive">*</span>
                      </Label>
                      <Select value={metodoIngresso} onValueChange={setMetodoIngresso}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o método de ingresso" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vestibular">Vestibular Online</SelectItem>
                          <SelectItem value="enem">Nota do ENEM</SelectItem>
                          <SelectItem value="transferencia">Transferência</SelectItem>
                          <SelectItem value="segunda-graduacao">Segunda Graduação</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-muted-foreground">
                        Selecione como você deseja ingressar no curso de graduação.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label>Selecione a data de início</Label>
                    <TurmaSelector value={selectedTurma} onValueChange={handleTurmaChange} />
                  </div>
                )}

                {isGraduacao && ["enem", "portador-diploma", "transferencia"].includes(metodoIngresso) && (
                  <div className="flex items-start space-x-2 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-md">
                    <Checkbox
                      id="documento-ingresso"
                      checked={documentoIngressoAceito}
                      onCheckedChange={(checked) => setDocumentoIngressoAceito(checked as boolean)}
                    />
                    <Label htmlFor="documento-ingresso" className="text-sm leading-relaxed cursor-pointer">
                      Estou ciente de que é necessário apresentar um documento válido (
                      {metodoIngresso === "enem" && "boletim do ENEM"}
                      {metodoIngresso === "portador-diploma" && "diploma de graduação"}
                      {metodoIngresso === "transferencia" && "histórico escolar e declaração de transferência"}
                      {metodoIngresso === "segunda-graduacao" && "diploma de graduação"}) e que o mesmo passará por
                      aprovação da secretaria acadêmica *
                    </Label>
                  </div>
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
                    <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        value={telefone}
                        onChange={(e) => setTelefone(maskTelefone(e.target.value))}
                        required
                      />
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
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full">
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
                      <Input
                        id="cep"
                        placeholder="00000-000"
                        value={cep}
                        onChange={(e) => setCep(maskCEP(e.target.value))}
                        maxLength={9}
                        required
                      />
                    </div>
                    <div className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="endereco">Endereço *</Label>
                      <Input id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="numero">Número *</Label>
                      <Input id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} required />
                    </div>
                    <div className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="complemento">Complemento</Label>
                      <Input id="complemento" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="bairro">Bairro *</Label>
                      <Input id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="estado">Estado *</Label>
                      <Select value={estado} onValueChange={setEstado}>
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
              <AccordionContent className="space-y-6 px-0">
                {!alumniDiscount && (
                  <>
                    {/* Seção de Convênio */}
                    <div className="space-y-3 p-4 bg-muted rounded-lg mx-0">
                      <Label htmlFor="empresa-search" className="text-base font-medium">
                        Empresa Convênio (opcional)
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Digite o nome da sua empresa conveniada para obter desconto exclusivo.
                      </p>

                      {!validatedAgreement ? (
                        <div className="relative">
                          <Input
                            ref={empresaInputRef}
                            id="empresa-search"
                            type="text"
                            placeholder="Digite o nome da empresa..."
                            value={empresaSearch}
                            onChange={(e) => {
                              setEmpresaSearch(e.target.value)
                              setShowEmpresaDropdown(true)
                            }}
                            onFocus={() => setShowEmpresaDropdown(true)}
                            className="w-full"
                          />
                          {showEmpresaDropdown && (
                            <div
                              ref={empresaDropdownRef}
                              className="absolute z-50 w-full mt-1 max-h-60 overflow-auto bg-background border border-input rounded-md shadow-lg"
                            >
                              {filteredEmpresas.length > 0 ? (
                                filteredEmpresas.map((empresa) => (
                                  <button
                                    key={empresa.value}
                                    type="button"
                                    onClick={() => handleEmpresaSelect(empresa)}
                                    className="w-full px-3 py-2 text-left hover:bg-muted flex items-center justify-between text-sm"
                                  >
                                    <span>{empresa.label}</span>
                                    <span className="text-muted-foreground text-xs">
                                      {empresa.discount}% de desconto
                                    </span>
                                  </button>
                                ))
                              ) : (
                                <div className="px-3 py-2 text-sm text-muted-foreground">
                                  Nenhuma empresa encontrada
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        // </CHANGE>
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
                            onClick={handleClearEmpresa}
                            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}

                      {selectedCompany && (
                        <div className="space-y-3 pt-4 border-t">
                          <Label htmlFor="comprovante" className="text-base font-medium">
                            Comprovação de Convênio *
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Faça upload de um documento que comprove seu vínculo com a empresa conveniada (holerite,
                            crachá, declaração, etc.)
                          </p>
                          <div className="space-y-2">
                            <Input
                              id="comprovante"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={handleComprovanteUpload}
                              className="cursor-pointer"
                            />
                            {comprovante && (
                              <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md">
                                <Check className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{comprovante.name}</span>
                              </div>
                            )}
                            <p className="text-xs text-muted-foreground">Formatos aceitos: PDF, JPG, PNG (máx. 5MB)</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 p-4 bg-muted rounded-lg mx-0">
                      <Label htmlFor="coupon-input" className="text-base font-medium">
                        Cupom de Desconto (opcional)
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Possui um cupom de desconto? Digite o código abaixo.
                      </p>

                      {!validatedCoupon ? (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <Input
                              id="coupon-input"
                              placeholder="Digite o código do cupom"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                              className={couponError ? "border-destructive" : ""}
                            />
                            <Button
                              type="button"
                              onClick={handleValidateCoupon}
                              disabled={isValidatingCoupon || !couponCode.trim()}
                            >
                              {isValidatingCoupon ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                  Validando...
                                </>
                              ) : (
                                "Aplicar"
                              )}
                            </Button>
                          </div>
                          {couponError && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                              <X className="h-3 w-3" />
                              {couponError}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full">
                              <Check className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-gray-100">Cupom aplicado</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{validatedCoupon.code}</p>
                              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {validatedCoupon.discount}% de desconto
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={handleRemoveCoupon}
                            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {alumniDiscount && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg mx-0">
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

                <div className="grid grid-cols-2 gap-3">
                  {/* Cartão Parcelado */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("parcelado")}
                    className={`relative flex flex-col items-start p-4 rounded-lg border-2 transition-all text-left ${
                      paymentMethod === "parcelado"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium text-sm">Cartão de crédito</span>
                    <span className="text-xs text-muted-foreground">Parcelado em até 18x</span>
                  </button>

                  {/* Mensalidade Recorrente */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("recorrente")}
                    className={`relative flex flex-col items-start p-4 rounded-lg border-2 transition-all text-left ${
                      paymentMethod === "recorrente"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium text-sm">Mensalidade</span>
                    <span className="text-xs text-muted-foreground">Recorrente no cartão</span>
                  </button>

                  {/* PIX */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`relative flex flex-col items-start p-4 rounded-lg border-2 transition-all text-left ${
                      paymentMethod === "pix" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium text-sm">PIX</span>
                    <span className="text-xs text-muted-foreground">Pagamento instantâneo</span>
                    {!validatedAgreement && !alumniDiscount && !validatedCoupon && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {DISCOUNT_CONFIG.pix.percentage}% OFF
                      </span>
                    )}
                  </button>

                  {/* Boleto */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("boleto")}
                    className={`relative flex flex-col items-start p-4 rounded-lg border-2 transition-all text-left ${
                      paymentMethod === "boleto"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-medium text-sm">Boleto bancário</span>
                    <span className="text-xs text-muted-foreground">Vencimento em 3 dias</span>
                    {!validatedAgreement && !alumniDiscount && !validatedCoupon && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {DISCOUNT_CONFIG.cash.percentage}% OFF
                      </span>
                    )}
                  </button>
                </div>

                {/* Detalhes do método de pagamento selecionado */}
                {paymentMethod === "parcelado" && (
                  <div className="mt-4 space-y-4 border-l-2 border-muted pl-4">
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
                                  ? `À vista: R$ ${formatCurrency(calc.total)}`
                                  : `${num}x - 1ª: R$ ${formatCurrency(calc.firstInstallment!)} + ${num - 1}x de R$ ${formatCurrency(calc.remainingInstallments!.value)}`}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        A matrícula (R$ {formatCurrency(course.enrollmentValue)}) é paga 100% na primeira parcela
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === "recorrente" && (
                  <div className="mt-4 space-y-4 border-l-2 border-muted pl-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">
                        1ª parcela: R$ {formatCurrency(course.enrollmentValue + course.monthlyPrice)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Matrícula (R$ {formatCurrency(course.enrollmentValue)}) + 1ª mensalidade (R${" "}
                        {formatCurrency(course.monthlyPrice)})
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Demais parcelas: 17x de R$ {formatCurrency(course.monthlyPrice)}
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

                {paymentMethod === "pix" && (
                  <div className="mt-4 space-y-4 border-l-2 border-muted pl-4">
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
                      Escaneie o QR Code ou copie a chave PIX para realizar o pagamento. O pagamento deve ser confirmado
                      em até 30 minutos.
                    </p>
                  </div>
                )}

                {paymentMethod === "boleto" && (
                  <div className="mt-4 space-y-2 border-l-2 border-muted pl-4">
                    <p className="text-sm text-muted-foreground">Vencimento em 3 dias úteis</p>
                    <p className="text-sm text-muted-foreground">
                      O boleto será gerado após a confirmação da matrícula. A compensação pode levar até 2 dias úteis.
                    </p>
                  </div>
                )}
                {/* </CHANGE> */}

                {/* Terms and Conditions */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="terms" className="text-sm leading-normal cursor-pointer text-left flex-1">
                      Li e aceito os{" "}
                      <a href="#" className="underline whitespace-nowrap">
                        Termos de Uso
                      </a>{" "}
                      e a{" "}
                      <a href="#" className="underline whitespace-nowrap">
                        Política de Privacidade
                      </a>{" "}
                      *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="lgpd"
                      checked={lgpdAccepted}
                      onCheckedChange={(checked) => setLgpdAccepted(checked as boolean)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="lgpd" className="text-sm leading-normal cursor-pointer text-left flex-1">
                      Autorizo o uso dos meus dados para fins educacionais e comunicação sobre o curso (LGPD) *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="contract"
                      checked={contractAccepted}
                      onCheckedChange={(checked) => setContractAccepted(checked as boolean)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="contract" className="text-sm leading-normal cursor-pointer text-left flex-1">
                      Li e aceito o{" "}
                      <a href="#" className="underline whitespace-nowrap">
                        Contrato de Prestação de Serviços Educacionais
                      </a>{" "}
                      *
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
                {/* Adicionando exibição do método de ingresso para graduação */}
                {isGraduacao && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Método de ingresso:</span>
                    <span className="font-medium">
                      {metodoIngresso ? metodoIngresso.replace("-", " ") : "Não selecionado"}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Forma de pagamento:</span>
                  <span className="font-medium">
                    {paymentMethod ? paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1) : "Não selecionada"}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                {isGraduacao ? (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Inscrição no processo seletivo</span>
                      <span className={getDiscountInfo() ? "line-through text-muted-foreground" : "font-medium"}>
                        R$ {formatCurrency(INSCRICAO_GRADUACAO)}
                      </span>
                    </div>

                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Subtotal</span>
                      <span className={getDiscountInfo() ? "line-through text-muted-foreground" : ""}>
                        R$ {formatCurrency(INSCRICAO_GRADUACAO)}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Valor do curso</span>
                      <span className={getDiscountInfo() ? "line-through text-muted-foreground" : "font-medium"}>
                        R$ {formatCurrency(course.price)}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Matrícula</span>
                      <span className="font-medium">R$ {formatCurrency(course.enrollmentValue)}</span>
                    </div>

                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Subtotal</span>
                      <span className={getDiscountInfo() ? "line-through text-muted-foreground" : ""}>
                        R$ {formatCurrency(course.price + course.enrollmentValue)}
                      </span>
                    </div>
                  </>
                )}

                {getDiscountInfo() && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        {alumniDiscount
                          ? `${DISCOUNT_CONFIG.alumni.label} (${getDiscountInfo()!.discountPercentage}%)`
                          : validatedAgreement
                            ? `Desconto convênio (${getDiscountInfo()!.discountPercentage}%)`
                            : validatedCoupon
                              ? `Cupom ${validatedCoupon.code} (${getDiscountInfo()!.discountPercentage}%)`
                              : paymentMethod === "pix"
                                ? `${DISCOUNT_CONFIG.pix.label} (${DISCOUNT_CONFIG.pix.percentage}%)`
                                : `${DISCOUNT_CONFIG.cash.label} (${DISCOUNT_CONFIG.cash.percentage}%)`}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        - R$ {formatCurrency(getDiscountInfo()!.discountAmount)}
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

                {!isGraduacao && (paymentMethod === "parcelado" || paymentMethod === "recorrente") && (
                  <p className="text-xs text-muted-foreground pt-2">* Matrícula paga 100% na primeira parcela</p>
                )}
              </div>

              <Button className="w-full" size="lg" disabled={!isFormValid() || isSubmitting} onClick={handleSubmit}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando...
                  </>
                ) : isGraduacao ? (
                  "Finalizar inscrição"
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
      <HomeHeader hideMenu={true} />
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
