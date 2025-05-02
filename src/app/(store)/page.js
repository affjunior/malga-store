'use client'

import Card from '@/components/Card'
import style from './page.module.css'
import TableCheckout from '@/components/Table'
import { useState } from 'react'
import CustomerForm from '@/components/Form/Customer'

export default function Checkout() {
  const numero_pedido = 123456789

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
    console.log('Form is valid:', isValid)
  }

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
        </Card>
        <Card title="Informações do cliente">
          <CustomerForm onValidationChange={handleValidationChange} />
        </Card>
        <Card title="Forma de pagamento"></Card>
      </div>
    </main>
  )
}
