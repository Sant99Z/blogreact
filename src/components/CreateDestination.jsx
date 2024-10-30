import { useState } from "react";

export const CreateDestination = ({ onCreate }) => {


  const [destino, setDestino] = useState({
    name: "",
    location: "",
    review: "",
    rating: 0
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newDestination = destino;
    const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDestination)
    });

    if (response.ok) {
      const result = await response.json();
      onCreate(result); // Llama a la función para actualizar la lista de destinos
      setDestino({});
    }
  };



  return (
    <form onSubmit={handleSubmit} className="create-form">
      <h2>Crear Destino</h2>
      <label>Nombre</label>
      <input value={destino.name} onChange={(e) => setDestino(...destino,{name: e.target.value})} required />
      <label>Ubicación</label>
      <input value={destino.location} onChange={(e) => setDestino(...destino,{location: e.target.value})} required />
      <label>Reseña</label>
      <textarea value={destino.review} onChange={(e) => setDestino(...destino,{review: e.target.value})}required />
      <label>Calificación</label>
      <input value={destino.rating} onChange={(e) => setDestino(...destino,{rating: e.target.value})} required />
      <button type="submit">Agregar Destino</button>
    </form>
  );
};
