import React, { forwardRef } from "react"
import { InputContainer } from "./style"

export const DefautInput = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <div>
      <div className="label-container">{label ? <label htmlFor={id}>{label}</label> : null}</div>
      <input id={id} ref={ref} {...rest} />
      {error ? <p className="register-error">{error}</p> : null}
    </div>
  )
})
