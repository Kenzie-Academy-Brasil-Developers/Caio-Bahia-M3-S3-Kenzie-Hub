import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { InputForm } from "./RegFormInput"
import { schema } from "./validator"
import { FormOptions } from "./RegFormOptions"
import { toast } from "react-toastify"

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) })

  const navigate = useNavigate()

  const handleRegister = async (data) => {
    delete data.repeatpassword

    try {
      await api.post("/users", data)
      toast.success("Usuário foi cadastrado com sucesso!")
      setTimeout(() => {
        navigate("/")
      }, 1500)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <>
      <FormRegister onSubmit={handleSubmit(handleRegister)}>
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
      </FormRegister>
    </>
  )
}
