import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Category.css';

const Category = ({ categories }) => {
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
          {categories.map((category, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <div className="block wow fadeIn" style={{ animationDelay: `${category.delay}`, visibility: 'visible', animationName: 'fadeIn' }}>
                <div className="img_container">
                  <img src={category.imgSrc} alt={category.name} />
                  <div className="img_overlay">
                    <div className="text center">
                      <h1>{category.name}</h1>
                      <h3>teachers {category.teacherCount}</h3>
                    </div>
                  </div>
                  <div className="hover">
                    <Button className="center btn">Search</Button>
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

export default Category;
