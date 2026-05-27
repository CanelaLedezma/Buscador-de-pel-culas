import { useState } from "react";
import axios from "axios";
import "./App.css";
import BarraBusqueda from "./componentes/BarraBusqueda/BarraBusqueda";
import ListaPeliculas from "./componentes/ListaPeliculas/ListaPeliculas";

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  
  const buscarPeliculas = async () => {

  if (busqueda === "") return;

  try {

    setLoading(true);
    setError("");
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=a1a0b01a&s=${busqueda}`
    );

    if (response.data.Search) {
      setPeliculas(response.data.Search);
    } else {
      setPeliculas([]);
    }

    setLoading(false);

  } catch {

    setError("Ocurrió un error");
    setLoading(false);

  }

};

const obtenerDetalle = async (id) => {

  console.log(id);

  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=a1a0b01a&i=${id}`
  );

  console.log(response.data);

  setPeliculaSeleccionada(response.data);

};
  return (
  <div>

    <h1>Buscador IMDb</h1>

    <BarraBusqueda
      busqueda={busqueda}
      setBusqueda={setBusqueda}
      buscarPeliculas={buscarPeliculas}
    />

    {loading && <h2>Cargando...</h2>}

    {error && <h2>{error}</h2>}

<ListaPeliculas
  peliculas={peliculas}
  obtenerDetalle={obtenerDetalle}
/>

{peliculaSeleccionada && (

  <div>

    <h2>{peliculaSeleccionada.Title}</h2>

    <img src={peliculaSeleccionada.Poster} />

    <p>Año: {peliculaSeleccionada.Year}</p>

    <p>Género: {peliculaSeleccionada.Genre}</p>

    <p>Director: {peliculaSeleccionada.Director}</p>

    <p>Actores: {peliculaSeleccionada.Actors}</p>

    <p>Sinopsis: {peliculaSeleccionada.Plot}</p>

    <p>Duración: {peliculaSeleccionada.Runtime}</p>

    <p>Idioma: {peliculaSeleccionada.Language}</p>

    <p>País: {peliculaSeleccionada.Country}</p>

    <p>IMDb: {peliculaSeleccionada.imdbRating}</p>

  </div>

)}

  </div>
);
}

export default App;