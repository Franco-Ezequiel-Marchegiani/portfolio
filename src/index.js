import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutMe from "./components/aboutMe/aboutMe";
import Contact from "./components/contact/contact";
import Proyect from "./components/proyects/proyects";
import Skills from "./components/skills/skills";
import WorkExperience from "./components/workExperience/WorkExperience";
import NavBar from './components/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
ReactDOM.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route path="/" exact={true} element={<App/>}/>
        <Route path="/AboutMe" exact={true} element={<AboutMe/>}/>
        <Route path="/Contact" exact={true} element={<Contact/>}/>
        <Route path="/Proyects" exact={true} element={<Proyect/> }/>
        <Route path="/Skills" exact={true} element={<Skills/> }/>
        <Route path="/WorkExperience" exact={true} element={<WorkExperience/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
