import React from 'react';
import BookCard from './BookCard';

function BooksList({ books }) {
  return (
    <div className="container">
      <div className="row row-cols-4">
        {books.map((book) => (
          <div key={book.id} className="col">
            <BookCard bookData={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
