import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// import "../teachers.css";

function TeacherLanguageFilter() {
    return (
        <Card className="border-1 mb-4 px-3 py-4">
            <Card.Body>
                <h5 className="card-title text-end">لغة المعلم</h5>
                <div className="underline bg-primary mb-4 ms-auto"></div>
                <div className="input-group mb-3">
                    <span className="input-group-text bg-transparent border-0">
                        <FontAwesomeIcon icon={faGlobe} className="text-muted" />
                    </span>
                    <Form.Select className="border-0 py-3 text-end" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                        <option selected>كل اللغات</option>
                        <option>English</option>
                        <option>اللغة العربية</option>
                    </Form.Select>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TeacherLanguageFilter;
