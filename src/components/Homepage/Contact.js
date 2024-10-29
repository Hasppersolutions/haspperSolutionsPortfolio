import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import contactUs from '../../assets/img/contactUs.svg';
import Grid from '@mui/material/Grid2';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code == 200) {
        setStatus({ succes: true, message: 'Message sent successfully' });
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      console.error("There was an error!", error);
      setStatus({ success: false, message: "Failed to send message. Please try again later." });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section id="connect" style={{ background: 'linear-gradient(90.21deg, #57220B -5.91%, #BD4918 88%)', padding: '60px 0 200px' }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Left side: Image */}
          <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
            <img src={contactUs} alt="Contact Us" style={{ width: '92%', objectFit: 'cover' }} />
          </Grid>

          {/* Right side: Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                marginTop: '20px',
              }}
            >
              <Typography variant="h2" sx={{ fontSize: '45px', fontWeight: 700, marginBottom: '30px' }}>
                Get In Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      value={formDetails.firstName}
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '20px',
                        '& .MuiInputBase-input': { padding: '18px 26px' },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '20px',
                        '& .MuiInputBase-input': { padding: '18px 26px' },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '20px',
                        '& .MuiInputBase-input': { padding: '18px 26px' },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone No."
                      type="tel"
                      variant="outlined"
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '20px',
                        '& .MuiInputBase-input': { padding: '18px 26px' },
                      }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={6}
                      value={formDetails.message}
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '20px',
                        '& .MuiInputBase-input': { padding: '18px 26px' },
                      }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      type="submit"
                      sx={{
                        fontWeight: 700,
                        color: '#000',
                        backgroundColor: '#C55F34',
                        padding: '14px 48px',
                        fontSize: '18px',
                        marginTop: '25px',
                        borderRadius: '25px',
                        '&:hover': {
                          backgroundColor: '#e67848',
                          color: '#fff',
                        },
                      }}
                    >
                      {buttonText}
                    </Button>
                  </Grid>
                  <Grid size={12}>
                    {status && (
                      <Typography sx={{ color: "red", fontSize: 14 }}>{status?.message}</Typography>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
