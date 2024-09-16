import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Category.css'; // Import your custom styles

const Category = () => {
  return (
    <section className="category" id="category">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={10} sm={9} xs={9}>
            <div className="title">
              <span>Categories</span>
              <h1>Teachers Majors</h1>
              <hr />
            </div>
          </Col>
          <Col md={2} sm={3} xs={3} className="text-end">
            <Button className="more">All Categories</Button>
          </Col>
        </Row>

        <Row>
          {/* Category Items */}
          {categories.map((category, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <div
                className="block wow fadeIn"
                style={{
                  animationDelay: `${category.delay}`,
                  visibility: 'visible',
                  animationName: 'fadeIn',
                }}
              >
                <div className="img_container">
                  <img src={category.imgSrc} alt={category.name} />
                  <div className="img_overlay">
                    <div className="text center">
                      <h1>{category.name}</h1>
                      <h3>teachers {category.teacherCount}</h3>
                    </div>
                  </div>
                  <div className="hover">
                    <Button className="center btn" >Search</Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Col md={12} sm={12} xs={12} className="text-center">
          <Button className="more2">All Categories</Button>
        </Col>
      </Container>
    </section>
  );
};

// Array to hold category data
const categories = [
  {
    name: 'Arabic',
    teacherCount: 66,
    imgSrc: './images/عربي.jpeg',
    delay: '0.15s',
  },
  {
    name: 'Biology',
    teacherCount: 90,
    imgSrc: './images/احياء.jpeg',
    delay: '0.35s',
  },
  {
    name: 'Chemistry',
    teacherCount: 70,
    imgSrc: './images/كيمياء.jpeg',
    delay: '0.15s',
  },
  {
    name: 'English',
    teacherCount: 80,
    imgSrc: './images/انجليزي.png',
    delay: '0.75s',
  },
  {
    name: 'French',
    teacherCount: 50,
    imgSrc: './images/فرنساوى.jpeg',
    delay: '0.15s',
  },
  {
    name: 'Geography',
    teacherCount: 55,
    imgSrc: './images/جغرافيا.jpeg',
    delay: '0.15s',
  },
  {
    name: 'History',
    teacherCount: 40,
    imgSrc: './images/تاريخ.jpeg',
    delay: '0.15s',
  },
  {
    name: 'Math',
    teacherCount: 70,
    imgSrc: './images/رياضة.jpeg',
    delay: '0.15s',
  },
  {
    name: 'Philosophy',
    teacherCount: 60,
    imgSrc: './images/فلسفه.jpeg',
    delay: '0.15s',
  },
  {
    name: 'Physics',
    teacherCount: 90,
    imgSrc: './images/فزيا.jpeg',
    delay: '0.15s',
  },
  {
    name: 'Psychology',
    teacherCount: 15,
    imgSrc: './images/علم النفس.jpeg',
    delay: '0.15s',
  },
  {
    name: 'Science',
    teacherCount: 40,
    imgSrc: './images/علوم.jpeg',
    delay: '0.15s',
  },
];

export default Category;
