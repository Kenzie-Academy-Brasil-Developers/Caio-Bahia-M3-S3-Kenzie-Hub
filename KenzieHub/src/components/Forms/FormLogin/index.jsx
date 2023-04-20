import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { InputLogin } from "./InputLogin"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./validator"
import "react-toastify/dist/ReactToastify.css"
import { DivContainerFormLogin } from "./style"
import { UserContext } from "../../../providers/userContext"

export const FormLogin = () => {
  const { submitForm } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ reesolver: zodResolver(schema) })

  return (
    <DivContainerFormLogin>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputLogin
          id="email"
          type="email"
          placeholder="Insira seu e-mail aqui..."
          label="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputLogin
          id="password"
          type="password"
          placeholder="Insira sua senha..."
          label="Senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <button type="submit">Entrar</button>
      </form>
    </DivContainerFormLogin>
  )
}
