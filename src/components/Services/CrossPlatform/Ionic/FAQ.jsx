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
<Box>
<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
      
        >
          <strong>
          Q. How can I ascertain Ionic is the right platform for my application development?                        </strong>
        </AccordionSummary>
        <AccordionDetails>
        It depends on the project requirements. Ionic builds outstanding cross-platform mobile, 
        web, and desktop applications using one single code base and open web standard. So, 
        if you want to develop an application that works for mobile, web, and desktop Ionic is the perfect option for you.
        </AccordionDetails>
      </Accordion>
      
    </div>

    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
      
        >
          <strong>
          Q. Will I get the source code of the project?                        </strong>
        </AccordionSummary>
        <AccordionDetails>
        Yes, you are the sole owner of the source code of the application developed by us. 
        It includes intellectual property rights. You can re-use, modify or develop any other application using this code.
        </AccordionDetails>
      </Accordion>
      
    </div>

    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
      
        >
          <strong>
          Q. How do I hire a dedicated developer?                        </strong>
        </AccordionSummary>
        <AccordionDetails>
        We’ll help you select a suitable developer for your project. 
        Based on the requirements, we will arrange interviews with your technical team and you can choose if 
        the developer certainly meets your requirements. 
        Once you finalize, the developer will work dedicatedly on your project only.
        </AccordionDetails>
      </Accordion>
      
    </div>


    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
      
        >
          <strong>
          Q. What are the pricing models to develop an Ionic application?                        </strong>
        </AccordionSummary>
        <AccordionDetails>
        There are primality 3 pricing models
Dedicate team- If your project requires complete attention and you want to complete the development in a specific timeline, go with a dedicated team of developers.
Controlled Agile- If there is a budget constraint, and you might need some changes in the future, the agile model suits you well.
Time and Material – If the requirements are not clearly defined and there may be changes in the scope of your project, go with the cost per hour of development. It will help you save money and you will be just paying for the hours we work for you.
        </AccordionDetails>
      </Accordion>
      
    </div>



    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
      
        >
          <strong>
          Q. How do you assure quality of the code and the entire project                        </strong>
        </AccordionSummary>
        <AccordionDetails>
        Be assured of the quality and testing part. Once a module is developed, our internal QA team will thoroughly test the code if everything is working properly or not. It will then only push to the production server.

        There will be several other tests by the QA and UI/UX teams to ascertain if everything looks great.
        </AccordionDetails>
      </Accordion>
      
    </div>
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
