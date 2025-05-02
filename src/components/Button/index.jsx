import style from './index.module.css'

const Button = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
  tooltipText = 'Preencha os dados para habilitar a compra',
  ...rest
}) => {
  return (
    <div className={style.buttonWrapper}>
      <button
        type={type}
        className={style.button}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
      {disabled && <span className={style.tooltip}>{tooltipText}</span>}
    </div>
  )
}

export default Button
