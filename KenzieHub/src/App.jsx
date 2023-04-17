import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes"
import { Global } from "./style/GlobalSyle"

function App() {
  return (
    <>
      <Global />
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
