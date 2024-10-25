import React, { useState, useEffect } from "react";
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './NavBar.css';
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Grid2 as Grid,
  Typography,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { CloseRounded, MenuRounded, Remove, Add, HomeOutlined } from "@mui/icons-material";

export const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = useState(-1);

  // drawer onClick
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    if (expanded) setExpanded(false)
  };
  //accordion onChange
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  //   if (value !== "home") {
  //     navigate(`/${value}`);
  //   } else {
  //     navigate(`/`);
  //   }
  // }

  const handleNavigate = (link) => {
    if (open) setOpen(false)
    navigate(link)
  }

  // drawer
  const DrawerList = (
    <Box
      sx={{
        width: { xs: 300, sm: 340 },
        backgroundColor: "#bb3600",
        height: "100%",
        overflow: "auto",
        transition: ".3s ease-in-out"
      }}
      role="presentation"
    >
      <CloseRounded
        onClick={toggleDrawer(false)}
        sx={{
          color: "#fff",
          fontSize: 32,
          float: "right",
          mt: 1.5,
          mr: 1.5
        }} />
      <Box sx={{
        padding: "60px 24px"
      }}>
        <HomeOutlined sx={{ color: "#fff", my: 1.5 }} onClick={() => handleNavigate("/")} />
        {linkData?.map((item, index) => (
          <Box key={index} sx={{
            py: 1.5,
          }}>
            {item?.dropdownLinks ? (
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  boxShadow: 0, backgroundColor: "#bb3600", color: "#fff",
                  ".MuiAccordionSummary-root": {
                    minHeight: "auto"
                  },
                  ".MuiAccordionSummary-root.Mui-expanded": {
                    minHeight: "auto",
                    marginBottom: 1
                  },
                }}>
                <AccordionSummary
                  sx={accordionSummaryStyle}
                  expandIcon={
                    expanded == `panel${index}` ? (
                      <Remove sx={{ color: "#fff" }} />
                    ) : (
                      <Add sx={{ color: "#fff" }} />
                    )
                  }
                >
                  {item?.name}
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0, maxHeight: 500, overflow: "auto" }}>
                  {item?.dropdownLinks?.map((item, index) => (
                    <Box key={index} sx={{ pb: 2.5 }}>
                      <Typography sx={sectionNameStyle}>{item?.title}</Typography>
                      {item?.links?.map((item, index) => (
                        <Box key={index} sx={{ pt: item?.name ? 0 : 2.5 }}>
                          {item?.name && (
                            <Typography sx={heading2Style} onClick={() => handleNavigate(item?.link)}>
                              {item?.name}
                            </Typography>
                          )}
                          {item?.subHeadings?.map((item, index) => (
                            <Typography key={index} sx={subHeading2Style} onClick={() => handleNavigate(item?.link)}>
                              {item?.name}
                            </Typography>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            ) : (
              <Typography
                onClick={() => handleNavigate(item?.link)}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  transition: ".3s ease-in-out",
                  fontSize: 14
                }}>
                {item.name}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      className={scrolled ? "scrolled" : ""}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#c75425",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 1010,
        transition: "0.32s ease -in -out",
        backgroundColor: "#c75425",
        // height: "10%",
        py: "18px",
      }}>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: 1376,
        margin: "auto",
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        <Box sx={{
          width: { xs: 200, sm: 228 },
          height: { xs: 50, sm: 58 }
        }}>
          <img src={logo} alt="Haspper" style={{ width: "100%", height: "100%" }} />
        </Box>
        {/* Desktop Navbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            display: { xs: "none", lg: "flex" }
          }}>
          <HomeOutlined sx={{ color: "#fff", mr: 4, cursor: "pointer"}} onClick={() => handleNavigate("/")} />
          {linkData.map((item, index) => (
            <>
              {item.name == "Services" ? (
                <Tooltip
                  placement="bottom"
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
                        <Grid size={9}>
                          <Grid container columnSpacing={4}>
                            {item?.dropdownLinks?.map((item, index) => (
                              <Grid size={4}>
                                <Box key={index}>
                                  <Typography sx={sectionName2Style}>{item?.title}</Typography>
                                  {item?.links?.map((item, index) => (
                                    <Box key={index}>
                                      <Typography sx={headingStyle} onClick={() => handleNavigate(item?.link)}>{item?.name}</Typography>
                                      {item?.subHeadings?.map((item, index) => (
                                        <Typography key={index} sx={subHeadingStyle} onClick={() => handleNavigate(item?.link)}>{item.name}</Typography>
                                      ))}
                                    </Box>
                                  ))}
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  }
                >
                  <Typography sx={{
                    color: "#fff",
                    letterSpacing: "0.8px",
                    fontSize: 18,
                    opacity: 0.75,
                    mr: 4,
                    ":hover": {
                      opacity: 1,
                    }
                  }}>
                    {item.name}
                  </Typography>
                </Tooltip>
              ) : item.name == "Solution" ? (
                <Tooltip
                  placement="bottom"
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
                      sx: [tooltipStyle, { minWidth: { lg: "900px" } }],
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
                        <Grid size={9}>
                          <Grid container columnSpacing={4}>
                            {item?.dropdownLinks?.map((item, index) => (
                              <Grid size={6}>
                                <Box key={index}>
                                  <Typography sx={sectionName2Style}>{item?.title}</Typography>
                                  {item?.links?.map((item, index) => (
                                    <Box key={index}>
                                      <Typography sx={headingStyle} onClick={() => handleNavigate(item?.link)}>{item?.name}</Typography>
                                      {item?.subHeadings?.map((item, index) => (
                                        <Typography key={index} sx={subHeadingStyle} onClick={() => handleNavigate(item?.link)}>{item.name}</Typography>
                                      ))}
                                    </Box>
                                  ))}
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  }
                >
                  <Typography sx={{
                    color: "#fff",
                    letterSpacing: "0.8px",
                    fontSize: 18,
                    opacity: 0.75,
                    mr: 4,
                    ":hover": {
                      opacity: 1,
                    }
                  }}>
                    {item.name}
                  </Typography>
                </Tooltip>
              ) : (
                <Link to={item.link} key={index} className="link">
                  <Typography sx={{
                    color: "#fff",
                    letterSpacing: "0.8px",
                    fontSize: 18,
                    opacity: 0.75,
                    mr: 4,
                    ":hover": {
                      opacity: 1,
                    }
                  }}>
                    {item.name}
                  </Typography>
                </Link>
              )}
            </>
          ))}
          <Box className="social-icon">
            <Link to="#"><img src={navIcon1} alt="LinkedIn" /></Link>
            <Link to="#"><img src={navIcon2} alt="Facebook" /></Link>
            <Link to="#"><img src={navIcon3} alt="Instagram" /></Link>
          </Box>
        </Box>
        {/* Mobile Navbar */}
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <MenuRounded
            sx={{ color: "#fff", fontSize: 32 }}
            onClick={toggleDrawer(true)}
          />
        </Box>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </Box >
  )
}
const linkData = [
  {
    name: "Services",
    link: "",
    dropdownLinks: [
      {
        title: "Mobile",
        links: [
          {
            name: "App Development",
            link: "/mobile-app-development",
            type: "heading",
            subHeadings: [
              {
                name: "iOS",
                link: "/services/ios-app-development",
                type: "subHeading"
              },
              {
                name: "Android",
                link: "/services/android-application-development",
                type: "subHeading"
              },
              {
                name: "Flutter",
                link: "/services/flutter-app-development",
                type: "subHeading"
              },
            ]
          },
          {
            name: "Cross Platform App Development",
            link: "",
            type: "heading",
            subHeadings: [
              {
                name: "React Native",
                link: "/services/react-native-app-development",
                type: "subHeading"
              },
              {
                name: "Ionic",
                link: "/services/ionic-app-development",
                type: "subHeading"
              },
              {
                name: "Flutter",
                link: "/services/flutter-app-development",
                type: "subHeading"
              },
            ]
          },
          {
            name: "Startup IT Solutions",
            link: "",
            type: "heading"
          },
          {
            name: "Market Research Software Development",
            link: "",
            type: "heading"
          },
          {
            name: "Enterprise IT Solutions",
            link: "",
            type: "heading"
          },
        ]
      },
      {
        title: "Web",
        links: [
          {
            name: "Web App Development",
            link: "",
            type: "heading",
            subHeadings: [
              {
                name: "PHP",
                link: "",
                type: "subHeading"
              },
              {
                name: "Java",
                link: "",
                type: "subHeading"
              },
              {
                name: "ROR",
                link: "",
                type: "subHeading"
              },
              {
                name: "Python",
                link: "",
                type: "subHeading"
              },
              {
                name: "VueJs",
                link: "",
                type: "subHeading"
              },
              {
                name: "Angular",
                link: "",
                type: "subHeading"
              },
              {
                name: "React",
                link: "",
                type: "subHeading"
              },
              {
                name: "NodeJs",
                link: "",
                type: "subHeading"
              },
            ]
          },
          {
            name: "Ecommerce and CMS",
            link: "",
            type: "heading",
            subHeadings: [
              {
                name: "Marketplace",
                link: "",
                type: "subHeading"
              },
              {
                name: "WordPress",
                link: "",
                type: "subHeading"
              },
              {
                name: "Shopify",
                link: "",
                type: "subHeading"
              },
            ]
          },
        ]
      },
      {
        title: "Emerging Technologies",
        links: [
          {
            subHeadings: [
              {
                name: "Artificial Intelligence",
                link: "/artificial-intelligence",
                type: "subHeading"
              },
              {
                name: "Chatbot",
                link: "/chatbot-development",
                type: "subHeading"
              },
              {
                name: "IoT Development",
                link: "/iot-development",
                type: "subHeading"
              },
              {
                name: "Enterprise Product Engineering",
                link: "/product-engineer-development",
                type: "subHeading"
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Solution",
    link: "",
    dropdownLinks: [
      {
        title: "Industries We Serve",
        links: [
          {
            subHeadings: [
              {
                name: "HRMS",
                link: "/solutions/hrms-development",
                type: "subHeading"
              },
              {
                name: "Market Research",
                link: "/solutions/market-research",
                type: "subHeading"
              },
              {
                name: "Food",
                link: "/solutions/food",
                type: "subHeading"
              },
              {
                name: "Banking",
                link: "/solutions/banking",
                type: "subHeading"
              },
              {
                name: "Telecom",
                link: "/solutions/telecom",
                type: "subHeading"
              },
              {
                name: "Media And Entertainment",
                link: "",
                type: "subHeading"
              },
              {
                name: "Fitness",
                link: "",
                type: "subHeading"
              },
              {
                name: "E-Learning",
                link: "",
                type: "subHeading"
              },
            ]
          },
        ]
      },
      {
        title: "Solutions",
        links: [
          {
            subHeadings: [
              {
                name: "Cloud Computing",
                link: "",
                type: "subHeading"
              },
              {
                name: "Artificial Intelligence",
                link: "",
                type: "subHeading"
              },
              {
                name: "Voicebot",
                link: "",
                type: "subHeading"
              },
              {
                name: "Chatbot",
                link: "",
                type: "subHeading"
              },
              {
                name: "Blockchain",
                link: "",
                type: "subHeading"
              },
              {
                name: "Marketplace",
                link: "",
                type: "subHeading"
              },
              {
                name: "Technical & Operations Staffing",
                link: "",
                type: "subHeading"
              },
              {
                name: "Software Support",
                link: "",
                type: "subHeading"
              },
              {
                name: "Enterprise Product",
                link: "",
                type: "subHeading"
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Contact Us",
    link: "/contact-us"
  },
  {
    name: "Why Haspper",
    link: "/why-haspper"
  },
  {
    name: "",
    link: ""
  },
]
const tooltipStyle = {
  color: "#000",
  backgroundColor: "#fff",
  fontSize: "2em",
  padding: "43px 40px 60px",
  borderRadius: "26px",
  maxWidth: "80vw",
  minWidth: { lg: "1180px", xl: "75vw" }
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
const sectionNameStyle = {
  width: "100%",
  borderRadius: "18px 18px 5px 5px",
  fontWeight: 16,
  fontWeight: 600,
  padding: "4px 21px",
  backgroundColor: "rgba(255, 255, 255, 0.5)"
}
const heading2Style = {
  fontSize: 15,
  fontWeight: 500,
  textTransform: "capitalize",
  padding: "12px 0px 12px 20px",
  position: "relative",
  ":after": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 8,
    height: 8,
    background: "#fff",
    borderRadius: "50%",
    content: "''",
    left: 0,
    margin: 0,
  }
}
const subHeading2Style = {
  opacity: .8,
  color: "#fff",
  padding: "0 0 0 35px",
  fontWeight: 400,
  position: "relative",
  ":after": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 10,
    height: "1px",
    background: "#fff",
    content: "''",
    left: 15,
    margin: 0,
  }
}
const accordionSummaryStyle = {
  p: 0,
  ".MuiAccordionSummary-content": {
    my: 0,
    textTransform: "uppercase",
    fontSize: 14
  },
  ".MuiAccordionSummary-content.Mui-expanded": {
    my: 0,
  }
};
const sectionName2Style = {
  backgroundColor: "rgba(189, 73, 24, 0.3)",
  borderRadius: "10px",
  padding: "0 21px",
  lineHeight: "42px",
  color: "#BD4918",
  fontSize: 20,
  fontWeight: 600,
  width: "fit-content",
  mb: 2
}