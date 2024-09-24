import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, ListGroup } from 'react-bootstrap';
// import "../teachers.css";

function Levels() {
    const levels = [
        { label: " All levels ", count: 823 },
        { label: " junior", count: 11 },
        { label: " middle", count: 27 },
        { label: " senior", count: 234 }
    ];

    return (
        <Card className="border-1 mb-4 px-3 py-4">
            <Card.Body>
                <h5 className="card-title text-end">The Level</h5>
                <div className="underline bg-primary mb-4 ms-auto"></div>
                <ListGroup variant="flush" className="list d-flex flex-row-reverse text-end">
                    <ul className="list-unstyled w-100">
                        {levels.map((level, index) => (
                            <li key={index} className="d-flex justify-content-end mb-2">
                                <span className="text-muted me-auto">({level.count})</span>
                                <Form.Label className="ms-2">{level.label}</Form.Label>
                                <Form.Check type="checkbox" className="ms-2" />
                            </li>
                        ))}
                    </ul>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Levels;
