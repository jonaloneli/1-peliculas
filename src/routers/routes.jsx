// Importa los componentes necesarios de react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importa el componente LandingPage desde el directorio de páginas
import { LandingPage } from "../pages/LandingPage";
// Importa el componente MovieDetails desde el directorio de páginas
import { MovieDetails } from "../pages/MovieDetails";

// Define el componente funcional MyRoutes
export function MyRoutes() {
  return (
    // Encapsula las rutas en un Router para el enrutamiento de la aplicación
    <Router>
      {/* Define las rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route exact path="/" element={<LandingPage/>} />
        {/* Ruta para la página de detalles de la película */}
        <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
      </Routes>
    </Router>
  )
}
