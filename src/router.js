import { BrowserRouter, Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function RoutersApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Home />} />
        <Router path="/" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutersApp;
