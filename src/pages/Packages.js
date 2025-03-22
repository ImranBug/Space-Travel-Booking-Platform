// src/pages/Packages.js
import React from 'react';

const Packages = () => {
  const packagesData = [
    {
      id: 1,
      name: 'Luxury Cabin',
      price: 99999,
      description: 'Enjoy premium comforts in zero-gravity.'
    },
    {
      id: 2,
      name: 'Economy Shuttle',
      price: 49999,
      description: 'A budget-friendly voyage to the stars.'
    },
    {
      id: 3,
      name: 'VIP Zero-Gravity',
      price: 199999,
      description: 'The ultimate space travel experience.'
    }
  ];

  return (
    <div>
      <h1>Pricing & Packages</h1>
      <ul>
        {packagesData.map(pkg => (
          <li key={pkg.id} style={{ margin: '1rem 0' }}>
            <h2>{pkg.name}</h2>
            <p>Price: ${pkg.price}</p>
            <p>{pkg.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Packages;