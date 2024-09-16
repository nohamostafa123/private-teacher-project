import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, ListGroup } from 'react-bootstrap';
// import "../teachers.css";

function Specializations() {
    const specializations = [
        { label: "الأحياء", count: 69 },
        { label: "التاريخ", count: 12 },
        { label: "الجغرافيا", count: 7 },
        { label: "الرياضيات", count: 234 },
        { label: "العلوم", count: 53 },
        { label: "الفلسفة", count: 3 },
        { label: "الفيزياء", count: 69 },
        { label: "الكيمياء", count: 79 },
        { label: "اللغة الإنجليزية", count: 161 },
        { label: "اللغة الفرنسية", count: 23 },
        { label: "اللغة العربية", count: 108 },
        { label: "علم النفس", count: 12 }
    ];

    return (
        <Card className="border-1 mb-3 px-3 py-4">
            <Card.Body>
                <h5 className="card-title text-end">التخصصات</h5>
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
