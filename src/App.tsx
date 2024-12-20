import './App.css'
import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import MembershipOptions from './components/MembershipOptions'
import TechJourney from './components/TechJourney'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <Hero />
        <Features />
        <About />
        <TechJourney />
        <MembershipOptions />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default App
