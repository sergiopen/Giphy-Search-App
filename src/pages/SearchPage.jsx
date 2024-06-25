import React from 'react';
import GifsList from '../components/GifsList';

function SearchPage ({ params }) {
  const { keyword } = params;
  return (
    <div>
      <h1>Resultados de: {keyword}</h1>
      <GifsList keyword={keyword}/>
    </div>
  );
}

export default SearchPage;
