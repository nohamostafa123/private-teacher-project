import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './MainHero.css'; // Import your custom styles
import './MyNav.css';
import { useTranslation } from 'react-i18next';

const MainHero = () => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <>
      <section className="hero">
        <div className="bg_container">
          <div className="subnav">
            <ul className="subnav-list">
              <li className="subnav-item">
                <a href="/">{t('Home')} +</a>
              </li>
              <li className="subnav-item">
                <a href="/AboutApp">{t('About')} +</a>
              </li>
              <li className="subnav-item">
                <a href="/TeacherApp">{t('Teacher')} +</a>
              </li>
              <li className="subnav-item">
                <a href="/ContactApp">{t('Contact')} +</a>
              </li>
            </ul>
            <Button href="/TeacherRegister" className="register-btn">
              {t('registerTeacher')}
            </Button>
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
          <div className="text-center">
            <h1 className='mb-3'>{t('looking_for_teacher')}</h1>
            <h3>{t('welcome_message')}</h3>
          </div>

          <Form className="row mx-auto">
            {/* Input for search */}
            <Col md={6} className="form-group position-relative">
              <Form.Control
                type="text"
                name="keywords"
                placeholder={t('search_placeholder')}
                className="form-control"
              />
              <img src="./images/search.png" className="form-icon" alt="Search Icon" />
            </Col>

            {/* City Selection Dropdown */}
            <Col md={6} className="form-group position-relative ">
              <Form.Select name="city_id" className="no-border" required>
                <option value="35">{t('City')}</option>
                <option value="35">{t('Aswan')}</option>
                <option value="30">{t('Asyut')}</option>
                <option value="29">{t('Alexandria')}</option>
                <option value="36">{t('Luxor')}</option>
                <option value="28">{t('Giza')}</option>
                <option value="40">{t('Zagazig')}</option>
                <option value="41">{t('Suez')}</option>
                <option value="42">{t('Fayoum')}</option>
                <option value="27">{t('Cairo')}</option>
                <option value="47">{t('Qalyubia')}</option>
                <option value="32">{t('Mansoura')}</option>
                <option value="46">{t('Menofia')}</option>
              </Form.Select>
              <img src="./images/location.png" className="form-icon" alt="Location Icon" />
            </Col>

            {/* Subject Selection */}
            <div className="form-group d-flex align-items-center position-relative">
              <Form.Select name="subjects[]" className="no-border" required>
                <option value="">{t('Category')}</option>
                <option value="26">{t('Biology')}</option>
                <option value="8">{t('History')}</option>
                <option value="7">{t('Geography')}</option>
                <option value="6">{t('Math')}</option>
                <option value="5">{t('Science')}</option>
                <option value="28">{t('Philosophy')}</option>
                <option value="24">{t('Physics')}</option>
                <option value="25">{t('Chemistry')}</option>
                <option value="3">{t('English')}</option>
                <option value="23">{t('French')}</option>
                <option value="2">{t('Arabic')}</option>
                <option value="27">{t('Psychology')}</option>
              </Form.Select>
              <img src="./images/teacher_1.png" className="form-icon" alt="Subject Icon" />
            </div>

            {/* Submit Button */}
            <Col xs={12} className="form-group">
              <Button type="submit" className="btn btn-primary w-100">
                {t('Search')}
              </Button>
            </Col>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default MainHero;