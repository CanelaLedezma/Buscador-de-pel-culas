import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";

function ListaPeliculas({ peliculas }) {

  return (
    <div>

      {peliculas.map((peli) => (
        <TarjetaPelicula
          key={peli.imdbID}
          peli={peli}
        />
      ))}

    </div>
  );
}

export default ListaPeliculas;