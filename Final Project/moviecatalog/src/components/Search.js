// src/Search.js
import React from 'react';

const Search = ({ searchValue, setSearchValue, search }) => {
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <form className='search' onSubmit={callSearchFunction}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
