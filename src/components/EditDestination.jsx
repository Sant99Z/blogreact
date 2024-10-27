import { useState } from "react";

export const EditDestination = ({ destination, onUpdate, onCancel }) => {
  const [name, setName] = useState(destination.name);
  const [location, setLocation] = useState(destination.location);
  const [review, setReview] = useState(destination.review);
  const [rating, setRating] = useState(destination.rating);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedDestination = { name, location, review, rating };
    const response = await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${destination.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedDestination)
    });

    if (response.ok) {
      const result = await response.json();
      onUpdate(result);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h2>Editar Destino</h2>
      <label>Nombre</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Ubicación</label>
      <input value={location} onChange={(e) => setLocation(e.target.value)} required />
      <label>Reseña</label>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
      <label>Calificación</label>
      <input value={rating} onChange={(e) => setRating(e.target.value)} required />
      <button type="submit">Guardar Cambios</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};
