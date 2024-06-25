import React from 'react';
import { Link } from 'wouter';

function Category ({ name, options = [] }) {
  return (
    <div className='category'>
      <h3 className='category-title'>{name}</h3>
      <ul className='category-list'>
        {
          options.map((singleOption) => (
            <li key={singleOption}>
              <Link to={`/search/${singleOption}`}>{singleOption}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Category;
