import { Box } from "@mui/material";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";  // Keep LinkedIn and Instagram icons as they are

const Footer = () => {
  return (
    <Box sx={footerContainer}>
      <div style={styles.leftText}>
        © 2024 OnGraph. All Rights Reserved.
      </div>

      <div style={styles.centerLinks}>
        <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
      </div>

      <div style={styles.socialIcons}>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaLinkedin size={24} />
        </a>

        {/* Instagram Icon */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaInstagram size={24} />
        </a>

        {/* Glassdoor Logo using external URL */}
        <a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/glassdoor-icon.png" alt="Glassdoor" style={styles.iconImage} />
        </a>

        {/* AmbitionBox Logo using external URL */}
        <a href="https://www.ambitionbox.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <img src="https://cdn-1.webcatalog.io/catalog/ambitionbox/ambitionbox-icon-filled-256.png" alt="AmbitionBox" style={styles.iconImage} />
        </a>
      </div>
    </Box>
  );
};

const footerContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: { xs: "column", sm: "row" },
  rowGap: { xs: 2, sm: 0 },
  padding: '10px 20px',
  backgroundColor: '#f1f1f1',
  borderTop: '1px solid #e7e7e7',
}
const styles = {
  leftText: {
    fontSize: '14px',
    color: '#333',
  },
  centerLinks: {
    fontSize: '14px',
    color: '#333',
    display: 'flex',
    gap: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    padding: '0 5px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  iconLink: {
    color: '#333',
    textDecoration: 'none',
  },
  iconImage: {
    width: '30px',
    height: '30px',
  },
};

export default Footer;