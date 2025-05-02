import { formatPrice } from '@/utils'
import style from './index.module.css'

const PanelPayment = ({ data, amount, status }) => {

  
  
  return (
    <div className={style.panel}>
        <p className={style.label}>Método de pagamento: <span className={style.value}>{data?.type}</span></p>
        <p className={style.label}>Valor total: <span className={style.value}>{formatPrice(amount)}</span></p>
        <p className={style.label}>Status: <span className={style.value}>{status}</span></p>
        <p className={style.label}>Primeiro numero do cartão<span className={style.value}>{data?.card?.firstDigits}</span></p>
        <p className={style.label}>Último numero do cartão<span className={style.value}>{data?.card?.lastDigits}</span></p>
        <p className={style.label}>Nome do titular<span className={style.value}>{data?.card?.holderName}</span></p>
        <p className={style.label}>Data de expiração<span className={style.value}>{data?.card?.expirationDate}</span></p>
        <p className={style.label}>Parcelas<span className={style.value}>{data?.card?.installments}</span></p>
    </div>
  )
}

export default PanelPayment