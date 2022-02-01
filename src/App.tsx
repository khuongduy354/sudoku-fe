import { HomeScreen } from "./components/HomeScreen";
import { Routes, Route, Link } from "react-router-dom";
import { SinglePlayer } from "./components/SinglePlayer";

import React from "react";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/single-player" element={<SinglePlayer />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
