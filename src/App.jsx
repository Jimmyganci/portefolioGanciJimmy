import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import "./style/styles.css";
import Portefolio from "./components/pages/Portefolio";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div className="app">
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portefolio" element={<Portefolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
