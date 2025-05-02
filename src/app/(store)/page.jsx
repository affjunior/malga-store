'use client'

import Card from '@/components/Card'
import style from './page.module.css'
import TableCheckout from '@/components/Table/Checkout'
import { useState } from 'react'
import CustomerForm from '@/components/Form/Customer'
import PaymentForm from '@/components/Form/Payment'
import Button from '@/components/Button'

export default function Checkout() {
  const numero_pedido = 123456789

  const [isPaymentFormValid, setPaymentFormValid] = useState(false)
  const [isCustomerFormValid, setCustomerFormValid] = useState(false)

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

  const handleRemoveItem = (id) => {
    setItems(itens.filter((item) => item.id !== id))
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return

    setItems(
      itens.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const handleValidationChange = ({ isValid }) => {
    setCustomerFormValid(isValid)
  }

  const handlePaymentValidationChange = ({ isValid }) => {
    setPaymentFormValid(isValid)
  }

  const handleClick = () => { }

  return (
    <main className={style.main}>
      <h1 className={style.title}>Pedido #{numero_pedido}</h1>
      <div className={style.containerGrid}>
        <Card title="Itens no carrinho">
          <TableCheckout
            itens={itens}
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
            <CustomerForm onValidationChange={handleValidationChange} />
          </Card>
          <Card title="Forma de pagamento">
            <PaymentForm onValidationChange={handlePaymentValidationChange} />
            <div className={style.buttonContainer}>
              <Button
                type="submit"
                onClick={() => handleClick()}
                disabled={!isPaymentFormValid || !isCustomerFormValid}
              >
                Comprar agora
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
