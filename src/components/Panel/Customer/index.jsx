import style from './index.module.css'

const PanelCustomer = () => {
  return (
    <div className={style.panel}>
        <p className={style.label}>Nome: <span className={style.value}>Nome do cliente</span></p>
        <p className={style.label}>Email: <span className={style.value}>Email do cliente</span></p>
        <p className={style.label}>Telefone: <span className={style.value}>Telefone do cliente</span></p>
        <p className={style.label}>Endereço: <span className={style.value}>Endereço do cliente</span></p>
        <p className={style.label}>Cidade: <span className={style.value}>Cidade do cliente</span></p>
        <p className={style.label}>Estado: <span className={style.value}>Estado do cliente</span></p>
        <p className={style.label}>CEP: <span className={style.value}>CEP do cliente</span></p>
    </div>
  )
}

export default PanelCustomer