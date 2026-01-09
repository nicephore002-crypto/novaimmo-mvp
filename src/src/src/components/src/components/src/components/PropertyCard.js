import React from 'react';
import AgentProfile from './AgentProfile';

const agents = [
  { id: 1, name: 'Agent A', rating: 4.5 },
  { id: 2, name: 'Agent B', rating: 4.0 }
];

function PropertyCard({ property }) {
  const agent = agents.find(a => a.id === property.agentId);
  return (
    <div className="property-card">
      <h3>{property.name}</h3>
      <p>Prix: {property.price.toLocaleString()} F</p>
      <p>Zone: {property.zone}</p>
      <AgentProfile agent={agent} />
      <button onClick={() => alert('Réservation simulée pour ' + property.name)}>Réserver</button>
    </div>
  );
}

export default PropertyCard;
