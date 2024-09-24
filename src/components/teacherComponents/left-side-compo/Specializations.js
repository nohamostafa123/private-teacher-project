import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, ListGroup } from 'react-bootstrap';
// import "../teachers.css";

function Specializations() {
    const specializations = [
        { label: " Arabic", count: 108 },
        { label: "Biology", count: 69 },
        { label: "Chemistry", count: 79 },
        { label: "English", count: 161 },
        { label: "French ", count: 23 },
        { label: "geography", count: 7 },
        { label: "History", count: 12 },
        { label: "Math", count: 234 },
        { label: "Philosophy", count: 3 },
        { label: "Physics", count: 69 },
        { label: " Psychology", count: 12 },
        { label: " Science", count: 53 }
    
    ];

    return (
        <Card className="border-1 mb-3 px-3 py-4">
            <Card.Body>
                <h5 className="card-title text-end">Majors</h5>
                <div className="underline bg-primary mb-4 ms-auto"></div>
                <ListGroup variant="flush" className="list d-flex flex-row-reverse text-end">
                    <ul className="list-unstyled w-100">
                        {specializations.map((item, index) => (
                            <li key={index} className="d-flex justify-content-end mb-2">
                                <span className="text-muted me-auto">({item.count})</span>
                                <Form.Label className="ms-2">{item.label}</Form.Label>
                                <Form.Check type="checkbox" className="ms-2" />
                            </li>
                        ))}
                    </ul>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Specializations;
