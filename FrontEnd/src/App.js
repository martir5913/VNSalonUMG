import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import OfertasPromociones from "./OfertasPromociones"; // Importa la nueva vista

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Salón de Belleza</h1>
          <p className="welcome-message">¡Bienvenido a nuestro salón de belleza!</p>
        </header>

        {/* Imagen principal */}
        <div className="image-container">
          <img src="/imagenes/salon.jpg" alt="Salón de Belleza" className="main-image" />
        </div>

        <div className="content-wrapper">
          <aside className="sidebar left-sidebar">
            <Link to="/" className="sidebar-button">Citas</Link>
            <Link to="/reagendar" className="sidebar-button">Reagendar</Link>
            <Link to="/cancelaciones" className="sidebar-button">Cancelaciones</Link>
            <Link to="/ofertas" className="sidebar-button">Ofertas y Promociones</Link>
            <Link to="/facturacion" className="sidebar-button">Facturación</Link>
            <Link to="/inventario" className="sidebar-button">Inventario</Link>
            <Link to="/servicios" className="sidebar-button">Servicios</Link>
            <Link to="/empleados" className="sidebar-button">Empleados</Link>
            <Link to="/reportes" className="sidebar-button">Reportes</Link>
          </aside>

          <main className="main-content">
            <Routes>
              <Route path="/ofertas" element={<OfertasPromociones />} />
              <Route path="/" element={<h2>Bienvenido al sistema</h2>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
