import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Results } from "../components/Results";
import { Register } from "../components/Register"; // Importa el nuevo componente

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login
  },
  {
    path: '/results',
    Component: Results
  },
  {
    path: '/register', // Nueva ruta de registro
    Component: Register
  }
]);
