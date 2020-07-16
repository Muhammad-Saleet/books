import React from 'react';

interface Book {
  infoLink: string;
  id: string;
  thumbnail: string;
  title: string;
  publishedDate: string;
  authors: string[];
}

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  function renderThumbnail(thumbnail) {
    if (thumbnail) {
      return <img src={thumbnail} className="img-fluid" alt="Image Not Available" />;
    } else {
      const imageNotAvailableUrl =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXB4H7zcUL8kHWZseJueSBsiOAAPGJK63-kQ&usqp=CAU';
      return <img src={imageNotAvailableUrl} className="img-fluid" alt="Image Not Available" />;
    }
  }

  function renderTitle(title: string) {
    if (title) {
      return (
        <a className="font-weight-bold my-1" href={book.infoLink} target="_blank" rel="noreferrer">
          {title}
        </a>
      );
    } else {
      return <p className="text-muted font-italic my-1">title not available</p>;
    }
  }

  function renderAuthors(authors: string[]) {
    if (authors) {
      const authorNames = authors
        .reduce((names, name) => {
          return names + name + ', ';
        }, '')
        .slice(0, -2);

      return <p className="my-1">{'by ' + authorNames}</p>;
    } else {
      return <p className="text-muted font-italic my-1">author info not available</p>;
    }
  }

  function renderPublishedDate(publishedDate: string) {
    if (publishedDate !== '0') {
      return <p className="my-1">{'published ' + publishedDate}</p>;
    } else {
      return <p className="text-muted font-italic my-1">publish date not available</p>;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">{renderThumbnail(book.thumbnail)}</div>
        <div className="col-10 text-left">
          {renderTitle(book.title)}
          {renderAuthors(book.authors)}
          {renderPublishedDate(book.publishedDate)}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
