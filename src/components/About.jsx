import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <Container fluid>
        <Row>
          <Col md={7} sm={12}>
            <div className="title">
              <span>Start with Sfihat</span>
              <h1 style={{ fontFamily: 'system-ui' }}>
                Why do you choose Al Mudares Al Khosisi website?
              </h1>
              <hr />
            </div>
            <p>
              We in the private teacher site are keen to choose the best experiences provided through the
              teachers’ sifters, in order to provide a selection of the best educational cadres present in the
              educational field during the current period.
            </p>

            <div
              className="about_block wow fadeIn"
              data-wow-duration=".5s"
              data-wow-delay="0.15s"
              style={{ animationDuration: '0.5s', animationDelay: '0.15s', animationName: 'fadeIn' }}
            >
              <img src="./images/about-icon.png" alt="about-icon" />
              <div className="about_text">
                <h1>It is easy to find your desired tutor</h1>
                <p>It is easy to find your desired tutor.</p>
              </div>
            </div>
          </Col>

          <Col md={5} sm={12}>
            <img src="./images/about_img.png" className="about_img" alt="about" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
