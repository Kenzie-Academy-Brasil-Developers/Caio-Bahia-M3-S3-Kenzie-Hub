import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { InputLogin } from "./InputLogin"
import { api } from "../../services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./validator"
import { toast } from "react-toastify"
import { DivContainerFormLogin } from "./style"

export const FormLogin = () => {
  const navigate = useNavigate()

  const toRegister = () => {
    navigate("/register")
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ reesolver: zodResolver(schema) })

  const submitForm = async (data) => {
    try {
      await api.post("/sessions", data).then((response) => {
        console.log(response)
        localStorage.setItem("@KenzieHub:TOKEN", response.data.token)
        toast.success("Usuario foi logado com sucesso!")
        setTimeout(() => {
          navigate("/dashboard")
        }, 1500)
      })
      console.log(data)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

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
