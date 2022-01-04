import React from 'react';
import "./app.css"
import 'animate.css';
import Home from './components/home/Home';
import Skills from './components/skills/skills';
import WorkExperience from './components/workExperience/WorkExperience';
import Proyect from './components/proyects/Proyects';

function App() {
  return (
    <>
      <Home/>
      <Skills/>
      <Proyect/>
      <WorkExperience/>
    </>
  );
}

export default App;
