import style from './index.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <a href="/" className={style.logo}>
          Malga Store
        </a>
        <nav className={style.nav}>
          <a href="/" className={style.hyperlink}>
            Carrinho
          </a>
          <a href="/" className={style.hyperlink}>
            Vendas
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
