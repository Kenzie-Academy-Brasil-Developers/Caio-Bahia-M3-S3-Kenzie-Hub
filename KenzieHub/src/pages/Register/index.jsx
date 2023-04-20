import { Link, useNavigate } from "react-router-dom"
import { MainStyled } from "./style"
import Logo from "../../assets/Logo.svg"
import { FormRegister } from "../../components/Forms/FormRegister"

export const RegisterPage = () => {
  return (
    <>
      <MainStyled>
        <div className="central-div">
          <header>
            <img src={Logo} alt="Logo" />
            <Link to={"/"}>Voltar</Link>
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
