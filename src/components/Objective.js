import React ,{useEffect} from "react";

function Objective() {
  useEffect(() => {
    console.log("Objective component mounted");

    return () => {
      console.log("Objective component unmounted");
    };
  }, []);
  return (
    <div className="objective">
      <h2>Objective</h2>
      <p>
        I am a motivated MCA Student with a passion for software development 
        and emerging technologies. As a fresher , I am eager to apply my knowledge of both backend and frontend development .
         I'm dedicated to continuosly learning new tools and my goal is to contribute to innovative projects
        that solve problems.
      </p>
    </div>
  );
}

export default Objective;
