import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigationbar(){
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Don Le</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/routes/resume.jsx">Resume</Nav.Link>
                        {/* <NavDropdown title="Project" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigationbar;