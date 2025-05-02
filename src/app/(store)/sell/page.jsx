import Card from '@/components/Card'
import style from './page.module.css'
import TableCheckout from '@/components/Table/Checkout'
import TableSell from '@/components/Table/Sell'

export default function Sell() {

  const products = [
    {
      id: "1234",
      numero_pedido: '#123',
      metodo: 'Cartão de credito',
      status: 'pending'
    }
  ]

  return (
    <main className={style.main}>
      <h1 className={style.title}>Transaçoes</h1>
      <div className={style.containerGrid}>
        <Card title="Ultimas vendas">
          <TableSell itens={products} />
        </Card>
      </div>
    </main>
  )
}
