import React from 'react';
import './Skill.css';
function Skill(props) {
  return (
    <main className="skill">
    <div className="containerSkills_logos">
        {props.data.map((dataIndividual, item) =>
        <div key={item + dataIndividual} className="boxInfoSkills">
        <img className="skillLogo" src={dataIndividual.logo} key={item + dataIndividual.logo} alt="Logo Skill"/>
        <p className="experiencieSkill" key={item + dataIndividual.experience}>{dataIndividual.experience}</p>
        </div>)}
        
    </div>
    </main>
  );
}

export default Skill;