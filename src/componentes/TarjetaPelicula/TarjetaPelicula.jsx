function TarjetaPelicula({ peli, obtenerDetalle }) {

  return (
    
    <div onClick={() => obtenerDetalle(peli.imdbID)}>

      <img src={peli.Poster} />

      <h3>{peli.Title}</h3>

      <p>{peli.Year}</p>

      <p>{peli.Type}</p>

    </div>

  );
}

export default TarjetaPelicula;