import React from 'react';
import '../styles.css'

function Footer() {
  

 
  return (
        <div className="footerContainer">
        <footer id="colophon" className="site-footer" role="contentinfo">
  <div className="social-wrapper">
    <ul>
      
      
      <li>
        <a href="https://www.linkedin.com/in/renzo-beccari/" target="_blank">
          <img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="Linkedin Logo" className="linkedin-icon"/></a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src="https://www.svgrepo.com/show/341847/github.svg" alt="Facebook Logo" className="facebook-icon"/></a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src="https://www.svgrepo.com/show/353812/google-gmail.svg" alt="Googleplus Logo" className="googleplus-icon"/></a>
      </li>
      
      
    </ul>
  </div>

  <nav className="footer-nav" role="navigation">
    <p style={{marginBottom:10}}>Renzo Beccari.</p>
  </nav>
</footer>
     
      </div>
    
  );
}

export default Footer;