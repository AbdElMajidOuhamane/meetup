import React from 'react';

const Pagination = ({ data, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav className="flex justify-center my-6">
      <ul className="flex items-center">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 mx-1 font-semibold text-gray-600 rounded-full ${
              currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'
            }`}
          >
            Previous
          </button>
        </li>
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 mx-1 font-semibold text-gray-600 rounded-full ${
              currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
