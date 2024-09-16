import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
// import "./teachers.css";

function PaginationComponent() {
    return (
        <div className="pagination-container col-md-8 mt-3">
            <button className="prev">
                <FontAwesomeIcon icon={faRightLong} flip="horizontal" />
            </button>
            <Pagination className="d-flex justify-content-center">
                <Pagination.Item href="#">8</Pagination.Item>
                <Pagination.Item href="#">7</Pagination.Item>
                <Pagination.Item href="#">6</Pagination.Item>
                <Pagination.Item href="#">5</Pagination.Item>
                <Pagination.Item href="#">4</Pagination.Item>
                <Pagination.Item href="#">3</Pagination.Item>
                <Pagination.Item href="#">2</Pagination.Item>
                <Pagination.Item active href="#">1</Pagination.Item>
            </Pagination>
            <button className="next">
                <FontAwesomeIcon icon={faRightLong} />
            </button>
        </div>
    );
}

export default PaginationComponent;
