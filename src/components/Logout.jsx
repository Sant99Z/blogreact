// Logout.jsx
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Limpia los datos del usuario
    navigate("/login"); // Redirige a la página de inicio de sesión
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Cerrar sesión
    </button>
  );
};
