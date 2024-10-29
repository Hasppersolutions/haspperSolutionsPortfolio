import React from 'react';
import './Mailus.css'; // Import the CSS file

export const Mailus = () => {
  const email = 'admin@haspper.com'; // Replace with your email

  return (
    <div className="email-container">
      <div className="icon-container">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
          alt="email icon"
          className="icon"
        />
      </div>
      <div className="text-container">
        <p className="title">EMAIL</p>
        <a href={`mailto:${email}`} className="email-link">
          {email}
        </a>
      </div>
    </div>
  );
};

export default Mailus;

