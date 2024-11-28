import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h1 className="navbar-title">Pokémon App</h1>
      <Link to="/" className="home-link">Home</Link>
    </nav>
  );
};

export default Navbar;
