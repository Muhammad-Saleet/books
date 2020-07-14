import React from 'react';

function BookCard({ bookData }) {
  const thumbnail = bookData.volumeInfo.imageLinks.thumbnail;
  const title = bookData.volumeInfo.title;
  const author = bookData.volumeInfo.authors ? bookData.volumeInfo.authors[0] : '-';
  const publishedDate = bookData.volumeInfo.publishedDate;

  return (
    <div className="card" style={{ width: '12rem', height: '22rem' }}>
      <img src={thumbnail} className="card-img-top h-50" />
      <div className="card-body text-left">
        <h6 className="card-title">{title}</h6>
        <p className="text-muted">{author}</p>
        <p className="text-muted">Published: {publishedDate}</p>
      </div>
    </div>
  );
}

export default BookCard;
