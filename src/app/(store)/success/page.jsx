import style from './page.module.css'

export default function Success() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Compra realizada com sucesso</h1>
            <p className={style.description}>Obrigado por comprar conosco!</p>
        </div>
    )
}
