import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FacilitiesSection from "./components/FacilitiesSection";
import ReviewsSection from "./components/ReviewsSection";
import GallerySection from "./components/GallerySection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <ReviewsSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
