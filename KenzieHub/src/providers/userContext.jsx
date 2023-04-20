import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([])

  const navigate = useNavigate()

  // Register

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

  // Login

  const submitForm = async (data) => {
    try {
      const response = await api.post("/sessions", data)
      localStorage.setItem("@KenzieHub:TOKEN", response.data.token)
      toast.success("Usuario foi logado com sucesso!")
      setTimeout(() => {
        navigate("/dashboard")
      }, 1500)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  //Dashboard

  useEffect(() => {
    const auth = async () => {
      const getToken = localStorage.getItem("@KenzieHub:TOKEN")

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${getToken}`
          }
        })
        setUser(response.data)
      } catch (error) {
        toast.error(error)
      }
    }
    auth()
  }, [])

  const logout = () => {
    localStorage.removeItem("@KenzieHub:TOKEN")
    navigate("/")
  }

  return (
    <UserContext.Provider value={{ handleRegister, navigate, submitForm, logout, user }}>
      {children}
    </UserContext.Provider>
  )
}
