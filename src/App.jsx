import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ContactPage from './components/ContactPage';

export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Router>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                  <>
                    <HeroSection />
                    <Brands />
                    <AppFeatures />
                    <HowItWorks />
                    <DesktopSection />
                    <Testimonials />
                    <FAQ />
                    <Subscribe />
                  </>
                }
              />

              
              <Route path="/contact" element={<ContactPage />} />

              
              <Route path="*" element={<HeroSection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
