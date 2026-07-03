import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App
