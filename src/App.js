
import './App.css';
import { Navbar } from '../src/Components/Navbar/Navbar.js';
import { Hero } from './Components/Hero/Hero.js';
import { Skills } from './Components/Skills/Skills.js';
import { About } from './Components/About/About.js';
import { Projects } from '../src/Components/Projects/Projects.js';
import { ContactMe } from './Components/ContactMe/ContactMe.js';
import { Footer } from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
       <Footer />
      </div>
    </div>
  );
}

export default App;
