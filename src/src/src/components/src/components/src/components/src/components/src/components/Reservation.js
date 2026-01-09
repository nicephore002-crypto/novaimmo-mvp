import React from 'react';

function Reservation({ property }) {
  return (
    <div>
      <p>Réservation pour: {property.name}</p>
      <button onClick={() => alert('Réservation confirmée !')}>Confirmer</button>
    </div>
  );
}

export default Reservation;
