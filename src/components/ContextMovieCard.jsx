// Importa los hooks useEffect y useState de React para manejar efectos secundarios y estado local
import { useEffect, useState } from "react";
// Importa la función get desde el archivo httpClient para obtener datos de películas
import { get } from "../data/httpClient";
// Importa el componente MovieCard desde el archivo MovieCard.js para mostrar cada película
import { MovieCard } from "../components/MovieCard";
// Importa los estilos CSS para el componente ContextMovieCard
import "../components/ContextMovieCard.css";

// Define el componente funcional ContextMovieCard
export function ContextMovieCard() {
  // Define el estado local para almacenar la lista de películas
  const [movies, setMovies] = useState([]);

  // Define un efecto secundario que se ejecuta cuando el componente se monta
  useEffect(() => {
    // Realiza una solicitud para obtener datos de películas al montar el componente
    get("/movie"/*"popular" , "es-MX", "MX"*/) // Ejemplo de parámetros de búsqueda: películas populares en inglés en EE. UU.
      .then((data) => {
        // Actualiza el estado local con la lista de películas obtenida de la solicitud
        setMovies(data.results);
        console.log(data);
      })
      .catch((error) => {
        // Maneja cualquier error ocurrido durante la obtención de datos de películas
        console.error("Error al buscar películas:", error);
      });
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  // Renderiza el componente ContextMovieCard
  return (
    <ul className="container">
      {/* Mapea cada película en la lista de películas y renderiza un componente MovieCard para cada una */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} /> // Añade un atributo key para cada elemento de la lista
      ))}
    </ul>
  );
}
