import React, { useEffect, useState } from 'react';
import SearchArea from './SearchArea';
import axios from 'axios';
import BooksList from './BooksList';

function Books() {
  const booksPerPage = 20;
  const [noResults, setNoResults] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('initial');
  const [maxPage, setMaxPage] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    sortBooks();
  }, [sort]);

  useEffect(() => {
    if (page !== 0) {
      fetchBooks();
    }
  }, [page]);

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  function searchBooks() {
    if (page !== 1) setPage(1);
    else fetchBooks();
  }

  function paginate(newPage: number) {
    setPage(newPage);
  }

  function fetchBooks() {
    axios
      .get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: searchText,
          startIndex: (page - 1) * booksPerPage,
          maxResults: booksPerPage,
        },
      })
      .then((response) => {
        console.log(response.data);

        if (response.data.totalItems === 0) {
          setBooks([]);
          setNoResults(true);
          return;
        }
        setNoResults(false);
        const bookList = extractBookList(response.data.items);
        setBooks(bookList);
        setMaxPage(Math.ceil(response.data.totalItems / booksPerPage));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setSort(e.target.value);
  }

  function sortBooks() {
    setBooks((oldBooks) => {
      oldBooks.sort((a, b) => {
        if (sort === 'newest') {
          return parseInt(b.publishedDate) - parseInt(a.publishedDate);
        } else if (sort === 'oldest') {
          return parseInt(a.publishedDate) - parseInt(b.publishedDate);
        }
      });
      return [...oldBooks];
    });
  }

  function extractBookList(items: Array<any>) {
    const bookList = items.map((item) => {
      const book = {
        infoLink: item.volumeInfo.infoLink,
        id: item.id,
        thumbnail: '',
        title: '',
        publishedDate: '',
        authors: [],
      };

      if (item.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.thumbnail = null;
      } else {
        book.thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      if (item.volumeInfo.hasOwnProperty('title') === false) {
        book.title = null;
      } else {
        book.title = item.volumeInfo.title;
      }

      if (item.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.publishedDate = '0';
      } else {
        book.publishedDate = item.volumeInfo.publishedDate.substring(0, 4);
      }

      if (item.volumeInfo.hasOwnProperty('authors') === false) {
        book.authors = null;
      } else {
        book.authors = item.volumeInfo.authors;
      }
      return book;
    });

    return bookList;
  }

  return (
    <div className="container">
      <SearchArea handleSearchInput={handleSearchInput} searchBooks={searchBooks} handleSort={handleSort} />
      {noResults ? (
        <p>no results found</p>
      ) : (
        <BooksList books={books} currentPage={page} maxPage={maxPage} paginate={paginate} />
      )}
    </div>
  );
}

export default Books;
