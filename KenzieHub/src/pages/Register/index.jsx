import { useNavigate } from "react-router-dom"
import { FormRegister } from "../../components/FormRegister"
import { MainStyled } from "./style"

export const RegisterPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <MainStyled>
        <header>
          <img src="" alt="Logo" />
          <button onClick={() => navigate("/")}>Voltar</button>
        </header>
        <section>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa!</p>
          <FormRegister />
        </section>
      </MainStyled>
    </>
  )
}
