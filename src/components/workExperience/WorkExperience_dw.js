import React from 'react';
import "./workExperience.css"

function WorkExperience_dw(props) {
  return (
      <main>
        <h1 className="sectionTitle">Desarrollo Web Feedback Alumnos & Rendimiento</h1>
        <section className='sectionImageContainer'>
        {props.feedBackDW.map((image, key) =>
        //Acá tengo que usar sí o sí la etiqueta "a" para que funcione la librería
        <div key={image + key} className='containerImages'>
        <a href={image.feedback} data-title={image.camada} data-lightbox="mygallery" className='linkImage'><img className="imageFeedback" src={image.feedback} alt="Imagen Desarrollo Web" /></a>
            <div key={image + key} className='containerImagesGraphics'>
            <a href={image.graphic} data-title={image.camada} data-lightbox="mygallery" className='linkImageGraphic'><img className="imageFeedback" src={image.graphic} alt="Imagen Desarrollo Web" /></a>
            </div>
        </div>
         )}
        </section>
    </main>
  );
}

export default WorkExperience_dw;