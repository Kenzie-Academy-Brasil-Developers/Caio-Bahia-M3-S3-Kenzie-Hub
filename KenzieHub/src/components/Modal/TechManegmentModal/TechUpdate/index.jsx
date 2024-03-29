import React, { useContext } from "react"
import Modal from "react-modal"
import { SelectTechLevel } from "../../TechFragmentsForModal/TechsSelect"
import { ModalContext } from "../../../../providers/modalContext"
import { UpdateSchema } from "../TechCreate/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TechContext } from "../../../../providers/techContext"
import { ModalBaseStyle, ModalStyled } from "../style"
import { ContainerModal } from "./style"

export const TechUpdateModal = () => {
  const { techUpdate, closeModalTechUpdate, techClick, setTechUpdate, cantChangeTitle } =
    useContext(ModalContext)
  const { updateTech, deleteTech } = useContext(TechContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(UpdateSchema)
  })

  return (
    <Modal
      isOpen={techUpdate}
      onRequestClose={closeModalTechUpdate}
      ariaHideApp={false}
      style={ModalBaseStyle}
    >
      <ContainerModal>
        <header>
          <h2>Tecnologia Detalhes</h2>
          <button onClick={closeModalTechUpdate}>X</button>
        </header>
        <form onSubmit={handleSubmit(updateTech)}>
          <div className="Title-container">
            <p>Nome da Tecnologia</p>
            <div onClick={cantChangeTitle}>
              <p>{techClick.title}</p>
            </div>
          </div>
          <SelectTechLevel
            id="status"
            label="Selecionar Status"
            error={errors.status?.message}
            {...register("status")}
          />
          <div className="button-container">
            <button className="save-btn" type="submit">
              Salvar alterações
            </button>
            <button onClick={() => deleteTech(techClick)} type="button" className="exclude-btn">
              Excluir
            </button>
          </div>
        </form>
      </ContainerModal>
    </Modal>
  )
}
