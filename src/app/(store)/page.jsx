'use client'

import Card from '@/components/Card'
import style from './page.module.css'
import TableCheckout from '@/components/Table/Checkout'
import { useEffect, useState } from 'react'
import CustomerForm from '@/components/Form/Customer'
import PaymentForm from '@/components/Form/Payment'
import Button from '@/components/Button'
import { formatPrice } from '@/utils'
import { useRouter } from 'next/navigation'

export default function Checkout() {
  const router = useRouter()
  const numero_pedido = 123

  const [isPaymentFormValid, setPaymentFormValid] = useState(false)
  const [isCustomerFormValid, setCustomerFormValid] = useState(false)
  const [itens, setItems] = useState([])

  const handleRemoveItem = (id) => {
    setItems(itens.filter((item) => item.id !== id))
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) handleRemoveItem(id)

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

  const handleClick = () => {
    router.push(`/success`)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setItems(data)
    }

    fetchProducts()
  }, [])

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
                {formatPrice(itens.reduce((acc, item) => acc + item.price * item.quantity, 0))}
              </span>
            </div>
          )}
        </Card>
        {itens.length > 0 && (
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
        )}
      </div>
    </main>
  )
}
