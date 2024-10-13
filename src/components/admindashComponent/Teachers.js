import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import './AdminDashboard.css';
import { useTranslation } from 'react-i18next';

const TeachersDashboard = () => {
    const { t } = useTranslation();
    const [teachers, setTeachers] = useState([]);
    const [newTeacher, setNewTeacher] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        subject: '',
    });
    const [editingTeacherId, setEditingTeacherId] = useState(null); // Track if updating a teacher
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/teachers/list');
            setTeachers(response.data);
        } catch (error) {
            console.error('Error fetching teachers:', error);
        }
    };

    const handleRegisterTeacher = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (editingTeacherId) {
                // Update Teacher
                const response = await axios.put(`http://localhost:5000/api/teachers/update/${editingTeacherId}`, newTeacher);
                console.log('Update Response:', response.data); // Log response for debugging

                if (response.status === 200) {
                    setTeachers(
                        teachers.map((teacher) =>
                            teacher.userId === editingTeacherId ? response.data : teacher // Update to use userId
                        )
                    );
                }
            } else {
                // Add new teacher
                const response = await axios.post('http://localhost:5000/api/teachers/register', newTeacher);
                console.log('Register Response:', response.data); // Log response for debugging

                if (response.status === 201) {
                    setTeachers([...teachers, response.data]);
                }
            }

            // Reset form and state after adding/updating
            setNewTeacher({
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                password: '',
                subject: '',
            });
            setEditingTeacherId(null);
        } catch (error) {
            console.error('Error registering/updating teacher:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTeacher({ ...newTeacher, [name]: value });
    };

    const handleDeleteTeacher = async (teacherId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/teachers/delete/${teacherId}`);
            console.log('Delete Response:', response.data); // Log response for debugging

            setTeachers(teachers.filter((teacher) => teacher.userId !== teacherId)); // Filter by the correct ID
        } catch (error) {
            console.error('Error deleting teacher:', error);
        }
    };

    const handleEditTeacher = (teacher) => {
        setNewTeacher({
            first_name: teacher.first_name,
            last_name: teacher.last_name,
            phone: teacher.phone,
            email: teacher.userId ? teacher.userId.email : '',
            password: '', // Leave this out or handle password reset differently
            subject: teacher.subject,
        });
        setEditingTeacherId(teacher.userId); // Set the editing ID to the correct userId
    };

    return (
        <Container fluid className="admin-dashboard">
            <h1 className="text-center my-4">{t('Teachers Dashboard')}</h1>

            {/* Teachers List */}
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
                                <th>{t('Subject')}</th>
                                <th>{t('Actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher, index) => (
                                <tr key={teacher.userId}>
                                    <td>{index + 1}</td>
                                    <td>{teacher.first_name}</td>
                                    <td>{teacher.last_name}</td>
                                    <td>{teacher.phone}</td>
                                    <td>{teacher.userId ? teacher.userId.email : 'N/A'}</td>
                                    <td>{teacher.subject}</td>
                                    <td>
                                        <Button
                                            variant="warning"
                                            onClick={() => handleEditTeacher(teacher)}
                                            className="me-2"
                                        >
                                            {t('Edit')}
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDeleteTeacher(teacher.userId)} // Use the correct userId for deletion
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

            {/* Register or Edit Teacher */}
            <Row className="mt-4">
                <Col md={6} className="offset-md-3">
                    <h3>{editingTeacherId ? t('Edit Teacher') : t('Register New Teacher')}</h3>
                    <Form onSubmit={handleRegisterTeacher}>
                        <Form.Group>
                            <Form.Label>{t('First Name')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="first_name"
                                value={newTeacher.first_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Last Name')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="last_name"
                                value={newTeacher.last_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Phone')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={newTeacher.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Email')}</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={newTeacher.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Password')}</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={newTeacher.password}
                                onChange={handleInputChange}
                                required={!editingTeacherId} // Required only for new teacher
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('Subject')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="subject"
                                value={newTeacher.subject}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-3" disabled={loading}>
                            {loading
                                ? t(editingTeacherId ? 'Updating...' : 'Registering...')
                                : t(editingTeacherId ? 'Update Teacher' : 'Register Teacher')}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default TeachersDashboard;
