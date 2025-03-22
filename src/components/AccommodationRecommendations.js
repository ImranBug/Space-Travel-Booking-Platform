import React from 'react';

const accommodations = [
  { id: 1, name: 'Orbital Station Omega', description: 'Modern stays with stunning Earth views.' },
  { id: 2, name: 'Lunar Lodge', description: 'Cozy lunar accommodations with low gravity comfort.' },
  { id: 3, name: 'Space Hotel Alpha', description: 'Luxury suites with a view of the stars.' }
];

const AccommodationRecommendations = () => (
  <div style={{ marginTop: '2rem' }}>
    <h2>Accommodation Recommendations</h2>
    <ul>
      {accommodations.map(acc => (
        <li key={acc.id}>
          <strong>{acc.name}</strong>: {acc.description}
        </li>
      ))}
    </ul>
  </div>
);

export default AccommodationRecommendations;