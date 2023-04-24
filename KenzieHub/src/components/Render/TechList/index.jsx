import React, { useContext } from "react"
import { TechContext } from "../../../providers/techContext"
import { ModalContext } from "../../../providers/modalContext"
import { UlTechContainerStled } from "./style"
import { TechUpdateModal } from "../../Modal/TechManegmentModal/TechUpdate"

export const TechList = () => {
  const { techList } = useContext(TechContext)
  const { openModalTechUpdate, techUpdate, setTechClick } = useContext(ModalContext)

  return (
    <UlTechContainerStled>
      {techList.map((tech) => (
        <li
          id={tech.id}
          onClick={() => {
            openModalTechUpdate()
            setTechClick(tech)
          }}
        >
          <h3>{tech.title}</h3>
          <p>{tech.status}</p>
        </li>
      ))}
    </UlTechContainerStled>
  )
}
