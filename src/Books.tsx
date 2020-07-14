import React, { useState } from 'react';
import SearchArea from './SearchArea';
import axios from 'axios';
import BooksList from './BooksList';

function Books() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  function searchBooks(e) {
    e.preventDefault();
    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: searchText,
        },
      })
      .then((response) => {
        setBooks([...response.data.items]);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <SearchArea handleSearch={handleSearch} searchBooks={searchBooks} />
      <BooksList books={books} />
    </div>
  );
}

export default Books;
