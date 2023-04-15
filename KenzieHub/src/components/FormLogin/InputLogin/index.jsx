import React, { forwardRef } from "react"
import { InputContainer } from "./style"

export const InputLogin = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <InputContainer>
      <div>{label ? <label htmlFor={id}>{label}</label> : null}</div>
      <input type="text" ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </InputContainer>
  )
})
