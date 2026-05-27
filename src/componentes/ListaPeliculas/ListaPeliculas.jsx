import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";

function ListaPeliculas({ peliculas, obtenerDetalle }) {

  return (
    <div>

      {peliculas.map((peli) => (
       
    <TarjetaPelicula
          key={peli.imdbID}
          peli={peli}
          obtenerDetalle = {obtenerDetalle}
        />
      ))}

    </div>
  );
}

export default ListaPeliculas;