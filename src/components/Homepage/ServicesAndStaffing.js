import React from 'react';
import { Container, Grid2 as Grid, Box } from "@mui/material";
import haspperLogo from "../../assets/img/haspperLogo.png"

const ServicesAndStaffing = () => {
  return (
    <>
      <Container sx={{ pb: 3 }}>
        <Grid container columnSpacing={{ sm: 3 }} rowGap={{ xs: 3, md: 0, margin: { md: '60px' } }}>
          <Grid size={{ xs: 12, sm: 7, md: 3 }}>
            <Box sx={haspperLogoBox}>
              <img
                className='logo-image'
                src={haspperLogo}
                alt="Haspper"
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 5,
                }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            {/* Services Column */}
            <div style={styles.column}>
              <h3 style={styles.heading}>Services</h3>
              <a href="/services/android-application-development" style={styles.link} target="_blank" rel="noopener noreferrer">Android</a>
              <a href="/services/ios-app-development" style={styles.link} target="_blank" rel="noopener noreferrer">iOS App Development</a>
              <a href="/services/python-development" style={styles.link} target="_blank" rel="noopener noreferrer">Python</a>
              <a href="/services/ionic-app-development" style={styles.link} target="_blank" rel="noopener noreferrer">Ionic App Development</a>
              <a href="" style={styles.link} target="_blank" rel="noopener noreferrer">Amazon Web Services</a>
              <a href="/services/nodejs-development" style={styles.link} target="_blank" rel="noopener noreferrer">NodeJs Development</a>
              <a href="" style={styles.link} target="_blank" rel="noopener noreferrer">Grails</a>
              <a href="" style={styles.link} target="_blank" rel="noopener noreferrer">Symfony</a>
              <a href="" style={styles.link} target="_blank" rel="noopener noreferrer">Selenium Automation</a>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            {/* Technology Column */}
            <div style={styles.column}>
              <h3 style={styles.heading}>Technology</h3>
              <a href="/services/block-chain" style={styles.link} target="_blank" rel="noopener noreferrer">Blockchain Development</a>
              <a href="/chatbot-development" style={styles.link} target="_blank" rel="noopener noreferrer">Chatbot Development</a>
              <a href="" style={styles.link} target="_blank" rel="noopener noreferrer">Cross Platform App Development</a>
              <a href="" style={styles.link} target="_blank" rel="noopener noreferrer">Ecommerce Development</a>
              <a href="/iot-development" style={styles.link} target="_blank" rel="noopener noreferrer">IoT Solutions</a>
              <a href="" style={styles.link} target="_blank" rel="noopener noreferrer">Enterprise IT Solutions</a>
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
const haspperLogoBox = {
  position: "relative",
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  minHeight: 148,
  ".logo-image": {
    width: { xs: "80% !important", sm: "80% !important", md: "100%" }
  },
  ":after": {
    content: "''",
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100vw",
    borderRadius: "0px 200px 200px 0px",
    boxShadow: "6px 10px 15px 0px #00000040",
    background: "#fff",
  }
}