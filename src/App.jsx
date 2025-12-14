// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ClientSection from './components/ClientsSection'
import ClientReviewSection from './components/ReviewsSection'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ClientSection /> */}
      {/* <ClientReviewSection /> */}
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
