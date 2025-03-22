import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;