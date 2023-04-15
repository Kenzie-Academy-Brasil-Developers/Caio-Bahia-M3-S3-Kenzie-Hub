import React, { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState("")

  useEffect(() => {
    const auth = async () => {
      const getToken = localStorage.getItem("@KenzieHub:TOKEN")

      try {
        await api
          .get("/profile", {
            headers: {
              Authorization: `Bearer ${getToken}`
            }
          })
          .then((response) => {
            // console.log(response)
            setUser(response.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    auth()
  }, [])

  const logout = () => {
    localStorage.removeItem("@KenzieHub:TOKEN")
    navigate("/")
    // toast
  }
  return (
    <>
      <header>
        <img src="" alt="LOGO" />
        <button onClick={() => logout()}>Sair</button>
      </header>
      <div>
        <p>{user.name}</p>
        <p>{user.course_module}</p>
      </div>
      <div>
        <h2>{"Que pena! Estamos em desenvolvimento :("}</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
    </>
  )
}
