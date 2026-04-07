import React, { useEffect, useState, lazy, Suspense } from 'react'
import FadeIn from './components/ui/FadeIn';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Skills = lazy(() => import('./components/Skills'));
const Timeline = lazy(() => import('./components/Timeline'));
const Project = lazy(() => import('./components/Project'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
);

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
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
          <Timeline />
          <Project />
          <Contact /> 
        </Suspense>
      </FadeIn>
      <Footer />
    </div>
    
  );
}

export default App