import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("userToken"); 
    localStorage.removeItem("userId"); 
    sessionStorage.clear(); 

  
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Cerrar sesión
    </button>
  );
};
