import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Results } from "../components/Results";
import { Register } from "../components/Register";
import { LandingPage } from "../components/LandingPage"; // Importa la landing page

export const router = createBrowserRouter([
  {
    path: '/', // Ruta principal
    Component: LandingPage, // Componente de la landing page
  },
  {
    path: '/login', // Ruta para inicio de sesión
    Component: Login,
  },
  {
    path: '/results', // Ruta para los resultados
    Component: Results,
  },
  {
    path: '/register', // Ruta para el registro
    Component: Register,
  },
]);
