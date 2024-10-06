import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import estimateProject from '../assets/img/estimateProject.svg';
import './ProjectEstimate.css'

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
    <section className="project" id="projectEstimate">
      <Container>
        <Row className="align-items-center">
        <Col size={12} md={6} className="left-image">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src= {estimateProject} alt="Project Estimate" />
              }
            </TrackVisibility>
          </Col>
           
          <Col size={12} md={6} className="form-container">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Tell Us</h2>
                <h2 >About Your Project</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}