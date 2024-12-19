import './App.css'
import Hero from './components/Hero'
import MaxWidthWrapper from './components/MaxWidthWrapper'

function App() {
  return (
    <>
      <div>
        <MaxWidthWrapper>
          <Hero />
        </MaxWidthWrapper>
      </div>
    </>
  )
}

export default App
