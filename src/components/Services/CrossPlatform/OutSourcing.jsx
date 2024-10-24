import React from "react";
import {
  Grid2 as Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
  Container,
} from "@mui/material";
import { CheckCircleOutline, PersonOutline } from "@mui/icons-material";

import VariteyApp from "../../../assets/img/Services/CrossPlatform/VarietyApps.svg";
import TimelyDilevery from "../../../assets/img/Services/CrossPlatform/TimelyDilevery.svg";
import Mission from "../../../assets/img/Services/CrossPlatform/Mission.svg";
import EnterpriseApplication from "../../../assets/img/Services/CrossPlatform/EnterpriceApplication.svg";
import Pricing from "../../../assets/img/Services/CrossPlatform/Pricing.svg";
const OutSourcing = ({data}) => {
  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
      <Container>
        <Box
          className="headingBoxWidth"
          sx={{ mt: { xs: "20px", md: "50px" }, marginBottom: "35px" }}
        >
          <Typography
            sx={{
              fontSize: { xs: 26, sm: 32, md: 39 },
              fontWeight: 700,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {data.firstHeading}
          </Typography>
          <Typography
            sx={[
              {
                fontSize: { xs: 26, sm: 32, md: 39 },
                fontWeight: 700,
                lineHeight: 1.2,
                textAlign: "center",
              },
              { color: "#c75425" },
            ]}
          >
            {data.secondHeading}
          </Typography>
          {data.description && (
            <Typography
              sx={{
                fontSize: 16,
                textAlign: "center",
                color: "#666666",
                marginTop: "10px",
              }}
            >
              {data.description}
            </Typography>
          )}
        </Box>
        <Grid
          container
          // spacing={2}
          rowGap={{xs:2, md: 0}}
          justifyContent="center"
          alignItems="center"
        >
          {data.cardData.map((item, index) => (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={index}
              sx={{
                display: "flex",
                textAlign: { xs: "start", md: "end" },
                justifyContent: { xs: "start", md: "end" },
                alignContent: { xs: "start", md: "end" },
                ":nth-child(2n+0)": {
                  textAlign: "start",
                  justifyContent: "start",
                },
              }}
            >
              <Box
                sx={{
                  boxShadow: {xs: "0 0 2px 0 #00000040", md:0},
                  borderBottom: {xs: 0 , md: "1px solid #dfdfdf"  },
                  borderRight:
                    (index + 1) % 2 == 0
                      ? 
                      { xs: 0 }
                      :{
                        xs: 0,
                        md: "1px solid #dfdfdf",
                      } ,
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems:
                    (index+ 1) % 2 == 0
                    ? { xs: "center" , md: "start"}
                      : { xs: "center", md: "end" },
                  height: { xs: "100%", md: "350px", lg: "300px" },
                  // maxHeight: "360px",
                  padding: { xs: "20px 10px 20px", md: "35px 50px 15px" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    border: "2px solid #BD4918",
                    height: "91px",
                    width: "91px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px 10px",
                    flexShrink: 0,
                    marginBottom: "15px",
                  }}
                >
                  <img src={item.image} alt={item.text} />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "26px",
                    marginBottom: "10px",
                  }}
                >
                  {item.heading}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OutSourcing;
