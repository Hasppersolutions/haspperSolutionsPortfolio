import React, { useState } from 'react';

const glossaryData = {
  A: [
    {
      term: 'Access Point',
      definition: 'A device that connects wirelessly enabled PCs and other devices to a wired network.',
    },
    {
      term: 'Accessibility',
      definition: 'The process of creating and constructing websites that can be understood by all individuals, including those with visual, hearing, motor, or cognitive impairments.',
    },
    {
      term: 'Authorization',
      definition: 'The act of granting someone or something permission to do something.',
    },
  ],
  B: [
    {
      term: 'Bandwidth',
      definition: 'The maximum data transfer rate of a network or internet connection.',
    },
  ],
  C: [
    {
      term: 'Cloud Computing',
      definition: 'The delivery of different services through the Internet.',
    },
  ],
  // Add more glossary data here for other letters
};

const Glossary = () => {
  const [selectedLetter, setSelectedLetter] = useState('A'); // Default to 'A'

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div style={styles.container}>
      {/* Title and Description */}
      <h1 style={styles.heading}>A handy glossary of all the Tech Terms for True Tech Geeks!</h1>
      <p style={styles.description}>
        Our technology dictionary of information technology covers everything from hardware and software to cloud computing basics.
      </p>

      {/* Alphabet Links */}
      <div style={styles.alphabetContainer}>
        {alphabet.map((letter) => (
          <span
            key={letter}
            style={{
              ...styles.link,
              fontWeight: selectedLetter === letter ? 'bold' : 'normal', // Highlight selected letter
              cursor: 'pointer',
            }}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Display definitions based on selected letter */}
      <div style={styles.definitionContainer}>
        {selectedLetter === 'A' && (
          <div style={styles.definition}>
            <img
              src="https://d3puhl2t51lebl.cloudfront.net/uploads/2022/04/glosry_a.png"
              alt="Glossary Icon"
              style={styles.image}
            />
            <div style={styles.definitionContent}>
              {glossaryData[selectedLetter].map((entry, index) => (
                <div key={index} style={styles.entry}>
                  <h3 style={styles.term}>{entry.term}</h3>
                  <p style={styles.definitionText}>{entry.definition}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'left', // Align everything to the left
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#555',
  },
  alphabetContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '30px',
  },
  link: {
    padding: '10px 15px',
    border: '1px solid transparent',
    borderRadius: '5px',
    color: '#007bff',
    transition: 'background-color 0.3s',
  },
  definitionContainer: {
    marginTop: '20px',
  },
  definition: {
    display: 'flex', // Use flex to align image and definitions in a row
    alignItems: 'flex-left', // Align items at the start
    marginBottom: '20px',
  },
  image: {
    width: '100px', // Adjust the image size as needed
    height: '100px', // Adjust the image size as needed
    marginRight: '20px', // Space between the image and definition text
  },
  definitionContent: {
    display: 'flex',
    flexDirection: 'column', // Stack term and definition vertically
  },
  entry: {
    marginBottom: '10px', // Space between different entries
  },
  term: {
    fontSize: '1.5rem', // Increased font size for terms
    margin: '0',
    color: 'blue', // Changed term color to blue
  },
  definitionText: {
    fontSize: '1rem', // Decreased font size for definitions
    marginTop: '5px', // Space between term and definition
    color: '#000', // Set definition text color back to black
  },
  noData: {
    fontSize: '1.2rem',
    color: '#999',
  },
};

export default Glossary;
