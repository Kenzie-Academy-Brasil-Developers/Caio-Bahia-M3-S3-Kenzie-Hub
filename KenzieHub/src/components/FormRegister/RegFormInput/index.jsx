import React, { forwardRef } from "react"

export const InputForm = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <>
      <div>{label ? <label htmlFor={id}>{label}</label> : null}</div>
      <input id={id} ref={ref} {...rest} />
      {error ? <p className="register-error">{error}</p> : null}
    </>
  )
})
