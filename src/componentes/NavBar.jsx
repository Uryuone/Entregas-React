import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/ecoshop.png'; // Importa la imagen

const NavBar = ({ categories }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="EcoShop Logo" style={{ height: '40px' }} /> {/* Usa la imagen */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
