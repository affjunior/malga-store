import style from './index.module.css'

const PanelPayment = () => {
  return (
    <div className={style.panel}>
        <p>Método de pagamento: <span>Método de pagamento</span></p>
        <p>Valor total: <span>Valor total</span></p>
        <p>Status: <span>Status</span></p>
        <p>Data de pagamento: <span>Data de pagamento</span></p>
    </div>
  )
}

export default PanelPayment