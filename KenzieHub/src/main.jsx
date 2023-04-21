import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { UserProvider } from "./providers/userContext"
import { TechProvider } from "./providers/techContext"
import { ModalProvider } from "./providers/modalContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Providers */}
      <UserProvider>
        <App />
      </UserProvider>
      {/* Providers */}
    </BrowserRouter>
  </React.StrictMode>
)

{
  /* <TechProvider>
  <ModalProvider>
  </ModalProvider>
</TechProvider> */
}
