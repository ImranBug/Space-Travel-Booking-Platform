import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import Countdown from '../components/Countdown';
import AccommodationRecommendations from '../components/AccommodationRecommendations';
import TravelTips from '../components/TravelTips';

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
      <AccommodationRecommendations />
      <TravelTips />
    </div>
  );
};

export default Dashboard;