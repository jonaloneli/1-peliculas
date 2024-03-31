import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    get("/movie"/*"popular" , "es-MX", "MX"*/) // Ejemplo de parámetros de búsqueda: películas populares en inglés en EE. UU.
      .then((data) => {
        SetMovies(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al buscar películas:", error);
      });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} /> // Añade un atributo key para cada elemento de la lista
      ))}
    </ul>
  );
}
