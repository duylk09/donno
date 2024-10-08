import { Nav, Image } from "react-bootstrap"
function Footer() {
    return (

        <Nav className="bg-body-tertiary navbar navbar-expand-lg bg-white py-3 justify-content-center fs-2">
 

            <Nav.Item>
                <Nav.Link className="text-gradient" href="https://www.linkedin.com/in/duykhacle/"><i className="bi bi-linkedin"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-gradient" href="https://www.youtube.com/\@Donno_dunno"><i className="bi bi-youtube"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="text-gradient" href="https://github.com/duylk09"><i className="bi bi-github"></i></Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default Footer;