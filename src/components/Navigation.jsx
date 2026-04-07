import React, { useEffect, useState } from "react";
import './../assets/scss/navigation.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Skills', href: 'skills' },
  { label: 'Experiences', href: 'experiences' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' }
];

const Navigation = ({ parentToChild, modeChange }) => {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(item => item.href);

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY;

      // Hero section (top of page)
      if (scrollPos < 200) {
        setActiveLink('');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPos >= offsetTop - 100 && scrollPos < offsetBottom - 100) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
    setActiveLink('');
  };

  return (
    <>
      <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <button onClick={scrollToTop} className="logo-button" aria-label="Go to home page">
              <img src="/img/logo.png" alt="Logo" className="logo-image" loading="lazy" width="40" height="40" />
            </button>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  className={`nav-link ${activeLink === item.href ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={modeChange}
              aria-label="Toggle theme"
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/img/logo.png" alt="Logo" className="logo-image" loading="lazy" width="40" height="40" />
          <button className="close-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                className="mobile-nav-link"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Navigation;