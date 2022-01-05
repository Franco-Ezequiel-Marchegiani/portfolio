import React from 'react';
import './contact.css';
import { BsFileCheck } from "react-icons/bs";
function Contact() {
  return (
    <section className="contactContainer">
        <h1 className="tituloContacto">Contacto</h1>
        <p className='parrafoContacto'>Si llegaste hasta aqui te agradezco por tomarte tu tiempo para ver mi pagina web ♥</p>
        <p className='parrafoContacto ultimoParrafoContacto'>En caso de que mi perfil haya sido de su agrado y deseen seguir en contacto, les dejo medios por los cuales podemos seguir en contacto</p>
      <div className='contenedorIconosContacto'>
      <a className='iconContact' href="https://wa.me/541159610005" target="_blank" rel='noreferrer'><i className="fab fa-whatsapp"></i></a>
      <a className='iconContact' href="mailto:francoezequielmarchegiani2019@gmail.com"><i className="fas fa-envelope-open-text iconContact"></i></a>
      <a href="https://www.linkedin.com/in/franco-e-marchegiani/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in iconContact"></i></a>
      <a className='iconContact portfolioIcon' href="https://www.canva.com/design/DAEFLVmm4p0/fHkEZZcQbOpHswK9yCykww/view" target="_blank" rel='noreferrer'><BsFileCheck/></a>
      </div>
    </section>
  );
}

export default Contact;