import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navigationbar(){
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink className="navbar-brand text-primary" to="/"><strong>Don Lê</strong> </NavLink>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/resume">Resume</NavLink>
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