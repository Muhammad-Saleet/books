import React from 'react';

function PaginationPanel({ currentPage, maxPage, paginate }) {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {currentPage !== 1 && (
          <li className="page-item">
            <a onClick={() => paginate(currentPage - 1)} href="#" className="page-link" aria-label="Previous">
              <span>Prev</span>
            </a>
          </li>
        )}

        <li className="page-item">
          <a className="page-link" href="#">
            {currentPage}
          </a>
        </li>

        {currentPage !== maxPage && (
          <li className="page-item">
            <a onClick={() => paginate(currentPage + 1)} href="#" className="page-link" aria-label="Next">
              <span>Next</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PaginationPanel;
