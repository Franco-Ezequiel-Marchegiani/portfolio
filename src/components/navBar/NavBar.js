import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../../images/icons/react-dark.png'
import './navBar.css';
function NavBar() {
  return (
    <nav className='navBar-Container'>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand><Link className="link-navbar" to="/"><img className="logoNavBar" src={Logo} alt="Logo Navbar" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            </Nav>
              <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link><Link className="link-navbar" to="/Skills">Skills & habilidades</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><Link className="link-navbar" to="/Proyects">Proyectos</Link></Nav.Link>
                </Nav.Item>
                <NavDropdown className="titleDropDown" variant="primary" title="Experiencia Laboral" id="nav-dropdown">
                  <NavDropdown.Item><Link className="link-navbar" to="/WorkExperience/CoderHouse">CoderHouse</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className="link-navbar" to="/WorkExperience/AYO">Fundación AYO</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link className="link-navbar" to="/WorkExperience">Ver todo</Link></NavDropdown.Item>
                </NavDropdown>
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