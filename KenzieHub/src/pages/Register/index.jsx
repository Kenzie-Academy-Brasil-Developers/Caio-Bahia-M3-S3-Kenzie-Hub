import React from "react"
import { useNavigate } from "react-router-dom"

import api from "../../services/api"

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const handleRegister = async (data) => {
    try {
      console.log(data)
      await api.post("/users", data)
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <section>
        <p>Registro</p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <input type="text" />
        </form>
      </section>
    </main>
  )
}
