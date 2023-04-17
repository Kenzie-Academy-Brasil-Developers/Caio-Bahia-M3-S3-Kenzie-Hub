import React, { forwardRef } from "react"
import { InputContainer } from "./style"

export const InputForm = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <InputContainer>
      <div className="label-container">{label ? <label htmlFor={id}>{label}</label> : null}</div>
      <input id={id} ref={ref} {...rest} />
      {error ? <p className="register-error">{error}</p> : null}
    </InputContainer>
  )
})
