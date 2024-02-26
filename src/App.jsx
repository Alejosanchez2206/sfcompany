
import Navbar from './Component/Navbar'
import { Parallax } from 'react-parallax';
import Home from './Component/Home';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Services from './Component/Services';
import './index.css'
function App() {

  return (
    <>
      <div className='super-navbar'>
        <Navbar />
      </div>
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </div>
    </>
  )
}

export default App
