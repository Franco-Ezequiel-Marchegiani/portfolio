import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../../images/icons/react-dark.png'
import './navBar.css';
function NavBar() {
  /*
  Ver el tema del NavBar Sticky 
  document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
 */
  return (
    <nav className='navBar-Container'>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand><Link className="link-navbar" to="/"><img className="logoNavBar" src={Logo} alt="Logo Navbar" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            </Nav>
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link><Link className="link-navbar" to="/AboutMe">Acerca de mí</Link> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><Link className="link-navbar" to="/Skills">Skills & habilidades</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><Link className="link-navbar" to="/Proyects">Proyectos</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><Link className="link-navbar" to="/WorkExperience">Experiencia Laboral</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><Link className="link-navbar" to="/Contact">Contacto</Link></Nav.Link>
                </Nav.Item>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;