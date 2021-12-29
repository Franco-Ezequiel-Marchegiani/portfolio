import React from 'react';
import { Link } from 'react-router-dom';
import './aboutMe.css';
function AboutMe() {
  return (
    
    <main className="about-me">
      <div>
        <h1 className="title-aboutMe">Acerca de mí</h1>
        <h2 className="subtitle-aboutMe">Soy programador Front-End, tengo 20 años, soy de Argentina, estudié en 
        <Link className="link-coderh" to="//www.coderhouse.com/" target="_blank" rel="noopener noreferrer">CoderHouse</Link> & <Link className="link-dh" to="//www.digitalhouse.com/ar" target="_blank" rel="noopener noreferrer">DigitalHouse</Link> y actualmente trabajo medio tiempo en CoderHouse como tutor</h2>

        <div className="aspectoProfesional-personal_Container">
          <div className='aspectoProfesionalContainer'>
            <h3>Aspecto profesional</h3>
            <p>Me integré en el mundo de la programación desde el 2019, desde siempre me interesó todo el aspecto tecnológico y el crear nuevas cosas, y que estas mismas le sean de utilidad a terceros.</p>
            <p>Si bien en DigitalHouse realicé estudios de FullStack, me siento más atraido por el area de Front-End</p>
            <p>Actualmente me encuentro en búsqueda de un trabajo tiempo completo, ya que me encantaría poder dedicarme y profesionalizarme en esta area de la tecnología para no dejar de aprender en ningún momento</p>
          </div>
          <div className='aspectoPersonalContainer'>
            <h4>Aspecto personal</h4>
          </div>
        </div>
        <p></p>
      </div>
    </main>
  );
}

export default AboutMe;