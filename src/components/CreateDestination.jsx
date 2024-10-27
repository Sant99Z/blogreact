import { useState } from "react";

export const CreateDestination = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newDestination = { name, location, review, rating };
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
      setName("");
      setLocation("");
      setReview("");
      setRating("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <h2>Crear Destino</h2>
      <label>Nombre</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Ubicación</label>
      <input value={location} onChange={(e) => setLocation(e.target.value)} required />
      <label>Reseña</label>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
      <label>Calificación</label>
      <input value={rating} onChange={(e) => setRating(e.target.value)} required />
      <button type="submit">Agregar Destino</button>
    </form>
  );
};
