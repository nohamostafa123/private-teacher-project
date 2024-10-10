import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/slices/filterSlice';

function TeacherLanguageFilter() {
    const dispatch = useDispatch();
    const [selectedLanguage, setSelectedLanguage] = useState("All Languages");

    const languages = [
        { label: "All Languages", count: 823 },
        { label: "English", count: 11 },
        { label: "Arabic", count: 27 },
    ];

    const handleLanguageChange = (event) => {
        const selected = event.target.value;

        setSelectedLanguage(selected);

        if (selected === "All Languages") {
            const allLanguages = languages.map((lang) => lang.label);
            dispatch(setLanguage(allLanguages));
        } else {
            dispatch(setLanguage([selected]));
        }
    }

    return (
        <Card className="border-1 mb-4 px-3 py-4">
            <Card.Body>
                <h5 className="card-title text-end">Language Teacher</h5>
                <div className="underline bg-primary mb-4 ms-auto"></div>
                <div className="input-group mb-3">
                    <span className="input-group-text bg-transparent border-0">
                        <FontAwesomeIcon icon={faGlobe} className="text-muted" />
                    </span>
                    <Form.Select
                        className="border-0 py-3 text-end"
                        style={{ fontFamily: 'Tajawal, sans-serif' }}
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    >
                        {languages.map((language, index) => (
                            <option key={index} value={language.label}>
                                {language.label} ({language.count})
                            </option>
                        ))}
                    </Form.Select>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TeacherLanguageFilter;
