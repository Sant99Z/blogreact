import { useEffect, useState } from "react";

export const Results = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchDestinations();
  }, []);


  const fetchDestinations = async () => {
    const response = await fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs');
    const results = await response.json();
    setLocations(results);
  };


  const handleCreate = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const location = event.target.elements.location.value;
    const review = event.target.elements.review.value;
    const rating = event.target.elements.rating.value;

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
      setLocations([...locations, result]);
      event.target.reset();
    }
  };

  const handleDelete = async (id) => {
    await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${id}`, {
      method: "DELETE"
    });
    setLocations((prevLocations) => prevLocations.filter((location) => location.id !== id));
  };

  return (
    <main className="results">
  
      <form onSubmit={handleCreate} className="create-form">
        <h2>Crear Destino</h2>
        <label>Nombre</label>
        <input name="name" placeholder="Nombre del destino" required />
        <label>Ubicación</label>
        <input name="location" placeholder="Ubicación" required />
        <label>Reseña</label>
        <textarea name="review" placeholder="Escribe una reseña" required />
        <label>Calificación</label>
        <input name="rating" placeholder="Calificación" required />
        <button type="submit">Agregar Destino</button>
      </form>

      {/* Tabla de destinos */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Reseña</th>
            <th>Calificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.location}</td>
              <td>{location.review}</td>
              <td>{location.rating}</td>
              <td>
                <button onClick={() => handleDelete(location.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
