import React from 'react';

interface BooksListHeaderProps {
  currentPage: number;
  totalResults: number;
}

function BooksListHeader({ currentPage, totalResults }: BooksListHeaderProps) {
  return (
    <div className="border-bottom text-left">
      <span>{`Page ${currentPage} of about ${totalResults} results`}</span>
    </div>
  );
}

export default BooksListHeader;
