import './App.css'
import Courses from './components/Courses'
import Description from './components/Description'
import FAQSection from './components/FAQsection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Mentors from './components/Mentors'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

function App() {


  return (<>
    <div className="poppins">

      <Navbar />
      <Slider />
      <HeroSection />
      <Courses />
      <Mentors />
      <Description />
      <FAQSection />
      <Footer />
    </div>
  </>

  )
}

export default App
