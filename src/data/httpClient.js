const API = "https://api.themoviedb.org/3/";
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDVmYzNlMWIyOGExYjM4M2QyZjVjYzEyYTZlZDA5NiIsInN1YiI6IjY1ZmNiZTA1MDQ3MzNmMDE3ZGU5M2UwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKMYIGWbvHhN8wMC97JYG9K6jEdpWC7ew_-AO2uwg-M";

export function get(query, language, region, page = 1, pageSize = 20) {
    const url = `${API}search/movie?query=${query}&language=${language}&region=${region}&page=${page}&pageSize=${pageSize}`;
    
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json"
        }
    }).then(response => response.json());
}

export function getMovieDetails(movieId, language, region) {
    const url = `${API}movie/${movieId}?language=${language}&region=${region}`;
    
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json"
        }
    }).then(response => response.json());
}


