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
          <strong>Q. What is flutter app development ?</strong>
        </AccordionSummary>
        <AccordionDetails>
        Flutter, based on the programming language Dart, is an open-source, cross-platform app development framework developed and launched by Google. 
        You can develop Android and iOS apps with a single codebase using the Flutter framework to build native, performant apps.
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
          <strong>Q. What are some app built with flutter ?</strong>
        </AccordionSummary>
        <AccordionDetails>
        Google Ads, Xianyu by Alibaba, Reflectly, Watermaniac, Hamilton, Birch Finance, 
        and other brands use Flutter to power their mobile apps
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
          <strong>Q. Which is better flutter or React Native ?</strong>
        </AccordionSummary>
        <AccordionDetails>
        React Native uses a bridge to interact with the underlying OS whereas Flutter apps are native and do not need any intermediary providing superior performance.

      At the same time – React Native was launched in 2015 and came out 3 years earlier than Flutter, which came out of Beta in 2018. Due to this, the community around React Native is larger but growing at a smaller pace compared to Flutter which now has more GitHub Stars than ReactNative.

      Also, React Native has CodePush – a way to push minor changes to the app without submitting an updated app to the app stores.
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
          <strong>Q. How does flutter reduce app development costs?</strong>
        </AccordionSummary>
        <AccordionDetails>
        Flutter allows our developers to use single code and build both Android as well as iOS mobile apps. Both of these apps provide native app experiences to the users. Hence, you get two mobile apps at the cost of developing one.

Because you have a single codebase, you don’t have to test two apps. You save hours on project management as you predict that if a functionality works on an Android app, it will work on iOS as well. Well, that’s not the case with React Native.

With Flutter, you save hours on resources for development, testing, and management which ultimately reduces the cost of Flutter mobile app development.
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
          <strong>Q. Can I use Flutter within my existing app ?</strong>
        </AccordionSummary>
        <AccordionDetails>
        Yes, Flutter can be used to add new modules to your existing native Android and iOS applications. 
        We can help you with an analysis of what’s feasible and what’s not. 
        Talk to our experts now.
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
