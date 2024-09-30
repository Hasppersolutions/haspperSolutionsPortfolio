import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Glossary from './pages/Glossary'; 
import Blog from './pages/Blog';
import ServicesAndStaffing from './components/ServicesAndStaffing'; 
import Android from './pages/Android';

const App = () => {
  return (
    <Router>
      <div style={styles.pageContainer}>
        <div style={styles.contentWrap}>
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/services" element={<ServicesAndStaffing />} />
            <Route path="/android" element={<Android />} />
          </Routes>
        </div>
        <ServicesAndStaffing /> 
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  contentWrap: {
    flex: 1,
  },
};

export default App;
