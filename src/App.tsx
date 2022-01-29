import { HomeScreen } from "./components/HomeScreen";
import { CoOp } from "./components/CoOp";
import { PvP } from "./components/PvP";
import { Routes, Route, Link } from "react-router-dom";
import { SinglePlayer } from "./components/SinglePlayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/single-player" element={<SinglePlayer />} />
      <Route path="/pvp" element={<PvP />} />
      <Route path="/co-op" element={<CoOp />} />
    </Routes>
  );
}

export default App;
