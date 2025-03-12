import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Particle from './components/Particle';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
    <Particle />
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />

    </>
  )
}

export default App