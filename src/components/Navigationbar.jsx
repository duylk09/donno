import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navigationbar(){
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary navbar navbar-expand-lg bg-white py-3">
            <Container className='px-5'>
                <NavLink className="navbar-brand fw-bolder text-primary" to="/" style={{ fontSize: '1.5rem' }}>Don Lê</NavLink>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mb-2 mb-lg-0 fw-bolder" >
                        <NavLink className="nav-link nav-item" to="/">Home</NavLink>
                        <NavLink className="nav-link nav-item" to="/resume">Resume</NavLink>
                        <NavDropdown title="Project" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink className="nav-link" to="/project1">Project 1</NavLink>
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigationbar;