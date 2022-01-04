import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import 'animate.css';
function Home() {
  return (
    <div className="body">
      <div className="textContainer">
      <p className='myNameHome'>Franco Ezequiel Marchegiani</p>
          <h1 className="titleHome">Front End <span className='spanTitleHome'>Developer</span></h1>
          <hr className='lineHome' />
          <p className="parrafoHome">Soy Tutor & Programador de Front-End durante mas de un año. Estas mismas son mis pasiones, ya que me encanta el programar, el crear sitios web y me gusta el enseñar lo que aprendí. En ambientes de trabajo me destaco por ser constante, detallista, concentrarme en las tareas que debo realizar, y sobre todo el trabajar en equipo, ya que considero de que los grandes proyectos se logran trabajando en equipo.</p>
          <p className="parrafoHome segundoParrafoHome">Mis motivaciones son las de superar desafios diarios y el brindarles productos de valor a terceros, actualmente vivo en Argentina (CABA), tengo 20 años y me encantaria el poder dedicarme al 100% en el mundo de la programacion, el encontrarme con nuevos y mas grandes desafios y el poder convivir y trabajar con gente con mi misma pasion</p>
          {/* <h3 className="textHome">Este sitio Web es un S.P.A. (Single Page Aplication), cada ventana cargará sólamente el contenido seleccionado. Si desea volver atrás puede acceder clickeando al logo de la esquina superior izquierda</h3> */}
          <div className="btn-container">
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