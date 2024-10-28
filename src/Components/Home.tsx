import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'

function App() {
  return (
    <nav className="">
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          
          <img src="./images/adoppegea.png" alt="Logo de Adopet" />
          
        </div>
        <nav className="navbar">
          <a href="Contactanos">Contactanos</a>
          <a href="#">Perfil de Usuario</a>
          <a href="#">Adoptar Mascotas</a>
          <a href="#">Donar</a>
          <a href="#">GPS</a>
          <a href="#">Cerrar Sesion</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h2>Encuentra y Adopta</h2>
        <div className="gallery">
          <div className="card">
            <img src="https://placekitten.com/200/150" alt="Pelusa" />
            <button className="btn">PELUSA</button>
          </div>
          <div className="card">
            <img src="https://place-puppy.com/200x150" alt="Jorgito y Clararita" />
            <button className="btn">JORGITO Y CLARARITA</button>
          </div>
          <div className="card">
            <img src="https://place-puppy.com/200x150" alt="Max" />
            <button className="btn">MAX</button>
          </div>
        </div>
      </main>

      
    </div>
    </nav>
  );
}

export default App;
