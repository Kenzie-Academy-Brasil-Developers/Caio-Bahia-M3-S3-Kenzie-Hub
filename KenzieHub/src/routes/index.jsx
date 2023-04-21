import React from "react"
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { TechProvider } from "../providers/techContext"
import { ModalProvider } from "../providers/modalContext"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <ModalProvider>
            <TechProvider>
              <Dashboard />
            </TechProvider>
          </ModalProvider>
        }
      />
    </Routes>
  )
}
