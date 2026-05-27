import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const buscarPeliculas = async () => {

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=http://www.omdbapi.com/?i=tt3896198&apikey=a1a0b01a&s=${busqueda}`
    );

    setPeliculas(response.data.Search);
  };

  return (
    <div>

      <h1>Buscador IMDb</h1>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button onClick={buscarPeliculas}>
        Buscar
      </button>

      {peliculas.map((peli) => (
        <div>

          <img src={peli.Poster} />

          <h3>{peli.Title}</h3>

          <p>{peli.Year}</p>

          <p>{peli.Type}</p>

        </div>
      ))}

    </div>
  );
}

export default App;