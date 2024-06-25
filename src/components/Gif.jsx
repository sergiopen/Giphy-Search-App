import React from 'react';
import '../styles/Gif.css';
import { Link } from 'wouter';

function Gif ({ title, url, id }) {
  return (
    <Link to={'/gif/' + id}>
      <div className='gif'>
        <img src={url} alt='' />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default Gif;
