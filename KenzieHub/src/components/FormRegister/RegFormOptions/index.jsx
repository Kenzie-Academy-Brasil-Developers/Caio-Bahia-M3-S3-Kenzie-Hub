import React, { forwardRef } from "react"
import { RegisterSelect, SelectContainer } from "./style"

export const FormOptions = forwardRef(({ id, label, error, ...rest }, ref) => {
  return (
    <SelectContainer>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <RegisterSelect id={id} ref={ref} {...rest}>
        <option value="">Selecione o módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)"> Quarto módulo (Backend Avançado)</option>
      </RegisterSelect>
      {error ? <p className="register-error">{error}</p> : null}
    </SelectContainer>
  )
})
