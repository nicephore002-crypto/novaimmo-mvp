import React, { useState } from 'react';
import SearchResults from './SearchResults';

const properties = [
  { id: 1, name: 'Maison 3 chambres', price: 25000000, zone: 'Calme', agentId: 1 },
  { id: 2, name: 'Appartement 2 chambres', price: 18000000, zone: 'Centre', agentId: 2 },
  { id: 3, name: 'Villa luxe', price: 50000000, zone: 'Résidentielle', agentId: 1 }
];

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = properties.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Décris le bien que tu cherches..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
      <SearchResults results={results} />
    </div>
  );
}

export default Home;
