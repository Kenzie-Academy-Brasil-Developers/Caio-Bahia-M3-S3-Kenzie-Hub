import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./validator"
import { FormRegStyled } from "./style"
import { InputForm } from "./RegFormInput"
import { FormOptions } from "./RegFormOptions"
import { UserContext } from "../../../providers/userContext"
import { useContext } from "react"

export const FormRegister = () => {
  const { handleRegister } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) })

  return (
    <>
      <FormRegStyled onSubmit={handleSubmit(handleRegister)}>
        <InputForm
          id="name"
          placeholder="Digite aqui seu nome"
          label="Nome"
          type="text"
          error={errors.name?.message}
          {...register("name")}
        />
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
      </FormRegStyled>
    </>
  )
}
