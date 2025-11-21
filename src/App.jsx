// ⬅ Dependencias necesarias
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./componentes/menu/menu.jsx";
import MisEquipos from "./MisEquipos.jsx";

// 🔹 COMPONENTES TEMPORALES PARA PRUEBAS
const Home = () => <h2>🏠 Home</h2>;
const Perfil = () => <h2>👤 Perfil</h2>;
const Jugadores = () => <h2>🧑‍🤝‍🧑 Jugadores</h2>;
const Ligas = () => <h2>🏆 Ligas</h2>;
const Ranking = () => <h2>📈 Ranking</h2>;
const PanelAdmin = () => <h2>⚙ Admin</h2>;

function App() {
  // ⬅ Datos de prueba (puedes quitarlos cuando tengas backend)
  const equiposPrueba = [
    {
      id: 1,
      nombre: "FC Talentoso",
      liga: "Premier League",
      puntos: 78,
      jugadores: ["Messi", "Neymar", "Mbappé"],
    },
    {
      id: 2,
      nombre: "Los Legendarios",
      liga: "La Liga",
      puntos: 92,
      jugadores: ["Lewandowski", "Pedri", "Ter Stegen"],
    },
  ];

  return (
    <BrowserRouter>
      <Menu /> {/* Menú de navegación */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/verLiga" element={<Ligas />} />
        <Route path="/misEquipos" element={<MisEquipos equipos={equiposPrueba} />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/administrador" element={<PanelAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

