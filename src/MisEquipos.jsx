import React, { useState, useEffect } from "react";
import "./App.css"; // Puedes cambiar por tu hoja de estilos si tienes otra

// 🏆 Componente principal para mostrar los equipos del usuario
const MisEquipos = () => {
  // Estado con equipos simulados
  const [equipos, setEquipos] = useState([]);

  // Simulación de carga inicial (mock)
  useEffect(() => {
    const equiposMock = [
      {
        id: 1,
        nombre: "Los Titanes FC",
        liga: "Liga Fantástica Colombia",
        jugadores: ["James Rodríguez", "Luis Díaz", "David Ospina"],
        puntos: 235,
      },
      {
        id: 2,
        nombre: "Real Cafeteros",
        liga: "Liga Libertadores Fantasy",
        jugadores: ["Rafael Santos Borré", "Juan Cuadrado", "Yerry Mina"],
        puntos: 189,
      },
      {
        id: 3,
        nombre: "Atlético Sueños",
        liga: "Premier Fantasy League",
        jugadores: ["Kevin De Bruyne", "Erling Haaland", "Phil Foden"],
        puntos: 312,
      },
    ];
    setEquipos(equiposMock);
  }, []);

  return (
    <div className="mis-equipos-container">
      <h1 className="titulo">⚽ Mis Equipos</h1>
      <p className="subtitulo">Aquí puedes ver los equipos que has creado en cada liga.</p>

      <div className="lista-equipos">
        {equipos.map((equipo) => (
          <div key={equipo.id} className="tarjeta-equipo">
            <h2>{equipo.nombre}</h2>
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

            <button className="btn-ver-detalle">Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisEquipos;

