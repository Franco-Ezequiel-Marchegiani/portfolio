/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import "./workExperience.css"

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
import WorkExperience_dw from './WorkExperience_dw';
import WorkExperience_js from './WorkExperience_js';


function CoderHouseWorkExp() {
    let webDeveloper =[
        {
            feedback: camadaN1_DW,
            graphic: camadaN1_DW_graphic,
            camada: "Camada N°13290"
        },
        {
            feedback: camadaN3_DW,
            graphic: camadaN3_DW_graphic,
            camada: "Camada N°15905"
        },
        {
            feedback: camadaN4_DW,
            graphic: camadaN4_DW_graphic,
            camada: "Camada N°16590"
        },
        {
            feedback: camadaN5_DW,
            graphic: camadaN5_DW_graphic,
            camada: "Camada N°16625"
        },
        {
            feedback: camadaN6_DW,
            graphic: camadaN6_DW_graphic,
            camada: "Camada N°18225"
        },
    ]

    let javascript =[
        {
            feedback: camadaN2_JS,
            graphic: camadaN2_JS_graphic,
            camada: "Camada N°7330"
        },
        {
            feedback: camadaN7_JS,
            graphic: camadaN7_JS_graphic,
            camada: "Camada N°16880"
        }
    ]
  
    return (
    <section>
      <WorkExperience_dw feedBackDW={webDeveloper}/>
      <hr />
      <hr />
      <WorkExperience_js feedBackJS={javascript}/>
      <hr />
      <hr />
    </section>
  );
}

export default CoderHouseWorkExp;