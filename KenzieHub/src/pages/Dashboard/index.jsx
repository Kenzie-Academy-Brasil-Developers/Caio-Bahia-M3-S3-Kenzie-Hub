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
    <div>
      <h1>Home</h1>
      <button onClick={() => logout()}>OOOOOOOOPA</button>
      <p>{user.name}</p>
      <p>{user.course_module}</p>
    </div>
  )
}
