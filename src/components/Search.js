import React, { useState } from 'react';
import '../styles.css'

function Search({ setSearchResults }) {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchResults(search);
    setSearch('');
  };

 
  return (
        <div >
        <h1 className="title">Weather App</h1>
      <form  className="formSearch" onSubmit={onSubmit}>
          <input
          type='text'
          className="inputSearch"
          placeholder='Search your location'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    
      </form>
      </div>
    
  );
}

export default Search;