import React from 'react';

function AgentProfile({ agent }) {
  if (!agent) return null;
  return (
    <div className="agent-profile">
      <p>{agent.name}</p>
      <p>Étoiles: {agent.rating} ⭐</p>
    </div>
  );
}

export default AgentProfile;
