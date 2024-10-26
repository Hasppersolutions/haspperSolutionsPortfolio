import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const FAQ = ({ data }) => {
  const [expanded, setExpanded] = useState(-1);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ padding: "40px 0px", backgroundColor: "#f5f5f5" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, lineHeight: 1.2 }}
        >
          Frequently
        </Typography>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, color: "#c94c16", lineHeight: 1 }}
        >
          Asked Question
        </Typography>
        <Box sx={{ mt: "40px" }}>
          {data.faqItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                mb: 2,
                boxShadow: "rgba(0, 0, 0, .1) 0 0 60px",
              }}
            >
              <Accordion
                sx={{ boxShadow: 0 }}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={
                    expanded == `panel${index}` ? (
                      <Remove sx={{ color: "#fff" }} />
                    ) : (
                      <Add />
                    )
                  }
                  aria-controls={`panel${index}`}
                  id={`panel${index}`}
                  sx={[
                    accordionSummaryStyle,
                    expanded === `panel${index}` ? accordionOpenStyle : "",
                  ]}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: 3,
                    lineHeight: 2
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item?.answer?.split("\n")?.join("<br/>"),
                  }}
                />
              </Accordion>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
const accordionOpenStyle = {
  backgroundColor: "#BD4918",
  color: "#fff",
};
const accordionSummaryStyle = {
  px: 3,
  ".MuiAccordionSummary-content": {
    my: { xs: 2, sm: 3 },
  },
};
