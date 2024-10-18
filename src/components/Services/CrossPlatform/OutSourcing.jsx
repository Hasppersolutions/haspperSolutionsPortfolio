import React from 'react';
import { Grid2 as Grid, Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { CheckCircleOutline, PersonOutline } from '@mui/icons-material';

const OutSourcing = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
        Why Choose Us as Your React Native outsourcing Partner?
      </Typography>

      {/* Middle Divider (Horizontal between title and content) */}
      <Divider sx={{ margin: '20px 0', borderColor: '#e0e0e0', borderBottomWidth: 2 }} />

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Card 1: Proficient React Developers */}
        <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <PersonOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Proficient React Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                We have experienced React Native developers capable of building highly scalable mobile applications.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Vertical Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderRightWidth: 2, borderColor: '#dfdfdf',opacity:'0.5' }}
          /*sx={{ margin: '20px 0', borderColor: '#c94c16', borderBottomWidth: 2 ,height: '100%'}} */
        />

        {/* Card 2: Up-to-dated developers */}
        <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Up-to-dated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1
                and native versions 0.61-0.63.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Bottom Divider */}
      <Divider sx={{ margin: '20px 0', borderColor: '#dfdfdf', borderBottomWidth: 2 ,opacity:'0.7'}} />
         {/* Card 3: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Up-to-dated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1
                and native versions 0.61-0.63.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
         {/* Card 4: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Up-to-dated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1
                and native versions 0.61-0.63.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Bottom Divider */}
      <Divider sx={{ margin: '20px 0', borderColor: '#dfdfdf', borderBottomWidth: 2 ,opacity:'0.7'}} />
         {/* Card 5: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Up-to-dated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1
                and native versions 0.61-0.63.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
         {/* Card 6: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Up-to-dated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1
                and native versions 0.61-0.63.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Bottom Divider */}
      <Divider sx={{ margin: '20px 0', borderColor: '#dfdfdf', borderBottomWidth: 2 ,opacity:'0.7'}} />
         {/* Card 7: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Up-to-dated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1
                and native versions 0.61-0.63.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
         {/* Card 8: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
                Up-to-dated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1
                and native versions 0.61-0.63.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>

      {/* Bottom Divider */}
      <Divider sx={{ margin: '20px 0', borderColor: '#dfdfdf', borderBottomWidth: 2 ,opacity:'0.7'}} />
    </Box>
  );
};

export default OutSourcing;
