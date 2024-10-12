import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'admin123'; // Set your desired password here

  const handlePasswordPrompt = () => {
    Swal.fire({
      title: 'Enter Admin Password',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      // Custom class for the buttons
      customClass: {
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
      },
      // Callback to handle the password check
      preConfirm: (password) => {
        if (password === correctPassword) {
          setIsAuthenticated(true);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Incorrect password!',
            text: 'Please try again.',
            customClass: {
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button',
      },
          });
        }
      },
    });
  };

  // Prompt for password if the user is not authenticated
  if (!isAuthenticated) {
    handlePasswordPrompt();
    return null;
  }

  // If authenticated, return the component
  return <Component {...rest} />;
};

// Inline styles for SweetAlert buttons
const confirmButtonStyle = {
  backgroundColor: '#03519C', // Green color for confirm button
  color: 'white',
  borderRadius: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
};

const cancelButtonStyle = {
  backgroundColor: 'gray', // Red color for cancel button
  color: 'white',
  borderRadius: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
};

// Add a custom class to the Swal button using inline styles
const addStylesToPage = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .custom-confirm-button {
      background-color: ${confirmButtonStyle.backgroundColor};
      color: ${confirmButtonStyle.color};
      border-radius: ${confirmButtonStyle.borderRadius};
      padding: ${confirmButtonStyle.padding};
      font-size: ${confirmButtonStyle.fontSize};
      border: ${confirmButtonStyle.border};
    }
    .custom-cancel-button {
      background-color: ${cancelButtonStyle.backgroundColor};
      color: ${cancelButtonStyle.color};
      border-radius: ${cancelButtonStyle.borderRadius};
      padding: ${cancelButtonStyle.padding};
      font-size: ${cancelButtonStyle.fontSize};
      border: ${cancelButtonStyle.border};
    }
  `;
  document.head.appendChild(style);
};

// Ensure styles are applied before rendering the component
addStylesToPage();

export default ProtectedRoute;