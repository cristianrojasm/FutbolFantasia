import React from "react";

const MisEquipos = ({ equipos }) => {
  return (
    <div className="mis-equipos-container">
      <h1 className="titulo-equipos">⚽ Mis Equipos</h1>
      <p className="subtitulo-equipos">
        Aquí puedes ver los equipos que has creado en cada liga.
      </p>

      <div className="lista-equipos">
        {equipos.length === 0 ? (
          <p className="no-equipos">Aún no has creado equipos.</p>
        ) : (
          equipos.map((equipo) => (
            <div key={equipo.id} className="tarjeta-equipo-dark">
              <h2 className="nombre-equipo">{equipo.nombre}</h2>
              <p className="texto-info"><strong>Liga:</strong> {equipo.liga}</p>
              <p className="texto-info"><strong>Puntos:</strong> {equipo.puntos}</p>

              <div className="jugadores">
                <strong>Jugadores:</strong>
                <ul>
                  {equipo.jugadores.map((jugador, i) => (
                    <li key={i} className="tag-jugador">{jugador}</li>
                  ))}
                </ul>
              </div>

              <button className="btn-detalle">Ver detalles</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MisEquipos;
