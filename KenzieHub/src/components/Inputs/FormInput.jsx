import React from "react"

export const DefautInput = () => {
  return (
    <>
      <div>{label ? <label htmlFor={id}>{label}</label> : null}</div>
      <input type="text" ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </>
  )
}
