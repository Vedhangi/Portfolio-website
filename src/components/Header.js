import React ,{useEffect, useState} from "react";  


function Header() {  
  
  return (  
    <div className="header">  
      
      <div className="info">  
        <h1>Vedhangi Fadte</h1>  
        <h2> 💻 Software Developer</h2>  
        <p>🏠 Betim Bardez, Goa</p>  
        <p>📧: <a href="mailto:vedhangifadte09@gmail.com">vedhangifadte09@gmail.com</a></p>  
        <p>📱: 9049618949</p>
        <div className="social-links">  🔗
          <a href="https://www.linkedin.com/in/vedhangi-fadte-b17243276/" target="_blank" rel="noopener noreferrer">LinkedIn</a>  
          <a href="https://github.com/Vedhangi" target="_blank" rel="noopener noreferrer">GitHub</a>  
        </div>  
      </div>  
    </div>  
  );  
}  

export default Header;