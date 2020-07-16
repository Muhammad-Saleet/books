import React from 'react';

interface SearchAreaProps {
  handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void;
  searchBooks(): void;
  handleSort(e: React.ChangeEvent<HTMLSelectElement>): void;
}

function SearchArea({ handleSearchInput, searchBooks, handleSort }: SearchAreaProps) {
  return (
    <div className="container w-50 mb-5">
      <div className="row">
        <div className="col-8">
          <div className="input-group">
            <input
              type="text"
              onChange={handleSearchInput}
              onKeyUp={(e) => {
                if (e.key === 'Enter') searchBooks();
              }}
              className="form-control"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={searchBooks}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="input-group">
            <select className="custom-select" defaultValue="sort" onChange={handleSort}>
              <option disabled value="sort">
                Sort
              </option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchArea;
