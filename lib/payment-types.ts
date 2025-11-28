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
