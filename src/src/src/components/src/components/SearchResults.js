import React from 'react';
import PropertyCard from './PropertyCard';

function SearchResults({ results }) {
  return (
    <div>
      {results.length === 0 ? <p>Aucun résultat</p> : results.map(p => <PropertyCard key={p.id} property={p} />)}
    </div>
  );
}

export default SearchResults;
