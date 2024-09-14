import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
// import "./teachers.css";

function HeadBar() {
    return (
        <Container className="d-flex justify-content-end align-items-center p-3 border mt-3">
            <Button variant="primary" className="rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: '40px', height: '40px' }}>
                <i className="fa fa-ellipsis-h text-white"></i>
            </Button>
            <div className="mx-2"></div>
            <Button variant="light" className="rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: '40px', height: '40px' }}>
                <i className="fa fa-ellipsis-v text-dark"></i>
            </Button>
        </Container>
    );
}

export default HeadBar;
