/* eslint-disable no-undef */
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request) {
  try {
    const data = await request.json()

    const filePath = path.join(
      process.cwd(),
      'src',
      'app',
      'api',
      'products',
      'buy',
      'data.json'
    )

    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    const orderWithTimestamp = {
      ...data,
      timestamp: new Date().toISOString()
    }

    fileData.orders.push(orderWithTimestamp)

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2))

    return NextResponse.json({ success: true, order: orderWithTimestamp })
  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    )
  }
}
