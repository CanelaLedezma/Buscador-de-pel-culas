function TarjetaPelicula({ peli }) {

  return (
    <div>

      <img src={peli.Poster} />

      <h3>{peli.Title}</h3>

      <p>{peli.Year}</p>

      <p>{peli.Type}</p>

    </div>
  );
}

export default TarjetaPelicula;