import React from "react"
import { FormLogin } from "../../components/FormLogin"
import { useNavigate } from "react-router-dom"
import { DivCentralLogin, DivLoginContainer, GotoRegisterContainer, LoginContainer } from "./style"
import Logo from "../../assets/Logo.svg"

export const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <LoginContainer>
        <DivCentralLogin>
          <img src={Logo} alt="Logo" />
          <DivLoginContainer>
            <h2>Login</h2>
            <FormLogin />
            <GotoRegisterContainer>
              <p>Ainda não possui uma conta?</p>
              <button onClick={() => navigate("/register")}>Cadastre-se</button>
            </GotoRegisterContainer>
          </DivLoginContainer>
        </DivCentralLogin>
      </LoginContainer>
    </>
  )
}
