import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './MainHero.css'; // Import your custom styles
import './MyNav.css';
export default class MainHero extends Component {
  render() {
    return (
      <>
        <section className="hero">
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
              <Button href="/TeacherRegister" className="btn">Register As Teacher</Button>
            </div>


            <img src="./images/hero.png" className="bg" alt="Hero Background" />
            <img src="./images/hero_shape.png" className="hero_shape" alt="Hero Shape" />

            <div className="mouse">
              <a href="#category" className="scroll">
                <img src="./images/mouse.png" alt="Scroll Icon" />
              </a>
            </div>
          </div>

          <Container fluid className="wow fadeIn">
            <div className=" text-center">
              <h1>Are you looking for a teacher?</h1>
              <h3>You have just come to the right place, all you have to do is search here</h3>
            </div>


            <Form className="row mx-auto">
              {/* Input for search */}
              <Col md={6} className="form-group position-relative">
                <Form.Control
                  type="text"
                  name="keywords"
                  placeholder="Type Your Search Content"
                  className="form-control"
                />
                <img src="./images/search.png" className="form-icon" alt="Search Icon" />
              </Col>

              {/* City Selection Dropdown */}
              <Col md={6} className="form-group position-relative ">
                <Form.Select name="city_id" className='no-border' required >
                  <option value="35">City</option>
                  <option value="35">Aswan</option>
                  <option value="30">Asyut</option>
                  <option value="29">Alexandria</option>
                  <option value="36">Luxor</option>
                  <option value="28">Giza</option>
                  <option value="40">Zagazig</option>
                  <option value="41">Suez</option>
                  <option value="42">Fayoum</option>
                  <option value="27">Cairo</option>
                  <option value="47">Qalyubia</option>
                  <option value="32">Mansoura</option>
                  <option value="46">Menofia</option>
                </Form.Select>
                <img src="./images/location.png" className="form-icon" alt="Location Icon" />
              </Col>

              {/* Subject Selection */}
              <div className="form-group d-flex align-items-center position-relative">
                <Form.Select name="subjects[]" className='no-border' required>
                  <option value="">Category</option>
                  <option value="26">Biology</option>
                  <option value="8">History</option>
                  <option value="7">geography</option>
                  <option value="6">Math</option>
                  <option value="5">Science</option>
                  <option value="28">Philosophy</option>
                  <option value="24">Physics</option>
                  <option value="25">Chemistry</option>
                  <option value="3"> English</option>
                  <option value="23">French</option>
                  <option value="2">Arabic </option>
                  <option value="27">Psychology </option>
                </Form.Select>
                <img src="./images/teacher_1.png" className="form-icon" alt="Subject Icon" />
              </div>

              {/* Submit Button */}
              <Col xs={12} className="form-group">
                <Button type="submit" className="btn btn-primary w-100">
                  Search
                </Button>
              </Col>
            </Form>
          </Container>
        </section>
      </>
    )
  }
}
