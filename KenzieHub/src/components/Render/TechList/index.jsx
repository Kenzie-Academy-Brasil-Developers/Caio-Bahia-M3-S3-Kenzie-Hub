import React, { useContext } from "react"
import { TechContext } from "../../../providers/techContext"

export const TechList = () => {
  const { techList } = useContext(TechContext)
  return (
    <ul>
      <h2>Uma lista aqui</h2>
      {techList.map((tech) => (
        <li id={tech.user.id}>
          <h3>{tech.title}</h3>
        </li>
      ))}
    </ul>
  )
}
