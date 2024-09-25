import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './style.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
  };

  // SweetAlert for showing error messages
  const showAlert = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Input',
      text: message,
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      showAlert('Please enter a valid email address');
      valid = false;
    }

    if (password.length < 6) {
      showAlert('Password must be at least 6 characters long');
      valid = false;
    }

    if (valid) {
      setFormValid(true);
      // Proceed with form submission (API call or other action)
      console.log('Form submitted:', { email, password });
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Form submitted successfully!',
      });
    }
  };

  return (
    <section className="register">
      <div className="container-fluid">
        <div className="sign_content">
          <div className="logo">
            <a href="/">
              <img src="./images/logo.png" alt="Logo" />
              <div className="logo_title">
                <h1> Private Teacher</h1>
                <h3>Your best choice</h3>
              </div>
            </a>
          </div>
          <h4>Login</h4>

          <form onSubmit={handleSubmit} method="POST">
            <div className="row text-center">
              <div className="col-lg-12">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-secondary active student-btn">
                    <input type="radio" name="type" id="option2" value="1" autoComplete="off" defaultChecked /> Student
                  </label>
                  <label className="btn btn-secondary teacher-btn">
                    <input type="radio" name="type" id="option1" value="2" autoComplete="off" /> Teacher
                  </label>
                </div>
              </div>
            </div>
            <br />

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
              />
              <span className="fa fa-envelope"></span>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <span className="fa fa-lock"></span>
            </div>

            <div className="form-group">
              <label>
                <input type="checkbox" name="remember" className="form-control" /> Remember me
              </label>
            </div>

            <div className="form-group">
              <input type="submit" className="btn" value="Login" />
            </div>
          </form>

          <h6>
            You do not have an account |{' '}
            <a href="/StudentRegister">Register as a student</a> |{' '}
            <a href="/TeacherRegister">Register as teacher</a>
          </h6>
        </div>
      </div>
    </section>
  );
}