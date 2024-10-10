import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setLevel } from '../redux/slices/filterSlice';

function Levels() {
    const levels = [
        { label: "All levels", count: 823 },
        { label: "Junior", count: 11 },
        { label: "Middle", count: 27 },
        { label: "Senior", count: 234 }
    ];

    const dispatch = useDispatch();
    const [selectedLevels, setSelectedLevels] = useState([]);

    const handleLevelChange = (event, levelLabel) => {
        if (levelLabel === "All levels") {

            if (event.target.checked) {
                const allLevels = levels.map((level) => level.label);
                setSelectedLevels(allLevels);
                dispatch(setLevel(allLevels));
            } else {

                setSelectedLevels([]);
                dispatch(setLevel([]));
            }
        } else {
            // Handle other levels
            const updatedLevels = event.target.checked
                ? [...selectedLevels.filter(l => l !== "All levels"), levelLabel]
                : selectedLevels.filter((level) => level !== levelLabel);

            setSelectedLevels(updatedLevels);
            dispatch(setLevel(updatedLevels));
        }
    };

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
                                <Form.Check
                                    type="checkbox"
                                    className="ms-2"
                                    onChange={(e) => handleLevelChange(e, level.label)}
                                    checked={selectedLevels.includes(level.label)}
                                />
                            </li>
                        ))}
                    </ul>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Levels;
