import React, { useState, useEffect } from 'react';

const tips = [
  "Pack light—zero gravity keeps wrinkles away!",
  "Keep your travel docs safe—even in space!",
  "Enjoy the thrill of zero gravity!",
  "Space travel: the view is out of this world!"
];

const TravelTips = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>AI Travel Tip</h2>
      <p>{tip}</p>
    </div>
  );
};

export default TravelTips;