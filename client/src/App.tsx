import './App.css'
import Footer from './components/Footer'
import Mentors from './components/Mentors'
import Navbar from './components/Navbar'
import OurDifferentiators from './components/OurDifferentiators'
import Partnership from './components/Partnership'
import Projects from './components/Projects'
// import Slider from './components/Slider'
import WhySection from './components/WhySection'

function App() {


  return (<>
    <div className="poppins">

      <Navbar />
      {/* <Slider /> */}
      <WhySection />
      <OurDifferentiators />
      <Mentors />
      <Partnership />
    <Projects />
      {/* <HeroSection /> */}
      {/* <Courses /> */}
      {/* <Description /> */}
      {/* <FAQSection /> */}
      <Footer />
    </div>
  </>

  )
}

export default App
