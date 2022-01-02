import React from 'react';
import './ProyectDetail.css';
import AOS from 'aos';
function ProyectDetailContent(props) {
    AOS.init()
  return (
    <section className={props.claseContenedora} data-aos={props.animation} data-aos-duration={props.duracionAnimacion}>
        <img className={props.claseImage} src={props.imagen} alt="" />
        <p className={props.claseParrafo}>{props.texto}</p>
    </section>
  );
}

export default ProyectDetailContent;