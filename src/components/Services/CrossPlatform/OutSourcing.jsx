import React from 'react';
import { Grid2 as Grid, Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { CheckCircleOutline, PersonOutline } from '@mui/icons-material';
import CodeLibrary from '../../../assets/img/Services/CrossPlatform/CodeLibrary.svg';
import VariteyApp from '../../../assets/img/Services/CrossPlatform/VarietyApps.svg';
import TimelyDilevery from '../../../assets/img/Services/CrossPlatform/TimelyDilevery.svg';
import Mission from '../../../assets/img/Services/CrossPlatform/Mission.svg';
import EnterpriseApplication from '../../../assets/img/Services/CrossPlatform/EnterpriceApplication.svg'
import Pricing from '../../../assets/img/Services/CrossPlatform/Pricing.svg';
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
        {/* Middle Divider (Horizontal between title and content) */}
      <Divider sx={{ margin: '20px 0', borderColor: '#e0e0e0', borderBottomWidth: 2 }} />
         {/* Card 3: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <img src={CodeLibrary} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Various Libraries
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                
                Our React Native team works with multiple React libraries such as material-ui,
                 stripe, chart.js, lodash, j moment, bootstrap, firebase, react-chart-js2, push-notification, 
                 react-native-voice, semantic-ui, google-maps-react, amplitude-js, and server-timing.
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
              Variety of apps
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Our React Native developers have created a wide range of applications for social media, 
              e-gaming, e-learning, eCommerce, Shopify, health, and many more.
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
              Timely delivery
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              At Haspper we strictly follow timelines and try to deliver defect-free, well optimized solutions, every time!
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
              Seamless Support
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Be it pre or post development issues or bugs, we are here to help you out. You just need to raise a 
              support ticket with the concerned project manager and our technical support team will be assigned to it within an hour.
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
              <img src={EnterpriseApplication} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Enterprise Applications
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Enterprises need exceptional solutions that can cater millions of users without compromising on the user experience. Keeping this in mind, we employ highly experienced and 
              dedicated developers to build powerful and robust applications for enterprise level businesses.
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
         {/* Card 8: Up-to-dated developers */}
         <Grid size={{xs:12,md:5}}>
          <Card sx={{ boxShadow: 'none', border: 'none' ,backgroundColor: '#f5f5f5'}}>
            <CardContent sx={{ textAlign: 'center' }}>
              <img src={Pricing} style={{ width: '80px', height: '80px' }}></img>
              <Typography variant="h6" sx={{ fontWeight: 600, marginTop: '10px' }}>
              Competitive Pricing
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Another feature that distinguishes us is our competitive price,
               as we believe in providing services that are worth the money.
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
