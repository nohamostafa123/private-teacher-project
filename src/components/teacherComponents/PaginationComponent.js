import React from 'react';
import './component styles/PaginationComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';


const PaginationComponent = ({ totalPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [];

    // Generate the array of page numbers
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Function to handle page changes
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="pagination-container col-md-12 d-flex justify-content-center align-items-center">
            <button className="prev btn btn-light" onClick={handlePrev} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faRightLong} flip="horizontal" />
            </button>

            <ul className="pagination d-flex justify-content-center">
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active-item' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>

            <button className="next btn btn-light" onClick={handleNext} disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faRightLong} />
            </button>
        </div>
    );
};

export default PaginationComponent;
