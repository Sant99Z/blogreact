// Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const newUser = { email, password };
    const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (response) {
      console.log (response)
      navigate('/results'); // Redirige a la página de destinos
    } else {
      setError(true);
    }
  };

  return (
    <main className="register">
      <form onSubmit={handleRegister}>
        <h1>Registrarse</h1>
        {error && <p>Error en el registro. Intenta de nuevo.</p>}
        <fieldset>
          <label>
            <span>Correo</span>
            <input name="email" type="email" placeholder="tucorreo@email.com" required />
          </label>
          <label>
            <span>Contraseña</span>
            <input name="password" type="password" placeholder="*****" required />
          </label>
        </fieldset>
        <button type="submit">Registrarse</button>
      </form>
    </main>
  );
};
