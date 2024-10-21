import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
        
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
        Frequently 
      </Typography>

      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600,color:'#c94c16' }}>
         Asked Question
      </Typography>

      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
    </div>
      {/* FAQ Accordion Items */}
      <Box sx={{rowGap:4
      }}>
      {faqItems.map((item, index) => (
        <Accordion key={index} sx={{ borderRadius: '10px', marginBottom: '20px' ,width:'80%',justifyContent:'center' ,margin:"auto"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#c94c16' }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              '& .MuiAccordionSummary-content': {
                margin: '10px 0',
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Q. {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#f5f5f5' }}>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </Box>
    </Box>
  );
};

// Sample FAQ items
const faqItems = [
  {
    question: 'Why should I choose React Native over native app development?',
    answer: 'React Native allows for faster development with reusable components, cross-platform capabilities, and a large developer community.'
  },
  {
    question: 'What\'s the difference between React and React Native?',
    answer: 'React is used for building web applications, while React Native is for building mobile applications using native components.'
  },
  {
    question: 'How long does it take to build a React Native application?',
    answer: 'The time to develop a React Native app depends on the complexity, but it typically takes around 2-6 months.'
  },
  {
    question: 'How much does it cost to build an application using React Native?',
    answer: 'The cost of building an app using React Native varies depending on the app complexity, team size, and features.'
  },
  {
    question: 'How much does it cost to build an application using React Native?',
    answer: 'The cost of building an app using React Native varies depending on the app complexity, team size, and features.'
  }
];

export default FAQ;
