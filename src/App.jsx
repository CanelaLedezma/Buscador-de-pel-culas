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

  return (
  <div>

    <h1>Buscador IMDb</h1>

    <BarraBusqueda
      busqueda={busqueda}
      setBusqueda={setBusqueda}
      buscarPeliculas={buscarPeliculas}
    />

    <ListaPeliculas peliculas={peliculas} />

  </div>
);
}

export default App;