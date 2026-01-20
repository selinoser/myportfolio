import React, { useEffect, useState } from 'react'
import FadeIn from './components/ui/FadeIn';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Project from './components/Project';

const App = () => {

  const [mode, setMode] = useState(() => {
      return localStorage.getItem("theme") || "dark";
    });
  
    useEffect(() => {
      const body = document.body;
  
      if (body) {
        if (mode === "dark") {
          body.classList.add("dark-mode");
          body.classList.remove("light-mode");
        } else {
          body.classList.add("light-mode");
          body.classList.remove("dark-mode");
        }
      }
      localStorage.setItem("theme", mode);
    }, [mode]);
  
    const handleModeChange = () => {
      setMode((prev) => (prev === "light" ? "dark" : "light"));
    };
  

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Skills />
        <Timeline />
        <Project />
        <Contact /> 
      </FadeIn>
      <Footer />
    </div>
    
  );
}

export default App