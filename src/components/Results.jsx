import { useEffect, useState } from "react"

export const Results = () => {
  const [locations, setLocations] = useState([])
  const [editId, setEditId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    name: '',
    location: '',
    review: '',
    rating: ''
  })

  useEffect(() => {
    fetch('https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs')
      .then(response => response.json())
      .then(results => setLocations(results))
  }, [])

  // Función para manejar el inicio de edición
  const handleEditClick = (location) => {
    setEditId(location.id)
    setEditFormData({
      name: location.name,
      location: location.location,
      review: location.review,
      rating: location.rating
    })
  }

  // Función para manejar el cambio en los inputs del formulario de edición
  const handleEditFormChange = (event) => {
    const { name, value } = event.target
    setEditFormData({
      ...editFormData,
      [name]: value
    })
  }

  // Función para guardar los cambios (UPDATE)
  const handleSaveClick = async () => {
    try {
      const response = await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editFormData)
      })
      if (!response.ok) {
        throw new Error('Error al actualizar el destino')
      }
      const updatedLocation = await response.json()

      // Actualizar el estado con la nueva información
      setLocations(locations.map(location => location.id === editId ? updatedLocation : location))
      setEditId(null) // Finaliza la edición
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // Función para borrar un destino (DELETE)
  const handleDeleteClick = async (id) => {
    try {
      await fetch(`https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${id}`, {
        method: 'DELETE'
      })
      // Filtrar los destinos y eliminar el que fue borrado
      setLocations(locations.filter(location => location.id !== id))
    } catch (error) {
      console.error('Error al borrar el destino:', error)
    }
  }

  return (
    <main className="login">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ubicacion</th>
            <th>Reseña</th>
            <th>Calificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {locations && locations.map(location => (
            <tr key={location.id}>
              {editId === location.id ? (
                // Si estamos editando, mostramos el formulario de edición
                <>
                  <td><input name="name" value={editFormData.name} onChange={handleEditFormChange} /></td>
                  <td><input name="location" value={editFormData.location} onChange={handleEditFormChange} /></td>
                  <td><input name="review" value={editFormData.review} onChange={handleEditFormChange} /></td>
                  <td><input name="rating" value={editFormData.rating} onChange={handleEditFormChange} /></td>
                  <td>
                    <button onClick={handleSaveClick}>Guardar</button>
                    <button onClick={() => setEditId(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                // Si no estamos editando, mostramos los datos normales
                <>
                  <td>{location.name}</td>
                  <td>{location.location}</td>
                  <td>{location.review}</td>
                  <td>{location.rating}</td>
                  <td>
                    <button onClick={() => handleEditClick(location)}>Editar</button>
                    <button onClick={() => handleDeleteClick(location.id)}>Borrar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
