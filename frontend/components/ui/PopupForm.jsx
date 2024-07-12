import React from 'react';
import './popupForm.css';

const PopupForm = ({ isOpen, onClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/sendEmail', { // Updated URL to point to the Node.js server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        // Add your success handling code here
      } else {
        console.error('Failed to send email');
        // Add your error handling code here
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Add your error handling code here
    }

    document.getElementById("customForm").style.display = "none";
    var animationContainer = document.getElementById("animationContainer");
    animationContainer.style.display = "block";
    document.getElementById("modalContent").classList.add("fold-and-fly");

    setTimeout(function() {
      document.getElementById("envelope").classList.add("show-envelope");
    }, 1000); // Delay to match the fold animation

    setTimeout(function() {
      onClose();
      resetForm();
    }, 3000); // Adjust the timeout duration as needed
  };

  const resetForm = () => {
    document.getElementById("customForm").reset();
    document.getElementById("customForm").style.display = "block";
    document.getElementById("animationContainer").style.display = "none";
    document.getElementById("envelope").classList.remove("show-envelope");
    document.getElementById("modalContent").classList.remove("fold-and-fly");
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content" id="modalContent">
          <span className="close" onClick={onClose}>&times;</span>
          <h2 className="text-xl font-semibold mb-4 text-center text-white">Submit Your Details</h2>
          <div className="animation-container hidden" id="animationContainer">
            <div className="envelope" id="envelope"></div>
          </div>
          <form id="customForm" className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input type="mobile" id="mobile" name="mobile" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
