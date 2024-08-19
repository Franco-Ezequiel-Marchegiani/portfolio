import React from 'react';
import './skills.css';
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
import AzureLogo from '../../images/icons/azure.png';
import PythonLogo from '../../images/icons/python.png';
function Skills() {
  const skillData = [
    {
      logo: HtmlLogo,
      experience: "+4 Años utilizando HTML"
    },
    {
      logo: CssLogo,
      experience: "+4 Años utilizando CSS"
    },
    {
      logo: JsLogo,
      experience: "+3 Años utilizando JS"
    },
    {
      logo: GitLogo,
      experience: "+3 Años utilizando Git & GitHub"
    },
    {
      logo: MySqlLogo,
      experience: "+2 Años utilizando MySql"
    },
    {
      logo: NodeJsLogo,
      experience: "+2 Años utilizando NodeJs"
    },{
      logo: ReactDarkLogo,
      experience: "+2 Años utilizando React"
    },
    {
      logo: SassLogo,
      experience: "+1 Años utilizando Sass"
    },
    {
      logo: ScrumLogo,
      experience: "+1 Año utilizando metodologías Scrum"
    },
    {
      logo: TrelloLogo,
      experience: "+1 Año utilizando herramienta de trabajo Trello"
    },
    {
      logo: AzureLogo,
      experience: "+6 Meses utilizando herramienta de trabajo Azure DevOps"
    },
    {
      logo: PythonLogo,
      experience: "+1 Año utilizando herramienta de trabajo Trello"
    },
    
    {
      logo: EnglishLogo,
      experience: "Nivel general de inglés entre B1 ~ B2"
    }
  ]
  return (
    <div className="">
    <h1 className='skills_habilidadesTitle'>Skills & Habilidades</h1>
    <h2 className='skills_habilidadesSubTitle'>A continuación, les presento las herramientas de las cuales poseo conocimiento. También añadi el tiempo desde que estudio y trabajo (de manera autodidacta) con dichas herramientas </h2>
    <div className="skillsContainer">
      <Skill data={skillData}/>
    </div>
    </div>
  );
}

export default Skills;