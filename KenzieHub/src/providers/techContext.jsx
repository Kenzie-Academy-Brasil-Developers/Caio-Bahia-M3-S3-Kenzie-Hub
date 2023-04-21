import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { ModalContext } from "./modalContext"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
  const { closeModalTechCreate } = useContext(ModalContext)

  const [techList, setTechList] = useState([])
  // Tech ADD
  const submitNewTech = async (data) => {
    const getToken = localStorage.getItem("@KenzieHub:TOKEN")
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${getToken}`
        }
      })
      toast.success("Tecnologia foi cadastrada com sucesso!")
      console.log(response.data)
      setTechList([...techList, response.data])
      closeModalTechCreate()
    } catch (error) {
      console.log(error)
      toast.error("Algo deu errado, tente novamente!")
    }

    // Tech update
    // Tech Delete
  }
  return <TechContext.Provider value={{ techList, submitNewTech }}>{children}</TechContext.Provider>
}
