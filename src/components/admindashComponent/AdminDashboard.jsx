import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import './AdminDashboard.css'; 
import { useTranslation } from 'react-i18next';

const AdminDashboard = () => {
  const { t, i18n } = useTranslation();
  const initialCategories = [
    { name: 'Arabic', teacherCount: 66, imgSrc: './images/عربي.jpeg', delay: '0.15s' },
    { name: 'Biology', teacherCount: 90, imgSrc: './images/احياء.jpeg', delay: '0.35s' },
    { name: 'Chemistry', teacherCount: 70, imgSrc: './images/كيمياء.jpeg', delay: '0.15s' },
    { name: 'English', teacherCount: 80, imgSrc: './images/انجليزي.png', delay: '0.75s' },
    { name: 'French', teacherCount: 50, imgSrc: './images/فرنساوى.jpeg', delay: '0.15s' },
    { name: 'Geography', teacherCount: 55, imgSrc: './images/جغرافيا.jpeg', delay: '0.15s' },
    { name: 'History', teacherCount: 40, imgSrc: './images/تاريخ.jpeg', delay: '0.15s' },
    { name: 'Math', teacherCount: 70, imgSrc: './images/رياضة.jpeg', delay: '0.15s' },
    { name: 'Philosophy', teacherCount: 60, imgSrc: './images/فلسفه.jpeg', delay: '0.15s' },
    { name: 'Physics', teacherCount: 90, imgSrc: './images/فزيا.jpeg', delay: '0.15s' },
    { name: 'Psychology', teacherCount: 15, imgSrc: './images/علم النفس.jpeg', delay: '0.15s' },
    { name: 'Science', teacherCount: 50, imgSrc: './images/علوم.jpeg', delay: '0.15s' },
  ];
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : initialCategories;
  });
  
  const [newCategory, setNewCategory] = useState({ name: '', teacherCount: 0, imgSrc: '' });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.name && newCategory.teacherCount && newCategory.imgSrc) {
      setCategories([...categories, { ...newCategory, teacherCount: Number(newCategory.teacherCount), delay: '0.15s' }]);
      setNewCategory({ name: '', teacherCount: 0, imgSrc: '' });
      setImagePreview(null); 
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewCategory({ ...newCategory, imgSrc: reader.result }); // Update the new category with the image source
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container fluid className="admin-dashboard">
      <h1 className="text-center my-4">{t('Admin Dashboard')}</h1>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>{t('Subject Name')}</th>
                <th>{t('Teacher Count')}</th>
                <th>{t('Image')}</th>
                <th>{t('Actions')}</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.teacherCount}</td>
                  <td>
                    <img src={category.imgSrc} alt={category.name} style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleDeleteCategory(index)}>{t('Delete')}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="offset-md-3">
          <h3>{t('Add New Subject')}</h3>
          <Form onSubmit={handleAddCategory}>
            <Form.Group>
              <Form.Label>{t('Subject Name')}</Form.Label>
              <Form.Control
                type="text"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                placeholder={t('Enter subject name')}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t('Teacher Count')}</Form.Label>
              <Form.Control
                type="number"
                value={newCategory.teacherCount}
                onChange={(e) => setNewCategory({ ...newCategory, teacherCount: e.target.value })}
                placeholder="Enter teacher count"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{t('Upload Image')}</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} required />
            </Form.Group>

            {imagePreview && (
              <div className="mt-3">
                <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px' }} />
              </div>
            )}

            <Button type="submit" className="mt-3">{t('Add Subject')}</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;