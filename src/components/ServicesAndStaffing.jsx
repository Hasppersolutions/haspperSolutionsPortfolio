import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ServicesAndStaffing = () => {
  return (
    <div style={styles.container}>
      {/* Services Column */}
      <div style={styles.column}>
        <h3 style={styles.heading}>Services</h3>
        <Link to="/android" style={styles.link}>Android</Link>
        <p style={styles.link}>iOS App Development</p>
        <p style={styles.link}>Ruby on Rails</p>
        <p style={styles.link}>Python</p>
        <p style={styles.link}>Ionic App Development</p>
        <p style={styles.link}>Amazon Web Services</p>
        <p style={styles.link}>NodeJs Development Company</p>
        <p style={styles.link}>Grails</p>
        <p style={styles.link}>Symfony</p>
        <p style={styles.link}>Selenium Automation</p>
      </div>

      {/* Staffing Services Column */}
      <div style={styles.column}>
        <h3 style={styles.heading}>Staffing Services</h3>
        <p style={styles.link}>Hire Android Developer</p>
        <p style={styles.link}>Hire DevOps Developer</p>
        <p style={styles.link}>Hire iOS Developer</p>
        <p style={styles.link}>Hire PHP Developer</p>
        <p style={styles.link}>Hire Magento Developers</p>
        <p style={styles.link}>Hire NodeJS Developers</p>
        <p style={styles.link}>Hire ReactJS Developers</p>
        <p style={styles.link}>Hire Apple Watch Developers</p>
        <p style={styles.link}>Hire WordPress Developer</p>
        <p style={styles.link}>Hire React Native Developer</p>
      </div>

      {/* Technology Column */}
      <div style={styles.column}>
        <h3 style={styles.heading}>Technology</h3>
        <p style={styles.link}>Blockchain Development</p>
        <p style={styles.link}>Chatbot Development</p>
        <p style={styles.link}>Cross Platform App Development</p>
        <p style={styles.link}>eCommerce Development</p>
        <p style={styles.link}>IoT Solutions</p>
        <p style={styles.link}>Enterprise IT Solutions</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px',
    marginLeft: '300px',
  },
  column: {
    display: 'flex',
    flex: '1',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '0 10px',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#007bff',
  },
  link: {
    margin: '5px 0',
    fontSize: '0.9rem',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  'link:hover': {
    backgroundColor: '#e9ecef',
    borderRadius: '5px',
  },
};

export default ServicesAndStaffing;
