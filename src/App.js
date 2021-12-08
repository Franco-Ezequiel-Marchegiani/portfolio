
import "./app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import AboutMe from "./components/aboutMe/aboutMe";
import Home from "./components/home/Home";
import Contact from "./components/contact/contact";
import Proyect from "./components/proyects/proyects";
import Skills from "./components/skills/skills";
import WorkExperience from "./components/workExperience/workExperience";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/navbar" exact={true} element={<NavBar/>}/>
        <Route path="/AboutMe" exact={true} element={<AboutMe/>}/>
        <Route path="/Contact" exact={true} element={<Contact/>}/>
        <Route path="/Proyects" exact={true} element={<Proyect/> }/>
        <Route path="/Skills" exact={true} element={<Skills/> }/>
        <Route path="/WorkExperience" exact={true} element={<WorkExperience/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
