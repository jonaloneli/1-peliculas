import placeholder from "../img/placeholder.png";

export function getMovieImg(posterPath, size = 500) {
  if (!posterPath) {
    // Si no hay ruta de imagen, devuelve la URL de la imagen de placeholder
    return placeholder;
  }

  // Genera la URL de la imagen con la ruta proporcionada
  return `https://image.tmdb.org/t/p/w${size}/${posterPath}`;
}
