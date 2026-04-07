import React from 'react';
import './../assets/scss/main.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Main = () => {
  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-left">
          <div className="social-links">
            <a href="https://github.com/selinoser" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/selinoser/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="mailto:selinoser@gmail.com" className="social-link" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
        
        <div className="hero-center">
          <div className="profile-image-wrapper">
            <div className="profile-ring"></div>
            <img src="../img/avatar.jpg" alt="Selin ÖSER" className="profile-image" width="280" height="280" />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Selin ÖSER</span>
            </h1>
            <p className="hero-subtitle">Front End Developer</p>
            <p className="hero-description">
              I build modern web applications with a focus on user experience, 
              clean code, and performance-driven approaches.
            </p>
          </div>
        </div>
        
        <div className="hero-right">
          <button className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll to next section">
            <span>Scroll</span>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Main