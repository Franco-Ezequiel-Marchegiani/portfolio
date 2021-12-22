import React from 'react';
import './workExperience.css';
import camadaN1_DW from '../../images/experiencia-laboral/camadaN1-desarrolloWeb.jpg';
import camadaN1_DW_graphic from '../../images/experiencia-laboral/camadaN1_grafico-desarrolloWeb.png';

import camadaN2_JS from '../../images/experiencia-laboral/camadaN2-js.jpg';
import camadaN2_JS_graphic from '../../images/experiencia-laboral/camadaN2_grafico-js.png';

import camadaN3_DW from '../../images/experiencia-laboral/camadaN3-desarrolloWeb.png';
import camadaN3_DW_graphic from '../../images/experiencia-laboral/camadaN3_grafico-desarrolloWeb.png';

import camadaN4_DW from '../../images/experiencia-laboral/camadaN4-desarrolloWeb.png';
import camadaN4_DW_graphic from '../../images/experiencia-laboral/camadaN4_grafico-desarrolloWeb.png';

import camadaN5_DW from '../../images/experiencia-laboral/camadaN5-desarrolloWeb.png';
import camadaN5_DW_graphic from '../../images/experiencia-laboral/camadaN5_grafico-desarrolloWeb.png';

import camadaN6_DW from '../../images/experiencia-laboral/camadaN6-desarrolloWeb.png';
import camadaN6_DW_graphic from '../../images/experiencia-laboral/camadaN6_grafico-desarrolloWeb.png';

import camadaN7_JS from '../../images/experiencia-laboral/camadaN7-js.png';
import camadaN7_JS_graphic from '../../images/experiencia-laboral/camadaN7_grafico-js.png';


function WorkExperience() {

  let webDeveloper = [camadaN1_DW, camadaN1_DW_graphic, camadaN3_DW, camadaN3_DW_graphic, camadaN4_DW, camadaN4_DW_graphic, camadaN5_DW, camadaN5_DW_graphic, camadaN6_DW, camadaN6_DW_graphic];
  let javascript = [camadaN2_JS, camadaN2_JS_graphic, camadaN7_JS, camadaN7_JS_graphic];
  return (
    <div className="wordExperience_container">
    <h1>Experiencia Laboral</h1>
    <h2>CoderHouse</h2>
    </div>
  );
}

export default WorkExperience;