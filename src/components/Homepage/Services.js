import React from 'react';
import './Services.css'; // Custom CSS for layout and hover

const Services = () => {
  const servicesData = [
    {
      title: 'Services',
      items: ['Android', 'iOS App Development', 'Ruby on Rails', 'Python', 'Ionic App Development', 'Amazon Web Services', 'NodeJs Development', 'Grails', 'Symfony', 'Selenium Automation'],
    },
    {
      title: 'Staffing Services',
      items: ['Hire Android Developer', 'Hire DevOps Developer', 'Hire iOS Developer', 'Hire PHP Developer', 'Hire Magento Developers', 'Hire NodeJS Developers', 'Hire ReactJS Developers', 'Hire Apple Watch Developers', 'Hire WordPress Developer', 'Hire React Native Developer'],
    },
    {
      title: 'Technology',
      items: ['Blockchain Development', 'Chatbot Development', 'Cross Platform App Development', 'eCommerce Development', 'IoT Solutions', 'Enterprise IT Solutions'],
    },
  ];

  return (
    <div className="services-container">
      {servicesData.map((category, index) => (
        <div key={index} className="services-column">
          <h3>{category.title}</h3>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;
