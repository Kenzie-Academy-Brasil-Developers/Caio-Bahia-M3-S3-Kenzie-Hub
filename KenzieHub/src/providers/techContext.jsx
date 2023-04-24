import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { ModalContext } from "./modalContext"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
  const { closeModalTechCreate, techClick, closeModalTechUpdate } = useContext(ModalContext)

  const [techList, setTechList] = useState([])
  const [itemChange, setItemChange] = useState(false)

  useEffect(() => {
    const getToken = localStorage.getItem("@KenzieHub:TOKEN")
    const renderList = async () => {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${getToken}`
          }
        })
        setTechList(response.data.techs)
      } catch (error) {
        toast.error("Erro ao carregar lista de tecnologias!")
        console.log(error)
      }
    }
    if (getToken) {
      renderList()
    }
  }, [itemChange])

  const submitNewTech = async (data) => {
    const getToken = localStorage.getItem("@KenzieHub:TOKEN")
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${getToken}`
        }
      })
      toast.success("Tecnologia foi cadastrada com sucesso!")
      setItemChange(!itemChange)
      closeModalTechCreate()
    } catch (error) {
      console.log(error)
      toast.error("Algo deu errado, tente novamente!")
    }
  }

  const updateTech = async (data) => {
    const getToken = localStorage.getItem("@KenzieHub:TOKEN")
    console.log(data)
    console.log(techClick)

    try {
      const response = await api.put(`/users/techs/${techClick.id}`, data, {
        headers: {
          Authorization: `Bearer ${getToken}`
        }
      })
      setItemChange(!itemChange)
      closeModalTechUpdate()
      toast.success("Tecnologia atualizada com sucesso!")
    } catch (error) {
      console.log(error)
      toast.error("Algo deu errado,tente novamente!")
    }
  }
  const deleteTech = async (data) => {
    const getToken = localStorage.getItem("@KenzieHub:TOKEN")

    try {
      const response = await api.delete(`/users/techs/${data.id}`, {
        headers: {
          Authorization: `Bearer ${getToken}`
        }
      })
      console.log(response)
      setItemChange(!itemChange)
      closeModalTechUpdate()
      toast.success("A tecnologia foi deletada com sucesso!")
    } catch (error) {
      console.log(error)
      toast.error("Algo deu errado,tente novamente!")
    }
  }
  return (
    <TechContext.Provider value={{ techList, deleteTech, submitNewTech, updateTech }}>
      {children}
    </TechContext.Provider>
  )
}
