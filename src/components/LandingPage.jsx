import { useNavigate } from "react-router-dom";


export const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login"); // Redirige a la página de inicio de sesión
  };

  return (
    <main className="landing-page">
      <div className="landing-content">
      <h1>Bienvenido a Mi Blog</h1>
        <p>
          Explora destinos increíbles, comparte experiencias y encuentra los mejores lugares para visitar.
        </p>
        <button onClick={handleNavigate} className="btn-primary">
          Iniciar sesión para comenzar!
        </button>
        <img src="/src/piramide.jpg"/>
      </div>
    </main>
  );
};
