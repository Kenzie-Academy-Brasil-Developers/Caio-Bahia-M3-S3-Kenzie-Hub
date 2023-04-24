import React, { forwardRef } from "react"
import { ContainerSelect } from "./style"

export const SelectTechLevel = forwardRef(({ id, label, error, ...rest }, ref) => {
  return (
    <ContainerSelect>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select id={id} ref={ref} {...rest} placeholder="Status">
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      {error ? <p className="register-error">{error}</p> : null}
    </ContainerSelect>
  )
})
