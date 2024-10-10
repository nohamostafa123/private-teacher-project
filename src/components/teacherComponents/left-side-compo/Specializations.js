import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSpecialization } from '../redux/slices/filterSlice';

function Specializations() {
    const dispatch = useDispatch();
    const [selectedSpecializations, setSelectedSpecializations] = useState([]);

    const specializations = [
        { label: "Arabic", count: 108 },
        { label: "Biology", count: 69 },
        { label: "Chemistry", count: 79 },
        { label: "English", count: 161 },
        { label: "French", count: 23 },
        { label: "Geography", count: 7 },
        { label: "History", count: 12 },
        { label: "Math", count: 234 },
        { label: "Philosophy", count: 3 },
        { label: "Physics", count: 69 },
        { label: "Psychology", count: 12 },
        { label: "Science", count: 53 }
    ];

    const handleSpecializationChange = (event, specializationLabel) => {

        const newSelectedSpecializations = event.target.checked
            ? [...selectedSpecializations, specializationLabel]
            : selectedSpecializations.filter(label => label !== specializationLabel);

        setSelectedSpecializations(newSelectedSpecializations);
        dispatch(setSpecialization(newSelectedSpecializations));
    };

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
                                <Form.Check
                                    type="checkbox"
                                    className="ms-2"
                                    onChange={(e) => handleSpecializationChange(e, item.label)}
                                    checked={selectedSpecializations.includes(item.label)}
                                />
                            </li>
                        ))}
                    </ul>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Specializations;
