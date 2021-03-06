import React from 'react';
import BookCard from './BookCard';
import PaginationPanel from './PaginationPanel';
import BooksListHeader from './BooksListHeader';

interface Book {
  infoLink: string;
  id: string;
  thumbnail: string;
  title: string;
  publishedDate: string;
  authors: string[];
}

interface BooksListProps {
  books: Book[];
  currentPage: number;
  maxPage: number;
  totalResults: number;
  paginate(newPage: number): void;
}

function BooksList({ books, currentPage, maxPage, totalResults, paginate }: BooksListProps) {
  return (
    <div className="container">
      {currentPage !== 0 && <BooksListHeader currentPage={currentPage} totalResults={totalResults} />}
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
