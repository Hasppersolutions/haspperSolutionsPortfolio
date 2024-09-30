import React from 'react';

const Android = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Android Development</h1>
      <p style={styles.description}>
        We specialize in Android app development, delivering cutting-edge solutions to bring your ideas to life on mobile devices.
      </p>
      <p style={styles.details}>
        Our experienced Android developers use the latest technologies and frameworks to create efficient, secure, and user-friendly applications that meet your business needs.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#007bff',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  details: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Android;
