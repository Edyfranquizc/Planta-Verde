import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ menuOpen }) {
  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/SobreNosotros" className="nav-link">Sobre Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos" className="nav-link">Plantas</Link>
        </li>
        <li className="nav-item">
          <Link to="/cuidados" className="nav-link">Cuidados</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
