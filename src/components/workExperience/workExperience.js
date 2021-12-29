import React from 'react';
import AYOWorkExperience from './AYOWorkExperience';
import CoderHouseWorkExp from './CoderHouseWorkExp';
import './workExperience.css';

function WorkExperience() {
  return (
    <div className="wordExperience_container">
    <h1 className='workExperiencieTitlePresentation'>Experiencia Laboral</h1>
    <h2 className='workExperiencieSubtitlePresentation'>Tutor de CoderHouse</h2>
    <p className='workExperiencieParagraph'>Mi rol en este puesto es el de estar a cargo de un grupo reducido de alumnos (entre 15 y 25 aprox), a los cuales debo aconsejar, brindar material complementario, resolver las dudas que surjan (tanto administrativas como técnicas de los contenidos que se ven en la cursada), y corregir los "desafios" (ejercicios de cada clase como práctica) de cada uno de los alumnos, y brindarle un feedback correspondiente a cada entrega.</p>
    <p className='workExperiencieParagraph'>Actualmente, los cursos los cuales brindo mi servicio de tutoría son en los cursos de:</p>
    <CoderHouseWorkExp/>
    <AYOWorkExperience/>
    </div>
  );
}

export default WorkExperience;