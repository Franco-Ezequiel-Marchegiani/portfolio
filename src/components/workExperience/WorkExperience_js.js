import React from 'react';
import { Link } from 'react-router-dom';
import "./workExperience.css"

function WorkExperience_js(props) {
  return (
    <main>
        <h1 className="sectionTitle">Javascript Feedback Alumnos & Rendimiento</h1>
        <section className='sectionImageContainer'>
        {props.feedBackJS.map((image, key) =>
          <div key={image + key} className='containerImages'>
        <Link to={image.feedback} data-title={image.camada} data-lightbox="mygallery" className='linkImage'><img className="imageFeedback" src={image.feedback} alt="Imagen Desarrollo Web" /></Link>
            <div key={image + key} className='containerImagesGraphics'>
            <Link to={image.graphic} data-title={image.camada} data-lightbox="mygallery" className='linkImageGraphic'><img className="imageFeedback" src={image.graphic} alt="Imagen Desarrollo Web" /></Link>
            </div>
        </div>
         )}
        </section>
    </main>
  );
}

export default WorkExperience_js;