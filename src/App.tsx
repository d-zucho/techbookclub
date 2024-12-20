import './App.css'
import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import MembershipOptions from './components/MembershipOptions'
import TechJourney from './components/TechJourney'
import Testimonials from './components/Testimonials'

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
      </div>
    </>
  )
}

export default App
