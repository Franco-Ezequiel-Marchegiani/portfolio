import React from 'react';
import { Link } from 'react-router-dom';
import AYOWorkExperience from './AYOWorkExperience';
import CoderHouseWorkExp from './CoderHouseWorkExp';
import './workExperience.css';

function WorkExperience() {
  return (
    <div className="wordExperience_container">
    <h1 className='workExperiencieTitlePresentation'>Experiencia Laboral</h1>
    <div className='linkContainerWorkExperience'>
    <Link to="/WorkExperience/CoderHouse" className='linkWorkExperience'>CoderHouse</Link>
    <Link to="/WorkExperience/AYO" className='linkWorkExperience'>Fundación AYO</Link>
    </div>
    <CoderHouseWorkExp/>
    <AYOWorkExperience/>
    </div>
  );
}

export default WorkExperience;