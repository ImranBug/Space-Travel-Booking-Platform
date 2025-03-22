// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '1rem', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/packages">Packages</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;