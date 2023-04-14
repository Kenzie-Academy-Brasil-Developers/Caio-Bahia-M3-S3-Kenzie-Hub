import React from "react"
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
