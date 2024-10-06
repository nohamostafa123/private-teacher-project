import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './TeacherHero.css';
import '../mainComponent/MainHero.css';
class TeacherHero extends React.Component {
  render() {
    return (

      <section className="hero hh">
        <div className="bg_container">
          <div className="subnav">
            <ul className="subnav-list">
              <li className="subnav-item">
                <a href="/">Home +</a>
              </li>
              <li className="subnav-item">
                <a href="/AboutApp">About +</a>
              </li>
              <li className="subnav-item">
                <a href="/TeacherApp">Teacher +</a>
              </li>
              <li className="subnav-item">
                <a href="/ContactApp">Contact +</a>
              </li>
            </ul>
            <Button href="/TeacherRegister" className="register-btn">Register As Teacher</Button>
          </div>
          <img src="./images/heros.png" className="bg" alt="Hero Background" />
        </div>

        <Container fluid className="about-section">
          <h1 className="about-title">Teachers</h1>
          <ul className="list-inline ull">
            <li className="lii">
              <a className="aa" href="/">Home</a>
            </li>
            <li className="lii">
              <span className="dot"></span>
              <a className="aa">Teachers</a>
            </li>
          </ul>
        </Container>

      </section>
    );
  }
}

export default TeacherHero;