import React, { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { DashboardContainer } from "./style"

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
    <DashboardContainer>
      <header>
        <img src={Logo} alt="logo" />
        <button onClick={() => logout()}>Sair</button>
      </header>
      <div className="dashboard-header">
        <h2>Olá,{user.name}!</h2>
        <h3>{user.course_module}</h3>
      </div>
      <div className="dashboard-app">
        <h2>{"Que pena! Estamos em desenvolvimento :("}</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
    </DashboardContainer>
  )
}
