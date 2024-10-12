import React from 'react';
import { Container, Grid2 as Grid } from "@mui/material"

const ServicesAndStaffing = () => {
  return (
    <>
      <Container sx={{ pb: 3 }}>
        <Grid container columnSpacing={{ sm: 3 }} rowGap={{ xs: 3, md: 0 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            {/* Services Column */}
            <div style={styles.column}>
              <h3 style={styles.heading}>Services</h3>
              <a href="/android" style={styles.link} target="_blank" rel="noopener noreferrer">Android</a>
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
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px',
    gap: '20px',
    marginLeft: '300px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    flex: '1',
    margin: '0 10px',
    minWidth: '200px',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#c75425',
  },
  link: {
    margin: '5px 0',
    fontSize: '0.9rem',
    color: '#c75425',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  'link:hover': {
    borderRadius: '5px',
  },
};

export default ServicesAndStaffing;
