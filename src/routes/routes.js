import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Results } from "../components/Results";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login
  },
  {
    path: '/results',
    Component: Results
  }
])