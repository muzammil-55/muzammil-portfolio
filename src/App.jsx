import Education from './Components/Education'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
import Experience from './Components/Experience'

import { Linkedin, Github, Mail, Smartphone, MapPin, ChevronUp, User, Code, Folder, MessageSquare, Briefcase, Award } from 'lucide-react';



function App() {

  return (
    <>
    <div className="bg-gray-100 text-gray-800 font-sans"></div>
 
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Education/>      
      <Contact/>
      <Footer/>
    </>
  )
}









export default App
