import style from './index.module.css'

const PanelCustomer = ({ data }) => {

  return (
    <div className={style.panel}>
        <p className={style.label}>Nome: <span className={style.value}>{data?.firstName} {data?.lastName}</span></p>
        <p className={style.label}>Tipo de documento: <span className={style.value}>{data?.document?.type}</span></p>
        <p className={style.label}>Documento: <span className={style.value}>{data?.document?.number}</span></p>
        <p className={style.label}>Cidade: <span className={style.value}>{data?.address?.city}</span></p>
        <p className={style.label}>Estado: <span className={style.value}>{data?.address?.state}</span></p>
        <p className={style.label}>Bairro: <span className={style.value}>{data?.address?.neighborhood}</span></p>
        <p className={style.label}>Rua: <span className={style.value}>{data?.address?.street}</span></p>
        <p className={style.label}>Número: <span className={style.value}>{data?.address?.number}</span></p>
        <p className={style.label}>CEP: <span className={style.value}>{data?.address?.zipCode}</span></p>
    </div>
  )
}

export default PanelCustomer