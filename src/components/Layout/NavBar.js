import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './NavBar.css';
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // These are the missing state variables for showing/hiding the cards
  const [showCard, setShowCard] = useState(false);
  const [showAppContent, setShowAppContent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const navigate = useNavigate();

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    if (value !== "home") {
      navigate(`/${value}`);
    } else {
      navigate(`/`);
    }
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('contact')}>
              Contact Us
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'why-haspper' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('why-haspper')}>
              Why Haspper
            </Nav.Link>

            {/* Solutions Section */}
            <div
              className="solutions-wrapper"
              onMouseEnter={() => setShowCard(true)}
              onMouseLeave={() => setShowCard(false)}
              style={{ position: 'relative' }}
            >
              <Nav.Link className={activeLink === 'solutions' ? 'active navbar-link' : 'navbar-link'}>
                Solutions
              </Nav.Link>
              {showCard && (
                <div className="solutions-card-container">
                  <div className="solutions-card">
                    <div className="solutions-column">
                      <h3>INDUSTRIES WE SERVE</h3>
                      <p>HTML</p>
                      <p>Market Research</p>
                      <p>Banking</p>
                      <p>Food</p>
                      <p>Telecom</p>
                      <p>E-Learning</p>
                      <p>Fitness</p>
                      <p>Media and Entertainment</p>
                    </div>
                    <div className="solutions-column">
                      <h3>SOLUTIONS</h3>
                      <p>Technical & Operations Staffing</p>
                      <p>Software Support</p>
                      <p>Enterprise Product</p>
                      <p>Artificial Intelligence</p>
                      <p>Blockchain</p>
                      <p>Marketplace</p>
                      <p>Cloud Computing</p>
                      <p>Chatbot</p>
                      <p>Voicebot</p>
                    </div>
                    <div className="solutions-column">
                      <h3>WHITE LABEL SOLUTIONS</h3>
                      <p>Project Management</p>
                      <p>Panel Management Tool</p>
                      <p>Food Delivery Application</p>
                      <p>Home Services Application</p>
                      <p>Taxi Application</p>
                      <p>Data Application</p>
                      <p>OTT Application</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Section */}
            <div
              className="services-wrapper"
              // onMouseEnter={() => setShowAppContent(true)}
              // onMouseLeave={() => setShowAppContent(false)}
              style={{ position: 'relative' }}
            >

              <Tooltip
                placement="bottom-start"
                slotProps={{
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: '34px',
                      },
                    },
                  },
                  tooltip: {
                    sx: tooltipStyle,
                  },
                }}
                title={
                  <Box>
                    <Grid container>
                      <Grid size={3}>
                        <Box sx={{
                          rowGap: 4
                        }}>

                          <Box sx={{
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                            height: 100,
                            width: 100
                          }}>
                          </Box>
                          <Box sx={{
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                            height: 100,
                            width: 100
                          }}>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid size={3}>
                        <Box sx={{ width: "100%" }}>
                          {mobileServicesData.map((data, index) => (
                            <Link to={data.link} target="_blank" style={{ textDecoration: "none" }}>
                              <Typography
                                key={index}
                                sx={
                                  data.type === "heading" ? headingStyle : subHeadingStyle
                                }>
                                {data.name}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                      </Grid>
                      <Grid size={3}>
                        <Box sx={{ width: "100%" }}>
                          {mobileServicesData.map((data, index) => (
                            <Typography
                              key={index}
                              sx={
                                data.type === "heading" ? headingStyle : subHeadingStyle
                              }>
                              {data.name}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                      <Grid size={3}>
                        <Box sx={{ width: "100%" }}>
                          {mobileServicesData.map((data, index) => (
                            <Typography
                              key={index}
                              sx={
                                data.type === "heading" ? headingStyle : subHeadingStyle
                              }>
                              {data.name}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                }
              >
                <Nav.Link className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}>
                  Services
                </Nav.Link>
              </Tooltip>
              {showAppContent && (
                <div className="services-content-container">
                  <div className="services-container">
                    <div className="left-section">
                      <h1>APP DEVELOPMENT</h1>
                      <h2>WEB APP DEVELOPMENT</h2>
                      <h3>STARTUP IT SOLUTIONS</h3>
                      <h4>ENTERPRISE IT SOLUTIONS</h4>
                      <h5>MARKET RESEARCH SOFTWARE DEVELOPMENT</h5>
                    </div>
                    <div className="right-section">
                      <ul>
                        <li>.Net</li>
                        <li>AWS</li>
                        <li>Java</li>
                        <li>AI/ML</li>
                        <li>React</li>
                        <li>Node.Js</li>
                        <li>Angular</li>
                        <li>Wordpress</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mobileServicesData = [
  {
    name: "App Development",
    link: "",
    type: "heading"
  },
  {
    name: "ios",
    link: "",
    type: "subHeading",
  },
  {
    name: "Android",
    link: "",
    type: "subHeading",
  },
  {
    name: "Flutter",
    link: "",
    type: "subHeading",
  },
  {
    name: "Cross Platform App Development",
    link: "",
    type: "heading",
  },
  {
    name: "React Native",
    link: "",
    type: "subHeading",
  },
  {
    name: "Ionic",
    link: "",
    type: "Flutter",
  },
  {
    name: "Startup IT Solutions",
    link: "",
    type: "heading",
  },
  {
    name: "Market Research Software Development",
    link: "",
    type: "heading",
  },
  {
    name: "Enterprise IT Solutions",
    link: "",
    type: "heading",
  },
]
const tooltipStyle = {
  color: "#000",
  backgroundColor: "#fff",
  fontSize: "2em",
  padding: "43px 40px 60px",
  borderRadius: "26px",
  maxWidth: "80vw",
  // zIndex: 100000
};
const headingStyle = {
  fontSize: 18,
  fontWeight: 600,
  color: "#333",
  my: 1.5,
  cursor: "pointer"
}
const subHeadingStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "#999",
  marginBottom: 0.5,
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
    color: "#c75425"
  }
}