"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, RefreshCw, Smartphone, Loader2 } from "lucide-react"
import { type PaymentMethod, getAvailablePaymentMethods } from "@/lib/payment-types"

interface MetodosPagamentoProps {
  title?: string
  className?: string
}

const iconMap = {
  CreditCard: CreditCard,
  RefreshCw: RefreshCw,
  Smartphone: Smartphone,
}

export function MetodosPagamento({ title = "Métodos de Pagamento Aceitos", className }: MetodosPagamentoProps) {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPaymentMethods = async () => {
      setIsLoading(true)
      const methods = await getAvailablePaymentMethods()
      setPaymentMethods(methods)
      setIsLoading(false)
    }

    loadPaymentMethods()
  }, [])

  if (isLoading) {
    return (
      <Card className={className}>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {paymentMethods.map((method) => {
            const Icon = iconMap[method.icon as keyof typeof iconMap]

            return (
              <div
                key={method.id}
                className="flex items-start gap-3 p-4 border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-full flex-shrink-0">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{method.name}</h4>
                    {method.badge && (
                      <Badge
                        variant={method.badge.variant === "success" ? "default" : "secondary"}
                        className={
                          method.badge.variant === "success"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : ""
                        }
                      >
                        {method.badge.text}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                  {method.installments && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Parcele em até {method.installments.max}x sem juros
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
