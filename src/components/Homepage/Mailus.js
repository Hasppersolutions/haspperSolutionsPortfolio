// // import React from 'react';

// export const Mailus = () => {
//     const email = 'your-email@example.com'; // Replace with your email
  
//     return (
//       <button
//         onClick={() => {
//           window.location.href = `mailto:${email}`;
//         }}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         Email Us: {email}
//       </button>
//     );
//   };
  
//   export default Mailus;


// import React from 'react';

// export const Mailus = () => {
//   const email = 'sales@ongraph.com'; // Replace with your email

//   return (
//     <div style={styles.container}>
//       <div style={styles.iconContainer}>
//         <img
//           src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png" // Use an email icon or replace with your image URL
//           alt="email icon"
//           style={styles.icon}
//         />
//       </div>
//       <div style={styles.textContainer}>
//         <p style={styles.title}>EMAIL</p>
//         <a href={`mailto:${email}`} style={styles.emailLink}>
//           {email}
//         </a>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '15px',
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//     width: 'fit-content',
//     margin: '20px',
//   },
//   iconContainer: {
//     backgroundColor: '#274b77',
//     borderRadius: '50%',
//     padding: '10px',
//   },
//   icon: {
//     width: '30px',
//     height: '30px',
//   },
//   textContainer: {
//     marginLeft: '10px',
//   },
//   title: {
//     fontSize: '12px',
//     color: '#274b77',
//     fontWeight: 'bold',
//     margin: '0',
//   },
//   emailLink: {
//     fontSize: '14px',
//     color: '#000',
//     textDecoration: 'none',
//     fontWeight: 'normal',
//   },
// };

// export default Mailus;


import React from 'react';
import './Mailus.css'; // Import the CSS file

export const Mailus = () => {
  const email = 'admin@haspper.com'; // Replace with your email

  return (
    <div className="email-container">
      <div className="icon-container">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
          alt="email icon"
          className="icon"
        />
      </div>
      <div className="text-container">
        <p className="title">EMAIL</p>
        <a href={`mailto:${email}`} className="email-link">
          {email}
        </a>
      </div>
    </div>
  );
};

export default Mailus;

