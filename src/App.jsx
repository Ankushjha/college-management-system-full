import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
