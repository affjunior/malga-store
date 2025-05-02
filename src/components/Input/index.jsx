import { forwardRef } from 'react'
import style from './index.module.css'
import { useMask } from '@react-input/mask'

const Input = forwardRef(
  (
    {
      type,
      placeholder,
      onChange,
      title,
      id,
      name,
      helpText,
      error,
      mask,
      replacement,
      ...rest
    },
    ref
  ) => {
    // Only apply mask if mask prop is provided
    if (mask) {
      useMask({
        mask,
        replacement,
        ref: { current: ref?.current }
      })
    }

    return (
      <div className={`${style.inputContainer} ${error ? style.error : ''}`}>
        <label className={style.label} htmlFor={id}>
          {title}
        </label>
        <input
          ref={ref}
          className={style.input}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
        {(error || helpText) && (
          <span className={`${style.helpText} ${error ? style.errorText : ''}`}>
            {error || helpText}
          </span>
        )}
      </div>
    )
  }
)

export default Input
Input.displayName = 'Input'
