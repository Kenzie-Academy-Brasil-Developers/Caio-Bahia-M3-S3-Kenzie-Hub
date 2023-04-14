import React, { forwardRef } from "react"

export const InputLogin = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input type="text" ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </>
  )
})
