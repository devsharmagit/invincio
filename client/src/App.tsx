import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Mentors from './components/Mentors'
import Navbar from './components/Navbar'
import OurDifferentiators from './components/OurDifferentiators'
import OurOfferings from './components/OurOfferings'
import Partnership from './components/Partnership'
import Popup from './components/Popup'
import Projects from './components/Projects'
import Recomendes from './components/Recomendes'
import Services from './components/Services'
import StickySocail from './components/StickySocail'
import Tagline from './components/Tagline'
// import Slider from './components/Slider'
import WhySection from './components/WhySection'

function App() {


  return (<>
    <div className="poppins">
      <StickySocail />
      <Popup />
      <Navbar />
      <Tagline />
      <Services />
      <OurDifferentiators />
      <OurOfferings />
      <Mentors />
      <Partnership />
      <Projects />
      <Recomendes />
      <HeroSection />
      <WhySection />
      <Footer />
    </div>
  </>

  )
}

export default App
