import React from 'react';
import BookCard from './BookCard';
import PaginationPanel from './PaginationPanel';

function BooksList({ books, currentPage, maxPage, paginate }) {
  return (
    <div className="container">
      <div className="row row-cols-1">
        {books.map((book) => (
          <div key={book.id} className="col my-2 border-bottom p-2">
            <BookCard book={book} />
          </div>
        ))}
      </div>
      {currentPage !== 0 && <PaginationPanel currentPage={currentPage} maxPage={maxPage} paginate={paginate} />}
    </div>
  );
}

export default BooksList;
