import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MyNav.css';
import bcrypt from 'bcryptjs';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faUser, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const MyNav = ({ isAuthenticated }) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Use state for userId
  const navigate = useNavigate();
  const hashedPassword = '$2a$10$ZJPqbnE1v8E5UnBG3SyxyOkNPqGlhJPyjLDswDZCBnAE9gogBFwBO';

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('loggedIn');
    setIsLoggedIn(!!userLoggedIn);
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    // Update userId when isLoggedIn changes
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userId'); // Remove userId on logout
    setIsLoggedIn(false);
    setUserId(null);
  };
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
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  const handleAdminAccess = async (e) => {
    e.preventDefault();
    const { value: password } = await Swal.fire({
      title: 'Enter Admin Password',
      input: 'password',
      inputLabel: 'Please enter the admin password',
      inputPlaceholder: 'Enter your password',
      showCancelButton: true,
      confirmButtonText: 'Enter',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'custom-confirm',
      },
    });

    if (password) {
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      if (passwordMatch) {
        navigate('/AdminDashboard');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Incorrect Password',
          text: 'Access denied.',
          customClass: {
            confirmButton: 'custom-confirm',
          },
        });
      }
    }
  };

  return (
    <section className="header">
      <div className="container-fluid">
        <div className="navigation">
          <div className="row">
            <div className="col-md-2 col-sm-6 col-xs-6">
              <div className="d-inline-flex row-md-2 row-sm-6">
                <div className="d-inline-flex logo">
                  <Link to="/">
                    <img src="./images/logo.png" alt="Logo" />
                    <div className="logo_title">
                      <h1>Private Teacher</h1>
                      <h3>Your best choice</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-sm-6 col-xs-6">
              <FontAwesomeIcon icon={faBars} className="clicker fa-2x" />
              <div className="header_top hidden-sm hidden-xs right">
                <ul className="list-inline right">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link to={`/profile/${userId}`}>
                          <FontAwesomeIcon icon={faUser} /> Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/Login" onClick={handleLogout}>
                          <FontAwesomeIcon icon={faSignOutAlt} /> Log out
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login">
                          <FontAwesomeIcon icon={faUser} /> Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/StudentRegister">
                          <FontAwesomeIcon icon={faUser} /> Register as Student
                        </Link>
                      </li>
                    </>
                  )}
                </ul>

                <ul className="social-icons left">
                  <li className="dropdown" onClick={toggleSubmenu} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faGlobe} /> English |
                    <div id="lan_sub" className={`sub_menu ${isSubmenuVisible ? 'visible' : ''}`}>
                      <ul>
                        <li>
                          <a href="#">اللغة العربية</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="fab">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className="fab">
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="fab">
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="fab">
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="header_top" style={{ border: 'none', height: '6px', backgroundColor: 'darkblue', margin: '20px 0', color: 'blue' }} />

              <div id="body-overlay" className="opacity"></div>
            </div>

            <div className="header_top col-md-2 col-sm-12 col-xs-12 hidden-sm hidden-xs">
              <div className="contact">
                <i className="fa fa-envelope m-3"></i>
                <div>
                  <h1>Contact us</h1>
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
        <a className="closebtn" onClick={closeNav}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <img src="./images/logo.png" alt="Logo" style={{ textAlign: 'center', marginLeft: '100px' }} />
        <Link to="/">Home <span>+</span></Link>
        <Link to="/AboutApp">About <span>+</span></Link>
        <Link to="/TeacherApp">Teachers <span>+</span></Link>
        <Link to="/ContactApp">Contact <span>+</span></Link>
        <Link to="/Login">Login <span>+</span></Link>
        <Link to="/StudentRegister">Register as a Student <span>+</span></Link>
        <Link to="/TeacherRegister">Register as a Teacher <span>+</span></Link>
        <a onClick={handleAdminAccess}>Admin DashBoard <span>🔐</span></a>
      </div>

      {showToggle && !sideNavOpen && (
        <div className="menu-toggle" onClick={openNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
    </section>
  );
};

export default MyNav;
