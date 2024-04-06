// Importa los estilos CSS del componente MovieCard.module.css como un objeto styles
import styles from "../components/MovieCard.module.css";
// Importa el componente Link de react-router-dom para manejar la navegación entre páginas
import { Link } from "react-router-dom";

// Define el componente funcional MovieCard que toma un objeto movie como argumento
export function MovieCard({ movie }) {
    // Construye la URL de la imagen de la película
    const imageUrl = 'http://image.tmdb.org/t/p/w300' + movie.poster_path;

    // Renderiza el componente MovieCard
    return (
        <li className={styles.movieCard}>
            {/* Crea un enlace a la página de detalles de la película */}
            <Link to={"/movies/" + movie.id}>
                {/* Renderiza la imagen de la película */}
                <img
                    width={230}
                    height={345}
                    src={imageUrl}
                    alt={movie.title}
                    className={styles.movieImage}
                />
            </Link>
            {/* Renderiza el título de la película */}
            <div className={styles.title}>{movie.title}</div>
        </li>
    );
}
