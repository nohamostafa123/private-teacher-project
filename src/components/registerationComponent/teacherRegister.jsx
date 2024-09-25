import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';
import './style.css';

export default function TeacherRegister() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    teacher_desc: '',
    password: '',
    repassword: '',
    subject_id: '',
    remember: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const { first_name, last_name, email, phone, teacher_desc, password, repassword, subject_id } = formData;

    if (!first_name || !last_name) {
      Swal.fire('Error', 'First and Last names are required', 'error');
      return false;
    }

    const emailPattern =/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!email || !emailPattern.test(email)) {
      Swal.fire('Error', 'Please enter a valid email address', 'error');
      return false;
    }

    if (!phone || phone.length < 10) {
      Swal.fire('Error', 'Please enter a valid phone number (at least 10 digits)', 'error');
      return false;
    }

    if (!teacher_desc) {
      Swal.fire('Error', 'Please enter a description', 'error');
      return false;
    }

    if (subject_id === '') {
      Swal.fire('Error', 'Please select a subject', 'error');
      return false;
    }

    if (!password || password.length < 6) {
      Swal.fire('Error', 'Password must be at least 6 characters', 'error');
      return false;
    }

    if (password !== repassword) {
      Swal.fire('Error', 'Passwords do not match', 'error');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, submit the form (this would be a place to send data to a backend)
      Swal.fire('Success', 'Registration successful!', 'success');
    }
  };

  return (
    <section className="register">
      <div className="container-fluid">
        <div className="sign_content">
          <div className="logo">
            <a href="#">
              <img src="./images/logo.png" alt="Logo" />
              <div className="logo_title">
                <h1>Private Teacher</h1>
                <h3>Your best choice</h3>
              </div>
            </a>
          </div>
          <h4>Register as a teacher</h4>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
              <span className="fa fa-user"></span>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="last_name"
                className="form-control"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
              <span className="fa fa-user"></span>
            </div>

            <div className="form-group">
              <select
                className="form-control"
                name="subject_id"
                required
                value={formData.subject_id}
                onChange={handleInputChange}
              >
                <option disabled value="">
                  اختار اسم المادة 
                </option>
                <option value="2" style={{ backgroundColor: '#1B62A4' }}>
                  Arabic
                </option>
                <option value="26" style={{ backgroundColor: '#1B62A4' }}>
                Biology
                </option>
                <option value="25" style={{ backgroundColor: '#1B62A4' }}>
                Chemistry
                </option>
                <option value="3" style={{ backgroundColor: '#1B62A4' }}>
                English
                </option>
                <option value="23" style={{ backgroundColor: '#1B62A4' }}>
                French
                </option>
                <option value="7" style={{ backgroundColor: '#1B62A4' }}>
                geography
                </option>
                <option value="8" style={{ backgroundColor: '#1B62A4' }}>
                History
                </option>
                <option value="6" style={{ backgroundColor: '#1B62A4' }}>
                Math
                </option>
                <option value="28" style={{ backgroundColor: '#1B62A4' }}>
                Philosophy
                </option>
                <option value="24" style={{ backgroundColor: '#1B62A4' }}>
                Physics
                </option>
                <option value="27" style={{ backgroundColor: '#1B62A4' }}>
                Psychology
                </option>
                <option value="5" style={{ backgroundColor: '#1B62A4' }}>
                Science
                </option>
                {/* Add other subjects here */}
              </select>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span className="fa fa-envelope"></span>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
              />
              <span className="fa fa-phone"></span>
            </div>

            <div className="form-group">
              <textarea
                name="teacher_desc"
                required
                className="form-control"
                rows="5"
                placeholder="Your description"
                value={formData.teacher_desc}
                onChange={handleInputChange}
              ></textarea>
              <span className="fa fa-address-book"></span>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <span className="fa fa-lock"></span>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="repassword"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.repassword}
                onChange={handleInputChange}
              />
              <span className="fa fa-lock"></span>
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="remember"
                  className="form-control"
                  checked={formData.remember}
                  onChange={handleInputChange}
                />
                Remember me
              </label>
            </div>

            <div className="form-group">
              <input type="submit" className="btn" value="Register" />
            </div>
          </form>

          <h6>
            I already have an account <a href="/">Login</a>
          </h6>
        </div>
      </div>
    </section>
  );
}