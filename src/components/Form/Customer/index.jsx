import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from "@/components/Input"
import { customerSchema } from '@/schema/customerSchema'
import style from './index.module.css'
import { useEffect } from 'react'

const CustomerForm = ({ onValidationChange }) => {

  const {
    register,
    formState: { errors, isValid, isDirty },
    watch
  } = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    },
    mode: 'onChange'
  })

  const phoneRegister = register('phone')
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
        label="Nome"
        type="text"
        name="name"
        id="name"
        title="Nome"
        placeholder="Digite seu nome"
        error={errors.name?.message}
        helpText={errors.name?.message}
        {...register('name')}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        id="email"
        title="Email"
        placeholder="Digite seu email"
        error={errors.email?.message}
        helpText={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Telefone"
        type="text"
        name="phone"
        id="phone"
        title="Telefone"
        placeholder="(xx) xxxxx-xxxx"
        mask="(__) _____-____"
        replacement={{ _: /\d/ }}
        error={errors.phone?.message}
        helpText={errors.phone?.message}
        ref={phoneRegister.ref}
        onChange={phoneRegister.onChange}
        onBlur={phoneRegister.onBlur}
      />
    </form>
  )
}

export default CustomerForm
