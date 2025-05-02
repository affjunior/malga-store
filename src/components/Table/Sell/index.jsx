'use client'

import PAYMENT_STATUS from '@/app/enum/paymentStatus'
import style from './index.module.css'
import { useRouter } from 'next/navigation'

const TableSell = ({ itens = [1, 2] }) => {

  const router = useRouter()

  const STATUS_CONFIG = {
    [PAYMENT_STATUS.PENDING]: {
      label: 'Pendente',
      className: style.statusPending
    },
    [PAYMENT_STATUS.PROCESSING]: {
      label: 'Processando',
      className: style.statusProcessing
    },
    [PAYMENT_STATUS.PAID]: {
      label: 'Aprovado',
      className: style.statusPaid
    },
    [PAYMENT_STATUS.FAILED]: {
      label: 'Falhou',
      className: style.statusFailed
    },
    [PAYMENT_STATUS.REFUNDED]: {
      label: 'Reembolsado',
      className: style.statusRefunded
    },
    [PAYMENT_STATUS.CANCELLED]: {
      label: 'Cancelado',
      className: style.statusCancelled
    }
  }

  const getStatusDisplay = (status) => {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG[PAYMENT_STATUS.PENDING]
    return (
      <span className={`${style.statusBadge} ${config.className}`}>
        {config.label}
      </span>
    )
  }

  return (
    <div className={style.tableContainer}>
      <table className={style.table} aria-label="tabela de produtos">
        <thead>
          <tr className={style.tableRow}>
            <th className={style.tableHeader}>Identificador</th>
            <th className={style.tableHeader}>Método de Pagamento</th>
            <th className={style.tableHeader}>Status</th>
          </tr>
        </thead>

        <tbody className={style.tbody}>
          {itens.map((item) => (
            <tr className={style.tableRow} key={item.id} onClick={() => {
              router.push(`/sell/${item.id}`)
            }}>
              <td className={style.tableData}>#123</td>
              <td className={style.tableData}>
                Cartáo de Crédito
              </td>
              <td className={style.tableData}>
                {getStatusDisplay(item.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableSell
