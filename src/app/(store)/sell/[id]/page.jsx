'use client'

import { useParams } from "next/navigation"

export default function SellDetail() {

  const { id } = useParams()

  return (
    <div>
      <h1>Sell Detail</h1>
      <p>{id}</p>
    </div>
  )
}