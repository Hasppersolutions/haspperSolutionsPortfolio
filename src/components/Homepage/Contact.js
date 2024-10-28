// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import './Contact.css';
// import contactUs from '../../assets/img/contactUs.svg';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     try{
//     let response = await fetch("http://localhost:5001/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
// }catch (error) {
//     console.error("There was an error!", error);
//     setStatus({ success: false, message: "Failed to send message. Please try again later." });
//   } finally {
//     setButtonText("Send");
//   }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className = "align-items-center" >
//           <Col size={12} md={6} className = "right-image">
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactUs} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6} className = "form-container">
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn contact-form-box" : "contact-form-box"}>
//                 <h2>Get In Touch</h2>
//                 <form onSubmit={handleSubmit}>
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                       <button type="submit"><span>{buttonText}</span></button>
//                     </Col>
//                     {
//                       status.message &&
//                       <Col>
//                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                   </Row>
//                 </form>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

// import { useState } from "react";
// import { Grid, TextField, Button, Box, Typography, Paper } from "@mui/material";
// import './Contact.css';
// import contactUs from '../../assets/img/contactUs.svg';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     try {
//       let response = await fetch("http://localhost:5001/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//       });
//       setButtonText("Send");
//       let result = await response.json();
//       setFormDetails(formInitialDetails);
//       if (result.code === 200) {
//         setStatus({ success: true, message: 'Message sent successfully' });
//       } else {
//         setStatus({ success: false, message: 'Something went wrong, please try again later.' });
//       }
//     } catch (error) {
//       console.error("There was an error!", error);
//       setStatus({ success: false, message: "Failed to send message. Please try again later." });
//     } finally {
//       setButtonText("Send");
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ padding: '60px 0 200px 0' }}>
//         <Grid item xs={12} md={6}>
//           <img src={contactUs} alt="Contact Us" style={{ width: '92%' }} />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Paper elevation={4} className="contact-form-box">
//             <Box p={3}>
//               <Typography variant="h4" gutterBottom>
//                 Get In Touch
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="First Name"
//                       value={formDetails.firstName}
//                       onChange={(e) => onFormUpdate('firstName', e.target.value)}
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Last Name"
//                       value={formDetails.lastName}
//                       onChange={(e) => onFormUpdate('lastName', e.target.value)}
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Email Address"
//                       type="email"
//                       value={formDetails.email}
//                       onChange={(e) => onFormUpdate('email', e.target.value)}
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Phone No."
//                       type="tel"
//                       value={formDetails.phone}
//                       onChange={(e) => onFormUpdate('phone', e.target.value)}
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Message"
//                       value={formDetails.message}
//                       onChange={(e) => onFormUpdate('message', e.target.value)}
//                       variant="outlined"
//                       multiline
//                       rows={6}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" color="primary" fullWidth>
//                       {buttonText}
//                     </Button>
//                   </Grid>
//                   {status.message && (
//                     <Grid item xs={12}>
//                       <Typography color={status.success ? 'green' : 'red'}>
//                         {status.message}
//                       </Typography>
//                     </Grid>
//                   )}
//                 </Grid>
//               </form>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </section>
//   );
// };


// import React, { useState } from 'react';
// import { Container, Grid2 as Grid, TextField, Button, Typography, Box } from '@mui/material';
// import contactUs from '../../assets/img/contactUs.svg';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText('Sending...');
//     // Your submit logic here
//     setButtonText('Send');
//   };

//   return (
//     <section id="connect" style={{ background: 'linear-gradient(90.21deg, #57220B -5.91%, #BD4918 111.58%)', padding: '60px 0 200px' }}>
//       <Container>
//         <Grid container spacing={3} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <img src={contactUs} alt="Contact Us" style={{ width: '92%' }} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 backgroundColor: '#fff',
//                 padding: '30px',
//                 borderRadius: '15px',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                 marginTop: '20px',
//               }}
//             >
//               <Typography variant="h2" sx={{ fontSize: '45px', fontWeight: 700, marginBottom: '30px' }}>
//                 Get In Touch
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="First Name"
//                       variant="outlined"
//                       value={formDetails.firstName}
//                       onChange={(e) => onFormUpdate('firstName', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Last Name"
//                       variant="outlined"
//                       value={formDetails.lastName}
//                       onChange={(e) => onFormUpdate('lastName', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       type="email"
//                       variant="outlined"
//                       value={formDetails.email}
//                       onChange={(e) => onFormUpdate('email', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Phone No."
//                       type="tel"
//                       variant="outlined"
//                       value={formDetails.phone}
//                       onChange={(e) => onFormUpdate('phone', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Message"
//                       variant="outlined"
//                       multiline
//                       rows={6}
//                       value={formDetails.message}
//                       onChange={(e) => onFormUpdate('message', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       sx={{
//                         fontWeight: 700,
//                         color: '#000',
//                         backgroundColor: '#C55F34',
//                         padding: '14px 48px',
//                         fontSize: '18px',
//                         marginTop: '25px',
//                         borderRadius: '25px',
//                         '&:hover': {
//                           backgroundColor: '#e67848',
//                           color: '#fff',
//                         },
//                       }}
//                     >
//                       {buttonText}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// };


// import React, { useState } from 'react';
// import { Container, Grid2 as Grid, TextField, Button, Typography, Box } from '@mui/material';
// import contactUs from '../../assets/img/contactUs.svg';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText('Sending...');
//     // Your submit logic here
//     setButtonText('Send');
//   };

//   return (
//     <section id="connect" style={{ background: 'linear-gradient(90.21deg, #57220B -5.91%, #BD4918 111.58%)', padding: '60px 0 200px' }}>
//       <Container>
//         <Grid container spacing={3} alignItems="center">
//           <Grid xs={12} md={6}>
//             <img src={contactUs} alt="Contact Us" style={{ width: '92%' }} />
//           </Grid>
//           <Grid xs={12} md={6}>
//             <Box
//               sx={{
//                 backgroundColor: '#fff',
//                 padding: '30px',
//                 borderRadius: '15px',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                 marginTop: '20px',
//               }}
//             >
//               <Typography variant="h2" sx={{ fontSize: '45px', fontWeight: 700, marginBottom: '30px' }}>
//                 Get In Touch
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="First Name"
//                       variant="outlined"
//                       value={formDetails.firstName}
//                       onChange={(e) => onFormUpdate('firstName', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Last Name"
//                       variant="outlined"
//                       value={formDetails.lastName}
//                       onChange={(e) => onFormUpdate('lastName', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       type="email"
//                       variant="outlined"
//                       value={formDetails.email}
//                       onChange={(e) => onFormUpdate('email', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Phone No."
//                       type="tel"
//                       variant="outlined"
//                       value={formDetails.phone}
//                       onChange={(e) => onFormUpdate('phone', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Message"
//                       variant="outlined"
//                       multiline
//                       rows={6}
//                       value={formDetails.message}
//                       onChange={(e) => onFormUpdate('message', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12}>
//                     <Button
//                       type="submit"
//                       sx={{
//                         fontWeight: 700,
//                         color: '#000',
//                         backgroundColor: '#C55F34',
//                         padding: '14px 48px',
//                         fontSize: '18px',
//                         marginTop: '25px',
//                         borderRadius: '25px',
//                         '&:hover': {
//                           backgroundColor: '#e67848',
//                           color: '#fff',
//                         },
//                       }}
//                     >
//                       {buttonText}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// };


// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box, Grid2 as Grid } from '@mui/material';
// import contactUs from '../../assets/img/contactUs.svg';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText('Sending...');
//     // Your submit logic here
//     setButtonText('Send');
//   };

//   return (
//     <section id="connect" style={{ background: 'linear-gradient(90.21deg, #57220B -5.91%, #BD4918 111.58%)', padding: '60px 0 200px' }}>
//       <Container>
//         <Grid container spacing={3} alignItems="center">
//           {/* Left side: Image */}
//           <Grid xs={12} md={6} display="flex" justifyContent="center">
//             <img src={contactUs} alt="Contact Us" style={{ width: '92%', objectFit: 'cover' }} />
//           </Grid>
          
//           {/* Right side: Form */}
//           <Grid xs={12} md={6}>
//             <Box
//               sx={{
//                 backgroundColor: '#fff',
//                 padding: '30px',
//                 borderRadius: '15px',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//                 marginTop: '20px',
//               }}
//             >
//               <Typography variant="h2" sx={{ fontSize: '45px', fontWeight: 700, marginBottom: '30px' }}>
//                 Get In Touch
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="First Name"
//                       variant="outlined"
//                       value={formDetails.firstName}
//                       onChange={(e) => onFormUpdate('firstName', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Last Name"
//                       variant="outlined"
//                       value={formDetails.lastName}
//                       onChange={(e) => onFormUpdate('lastName', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       type="email"
//                       variant="outlined"
//                       value={formDetails.email}
//                       onChange={(e) => onFormUpdate('email', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Phone No."
//                       type="tel"
//                       variant="outlined"
//                       value={formDetails.phone}
//                       onChange={(e) => onFormUpdate('phone', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Message"
//                       variant="outlined"
//                       multiline
//                       rows={6}
//                       value={formDetails.message}
//                       onChange={(e) => onFormUpdate('message', e.target.value)}
//                       sx={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                         borderRadius: '20px',
//                         '& .MuiInputBase-input': { padding: '18px 26px' },
//                       }}
//                     />
//                   </Grid>
//                   <Grid xs={12}>
//                     <Button
//                       type="submit"
//                       sx={{
//                         fontWeight: 700,
//                         color: '#000',
//                         backgroundColor: '#C55F34',
//                         padding: '14px 48px',
//                         fontSize: '18px',
//                         marginTop: '25px',
//                         borderRadius: '25px',
//                         '&:hover': {
//                           backgroundColor: '#e67848',
//                           color: '#fff',
//                         },
//                       }}
//                     >
//                       {buttonText}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// };



import React, { useState } from 'react';
import { Container,TextField, Button, Typography, Box } from '@mui/material';
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
    try{
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
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
}catch (error) {
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
          <Grid size={{xs: 12, md: 6}} display="flex" justifyContent="center">
            <img src={contactUs} alt="Contact Us" style={{ width: '92%', objectFit: 'cover' }} />
          </Grid>
          
          {/* Right side: Form */}
          <Grid size={{xs: 12, md: 6}}>
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
                  <Grid size={{xs: 12, sm: 6}}>
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
                  <Grid size={{xs: 12, sm: 6}}>
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
                  <Grid size={{xs: 12, sm: 6}}>
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
                  <Grid size={{xs: 12, sm: 6}}>
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
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
