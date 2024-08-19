import React from 'react';
import "./workExperience.css"

import ImagenHomeAYO from '../../images/experiencia-laboral/disbyte/disbyte_1.png';
import ImagenSobreAYO from '../../images/experiencia-laboral/disbyte/disbyte_2.png';
import ImagenAYOEmprende from '../../images/experiencia-laboral/disbyte/disbyte_3.png';
import GifHomeAYO from '../../images/experiencia-laboral/proyectoAYO/gifHome.gif';
import GifSobreAYO from '../../images/experiencia-laboral/proyectoAYO/gifSobreAYO.gif';
import GifAYOEmprende from '../../images/experiencia-laboral/proyectoAYO/gifAYOEmprende.gif';
import { Link } from 'react-router-dom';

function DisbyteWorkExperience() {
  let arrayImages = [
    
    {
      imagen: ImagenSobreAYO,
      nombreClase: "ImagenSobreAYO",
      gif: ImagenSobreAYO,
      gifClase: "GifAYO"
    },
    {
      imagen: ImagenAYOEmprende,
      nombreClase: "ImagenAYOEmprende",
      gif: ImagenAYOEmprende,
      gifClase: "GifAYO"
    },
    {
      imagen: ImagenHomeAYO,
      nombreClase: "imagenHomeAyo",
      gif: ImagenHomeAYO,
      gifClase: "GifAYO"
    },
  ]
  return (
    <section className='containerGlobalAYOWorkExperience'>
      <h1 className='titleWorkExperienceAYO'><Link className='linkFundacionAYO' to='https://www.linkedin.com/company/grupodisbyte/mycompany/verification/'  target="_blank"> Disbyte S.A.</Link></h1>
      <p className='paragraphWorkExperienceAYO'>Formé parte del team Disbyte a mediados del año 2022, es una empresa la cual se especializa en el comercio de venta de los productos que ofrece. Mi participación tuvo un fuerte impacto a la hora de globalizar el area de ventas, facilitando y automatizando muchos procesos de trabajos internos, como así también el de sus herramientas </p>
    <p className='secondParagraphWorkExperienceAYO'>Por cuestiones de no filtrar información y mantener la integridad y seguridad de Disbyte, no puedo publicar imágenes de los proceso los cuales trabajé, o de dichas herramientas ya que son de uso interno. Pero <b> las herramientas las cuales utilicé desde inicio a fin en Disbyte Fueron desde: Node.js, Javascript, Python, Excel, GoogleSheet, SQL, Postman, Git & Github, ReactJS, Material UI, Azure DevOps</b>. Como también así procesos de automatización, buenas prácticas, optimización en el código, y gran aprendizaje en lo que son soft skills y el correcto cumplimiento con las fechas límites y de entrega.   
    </p>
    <section className='wrapper'>
      {arrayImages.map((image, i) =>
        <div key={image + i} className='imageContainerAYOExperience'>
            <img className={image.gifClase} key={image.gifClase + i} src={image.gif} alt="gif muestra AYO"/>
            <img className={image.nombreClase} key={image.nombreClase + i} src={image.imagen} alt="Imagen muestra Disbyte" />
        </div>
      )} 
      
      </section>
    </section>
  );
}

export default DisbyteWorkExperience;