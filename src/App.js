
import './App.css';
import Header from './components/header.js';
import Education from './components/education.js';
import Certifications from './components/certifications.js';
import Experience from './components/experience.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Conatct from './components/conatct.js';
import Footer from './components/footer.js';


function App() {
  return (
    <>
        <Header/>
        <Education/>
        <Certifications/>
      <Experience />
        <Skills/>
        <Projects/>
        <Conatct/>
        <Footer/>
        
    </>
  );
}

export default App;
