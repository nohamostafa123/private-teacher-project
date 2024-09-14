import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './MainHero.css'; // Import your custom styles
export default class MainHero extends Component {
  render() {
    return (
      <>
      <section className="hero">
      <div className="bg_container">
        <div className="subnav">
          <ul className="subnav-list">
            <li className="subnav-item">
              <a href="#">Home +</a>
            </li>
            <li className="subnav-item">
              <a href="#">About +</a>
            </li>
            <li className="subnav-item">
              <a href="#">Teacher +</a>
            </li>
            <li className="subnav-item">
              <a href="#">Contact +</a>
            </li>
            <li className="subnav-item">
              <Button className="btn">Register As Teacher</Button>
            </li>
          </ul>
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
        <div className="content text-center">
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
          <Col md={6} className="form-group position-relative">
            <Form.Select name="city_id" required>
              <option value="35">City</option>
              <option value="35">أسوان</option>
              <option value="30">أسيوط</option>
              <option value="29">الإسكندرية</option>
              <option value="36">الاقصر</option>
              <option value="28">الجيزة</option>
              <option value="40">الزقازيق</option>
              <option value="41">السويس</option>
              <option value="42">الفيوم</option>
              <option value="27">القاهرة</option>
              <option value="47">القليوبية</option>
              <option value="32">المنصورة</option>
              <option value="46">المنوفية</option>
            </Form.Select>
            <img src="./images/location.png" className="form-icon" alt="Location Icon" />
          </Col>

          {/* Subject Selection */}
          <div className="form-group d-flex align-items-center position-relative">
            <Form.Select name="subjects[]" required>
              <option value="">التخصص</option>
              <option value="26">الاحياء</option>
              <option value="8">التاريخ</option>
              <option value="7">الجغرافيا</option>
              <option value="6">الرياضيات</option>
              <option value="5">العلوم</option>
              <option value="28">الفلسفة</option>
              <option value="24">الفيزياء</option>
              <option value="25">الكيمياء</option>
              <option value="3">اللغة الأنجليزية</option>
              <option value="23">اللغة الفرنسية</option>
              <option value="2">اللغه العربية</option>
              <option value="27">علم النفس</option>
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
