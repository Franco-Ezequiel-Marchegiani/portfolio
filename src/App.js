import React from 'react';
import "./app.css"
import 'animate.css';
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/aboutMe';
import Skills from './components/skills/skills';

function App() {
  return (
    <>
      <Home/>
      <AboutMe/>
      <Skills/>
    </>
  );
}

export default App;
