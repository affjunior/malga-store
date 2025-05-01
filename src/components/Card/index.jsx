import style from './index.module.css'

const Card = ({ children, title, ...props }) => {
  return (
    <div className={style.card} {...props}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </div>
  )
}

export default Card
