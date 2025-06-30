import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const Pagination = ({ data, limit, page, setLimit, setPage }) => {
  const totalPages = Math.ceil((data?.total || 0) / limit);
  const maxVisiblePages = 5; // Number of visible page buttons

  // Calculate range of pages to show
  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust if we're at the end
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      // Optional: Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLimitChange = (e) => {
    const newLimit = parseInt(e.target.value);
    setLimit(newLimit);
    setPage(1); // Reset to first page when changing limit
  };

  // Generate page items
  const pageItems = [];
  for (let i = startPage; i <= endPage; i++) {
    pageItems.push(
      <li className={`page-item ${page === i ? "active" : ""}`} key={i}>
        <Link
          className="page-link"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(i);
          }}
          to="#"
        >
          {i}
        </Link>
      </li>
    );
  }

  // Don't render if no pages
  if (totalPages <= 1) return null;

  return (
    <div className="row mt-4">
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
        {/* Items per page selector */}
        <div className="d-flex align-items-center">
          <span className="me-2">Items per page:</span>
          <Form.Select
            size="sm"
            style={{ width: "80px" }}
            value={limit}
            onChange={handleLimitChange}
            aria-label="Items per page"
          >
            <option>2</option>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={20}>20</option>
          </Form.Select>
        </div>

        {/* Pagination controls */}
        <nav aria-label="Page navigation">
          <ul className="pagination mb-0">
            {/* First page button */}
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <Link
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
                to="#"
                aria-label="First"
              >
                <span aria-hidden="true">&laquo;&laquo;</span>
              </Link>
            </li>

            {/* Previous page button */}
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <Link
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page - 1);
                }}
                to="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>

            {/* Page numbers */}
            {startPage > 1 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}

            {pageItems}

            {endPage < totalPages && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}

            {/* Next page button */}
            <li
              className={`page-item ${page === totalPages ? "disabled" : ""}`}
            >
              <Link
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page + 1);
                }}
                to="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>

            {/* Last page button */}
            <li
              className={`page-item ${page === totalPages ? "disabled" : ""}`}
            >
              <Link
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(totalPages);
                }}
                to="#"
                aria-label="Last"
              >
                <span aria-hidden="true">&raquo;&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Page info */}
        <div className="text-muted">
          Page {page} of {totalPages} | Total {data?.total || 0} items
        </div>
      </div>
    </div>
  );
};

export default Pagination;
