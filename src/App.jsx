import React, { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Brands from './components/Brands';
import AppFeatures from './components/AppFeatures';
import HowItWorks from './components/HowItWorks';
import DesktopSection from './components/DesktopSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';


export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className="wrapper">
        <Header />
        <main>
          <HeroSection />
          <Brands />
          <AppFeatures />
          <HowItWorks />
          <DesktopSection />
          <Testimonials />
          <FAQ />
          <Subscribe />
        </main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
