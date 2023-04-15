import { useNavigate } from "react-router-dom"
import { FormRegister } from "../../components/FormRegister"
import { MainStyled } from "./style"
import Logo from "../../assets/Logo.svg"

export const RegisterPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <MainStyled>
        <div className="central-div">
          <header>
            <img src={Logo} alt="Logo" />
            <button onClick={() => navigate("/")}>Voltar</button>
          </header>
          <section className="form-container">
            <div className="small-text-call">
              <h2>Crie sua conta</h2>
              <p>Rapido e grátis, vamos nessa!</p>
            </div>
            <FormRegister />
          </section>
        </div>
      </MainStyled>
    </>
  )
}
