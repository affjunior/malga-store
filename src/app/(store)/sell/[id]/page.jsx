'use client'

import TableCheckout from "@/components/Table/Checkout"
import { useParams } from "next/navigation"
import style from './index.module.css'
import Card from "@/components/Card"
import { useEffect, useState } from "react"
import PanelCustomer from "@/components/Panel/Customer"
import PanelPayment from "@/components/Panel/Payment"
import { formatPrice } from "@/utils"
export default function SellDetail() {

  const { id } = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/orders/${id}`)
      const data = await response.json()
      setData(data)
      console.log(data)
    }
    fetchProducts()
  }, [])

  return (
    <main className={style.main}>
      <h1 className={style.title}>Pedido #123</h1>
      <div className={style.containerGrid}>
        <Card title="Itens no carrinho">
          <TableCheckout
            itens={data.items}
            readOnly={true}
            OnRemoveItem={(id) => handleRemoveItem(id)}
            onChangeQuantity={(id, quantity) =>
              handleQuantityChange(id, quantity)
            }
          />
          {data.items?.length > 0 && (
            <div className={style.totalContainer}>
              <span className={style.totalLabel}>Total:</span>
              <span className={style.totalValue}>
                {formatPrice(data.items?.reduce((acc, item) => acc + item?.price * item?.quantity, 0))}
              </span>
            </div>
          )}
        </Card>
        <div className={style.column}>
          <Card title="Informações do cliente">
            <PanelCustomer data={data.customer} />
          </Card>
          <Card title="Informações de pagamento">
            <PanelPayment data={data.paymentMethod} amount={data?.amount} status={data?.status} />
          </Card>
        </div>
      </div>
    </main>
  )
}