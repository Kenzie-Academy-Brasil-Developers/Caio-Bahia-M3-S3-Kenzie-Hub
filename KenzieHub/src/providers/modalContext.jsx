import { createContext, useState } from "react"
import { toast } from "react-toastify"

export const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
  const [techCreate, setTechCreate] = useState(false)
  const [techUpdate, setTechUpdate] = useState(false)
  const [techClick, setTechClick] = useState({})

  const openModalTechCreate = () => {
    setTechCreate(true)
  }
  const closeModalTechCreate = () => {
    setTechCreate(false)
  }

  const openModalTechUpdate = () => {
    setTechUpdate(true)
    console.log("Abriu")
  }
  const closeModalTechUpdate = () => {
    setTechUpdate(false)
  }

  const cantChangeTitle = () => {
    toast.error("Não é possivel modificar o titulo da tecnologia!")
  }

  return (
    <ModalContext.Provider
      value={{
        techCreate,
        openModalTechCreate,
        closeModalTechCreate,
        techUpdate,
        openModalTechUpdate,
        closeModalTechUpdate,
        techClick,
        setTechClick,
        setTechUpdate,
        cantChangeTitle
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
