import { createContext, useState } from "react"

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
    console.log("Fechou")
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
        setTechUpdate
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
