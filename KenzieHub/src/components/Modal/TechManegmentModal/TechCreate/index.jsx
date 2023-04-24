import React, { useContext } from "react"
import Modal from "react-modal"
import { ModalContext } from "../../../../providers/modalContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { DefautInput } from "../../../Inputs"
import { TechContext } from "../../../../providers/techContext"
import { TechCreateschema } from "./validator"
import { SelectTechLevel } from "../../TechFragmentsForModal/TechsSelect"
import { ModalBaseStyle } from "../style"
import { DivModalStyled } from "./style"

export const TechCreateModal = () => {
  const { techCreate, closeModalTechCreate } = useContext(ModalContext)
  const { submitNewTech } = useContext(TechContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(TechCreateschema)
  })

  const submit = (data) => {
    submitNewTech(data)
  }

  return (
    <Modal
      isOpen={techCreate}
      onRequestClose={closeModalTechCreate}
      ariaHideApp={false}
      style={ModalBaseStyle}
    >
      <DivModalStyled>
        <header>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={closeModalTechCreate}>X</button>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <DefautInput
            id="title"
            placeholder="Digite sua tecnologia"
            label="Nome"
            type="text"
            error={errors.title?.message}
            {...register("title")}
          />
          <SelectTechLevel
            id="status"
            label="Selecionar Status"
            error={errors.status?.message}
            {...register("status")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </DivModalStyled>
    </Modal>
  )
}
