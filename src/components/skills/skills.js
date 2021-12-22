import React from 'react';
import './skills.css';
import Header from '../navBar/NavBar'
import Skill from './skill/Skill';
import HtmlLogo from '../../images/icons/html.png';
import CssLogo from '../../images/icons/css.png';
import JsLogo from '../../images/icons/js.png';
import EnglishLogo from '../../images/icons/english.png';
import GitLogo from '../../images/icons/git.png';
import MySqlLogo from '../../images/icons/mySql.png';
import NodeJsLogo from '../../images/icons/node-js.png';
//import ReactLogo from '../../images/icons/react.png';
import ReactDarkLogo from '../../images/icons/react-dark.png';
import SassLogo from '../../images/icons/Sass.png';
import ScrumLogo from '../../images/icons/scrum.png';
import TrelloLogo from '../../images/icons/trello.png';
function Skills() {
  const skillData = [
    {
      logo: HtmlLogo,
      experience: "+2 Años utilizando HTML"
    },
    {
      logo: CssLogo,
      experience: "+2 Años utilizando CSS"
    },
    {
      logo: JsLogo,
      experience: "+1 Años utilizando JS"
    },
    {
      logo: GitLogo,
      experience: "+2 Años utilizando Git & GitHub"
    },
    {
      logo: MySqlLogo,
      experience: "+6 Meses utilizando MySql"
    },
    {
      logo: NodeJsLogo,
      experience: "+6 Meses utilizando NodeJs"
    },{
      logo: ReactDarkLogo,
      experience: "+6 Meses utilizando React"
    },
    {
      logo: SassLogo,
      experience: "+1 Años utilizando Sass"
    },
    {
      logo: ScrumLogo,
      experience: "+6 Meses utilizando metodologías Scrum"
    },
    {
      logo: TrelloLogo,
      experience: "+6 Meses utilizando herramienta de trabajo Trello"
    },
    {
      logo: EnglishLogo,
      experience: "Nivel general de inglés entre B1 ~ B2"
    }
  ]
  return (
    <div className="a">
    <Header />
    <h1>Skills & Habilidades</h1>
    <h2>A continuación, les presento las herramientas de las cuales poseo conocimiento. También añadi el tiempo desde que estudio y trabajo (de manera autodidacta) con dichas herramientas </h2>
    <div className="skillsContainer">
      <Skill data={skillData}/>
    </div>
    </div>
  );
}

export default Skills;