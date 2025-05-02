'use client'

import Card from '@/components/Card'
import style from './page.module.css'
import TableSell from '@/components/Table/Sell'
import { useEffect, useState } from 'react'

export default function Sell() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/orders')
      const data = await response.json()
      setData(data)
      console.log(data)
    }
    fetchProducts()
  }, [])

  return (
    <main className={style.main}>
      <h1 className={style.title}>Transaçoes</h1>
      <div className={style.containerGrid}>
        <Card title="Ultimas vendas">
          <TableSell items={data} />
        </Card>
      </div>
    </main>
  )
}
