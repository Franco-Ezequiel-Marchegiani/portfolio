import React from 'react';
import "./App.css"
import 'animate.css';
import Home from './components/home/Home';
import Skills from './components/skills/skills';
import WorkExperience from './components/workExperience/WorkExperience';
import Proyect from './components/proyects/Proyects';
import Contact from './components/contact/contact';
//Hola
function App() {
  return (
    <>
        <Home/>
        <Skills/>
        <Proyect/>
        <WorkExperience/>
        <Contact/>
    </>
  );
}

export default App;
