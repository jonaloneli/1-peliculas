// Importa el hook useParams de react-router-dom para acceder a los parámetros de la URL
import { useParams } from "react-router-dom";
// Importa los hooks useEffect y useState de React para manejar efectos secundarios y estado local
import { useEffect, useState } from "react";
// Importa la función getMovieDetails desde el archivo httpClient para obtener detalles de la película
import { getMovieDetails } from "../data/httpClient";
// Importa la función getMovieImg desde el archivo getMovieImg para obtener la URL de la imagen de la película
import { getMovieImg } from "../utils/getMovieImg";
// Importa los estilos CSS para la página de detalles de la película
import "../pages/MovieDetails.css";

// Define el componente funcional MovieDetails
export function MovieDetails() {
  // Obtiene el ID de la película de los parámetros de la URL
  const { movieId } = useParams();
  // Define el estado local para almacenar los detalles de la película y los géneros
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  // Define un efecto secundario que se ejecuta cuando cambia el ID de la película
  useEffect(() => {
    // Define una función asincrónica para obtener los detalles de la película
    const fetchMovieDetails = async () => {
      try {
        // Llama a la función getMovieDetails para obtener los detalles de la película
        const movieData = await getMovieDetails(movieId, "en-US", "US");
        // Actualiza el estado local con los detalles de la película obtenidos
        setMovie(movieData);
        // Si la película tiene géneros, extrae los nombres y actualiza el estado local de géneros
        if (movieData.genres && movieData.genres.length > 0) {
          const genreNames = movieData.genres.map(genre => genre.name);
          setGenres(genreNames);
        } else {
          // Si la película no tiene géneros, muestra un mensaje en la consola y actualiza el estado de géneros a un array vacío
          console.log("No se encontraron géneros para esta película.");
          setGenres([]);
        }
      } catch (error) {
        // Maneja cualquier error ocurrido durante la obtención de detalles de la película
        console.error("Error al buscar detalles de la película:", error);
      }
    };

    // Llama a la función fetchMovieDetails para obtener los detalles de la película
    fetchMovieDetails();
  }, [movieId]); // Se ejecuta el efecto secundario cada vez que cambia el ID de la película

  // Obtiene la URL de la imagen de la película
  const imageUrl = getMovieImg(movie.poster_path, 500);

  // Renderiza la página de detalles de la película
  return (
    <div className="detailsContainer">
      {/* Renderiza la imagen de la película si la URL de la imagen está disponible */}
      {imageUrl && <img src={imageUrl} alt={movie.title} className="col movieImage"/>}
      {/* Renderiza los detalles de la película */}
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Géneros: </strong>
          {/* Renderiza los géneros de la película o un mensaje si no se encontraron géneros */}
          {genres.length > 0 ? genres.join(", ") : "No se encontraron géneros para esta película."}
        </p>
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

