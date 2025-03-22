// src/pages/Booking.js
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const Booking = () => {
  const { addBooking } = useContext(BookingContext);
  const [formData, setFormData] = useState({
    departureDate: '',
    destination: '',
    seatClass: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(formData);
    alert('Booking submitted!');
    setFormData({ departureDate: '', destination: '', seatClass: '' });
  };

  return (
    <div>
      <h1>Trip Scheduling & Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Departure Date:
            <input 
              type="date" 
              name="departureDate" 
              value={formData.departureDate} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Destination:
            <select 
              name="destination" 
              value={formData.destination} 
              onChange={handleChange} 
              required
            >
              <option value="">Select</option>
              <option value="spaceStation">Space Station Alpha</option>
              <option value="lunarHotel">Lunar Hotel</option>
              <option value="orbitalStation">Orbital Station</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Seat Class:
            <select 
              name="seatClass" 
              value={formData.seatClass} 
              onChange={handleChange} 
              required
            >
              <option value="">Select</option>
              <option value="luxury">Luxury Cabin</option>
              <option value="economy">Economy Shuttle</option>
              <option value="vip">VIP Zero-Gravity</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;