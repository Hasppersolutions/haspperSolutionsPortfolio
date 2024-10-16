import { useState } from "react";
import estimateProject from '../../assets/img/estimateProject.svg';
import './ProjectEstimate.css'
import { Container, Grid2 as Grid, Box, Typography, TextField, MenuItem, Select, Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import TextInputField from "../Input/TextInputField"
import zIndex from "@mui/material/styles/zIndex";

export const ProjectEstimate = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budgetRange: '',
    projectDescription: ''
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
    }
    catch (error) {
      console.error("There was an error!", error);
      setStatus({ success: false, message: "Failed to send message. Please try again later." });
    }
    finally {
      setButtonText("Send");
    }
  };

  return (
    <>
      {/* <section className="project" id="projectEstimate">
        <Container>
          <Grid container columnSpacing={{ md: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <Box sx={{ width: { xs: "100%", md: "90%" } }}>
                <img src={estimateProject} alt="Project Estimate" style={{ width: "100%", height: "100%" }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <div>
                <h2>Tell Us</h2>
                <h2 >About Your Project</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <select value={formDetails.budgetRange} onChange={(e) => onFormUpdate('budgetRange', e.target.value)}>
                        <option value="" disabled>Select a budget range</option>
                        <option value="Less than $10K">Less than $10K</option>
                        <option value="Between $10K to $50K">Between $10K to $50K</option>
                        <option value="Between $50K to $100K">Between $50K to $100K</option>
                        <option value="Above $100K">Above $100K</option>
                      </select>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.projectDescription} placeholder="Project Description" onChange={(e) => onFormUpdate('projectDescription', e.target.value)}></textarea>
                      <button type="submit" ><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section> */}
      <Box sx={{ py: { xs: 5, sm: 10 } }}>
        <Container>
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{
                width: { xs: "100%", sm: "50%", md: "90%" },
                margin: "auto"
              }}>
                <img src={estimateProject} alt="Project Estimate" style={{ width: "100%", height: "100%" }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography component={"h1"} sx={titleStyle}>Tell Us</Typography>
                <Typography component={"h1"} sx={titleStyle}>About Your Project</Typography>
              </Box>
              <Box sx={{ mt: "30px" }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextInputField
                      type={"text"}
                      placeholder="First Name"
                      name="firstName"
                      value={formDetails.firstName}
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextInputField
                      type={"text"}
                      placeholder="Last Name"
                      name="lastName"
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextInputField
                      type={"email"}
                      placeholder="Email Address"
                      name="email"
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextInputField
                      type={"number"}
                      placeholder="Phone No."
                      name="phone"
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Select
                      size="small"
                      fullWidth
                      id="budgetRange"
                      displayEmpty
                      renderValue={
                        formDetails.budgetRange !== "" ? undefined : () => "Select a Budget Range"
                      }
                      value={formDetails.budgetRange}
                      onChange={(e) => onFormUpdate('budgetRange', e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#E0E3E7 !important",
                        },
                        "& .MuiOutlinedInput-input": {
                          fontSize: 15,
                          fontWeight: 400,
                        },
                      }}
                    >
                      {budgetRange.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          sx={{ fontSize: 15 }}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextInputField
                      type={"number"}
                      placeholder="Project Description"
                      name="projectDescription"
                      value={formDetails.projectDescription}
                      multiline={true}
                      onChange={(e) => onFormUpdate('projectDescription', e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button onClick={handleSubmit} sx={submitButtonStyle}>
                  <Typography sx={{
                    zIndex: 1, position: "relative",
                    fontWeight: 700,
                  }}>
                    {buttonText}
                  </Typography>
                </Button>
                {status.message && (

                  <Typography
                    className={status.success === false ? "danger" : "success"}
                    sx={{ mt: "24px", color: status.success === false ? "red" : "green" }}>
                    {status.message}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

const titleStyle = {
  fontSize: { xs: "28px", sm: "32px", md: "38px", lg: "45px" },
  fontWeight: 700,
  color: "#000"
}
const budgetRange = [
  {
    value: 'Less than $10K',
    label: 'Less than $10K',
  },
  {
    value: 'Between $10K to $50K',
    label: 'Between $10K to $50K',
  },
  {
    value: 'Between $50K to $100K',
    label: 'Between $50K to $100K',
  },
  {
    value: 'Above $100K',
    label: 'Above $100K',
  },
];
const submitButtonStyle = {
  fontWeight: 700,
  color: "#000",
  backgroundColor: "#C55F34",
  padding: "14px 48px",
  fontSize: 18,
  marginTop: "24px",
  borderRadius: "25px",
  position: "relative",
  transition: "0.3s ease-in-out",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  ":hover": {
    color: "#fff",
    "&::before": {
      width: "100%"
    }
  },
  "::before": {
    content: "' '",
    background: "#e67848",
    width: 0,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "25px",
    zIndex: 0,
    transition: "0.3s ease-in-out",
  }
}