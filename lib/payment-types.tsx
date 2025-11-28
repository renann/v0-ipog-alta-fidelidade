export type PaymentMethodType = "parcelado" | "recorrente" | "boleto" | "pix"

export interface PaymentMethod {
  id: PaymentMethodType
  name: string
  description: string
  icon: string
  badge?: {
    text: string
    variant: "default" | "success" | "warning"
  }
}

export interface CoursePayment {
  courseValue: number
  enrollmentValue: number
  discount?: {
    type: string
    percentage: number
    amount: number
  }
}

export interface PaymentCalculation {
  courseValue: number
  enrollmentValue: number
  subtotal: number
  discountAmount: number
  total: number
  firstInstallment?: number
  remainingInstallments?: {
    quantity: number
    value: number
  }
}

export interface PlanoFinanceiro {
  parcelas: number
  taxaJuros: number // percentual de juros sobre o valor base
  desconto: number // percentual de desconto (negativo significa desconto)
  label: string
}

export const PLANOS_FINANCEIROS: PlanoFinanceiro[] = [
  { parcelas: 1, taxaJuros: 0, desconto: 10, label: "À vista" },
  { parcelas: 6, taxaJuros: 0, desconto: 5, label: "6x" },
  { parcelas: 12, taxaJuros: 0, desconto: 0, label: "12x" },
  { parcelas: 18, taxaJuros: 5, desconto: 0, label: "18x" },
  { parcelas: 24, taxaJuros: 10, desconto: 0, label: "24x" },
]

// Taxa de inscrição fixa por modalidade (usado apenas no cartão recorrente)
export const TAXA_INSCRICAO_POR_MODALIDADE: Record<string, number> = {
  "Pós-Graduação": 100,
  Extensão: 80,
  Graduação: 80,
  MBA: 120,
  default: 100,
}
// </CHANGE>

// Available payment methods configuration
export const PAYMENT_METHODS: Record<PaymentMethodType, PaymentMethod> = {
  parcelado: {
    id: "parcelado",
    name: "Cartão de crédito",
    description: "Parcele em até 24x",
    icon: "CreditCard",
  },
  recorrente: {
    id: "recorrente",
    name: "Mensalidade recorrente",
    description: "Pagamento mensal automático",
    icon: "RefreshCw",
    badge: {
      text: "Taxa de inscrição na 1ª parcela",
      variant: "default",
    },
  },
  boleto: {
    id: "boleto",
    name: "Boleto bancário",
    description: "Pagamento à vista",
    icon: "FileText",
    badge: {
      text: "5% desconto",
      variant: "success",
    },
  },
  pix: {
    id: "pix",
    name: "Pix",
    description: "Pagamento instantâneo",
    icon: "Smartphone",
    badge: {
      text: "10% desconto",
      variant: "success",
    },
  },
}

/**
 * Calculate total payment with discounts
 * Formula: Total = Course Value - Discounts
 * Não há conceito de matrícula separada - valor do curso é dividido pelas parcelas
 */
export function calculateTotal(
  courseValue: number,
  _enrollmentValue: number, // mantido para compatibilidade mas não usado
  discountPercentage = 0,
): PaymentCalculation {
  const subtotal = courseValue
  const discountAmount = (subtotal * discountPercentage) / 100
  const total = subtotal - discountAmount

  return {
    courseValue,
    enrollmentValue: 0, // não há matrícula separada
    subtotal,
    discountAmount,
    total,
  }
}

/**
 * Calcula pagamento parcelado com planos financeiros
 * Valor do curso é dividido pela quantidade de parcelas
 * Aplica juros ou desconto conforme o plano selecionado
 */
export function calculateInstallmentPayment(
  courseValue: number,
  _enrollmentValue: number, // mantido para compatibilidade mas não usado
  parcelas: number,
  discountPercentage = 0,
): PaymentCalculation {
  // Encontra o plano financeiro
  const plano = PLANOS_FINANCEIROS.find((p) => p.parcelas === parcelas) || PLANOS_FINANCEIROS[2] // default 12x

  // Aplica juros ou desconto do plano
  let valorComPlano = courseValue
  if (plano.desconto > 0) {
    valorComPlano = courseValue * (1 - plano.desconto / 100)
  } else if (plano.taxaJuros > 0) {
    valorComPlano = courseValue * (1 + plano.taxaJuros / 100)
  }

  // Aplica desconto adicional (convênio, cupom, etc.)
  const valorComDesconto = valorComPlano * (1 - discountPercentage / 100)
  const discountAmount = courseValue - valorComDesconto

  // Divide igualmente pelas parcelas
  const valorParcela = valorComDesconto / parcelas

  return {
    courseValue,
    enrollmentValue: 0,
    subtotal: courseValue,
    discountAmount: discountAmount > 0 ? discountAmount : 0,
    total: valorComDesconto,
    firstInstallment: valorParcela,
    remainingInstallments:
      parcelas > 1
        ? {
            quantity: parcelas - 1,
            value: valorParcela,
          }
        : undefined,
  }
}

/**
 * Calcula pagamento recorrente
 * 1ª parcela = taxa de inscrição fixa (varia por modalidade)
 * Demais parcelas = valor do curso dividido igualmente
 */
export function calculateRecurringPayment(
  courseValue: number,
  _enrollmentValue: number, // mantido para compatibilidade
  totalMonths: number,
  discountPercentage = 0,
  modalidade = "default",
): PaymentCalculation {
  // Taxa de inscrição fixa por modalidade
  const taxaInscricao = TAXA_INSCRICAO_POR_MODALIDADE[modalidade] || TAXA_INSCRICAO_POR_MODALIDADE.default

  // Aplica desconto no valor do curso
  const valorComDesconto = courseValue * (1 - discountPercentage / 100)
  const discountAmount = courseValue - valorComDesconto

  // Valor dividido igualmente a partir da 2ª parcela
  const valorMensalidade = valorComDesconto / (totalMonths - 1)

  return {
    courseValue,
    enrollmentValue: taxaInscricao,
    subtotal: courseValue + taxaInscricao,
    discountAmount: discountAmount > 0 ? discountAmount : 0,
    total: valorComDesconto + taxaInscricao,
    firstInstallment: taxaInscricao,
    remainingInstallments: {
      quantity: totalMonths - 1,
      value: valorMensalidade,
    },
  }
}

/**
 * Retorna informações do plano financeiro
 */
export function getPlanoInfo(parcelas: number): PlanoFinanceiro | undefined {
  return PLANOS_FINANCEIROS.find((p) => p.parcelas === parcelas)
}

/**
 * Get available payment methods for a course/modality
 * In production, this would call an API endpoint
 */
export async function getAvailablePaymentMethods(courseId?: string, modality?: string): Promise<PaymentMethod[]> {
  // Mock implementation - in production, call /api/payments/methods
  await new Promise((resolve) => setTimeout(resolve, 300))

  // All methods are available for all courses in this mock
  return Object.values(PAYMENT_METHODS)
}
