import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function App() {
  return (
    <nav>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <img src="./images/adoppegea.png" alt="Logo de Adopet" />
          </div>
          <nav className="navbar" style={{ backgroundColor: '#FF7700' }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/contactanos">Contactanos</Link>
              <Link className="navbar-brand" to="#"> Perfil de Usuario</Link>
              <Link className="navbar-brand" to="#"> Adoptar Mascotas</Link>
              <Link className="navbar-brand" to="#"> Donar</Link>
              <Link className="navbar-brand" to="#"> GPS</Link>
              <Link className="navbar-brand" to="#"> Campañas</Link>
            </div>
          </nav>
        </header>
        {/* CARRUSEL */}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./images/gato.jpg" className="d-block w-100" width="65%" height="500px" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./images/Gatitos.jpg" className="d-block w-100"width="65%" height="500px" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./images/Gatito.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Main Content */}
        <main className="main-content text-center"> {/* Agregué text-center para centrar el contenido */}
          <h2>Encuentra y Adopta</h2>
          <div className="gallery">
            <div className="card">
              <img src="./images/Catalogo/Bella.jpeg" alt="Pelusa" />
              <button className="btn">PELUSA</button>
            </div>
            <div className="card">
              <img src="./images/Catalogo/Bruno.jpg" alt="Jorgito y Clararita" />
              <button className="btn">JORGITO Y CLARARITA</button>
            </div>
            <div className="card">
              <img src="./images/Catalogo/Daisy.jpeg" alt="Max" />
              <button className="btn">MAX</button>
            </div>
          </div>
        </main>
      </div>
    </nav>
  );
}

export default App;
