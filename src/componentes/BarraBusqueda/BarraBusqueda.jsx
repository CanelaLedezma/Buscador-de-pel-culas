function BarraBusqueda({ busqueda, setBusqueda, buscarPeliculas }) {

  return (
    <div>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button onClick={buscarPeliculas}>
        Buscar
      </button>

    </div>
  );
}

export default BarraBusqueda;