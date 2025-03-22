// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import Countdown from '../components/Countdown';

const Dashboard = () => {
  const { bookings } = useContext(BookingContext);

  return (
    <div>
      <h1>User Dashboard</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <strong>Departure:</strong> {booking.departureDate} |{' '}
              <strong>Destination:</strong> {booking.destination} |{' '}
              <strong>Seat Class:</strong> {booking.seatClass}
              <br />
              <strong>Countdown:</strong>{' '}
              <Countdown departureDate={booking.departureDate} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;