import React, { useState, useEffect } from "react";
import "./MisEquipos.css"; // 🔹 Agregamos el CSS dedicado

const MisEquipos = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    const equiposMock = [
      {
        id: 1,
        nombre: "FC Talentoso",
        liga: "Premier League",
        jugadores: ["Messi", "Neymar", "Mbappé"],
        puntos: 78,
      },
      {
        id: 2,
        nombre: "Los Legendarios",
        liga: "La Liga",
        jugadores: ["Lewandowski", "Pedri", "Ter Stegen"],
        puntos: 92,
      },
    ];
    setEquipos(equiposMock);
  }, []);

  return (
    <div className="mis-equipos-container">
      <h1 className="titulo-equipos">⚽ Mis Equipos</h1>
      <p className="subtitulo-equipos">Aquí puedes ver los equipos que has creado en cada liga.</p>

      <div className="lista-equipos">
        {equipos.map((equipo) => (
          <div key={equipo.id} className="tarjeta-equipo">
            <h2 className="nombre-equipo">{equipo.nombre}</h2>
            <p><strong>Liga:</strong> {equipo.liga}</p>
            <p><strong>Puntos:</strong> {equipo.puntos}</p>

            <div className="jugadores">
              <strong>Jugadores:</strong>
              <ul>
                {equipo.jugadores.map((jugador, i) => (
                  <li key={i}>{jugador}</li>
                ))}
              </ul>
            </div>

            <button className="btn-detalles">Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisEquipos;
