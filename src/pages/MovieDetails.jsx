import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../data/httpClient"; 
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId, "en-US", "US"); // Llama a getMovieDetails con el ID de la película
        setMovie(movieData);
        // console.log(movieData); // Para depuración
        if (movieData.genres && movieData.genres.length > 0) {
          const genreNames = movieData.genres.map(genre => genre.name);
          setGenres(genreNames);
        } else {
          console.log("No se encontraron géneros para esta película.");
          setGenres([]);
        }
      } catch (error) {
        console.error("Error al buscar detalles de la película:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      {imageUrl && <img src={imageUrl} alt={movie.title} className="col movieImage"/>}
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Géneros: </strong>
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

