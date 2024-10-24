import React from "react";

const TechnologyStack = ({ title, data }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}> {/* Center content */}
      <h2 style={{ marginBottom: "20px" , fontWeight : "bold"}}>Our Technology Stack</h2> {/* Use title prop */}
      <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Category</th>
            <th style={tableHeaderStyle}>Technologies</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{row.category}</td>
              <td style={tableCellStyle}>{row.technologies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles for table
const tableHeaderStyle = {
  borderBottom: "2px solid #ddd",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "#f2f2f2",
  fontWeight: "bold",
};

const tableCellStyle = {
  borderBottom: "1px solid #ddd",
  padding: "10px",
};

export default TechnologyStack;
