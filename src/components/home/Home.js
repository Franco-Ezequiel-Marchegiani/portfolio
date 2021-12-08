import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import 'animate.css';
function Home() {
  return (
    <div className="body">
      <div className="textContainer">
          <h1 className="titleHome">Bienvenido a mi porfolio!</h1>
          <h2 className="titleHome subTitle">¿En qué lo puedo ayudar?</h2>
          <h3 className="textHome">Este sitio Web es un S.P.A. (Single Page Aplication), cada ventana cargará sólamente el contenido seleccionado. Si desea volver atrás puede acceder clickeando al logo de la esquina superior izquierda</h3>
          <div className="btn-container">
          <Link className="link-home" to="/AboutMe"><button className="btn-home">Sobre mí</button></Link>
            <Link className="link-home" to="/Skills"><button className="btn-home">Skills & Habilidades</button></Link>
            <Link className="link-home" to="/Proyects"><button className="btn-home">Proyectos</button></Link>
            <Link className="link-home" to="/WorkExperience"><button className="btn-home">Experiencia Laboral</button></Link>
            <Link className="link-home" to="/Contact"><button className="btn-home">Contacto</button></Link>
          </div>
      </div>
    </div>
  );
}

export default Home;