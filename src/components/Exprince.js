import React, { useState } from "react";

function Experience() {
  const[showdetails , setshowdetails] = useState(false)
  const toggleMarks = () => {  
    setshowdetails((prev) => !prev);  
  }; 
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div>
      
        <h3>Intern on Education teachnology</h3>
        <p>Dhempe College </p>
        <button onClick={toggleMarks}>  
        {showdetails ? "Hide Details" : "Show Details"}  
      </button> 
        {showdetails && <span> 
          <p>
          Worked on Question paper analysis using bloom's taxonomy <br />
          Frontend development (HTML ,css , JS) <br />
          Date of internship : 15th May to 15th June <br />
        </p></span>} 
        
      </div>
      
    </div>
  );
}

export default Experience;
