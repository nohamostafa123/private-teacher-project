
import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './title.css'

export default class Title extends Component {
  render() {
    return (
      <>
      <section className="about_us ">
      <Container fluid>
        <div className="title">
          <span>Start with sefihat</span>
          <h1> About us</h1>
          <hr />
        </div>
        <Row >
        <Col md={5} sm={6} xs={12} className="pb-5">
            <img
              src="https://private-teacher.org/storage/app/public/about/bnpFskCR1dRJPKA09WkK1vvMuLI5jnjiJhFXDvkt.png"
              alt="نبذة عنا"
              className="img-fluid"
            />
          </Col>
          <Col md={7} sm={6} xs={12} >
            <h2>Teachers site is your ideal guide for choosing the best teachers</h2>
            <p>
            The private tutor site is one of the most pioneering sites in the field of education that add to the students a lot and a lot, so every student or parent can search for the right teacher in the material he desires through a large group of Cvs. provided on the site that help him make the most appropriate choice </p>
          </Col>
        </Row>
      </Container>
    </section>
      </>
    );
  }
}