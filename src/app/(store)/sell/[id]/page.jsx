'use client'

import CustomerForm from "@/components/Form/Customer"
import PaymentForm from "@/components/Form/Payment"
import TableCheckout from "@/components/Table/Checkout"
import { useParams } from "next/navigation"
import style from './index.module.css'
import Card from "@/components/Card"
import { useState } from "react"
import PanelCustomer from "@/components/Panel/Customer"
import PanelPayment from "@/components/Panel/Payment"
export default function SellDetail() {

  const { id } = useParams()

  const [itens, setItems] = useState([
    {
      id: 1,
      name: 'Premium T-Shirt',
      price: 29.99,
      quantity: 2,
      image: '/placeholder.svg?height=80&width=80&text=T-Shirt'
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 89.99,
      quantity: 1,
      image: '/placeholder.svg?height=80&width=80&text=Headphones'
    },
    {
      id: 3,
      name: 'Smartphone Case',
      price: 19.99,
      quantity: 1,
      image: '/placeholder.svg?height=80&width=80&text=Case'
    }
  ])

  return (
    <main className={style.main}>
      <h1 className={style.title}>Pedido #123</h1>
      <div className={style.containerGrid}>
        <Card title="Itens no carrinho">
          <TableCheckout
            itens={itens}
            readOnly={true}
            OnRemoveItem={(id) => handleRemoveItem(id)}
            onChangeQuantity={(id, quantity) =>
              handleQuantityChange(id, quantity)
            }
          />
          {itens.length > 0 && (
            <div className={style.totalContainer}>
              <span className={style.totalLabel}>Total:</span>
              <span className={style.totalValue}>
                R$
                {itens
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
          )}
        </Card>
        <div className={style.column}>
          <Card title="Informações do cliente">
            <PanelCustomer />
          </Card>
          <Card title="Informações de pagamento">
            <PanelPayment />
          </Card>
        </div>
      </div>
    </main>
  )
}