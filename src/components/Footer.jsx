import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/scss/footer.scss';

const Footer = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/selinoser' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/selinoser/' },
    { icon: <EmailIcon />, label: 'Email', href: 'mailto:selinoser@gmail.com' }
  ];

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