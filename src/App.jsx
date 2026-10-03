import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceEducation from './components/ExperienceEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300 font-sans overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
