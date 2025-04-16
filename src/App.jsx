import React, { useEffect, useState } from 'react'
import FadeIn from './components/ui/FadeIn';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App = () => {
  const [mode, setMode] = useState('dark');

  const handleModeChange = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  }

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
        <Contact /> 
      </FadeIn>
      <Footer />
    </div>
    
  );
}

export default App