import React from "react";
import '../assets/scss/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img src="/img/logo.png" alt="Selin Öser Logo" className="footer-logo" loading="lazy" width="40" height="40" />
          
        </div>
        
        <div className="footer-right">
          <p className="footer-copyright">A portfolio built by Selin Öser with 💜</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;