import React from 'react';
import './Skill.css';
import AOS from 'aos';
function Skill(props) {
  AOS.init()
  return (
    <main className="skill">
    <div className="containerSkills_logos">
        {props.data.map((dataIndividual, item) =>
        <div key={item + dataIndividual} data-aos="zoom-in" data-aos-duration="1700" className="boxInfoSkills">
        <img className="skillLogo" src={dataIndividual.logo} key={item + dataIndividual.logo} alt="Logo Skill"/>
        <p className="experiencieSkill" key={item + dataIndividual.experience}>{dataIndividual.experience}</p>
        </div>)}
        
    </div>
    </main>
  );
}

export default Skill;