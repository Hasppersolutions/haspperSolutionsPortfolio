import React from "react";
import { Grid2 as Grid, Typography, Container, Box } from "@mui/material";
import java from "../../assets/img/Services/chatbot/java.png";
import python from "../../assets/img/Services/chatbot/python.png";
import objectC from "../../assets/img/Services/chatbot/object-c.png";
import xamarin from "../../assets/img/Services/chatbot/xamarin.png";
import ionic from "../../assets/img/Services/chatbot/ionic.png";
import node from "../../assets/img/Services/chatbot/node.png";
import laravel from "../../assets/img/Services/chatbot/laravel.png";
import securePay from "../../assets/img/Services/chatbot/secure-pay.png";
import amazonPay from "../../assets/img/Services/chatbot/amazon-pay.png";
import payPal from "../../assets/img/Services/chatbot/pay-pal.png";
import stripe from "../../assets/img/Services/chatbot/stripe.png";
import authorizeNet from "../../assets/img/Services/chatbot/authorize-net.png";

const techData = {
  languages: [
    { name: "HTML5", icon: "path/to/html5-icon" },
    { name: "Python", icon: python },
    { name: "Java", icon: java },
    { name: "Objective-C", icon: objectC },
    { name: "Swift", icon: "path/to/swift-icon" },
  ],
  frameworks: [
    { name: "Flutter", icon: "path/to/flutter-icon" },
    { name: "Angular", icon: "path/to/angular-icon" },
    { name: "PhoneGap", icon: "path/to/phonegap-icon" },
    { name: "Xamarin", icon: xamarin },
    { name: "Ionic", icon: ionic },
    { name: "Ionic", icon: node },
    { name: "Ionic", icon: laravel },
  ],
  paymentGateways: [
    { name: "SecurePay", icon: securePay },
    { name: "Amazon Pay", icon: amazonPay },
    { name: "PayPal", icon: payPal },
    { name: "Stripe", icon: stripe },
    { name: "Authorize.net", icon: authorizeNet },
  ],
};

const Technology = () => {
  const renderTechItems = (items) =>
    items.map((item, index) => (
      <Grid
        key={index}
        size={{ xs: 6, sm: 4, md: 2.4 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(54,54,54,1) 50%)",
        }}
      >
        <Box sx={iconContainer}>
          <Box
            sx={{
              borderRadius: "50%",
              border: "4px solid #BD4918",
              width: { xs: 100, sm: 132 },
              height: { xs: 100, sm: 132 },
              padding: { xs: 1, sm: "20px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ".icons": {
                width: { xs: "70%", sm: "auto" },
              },
            }}
          >
            <img src={item.icon} alt={item.name} className="icons" />
          </Box>
        </Box>
      </Grid>
    ));

  return (
    <Box sx={{ pt: 3, pb: { xs: 8, md: 14} }}>
      <Container>
        <Typography sx={titleStyle}>
          Technologies <br />
          <Typography
            component={"span"}
            sx={[
              titleStyle,
              {
                color: "#BD4918",
              },
            ]}
          >
            We Use
          </Typography>
        </Typography>
        <Typography sx={[sectionHeadingStyle, { mt: "0px !important" }]}>
          Languages
        </Typography>
        <Grid container rowGap={{ xs: 3, sm: 6 }} justifyContent="center">
          {renderTechItems(techData.languages)}
        </Grid>
        <Typography sx={sectionHeadingStyle}>Framework</Typography>
        <Grid container rowGap={{ xs: 3, sm: 6 }} justifyContent="center">
          {renderTechItems(techData.frameworks)}
        </Grid>
        <Typography sx={sectionHeadingStyle}>Payment Gateway</Typography>
        <Grid container rowGap={{ xs: 3, sm: 6 }} justifyContent="center">
          {renderTechItems(techData.paymentGateways)}
        </Grid>
      </Container>
    </Box>
  );
};

export default Technology;
const iconContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  marginBottom: "50px",
  backgroundColor: "#F2F2F2",
  padding: { xs: "20px", sm: "27px" },
  width: "fit-content",
};
const sectionHeadingStyle = {
  fontSize: { xs: 32, sm: 48, md: 60, lg: 80 },
  fontWeight: 700,
  color: "rgba(0, 0, 0, 0.42)",
  textTransform: "uppercase",
  textAlign: "center",
  marginTop: { xs: "40px", md: "50px", lg: "60px" },
  ":nth-child(1)": {
    marginTop: "0px !important",
  },
};
const titleStyle = {
  fontSize: { xs: 24, sm: 32, md: 39 },
  fontWeight: 700,
  textAlign: "center",
  lineHeight: 1.3,
};
