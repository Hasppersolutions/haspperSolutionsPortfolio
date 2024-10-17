import React from "react";
import {
  Container,
  Grid2 as Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const Features = ({ data }) => {
  return (
    <Container sx={{ py: "50px" }}>
      <Typography
        sx={{
          fontSize: { xs: 24, sm: 32, md: 42, lg: 50 },
          fontWeight: 700,
          lineHeight: 1.2,
          pb: 2.5,
        }}
      >
        Delivering Top-Notch Custom Mobile App Development Services
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            dangerouslySetInnerHTML={{
              __html: data?.description?.split("\n")?.join("<br/>"),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <List sx={{ p: 0 }}>
            {data.featuresList.map((data, index) => (
              <ListItem key={index} sx={{ py: { xs: 1.5, sm: 2 }, px: 0 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 18 },
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  {data}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
