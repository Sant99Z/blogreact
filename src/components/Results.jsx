import { useEffect, useState } from "react";
import { CreateDestination } from "./CreateDestination";

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

  const handleCreate = (newDestination) => {
    setLocations((prevLocations) => [...prevLocations, newDestination]);
  };

  return (
    <main className="results">
      <CreateDestination onCreate={handleCreate} />
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
                {/* Aquí agregaremos los botones de borrar y editar */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

const handleDelete = async (id) => {
  await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${id}`, {
    method: "DELETE"
  });
  setLocations((prevLocations) => prevLocations.filter((location) => location.id !== id));
};
<td>
  <button onClick={() => handleDelete(location.id)}>Borrar</button>
</td>

