import React, { useState, useEffect } from 'react';

function Countdown({ departureDate }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const launch = new Date(departureDate).getTime();
      const distance = launch - now;

      if (distance < 0) {
        setTimeLeft('Launched!');
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [departureDate]);

  return <span>{timeLeft}</span>;
}

export default Countdown;