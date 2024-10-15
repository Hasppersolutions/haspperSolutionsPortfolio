import React from 'react';
import { Box, Typography, Grid2 as Grid, Container } from '@mui/material';
import mission from "../../assets/img/mission-1.png"
import vision from "../../assets/img/vision-1.png"

// Main Section Component
const Mission = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" },
              fontWeight: 'bold',
              color: '#212121',
              mb: 2,
            }}
          >
            THE LEAGUE OF EXTRA ORDINARY
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "48px" },
              fontWeight: 'bold',
              color: '#C94C16',
              mb: 3,
            }}
          >
            WEB & MOBILE APP BUILDERS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#616161',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            We are a group of innovators out to take over the digital world. Instead of using machine guns and laser beams we use weapons like PHP, Node, ROR, Angular, MySQL, HTML5, WordPress, Joomla, Magento, iOS, Android, React Native, etc. to make killer web designs, apps, and developments that are meant to knock out your competitors and establish a new wave of innovation on the web.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Our Mission */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2, height: "100%" }}>


              {/* Mission Text */}
              <Box sx={{
                display: 'flex',
                alignItems: 'end',
                justifyContent: "center",
                textAlign: "right",
                flexDirection: "column"
              }}>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#FF7F50',
                    textTransform: 'uppercase',
                    textAlign: 'right'
                  }}
                >
                  Our Mission

                </Typography>
                <Box sx={{ borderBottom: '2px solid #e0e0e0', width: '50px', my: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#616161',
                    textAlign: 'right',
                    fontSize: { xs: "14px", md: "16px" }
                  }}
                >
                  Our mission is to simplify human life and empower businesses with AI-backed technology to deliver sustainable and intelligent solutions worldwide.
                </Typography>
              </Box>
              {/* Mission Image */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ml: 2,
                backgroundColor: "#FF7F50",
                padding: 2,
                borderRadius: 2
              }}>
                <img src={mission} alt="Mission" width="80px" />
              </Box>
            </Box>
          </Grid>

          {/* Our Vision */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2, height: "100%" }}>
              {/* Vision Image */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mr: 2,
                backgroundColor: "#BD4916",
                padding: 2,
                borderRadius: 2
              }}>
                <img src={vision} alt="Vision" width="80px" />
              </Box>

              {/* Vision Text */}
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#BD4916',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                  }}
                >
                  Our Vision
                </Typography>
                <Box sx={{ borderBottom: '2px solid #e0e0e0', width: '50px', my: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#616161',
                    textAlign: 'left',
                    fontSize: { xs: "14px", md: "16px" }
                  }}
                >
                  We take a long-term view that builds relations and shares ideas with stakeholders to achieve sustainable results. We unleash possibilities beyond imagination!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mission;
