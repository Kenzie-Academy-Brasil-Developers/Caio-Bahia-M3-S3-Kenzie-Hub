import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { api } from "../../services/api"
import { InputForm } from "../../components/RegFormInput"
import { schema } from "./validator"
import { FormOptions } from "../../components/RegFormOptions"

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) })

  const navigate = useNavigate()

  const handleRegister = async (data) => {
    delete data.repeatpassword

    try {
      console.log(data)
      console.log(api.data)
      await api.post("/users", data)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  // console.log(handleSubmit(handleRegister))
  return (
    <main>
      <section>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <InputForm
            id="name"
            placeholder="Digite aqui seu nome"
            label="Nome"
            type="text"
            error={errors.name?.message}
            {...register("name")}
          />
          {/* {console.log(errors.name)} */}
          <InputForm
            id="email"
            placeholder="Digite aqui seu e-mail"
            label="E-mail"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <InputForm
            id="password"
            placeholder="Digite aqui sua senha"
            label="Senha"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <InputForm
            id="repeatpassword"
            placeholder="Digite novamente sua senha"
            label="Confirmar Senha"
            type="password"
            error={errors.repeatpassword?.message}
            {...register("repeatpassword")}
          />
          <InputForm
            id="bio"
            placeholder="Fale sobre você"
            label="Bio"
            type="text"
            error={errors.bio?.message}
            {...register("bio")}
          />
          <InputForm
            id="contact"
            placeholder="Opção de contato"
            label="Contato"
            type="text"
            error={errors.contact?.message}
            {...register("contact")}
          />
          <FormOptions
            id="course_module"
            label="Selecionar módulo"
            error={errors.course_module?.message}
            {...register("course_module")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </main>
  )
}
