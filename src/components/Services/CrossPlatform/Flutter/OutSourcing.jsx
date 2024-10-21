import React from 'react';
import { Grid2 as Grid, Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { CheckCircleOutline, PersonOutline } from '@mui/icons-material';
import CodeLibrary from '../../../../assets/img/Services/CrossPlatform/CodeLibrary.svg';
import VariteyApp from '../../../../assets/img/Services/CrossPlatform/VarietyApps.svg';
import TimelyDilevery from '../../../../assets/img/Services/CrossPlatform/TimelyDilevery.svg';
import Mission from '../../../../assets/img/Services/CrossPlatform/Mission.svg';
import EnterpriseApplication from '../../../../assets/img/Services/CrossPlatform/EnterpriceApplication.svg'
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
              On-time Delivery
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Our developers understand the value of time and business requirements and therefore plan the tasks accordingly. 
              We divide tasks according to deadlines and uphold the principle of always delivering the Flutter app on time!
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
              Secure Apps
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              These days, apps are more exposed to security risks and breaches since they are frequently accessible over many networks and connected to the cloud. 
              In light of this, we design mobile apps with cutting-edge security and privacy features
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
              Quality Solutions
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
                
              One important aspect is on-time delivery. The quality of the application is the other. 
              By compromising the quality of the app, it serves no purpose to deliver it on time. 
              Our skilled developers not only deliver on time but also take care of the quality of the app.
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
              Flutter app Development Expertise
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Our Flutter app development team holds experience in deploying Flutter apps to various sectors and for a wide range of use cases. Knowing this,
               they are aware of the potential pros and cons of Flutter app development and prepare the process accordingly.
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
              Successful Methodologies
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              Our flutter app development agency believes that success comes by following a streamlined process with proven methodologies. 
              Keeping this in mind, our experts follow proven approaches and agile methodology to fulfill the client’s requirements.
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
              Active Support & Maintenance
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              We provide both pre and post-launch support. To ensure that the app ideas are thoroughly validated before the web app development and the app has no potential errors after launch. 
              Additionally, we provide free app maintenance for a limited time after which you have to pay a reasonable fee for our support and maintenance services.
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
              Skilled and Experienced Developers
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginTop: '10px' }}>
              When we say that we have the industry-best team of Flutter app developers, we mean it. 
              They are well-skilled and experienced to succeed in any professional environment. 
              They are trained to create high-quality apps with rich features and can manage any challenge that comes in the way.
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
