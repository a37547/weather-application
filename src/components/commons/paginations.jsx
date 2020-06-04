import React from "react";
import lodash from "lodash";

const Pagination = (props) => {
  const {
    itemsCount,
    pageSize,
    currentPage,
    onPageClick,
    onPreviousClick,
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount <= 1) return null;

  const pagesToLoad = () => {
    while (currentPage <= pagesCount - 4) {
      return lodash.range(currentPage, currentPage + 5);
    }

    if (pagesCount < 5) {
      return lodash.range(currentPage, pagesCount + 1);
    }

    return lodash.range(pagesCount - 4, pagesCount + 1);
  };

  return (
    <nav className="d-flex justify-content-end">
      <ul className="pagination pagination-sm">
        <li
          className={currentPage === 1 ? "page-item disabled" : "page-item"}
          onClick={onPreviousClick}
        >
          <button className="page-link">Previous</button>
        </li>
        {pagesToLoad().map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageClick(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
