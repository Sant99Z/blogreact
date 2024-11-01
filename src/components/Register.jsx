import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Enviar datos del nuevo usuario a la API
    const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    if (response.ok) {
      navigate('/login'); // Redirige al usuario a la página de inicio de sesión
    } else {
      setError(true);
    }
  };

  return (
    <main className="register">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        {error ? <p>Hubo un problema al registrar el usuario</p> : null}
        <fieldset>
          <label>
            <span>Nombre</span>
            <input name="name" type="text" placeholder="John Doe" required />
          </label>
          <label>
            <span>Correo</span>
            <input name="email" type="email" placeholder="johndoe@email.com" required />
          </label>
          <label>
            <span>Contraseña</span>
            <input name="password" type="password" placeholder="*****" required />
          </label>
        </fieldset>
        <button>Registrarse</button>
      </form>
    </main>
  );
};
