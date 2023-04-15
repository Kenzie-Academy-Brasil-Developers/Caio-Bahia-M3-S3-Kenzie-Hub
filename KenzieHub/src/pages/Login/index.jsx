import React from "react"
import { FormLogin } from "../../components/FormLogin"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate()

  const goToRegister = () => {
    navigate("/register")
  }

  return (
    <div>
      <FormLogin />
      <button onClick={() => goToRegister()}>Registrar</button>
    </div>
  )
}
