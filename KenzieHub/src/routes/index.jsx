import React from "react"
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"
import { HomePage } from "../pages/Home"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
}
