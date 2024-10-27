import React from 'react';
import './TheDifference.css';
import dedicatedEngTeam from '../../assets/img/dedicatedEngTeam.svg';
import proactivePlan from '../../assets/img/proactivePlan.svg';
import noTieredHelpDesk from '../../assets/img/noTieredHelpDesk.svg';
import CyberTeam from '../../assets/img/CyberTeam.svg';
import { Container, Typography, Box, Grid2 as Grid } from '@mui/material'; 
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TheDifference = () => {

    //Animation
    useGSAP(() => {
        gsap.from(".differenceTitle", {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".differenceTitle",
                start: "top 100%",
                end: "bottom 20%",
                toggleActions: "play none none reset",
            },
        });
    });

    return (
        <>
            <Box sx={{
                padding: { xs: "50px 40px 120px 40px", sm: "50px 40px 160px 40px" },
                backgroundColor: "#D9D9D9", /* Gray background */
                textAlign: "center",
            }}>
                <Container>
                    <Typography
                        className='differenceTitle'
                        sx={{
                            fontSize: { xs: "32px", sm: "38px", md: "42px" },
                            color: "#000",
                            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                            fontWeight: "bold",
                        }}>
                        The Difference
                    </Typography>
                    <Box sx={{
                        // py: { xs: 0, md: 10 },
                        marginTop: { xs: 6, sm: 8 }
                    }}>
                        <Grid container spacing={{ xs: 0, sm: 10, md: 6, lg: 10 }} rowGap={{ xs: 14, sm: 14, md: 0 }} sx={cardContainer}>
                            {differenceData.map((data, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                    <Box sx={cardStyle}>
                                        <Box
                                            sx={{
                                                width: { xs: 80, lg: 100 }
                                            }}>
                                            <img src={data.img} alt={data.title} style={{
                                                width: "100%",
                                                height: "100%"
                                            }} />
                                        </Box>
                                    </Box>
                                    <Typography sx={cardTitle}>{data.title}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default TheDifference;
const differenceData = [
    {
        img: dedicatedEngTeam,
        title: "Dedicated Engineering Team"
    },
    {
        img: proactivePlan,
        title: "Proactive Plan"
    },
    {
        img: noTieredHelpDesk,
        title: "No Tiered Help Desk"
    },
    {
        img: CyberTeam,
        title: "Cyber Team"
    },
]
const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#D3D3D3",
    padding: "0px 40px",
    height: "100%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "50px",
    maxWidth: { xs: 280, sm: 240, md: 280 },
    margin: "auto",
    // minHeight: "100%",
    // maxHeight: 169
};
const cardTitle = {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginTop: { xs: "36px", md: "48px" },
};
const cardContainer = {
    // marginTop: { xs: "40px", md: "70px" },
};