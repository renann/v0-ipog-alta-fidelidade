export interface PaymentMethod {
  id: string
  name: string
  description: string
  icon: string
  badge?: {
    text: string
    variant: "success" | "info"
  }
  installments?: {
    max: number
  }
}

export interface PlanoFinanceiro {
  parcelas: number
  desconto: number
  taxaJuros: number
}

export interface PaymentCalculation {
  total: number
  discount: number
  remainingInstallments?: {
    quantity: number
    value: number
  }
}

export const PLANOS_FINANCEIROS: PlanoFinanceiro[] = [
  { parcelas: 1, desconto: 10, taxaJuros: 0 }, // À vista - 10% de desconto
  { parcelas: 2, desconto: 5, taxaJuros: 0 }, // 2x - 5% de desconto
  { parcelas: 3, desconto: 0, taxaJuros: 0 }, // 3x - sem juros
  { parcelas: 4, desconto: 0, taxaJuros: 0 }, // 4x - sem juros
  { parcelas: 5, desconto: 0, taxaJuros: 0 }, // 5x - sem juros
  { parcelas: 6, desconto: 0, taxaJuros: 0 }, // 6x - sem juros
  { parcelas: 7, desconto: 0, taxaJuros: 2 }, // 7x - 2% de juros
  { parcelas: 8, desconto: 0, taxaJuros: 3 }, // 8x - 3% de juros
  { parcelas: 9, desconto: 0, taxaJuros: 4 }, // 9x - 4% de juros
  { parcelas: 10, desconto: 0, taxaJuros: 5 }, // 10x - 5% de juros
  { parcelas: 11, desconto: 0, taxaJuros: 6 }, // 11x - 6% de juros
  { parcelas: 12, desconto: 0, taxaJuros: 7 }, // 12x - 7% de juros
]

export const TAXA_INSCRICAO_POR_MODALIDADE: Record<string, number> = {
  ead: 200,
  "ao-vivo": 250,
  presencial: 300,
  hibrido: 275,
  default: 200,
}

export function calculateInstallmentPayment(
  coursePrice: number,
  additionalFees = 0,
  installments = 1,
  discountPercentage = 0,
): PaymentCalculation {
  const plano = getPlanoInfo(installments)

  // Aplica desconto do usuário (ex: aluno IPOG)
  let price = coursePrice - (coursePrice * discountPercentage) / 100

  // Aplica desconto ou juros do plano
  if (plano) {
    if (plano.desconto > 0) {
      price = price - (price * plano.desconto) / 100
    } else if (plano.taxaJuros > 0) {
      price = price + (price * plano.taxaJuros) / 100
    }
  }

  const total = price + additionalFees

  return {
    total,
    discount: coursePrice - price,
  }
}

export function calculateRecurringPayment(
  coursePrice: number,
  additionalFees = 0,
  totalInstallments = 18,
  discountPercentage = 0,
  courseType = "default",
): PaymentCalculation {
  // Desconto de 5% para débito recorrente
  const recurringDiscount = 5
  const price = coursePrice - (coursePrice * (discountPercentage + recurringDiscount)) / 100

  // Taxa de inscrição
  const taxaInscricao = TAXA_INSCRICAO_POR_MODALIDADE[courseType] || TAXA_INSCRICAO_POR_MODALIDADE.default

  // Divide o valor restante nas parcelas (primeira parcela é a taxa de inscrição)
  const remainingInstallments = totalInstallments - 1
  const installmentValue = price / remainingInstallments

  return {
    total: taxaInscricao + price,
    discount: coursePrice - (price + taxaInscricao),
    remainingInstallments: {
      quantity: remainingInstallments,
      value: installmentValue,
    },
  }
}

export function calculateTotal(coursePrice: number, additionalFees = 0, discountPercentage = 0): PaymentCalculation {
  const price = coursePrice - (coursePrice * discountPercentage) / 100
  const total = price + additionalFees

  return {
    total,
    discount: coursePrice - price,
  }
}

export function getPlanoInfo(parcelas: number): PlanoFinanceiro | undefined {
  return PLANOS_FINANCEIROS.find((plano) => plano.parcelas === parcelas)
}

export async function getAvailablePaymentMethods(): Promise<PaymentMethod[]> {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "credit-card",
          name: "Cartão de Crédito",
          description: "Visa, Mastercard, Elo, Amex e mais",
          icon: "CreditCard",
          badge: {
            text: "Recomendado",
            variant: "success",
          },
          installments: {
            max: 12,
          },
        },
        {
          id: "recurring",
          name: "Débito Recorrente",
          description: "Cobrança automática mensal com desconto de 5%",
          icon: "RefreshCw",
          badge: {
            text: "5% OFF",
            variant: "success",
          },
        },
        {
          id: "pix",
          name: "PIX",
          description: "Pagamento instantâneo e seguro",
          icon: "Smartphone",
        },
      ])
    }, 100)
  })
}
