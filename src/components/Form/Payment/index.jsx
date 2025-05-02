import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from "@/components/Input"
import { paymentSchema } from '@/schema/paymentSchema'
import style from './index.module.css'
import { useEffect } from 'react'

const PaymentForm = ({ onValidationChange }) => {
  const {
    register,
    formState: { errors, isValid, isDirty },
    watch
  } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      cardholderName: ''
    },
    mode: 'onChange'
  })

  const cardNumberRegister = register('cardNumber')
  const expirationRegister = register('expirationDate')
  const cvvRegister = register('cvv')
  const formData = watch()

  useEffect(() => {
    onValidationChange?.({
      isValid: isValid && isDirty,
      data: formData
    })
  }, [isValid, isDirty, formData, onValidationChange])

  return (
    <form className={style.form}>
      <Input
        label="Número do Cartão"
        type="text"
        name="cardNumber"
        id="cardNumber"
        title="Número do Cartão"
        placeholder="0000 0000 0000 0000"
        mask="____ ____ ____ ____"
        replacement={{ _: /\d/ }}
        error={errors.cardNumber?.message}
        helpText={errors.cardNumber?.message}
        ref={cardNumberRegister.ref}
        onChange={cardNumberRegister.onChange}
        onBlur={cardNumberRegister.onBlur}
      />

      <div className={style.row}>
        <Input
          label="Data de Expiração"
          type="text"
          name="expirationDate"
          id="expirationDate"
          title="Data de Expiração"
          placeholder="MM/AA"
          mask="__/__"
          replacement={{ _: /\d/ }}
          error={errors.expirationDate?.message}
          helpText={errors.expirationDate?.message}
          ref={expirationRegister.ref}
          onChange={expirationRegister.onChange}
          onBlur={expirationRegister.onBlur}
        />

        <Input
          label="CVV"
          type="text"
          name="cvv"
          id="cvv"
          title="CVV"
          placeholder="000"
          mask="___"
          replacement={{ _: /\d/ }}
          error={errors.cvv?.message}
          helpText={errors.cvv?.message}
          ref={cvvRegister.ref}
          onChange={cvvRegister.onChange}
          onBlur={cvvRegister.onBlur}
        />
      </div>

      <Input
        label="Nome do Titular"
        type="text"
        name="cardholderName"
        id="cardholderName"
        title="Nome do Titular"
        placeholder="Nome como está no cartão"
        error={errors.cardholderName?.message}
        helpText={errors.cardholderName?.message}
        {...register('cardholderName')}
      />
    </form>
  )
}

export default PaymentForm
