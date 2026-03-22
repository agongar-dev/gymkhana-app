import "./App.css";
import React from "react";
import logo from "./cofre-del-tesoro.png";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Overview from "./routes/Overview";
import HintStage from "./routes/HintStage";

function Home() {
  return (
    <header className="App-header">
      <Link to="/overview">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <p>Empieza la búsqueda del tesoro!</p>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/hint-stage" element={<HintStage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;