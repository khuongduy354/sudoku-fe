import { HomeScreen } from "./components/HomeScreen";
import { Routes, Route, Link } from "react-router-dom";
import { SinglePlayer } from "./components/SinglePlayer";

import React from "react";

function App() {
  console.log("works");
  return (
    <React.Fragment>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/single-player" element={<SinglePlayer />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
