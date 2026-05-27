import { useState } from "react";
import axios from "axios";
import "./App.css";
import BarraBusqueda from "./components/BarraBusqueda/BarraBusqueda";
import ListaPeliculas from "./components/ListaPeliculas/ListaPeliculas";

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const buscarPeliculas = async () => {

  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=a1a0b01a&s=${busqueda}`
  );

  if (response.data.Search) {
    setPeliculas(response.data.Search);
  } else {
    setPeliculas([]);
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