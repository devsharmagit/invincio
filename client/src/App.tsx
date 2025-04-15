import './App.css'
import Description from './components/Description'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

function App() {
  

  return (<>
<div className='firstScreen h-screen flex flex-col '>
    <Navbar />
    <HeroSection />
</div>
<Slider />
<Description />
<Footer />
  </>

  )
}

export default App
