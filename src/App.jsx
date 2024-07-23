import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/hero';
import About from './components/about';
import TeamSection from './components/team';
import Join from './components/join';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home/home';
import TestimonialComponent from './components/testimonial';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<TestimonialComponent />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
