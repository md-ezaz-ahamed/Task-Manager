import React from 'react';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
import Hero from './Hero-Section';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#191D26] flex flex-col items-center justify-center">
      <Hero />
      <Footer />
      </div>
      
      
    </div>
  );
};

export default App;