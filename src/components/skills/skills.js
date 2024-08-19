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

  //Fechas de inicio de mi experiencia
  const startDates = {
    html: new Date('2020-03-01'),
    css: new Date('2020-03-01'),
    javascript: new Date('2021-03-01'),
    git: new Date('2021-03-01'),
    mySql: new Date('2022-02-01'),
    node_js: new Date('2022-02-01'),
    react: new Date('2022-02-01'),
    python: new Date('2023-02-01'),
    azure: new Date('2024-02-01'),
  };

  //Función para calcular la experiencia en cada herramienta
  function calculateExperience(startDate) {
    //Tomamos la fecha actual
    const currentDate = new Date();
    //Restamos el valor que le pasamos por parámetros, y obtenemos la diferencia
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
  
    //Si es menos de un año, muestra los meses
    if (years === 0) {
      return `${months < 0 ? months + 12 : months} Meses`;
    }
  
    //Caso contrario, devuelve los años de experiencia
    return `${years} Años`;
  }
  const skillData = [
    {
      logo: HtmlLogo,
      experience: `+${calculateExperience(startDates.html)} utilizando HTML`
    },
    {
      logo: CssLogo,
      experience: `+${calculateExperience(startDates.css)} Años utilizando CSS`
    },
    {
      logo: JsLogo,
      experience: `+${calculateExperience(startDates.javascript)} Años utilizando JS`
    },
    {
      logo: GitLogo,
      experience: `+${calculateExperience(startDates.git)} Años utilizando Git & GitHub`
    },
    {
      logo: MySqlLogo,
      experience: `+${calculateExperience(startDates.mySql)} Años utilizando MySql`
    },
    {
      logo: NodeJsLogo,
      experience: `+${calculateExperience(startDates.node_js)} Años utilizando NodeJs`
    },{
      logo: ReactDarkLogo,
      experience: `+${calculateExperience(startDates.react)} Años utilizando React`
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
      experience: `+${calculateExperience(startDates.azure)} utilizando herramienta de trabajo Azure DevOps`
    },
    {
      logo: PythonLogo,
      experience: `+${calculateExperience(startDates.python)} utilizando herramienta de trabajo Trello`
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