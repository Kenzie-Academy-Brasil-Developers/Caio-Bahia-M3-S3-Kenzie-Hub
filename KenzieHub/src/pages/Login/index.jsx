import React from "react"
import { FormLogin } from "../../components/FormLogin"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate()

  const goToRegister = () => {
    navigate("/register")
  }

  return (
    <>
      <img src="" alt="Logo" />
      <div>
        <div>
          <h2>Login</h2>
        </div>
        <FormLogin />
        <div>
          <p>Ainda não possui uma conta?</p>
          <button onClick={() => goToRegister()}>Cadastre-se</button>
        </div>
      </div>
    </>
  )
}
