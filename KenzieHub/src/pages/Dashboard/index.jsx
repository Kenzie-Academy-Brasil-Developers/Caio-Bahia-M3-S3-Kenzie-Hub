import React, { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { DashboardContainer } from "./style"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UserContext } from "../../providers/userContext"
import { TechCreateModal } from "../../components/Modal/TechManegmentModal/TechCreate"
import { ModalContext } from "../../providers/modalContext"
import { TechList } from "../../components/Render/TechList"
import { TechContext } from "../../providers/techContext"
import { TechUpdateModal } from "../../components/Modal/TechManegmentModal/TechUpdate"

export const Dashboard = () => {
  const navigate = useNavigate()

  const { logout, user } = useContext(UserContext)
  const { openModalTechCreate, openModalTechUpdate } = useContext(ModalContext)

  return (
    <DashboardContainer>
      <header>
        <div>
          <img src={Logo} alt="logo" />
          <button onClick={() => logout()}>Sair</button>
        </div>
      </header>
      <div className="dashboard-header">
        <div>
          <h2>Olá,{user.name}!</h2>
          <h3>{user.course_module}</h3>
        </div>
      </div>
      <div className="dashboard-app">
        <div className="tech-container">
          <div className="tech-header">
            <h2>Tecnologias</h2>
            <button onClick={() => openModalTechCreate()}>+</button>
            <TechCreateModal />
            <TechUpdateModal />
          </div>
          <TechList />
        </div>
      </div>
    </DashboardContainer>
  )
}
