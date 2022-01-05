import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <footer>
      <div className="FooterContainer">
        <div>
        <a className='iconFooter mailIcon' href="mailto:francoezequielmarchegiani2019@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
        <div>
            <Link className='iconFooter linkedinIcon' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></Link>
        </div>
        <div>
        <Link className='iconFooter githubIcon' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></Link>
        </div>
      </div>
        <p className='textDownFooter'>Sitio Web hecho utilizando React.JS © 2022 Franco Ezequiel Marchegiani</p>
    </footer>
  );
}

export default Footer;