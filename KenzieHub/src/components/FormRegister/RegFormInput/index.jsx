import React, { forwardRef } from "react"

export const InputForm = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input id={id} ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </>
  )
})
