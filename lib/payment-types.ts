export type PaymentMethodType = "installment" | "recurring" | "cash_card" | "pix"

export interface PaymentMethod {
  id: PaymentMethodType
  name: string
  description: string
  icon: string
  badge?: {
    text: string
    variant: "default" | "success" | "warning"
  }
  installments?: {
    min: number
    max: number
    hasInterest: boolean
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

// Available payment methods configuration
export const PAYMENT_METHODS: Record<PaymentMethodType, PaymentMethod> = {
  installment: {
    id: "installment",
    name: "Cartão de crédito parcelado",
    description: "Parcele em até 18x",
    icon: "CreditCard",
    installments: {
      min: 1,
      max: 18,
      hasInterest: false,
    },
  },
  recurring: {
    id: "recurring",
    name: "Mensalidade recorrente",
    description: "Pagamento mensal automático",
    icon: "RefreshCw",
    badge: {
      text: "1ª parcela no ato",
      variant: "default",
    },
  },
  cash_card: {
    id: "cash_card",
    name: "Cartão à vista",
    description: "Pagamento único no cartão",
    icon: "CreditCard",
    badge: {
      text: "5% desconto",
      variant: "success",
    },
  },
  pix: {
    id: "pix",
    name: "Pix à vista",
    description: "Pagamento instantâneo",
    icon: "Smartphone",
    badge: {
      text: "10% desconto",
      variant: "success",
    },
  },
}

/**
 * Calculate total payment with enrollment and discounts
 * Formula: Total = Course Value + Enrollment Value - Discounts
 */
export function calculateTotal(
  courseValue: number,
  enrollmentValue: number,
  discountPercentage = 0,
): PaymentCalculation {
  const subtotal = courseValue + enrollmentValue
  const discountAmount = (subtotal * discountPercentage) / 100
  const total = subtotal - discountAmount

  return {
    courseValue,
    enrollmentValue,
    subtotal,
    discountAmount,
    total,
  }
}

/**
 * Calculate installment payment
 * Enrollment is paid 100% in the first installment
 */
export function calculateInstallmentPayment(
  courseValue: number,
  enrollmentValue: number,
  installments: number,
  discountPercentage = 0,
): PaymentCalculation {
  const calculation = calculateTotal(courseValue, enrollmentValue, discountPercentage)

  // First installment includes full enrollment + first course installment
  const courseInstallmentValue = (courseValue * (1 - discountPercentage / 100)) / installments
  const firstInstallment = enrollmentValue + courseInstallmentValue

  return {
    ...calculation,
    firstInstallment,
    remainingInstallments: {
      quantity: installments - 1,
      value: courseInstallmentValue,
    },
  }
}

/**
 * Calculate recurring payment (monthly subscription)
 * Enrollment is paid 100% in the first month
 */
export function calculateRecurringPayment(
  monthlyValue: number,
  enrollmentValue: number,
  totalMonths: number,
  discountPercentage = 0,
): PaymentCalculation {
  const courseValue = monthlyValue * totalMonths
  const calculation = calculateTotal(courseValue, enrollmentValue, discountPercentage)

  // First payment includes enrollment + first monthly payment
  const monthlyPayment = monthlyValue * (1 - discountPercentage / 100)
  const firstInstallment = enrollmentValue + monthlyPayment

  return {
    ...calculation,
    firstInstallment,
    remainingInstallments: {
      quantity: totalMonths - 1,
      value: monthlyPayment,
    },
  }
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
