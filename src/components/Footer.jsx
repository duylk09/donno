import { Nav, Image } from "react-bootstrap"
function Footer() {
    return (

        <Nav className="bg-body-tertiary navbar navbar-expand-lg bg-white py-3 justify-content-center">
            <Nav.Item>
                <Nav.Link href="/home"><Image src="../../home.png" style={{ width: '48px', height: '48px' }} rounded /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/duykhacle/"><Image src="../../linkedin.png" style={{ width: '42px', height: '42px' }} rounded /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://www.youtube.com/@Donno_dunno"><Image src="../../youtube.png" style={{ width: '46px', height: '46px' }} rounded /></Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default Footer;