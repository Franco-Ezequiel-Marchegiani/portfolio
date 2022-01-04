import React from 'react';
import "./workExperience.css"

import ImagenHomeAYO from '../../images/experiencia-laboral/proyectoAYO/imgHomeAYO.png';
import ImagenSobreAYO from '../../images/experiencia-laboral/proyectoAYO/imgSobreAyo.png';
import ImagenAYOEmprende from '../../images/experiencia-laboral/proyectoAYO/imgAyoEmprende.png';
import GifHomeAYO from '../../images/experiencia-laboral/proyectoAYO/gifHome.gif';
import GifSobreAYO from '../../images/experiencia-laboral/proyectoAYO/gifSobreAYO.gif';
import GifAYOEmprende from '../../images/experiencia-laboral/proyectoAYO/gifAYOEmprende.gif';
import { Link } from 'react-router-dom';

function AYOWorkExperience() {
  let arrayImages = [
    {
      imagen: ImagenHomeAYO,
      nombreClase: "imagenHomeAyo",
      gif: GifHomeAYO,
      gifClase: "GifAYO"
    },
    {
      imagen: ImagenSobreAYO,
      nombreClase: "ImagenSobreAYO",
      gif: GifSobreAYO,
      gifClase: "GifAYO"
    },
    {
      imagen: ImagenAYOEmprende,
      nombreClase: "ImagenAYOEmprende",
      gif: GifAYOEmprende,
      gifClase: "GifAYO"
    } 
  ]
  return (
    <section className='containerGlobalAYOWorkExperience'>
      <h1 className='titleWorkExperienceAYO'>Fundación AYO</h1>
      <p className='paragraphWorkExperienceAYO'>Trabaje para la Fundacion AYO en la creacion del re-diseño de su pagina web, actualmente la pagina original tuvo algunas modificaciones ya que re-diseñaron algunos aspectos y pasaron la pagina a Wordpress, pero de todos modos lo que realice en dicha pagina aun perdura en mi repositorio de github el cual podran acceder con el 
      <Link className='linkFundacionAYO' to="//franco-ezequiel-marchegiani.github.io/proyecto-AYO/index.html" target="_blank" rel="noopener noreferrer">siguiente link</Link></p>
    <p className='secondParagraphWorkExperienceAYO'> Si bien esto ya lo mencione en la seccion de "proyectos", tambien lo coloco en experiencia laboral ya que fue el primer trabajo freelance y contacto con el mundo laboral que tuve, trabajando con un profesional del area UX/UI. Y aunque lo que realice no haya perdurado como proyecto final, me llevo muchas enseñanzas, experiencias y lecciones del tiempo en el que trabaje en este proyecto
    </p>
    <section className='wrapper'>
      {arrayImages.map((image, i) =>
        <div key={image + i} className='imageContainerAYOExperience'>
            <img className={image.gifClase} key={image.gifClase + i} src={image.gif} alt="gif muestra AYO"/>
            <img className={image.nombreClase} key={image.nombreClase + i} src={image.imagen} alt="Imagen muestra página AYO" />
        </div>
      )} 
      
      </section>
    </section>
  );
}

export default AYOWorkExperience;