import React from 'react';
import { Grid2 as Grid, Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { CheckCircleOutline, PersonOutline } from '@mui/icons-material';

const WhyUsForWebDev = ({ data }) => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
        {data.mainHeading}
      </Typography>

      <Divider sx={{ margin: '20px 0', borderColor: '#e0e0e0', borderBottomWidth: 2 }} />

      <Grid container spacing={2} rowGap={2} justifyContent="center" alignItems="center">
        {data.cards.map((card, index) => (
          <Grid key={index} size={{ xs: 12, md: 5 }}>
            <Card sx={{ boxShadow: 'none', border: 'none', backgroundColor: '#f5f5f5' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                {card.icon && React.createElement(card.icon, { sx: { fontSize: 50, color: '#c94c16' } })}
                {card.image && <img src={card.image} alt={card.title} style={{ width: '80px', height: '80px' }} />}
                <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                  {card.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Divider sx={{ margin: '20px 0', borderColor: '#dfdfdf', borderBottomWidth: 2, opacity: '0.7' }} />
      </Grid>
    </Box>
  );
};

export default WhyUsForWebDev;
