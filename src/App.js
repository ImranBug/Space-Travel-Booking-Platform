import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Packages from './pages/Packages';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router basename="/space-travel-booking-platform">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;