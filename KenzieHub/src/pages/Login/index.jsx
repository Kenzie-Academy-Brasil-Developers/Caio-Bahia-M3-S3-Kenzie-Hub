import React from "react"
import { FormLogin } from "../../components/Forms/FormLogin"
import { Link, useNavigate } from "react-router-dom"
import { DivCentralLogin, DivLoginContainer, GotoRegisterContainer, LoginContainer } from "./style"
import Logo from "../../assets/Logo.svg"

export const LoginPage = () => {
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
              <Link to={"/register"}>Cadastre-se</Link>
            </GotoRegisterContainer>
          </DivLoginContainer>
        </DivCentralLogin>
      </LoginContainer>
    </>
  )
}
