import About from "../PAGES/ABOUT/About"
import Contact from "../PAGES/CONTACT/Contact"
import Header from "../PAGES/HEADER/Header"
import Navbar from "../PAGES/NAVBAR/Navbar"
import Project from "../PAGES/PROJECT/Project"
import Skills from "../PAGES/SKILLS/Skills"


const Main = () => {
  
  return (
    <div>
        
        <Navbar />
        <Contact />
        <Header />
        <About />
        <Skills />
        <Project />
        
    </div>
  )
}

export default Main