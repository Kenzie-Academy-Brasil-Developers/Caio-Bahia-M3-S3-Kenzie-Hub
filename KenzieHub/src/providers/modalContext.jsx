import { createContext, useState } from "react"

export const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
  const [techCreate, setTechCreate] = useState(false)
  const [techUpdate, setTechUpdate] = useState(false)

  const openModalTechCreate = () => {
    setTechCreate(true)
  }
  const closeModalTechCreate = () => {
    setTechCreate(false)
  }

  const openModalTechUpdate = () => {
    setTechUpdate(true)
  }
  const closeModalTechUpdate = () => {
    setTechUpdate(false)
  }

  return (
    <ModalContext.Provider
      value={{
        techCreate,
        openModalTechCreate,
        closeModalTechCreate,
        techUpdate,
        openModalTechUpdate,
        closeModalTechUpdate
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
