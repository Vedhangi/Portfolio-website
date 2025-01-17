// import React from "react";

// function Education() {
//   return (
//     <div className="education">
//       <h2>Education</h2>
//       <ul>
//         <li>Master in Computer Applications, Goa University (current) - CGPA: 6.5</li>
//         <li>BSc in Computer Science, Dhempe College (2020-2023) - 8.3</li>
//         <li>HSSC (Science), Goa Board (2020) - 61%</li>
//         <li>SSC, Goa Board (2018) - 65%</li>
//       </ul>
//     </div>
//   );
// }

// export default Education;


import React, { useState } from "react";  

function Education() {  
  const [showMarks, setShowMarks] = useState(false);  

  const toggleMarks = () => {  
    setShowMarks((prev) => !prev);  
  };  

  return (  
    <div className="education">  
      <h2>Education</h2>  
      <ul>  
        <li>  
          Master in Computer Applications, Goa University (current)  
          {showMarks && <span> - CGPA: 6.5</span>}  
        </li>  
        <li>  
          BSc in Computer Science, Dhempe College (2020-2023)  
          {showMarks && <span> - CGPA: 8.07</span>}  
        </li>  
        <li>  
          HSSC (Science), Goa Board (2020)  
          {showMarks && <span> - 61%</span>}  
        </li>  
        <li>  
          SSC, Goa Board (2018)  
          {showMarks && <span> - 65%</span>}  
        </li>  
      </ul>  
      <button onClick={toggleMarks}>  
        {showMarks ? "Hide Marks" : "Show Marks"}  
      </button>  
    </div>  
  );  
}  

export default Education;