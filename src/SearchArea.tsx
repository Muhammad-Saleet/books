import React from 'react';

function SearchArea({ handleSearch, searchBooks }) {
  return (
    <div className="search-area">
      <form onSubmit={searchBooks} action="">
        <input onChange={handleSearch} type="text" />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchArea;
