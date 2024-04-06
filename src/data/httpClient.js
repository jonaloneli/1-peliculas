// URL base de la API de The Movie Database
const API = "https://api.themoviedb.org/3/";

// Clave de acceso para autenticación en la API de The Movie Database
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDVmYzNlMWIyOGExYjM4M2QyZjVjYzEyYTZlZDA5NiIsInN1YiI6IjY1ZmNiZTA1MDQ3MzNmMDE3ZGU5M2UwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKMYIGWbvHhN8wMC97JYG9K6jEdpWC7ew_-AO2uwg-M";

// Función para obtener películas basada en una consulta de búsqueda
export function get(query, language, region, page = 1, pageSize = 20) {
    // Construye la URL de búsqueda de películas con los parámetros proporcionados
    const url = `${API}search/movie?query=${query}&language=${language}&region=${region}&page=${page}&pageSize=${pageSize}`;
    
    // Realiza una solicitud GET a la API para obtener películas
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`, // Agrega la clave de acceso como token de autorización en el encabezado
            Accept: "application/json" // Define el tipo de contenido aceptado como JSON
        }
    }).then(response => response.json()); // Parsea la respuesta como JSON y la devuelve
}

// Función para obtener detalles de una película específica por su ID
export function getMovieDetails(movieId, language, region) {
    // Construye la URL para obtener detalles de la película con el ID proporcionado
    const url = `${API}movie/${movieId}?language=${language}&region=${region}`;
    
    // Realiza una solicitud GET a la API para obtener los detalles de la película
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`, // Agrega la clave de acceso como token de autorización en el encabezado
            Accept: "application/json" // Define el tipo de contenido aceptado como JSON
        }
    }).then(response => response.json()); // Parsea la respuesta como JSON y la devuelve
}

