import React from 'react';
import { Grid2 as Grid, Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { CheckCircleOutline, PersonOutline } from '@mui/icons-material';
import CodeLibrary from '../../../../assets/img/Services/CrossPlatform/CodeLibrary.svg';
import VariteyApp from '../../../../assets/img/Services/CrossPlatform/VarietyApps.svg';
import TimelyDilevery from '../../../../assets/img/Services/CrossPlatform/TimelyDilevery.svg';
import Mission from '../../../../assets/img/Services/CrossPlatform/Mission.svg';
import Pricing from '../../../../assets/img/Services/CrossPlatform/Pricing.svg';

const OutSourcing = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
        Why Choose Us as Your React Native outsourcing Partner?
      </Typography>

      {/* Middle Divider (Horizontal between title and content) */}
      <Divider sx={{ margin: '20px 0', borderColor: '#e0e0e0', borderBottomWidth: 2 }} />

      <Grid container spacing={2} rowGap={2} justifyContent="center" alignItems="center">
        {/* Card 1: Proficient React Developers */}
        <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <PersonOutline sx={{ fontSize: 50, color: '#c94c16' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Rapid Delivery
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              We ensure the rapid delivery of your project as our skilled and experienced Ionic app developers 
              leave no stone unturned to complete your project within the given time.
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
              Proficient Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Our proficient Ionic developers know why they are doing something in a certain way. They take full responsibility for their tasks. Having enough experience to get stuff done, they know how to be competent in the web app development world. 
              Hire Ionic developers with and build intuitive, smart solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Middle Divider (Horizontal between title and content) */}
      <Divider sx={{ margin: '20px 0', borderColor: '#e0e0e0', borderBottomWidth: 2 }} />
         {/* Card 3: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <img src={CodeLibrary} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              100% Customer Satisfaction
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                
              Customer satisfaction is our only priority. 
              We make sure that we fulfil all the requirements mentioned by our clients and give them what they want.
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
         {/* Card 4: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <img src={VariteyApp} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Serve across globe
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              We serve all types of customers around the world, from small enterprises to medium and large ones. 
              We have our clients in almost every industry vertical.
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
              <img src={TimelyDilevery} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Competitive Pricing
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              We offer different competitive pricing models to meet the diverse needs of our clients located around the globe.
               We ideally consider an organized pricing method and thus follow only the best approach and policies.
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
         {/* Card 6: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <img src={Mission} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Active Support and Maintenance
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              We actively maintain and assure the quality of the app we build.
               Our developers are there 24/7 to assist you when needed.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Bottom Divider */}
      <Divider sx={{ margin: '20px 0', borderColor: '#dfdfdf', borderBottomWidth: 2 ,opacity:'0.7'}} />
        
         {/* Card 8: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <img src={Pricing} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Dedicated Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Our dedicated developers aim to reduce the time to market your product by delivering a feature-rich app, which meets your requirements, on-time.
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
