import React, { useState } from 'react';
import './Conversation.css';

function Conversation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, to: 'admin@hassper.com' }), // Send email to admin@hassper.com
      });

      if (response.ok) {
        // Handle successful email send (e.g., display a success message)
        console.log('Email sent successfully!');
        setFormData({  // Clear the form after submission
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        // Handle email sending error
        console.error('Error sending email:', response.status);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Let's have a conversation today!</h1>
        <p>
          Our experts are available to discuss your requirements and to become
          your tech partner
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="What can we help you with? *"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      {/* Add any illustrations or additional elements to the right */}
    </div>
  );
}

export default Conversation;
