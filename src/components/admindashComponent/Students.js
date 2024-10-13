import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './AdminDashboard.css';

const StudentsDashboard = () => {
    const { t } = useTranslation();
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        date_of_birth: '',
        gender: '',
        academic_level: '',
        language: '',
    });
    const [editingStudentId, setEditingStudentId] = useState(null); // To track if updating a student
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/students/list');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleRegisterStudent = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (editingStudentId) {
                // Update Student
                const response = await axios.put(`http://localhost:5000/api/students/update/${editingStudentId}`, newStudent);
                if (response.status === 200) {
                    setStudents(
                        students.map((student) =>
                            student.userId === editingStudentId ? response.data : student
                        )
                    );
                }
            } else {
                // Add new student
                const response = await axios.post('http://localhost:5000/api/students/register', newStudent);
                if (response.status === 201) {
                    setStudents([...students, response.data]);
                }
            }

            // Reset form and state after adding/updating
            setNewStudent({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                country: '',
                date_of_birth: '',
                gender: '',
                academic_level: '',
                language: '',
            });
            setEditingStudentId(null);
        } catch (error) {
            console.error('Error registering/updating student:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleDeleteStudent = async (studentId) => {
        try {
            await axios.delete(`http://localhost:5000/api/students/delete/${studentId}`);
            setStudents(students.filter((student) => student.userId !== studentId));
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    const handleEditStudent = (student) => {
        setNewStudent({
            firstName: student.firstName,
            lastName: student.lastName,
            phone: student.phone,
            email: student.email,
            country: student.country,
            date_of_birth: student.date_of_birth,
            gender: student.gender,
            academic_level: student.academic_level,
            language: student.language,
        });
        setEditingStudentId(student.userId);
    };

    return (
        <Container fluid className="admin-dashboard">
            <h1 className="text-center my-4">{t('Students Dashboard')}</h1>

            {/* Students List */}
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>{t('First Name')}</th>
                                <th>{t('Last Name')}</th>
                                <th>{t('Phone')}</th>
                                <th>{t('Email')}</th>
                                <th>{t('Actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={student.userId}>
                                    <td>{index + 1}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.userId ? student.userId.email : 'N/A'}</td>

                                    <td>
                                        <Button
                                            variant="warning"
                                            onClick={() => handleEditStudent(student)}
                                            className="me-2"
                                        >
                                            {t('Edit')}
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDeleteStudent(student.userId)}
                                        >
                                            {t('Delete')}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Register or Edit Student */}
            <Row className="mt-4">
                <Col md={6} className="offset-md-3">
                    <h3>{editingStudentId ? t('Edit Student') : t('Register New Student')}</h3>
                    <Form onSubmit={handleRegisterStudent}>
                        <Form.Group>
                            <Form.Label>{t('First Name')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName" // Update to match backend
                                value={newStudent.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Last Name')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName" // Update to match backend
                                value={newStudent.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Phone')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={newStudent.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Email')}</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={newStudent.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>



                        <Button type="submit" className="mt-3" disabled={loading}>
                            {loading
                                ? t(editingStudentId ? 'Updating...' : 'Registering...')
                                : t(editingStudentId ? 'Update Student' : 'Register Student')}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default StudentsDashboard;
