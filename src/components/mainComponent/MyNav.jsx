import React, { useState, useEffect } from 'react';
import './MyNav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faGlobe, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
/* eslint-disable*/




const MyNave = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(true);


  const openNav = () => {
    setSideNavOpen(true);
    setShowToggle(false);
  };

  const closeNav = () => {
    setSideNavOpen(false);
    setShowToggle(true);
  };


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowToggle(false);
    } else {
      if (!sideNavOpen) {
        setShowToggle(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sideNavOpen]);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible); // Toggle submenu visibility
  };
  return (
    <section className="header">
      <div className="container-fluid">
        <div className="navigation">
          <div className="row">
            <div className="col-md-2 col-sm-6 col-xs-6">
              <div className="d-inline-flex row-md-2 row-sm-6">
                <div className="d-inline-flex logo">
                  <a href="#">
                    <img src="./images/logo.png" alt="Logo" />
                    <div className="logo_title">
                      <h1>Private Teacher</h1>
                      <h3>Your best choice</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-sm-6 col-xs-6 ">
              <FontAwesomeIcon icon={faBars} className="clicker fa-2x" />
              <div className="header_top hidden-sm hidden-xs right">
                <ul className="list-inline right">
                  <li>
                    <a href="/Login">
                      <FontAwesomeIcon icon={faUser} />| Login
                    </a>
                  </li>
                  <li>
                    <a href="/StudentRegister">
                      <FontAwesomeIcon icon={faUser} /> Register as Student
                    </a>
                  </li>
                </ul>
                <ul className="social-icons left">
                  <li className="dropdown" onClick={toggleSubmenu} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faGlobe} /> English |
                    <div id="lan_sub" className={`sub_menu ${isSubmenuVisible ? 'visible' : ''}`}>
                      <ul>
                        <li><a href="#">اللغة العربية</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='fab '><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  <li className='fab'><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li className='fab'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li className='fab'><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
              </div>
              <hr className="header_top" style={{ border: 'none', height: '6px', backgroundColor: 'darkblue', margin: '20px 0', color: 'blue' }} />

              <div id="body-overlay" className="opacity"></div>
            </div>

            <div className="header_top col-md-2 col-sm-12 col-xs-12 hidden-sm hidden-xs">
              <div class="contact ">
                <i class="fa fa-envelope  m-3"></i>
                <div>
                  <h1>contact us</h1>
                  <h3>info@tqniait.com</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <div id="overlay" className={sideNavOpen ? 'overlay-bg active' : 'overlay-bg'} onClick={closeNav}></div>

      <div id="mySidenav" className={`sidenav ${sideNavOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <img src="./images/logo.png" alt="Logo" style={{ textAlign: 'center', marginLeft: '100px' }} />
        <a href="/">Home <span>+</span></a>
        <a href="/AboutApp">About <span>+</span></a>
        <a href="/TeacherApp">Teachers <span>+</span></a>
        <a href="/ContactApp">Contact <span>+</span></a>
        <a href="/Login">Login <span>+</span></a>
        <a href="/StudentRegister">Register as a Student <span>+</span></a>
        <a href="/TeacherRegister">Register as a Teacher <span>+</span></a>
      </div>

      {/* The toggle button */}
      {showToggle && !sideNavOpen && (
        <div className="menu-toggle" onClick={openNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
    </section>
  );
};

export default MyNave;
