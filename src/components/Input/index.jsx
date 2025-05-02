'use client'

import { forwardRef } from 'react'
import style from './index.module.css'
import { PatternFormat } from 'react-number-format';

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
      ...rest
    },
    ref
  ) => {
    const inputProps = {
      className: style.input,
      type: type,
      id: id,
      name: name,
      onChange: onChange,
      placeholder: placeholder,
      inputMode: mask ? "numeric" : undefined,
      ...rest
    }

    return (
      <div className={`${style.inputContainer} ${error ? style.error : ''}`}>
        <label className={style.label} htmlFor={id}>
          {title}
        </label>
        {mask ? (
          <PatternFormat
            format={mask}
            allowEmptyFormatting
            mask="_"
            {...inputProps}
            getInputRef={ref}
          />
        ) : (
          <input
            {...inputProps}
            ref={ref}
          />
        )}
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
