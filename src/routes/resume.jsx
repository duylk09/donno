import Navigationbar from "../components/Navigationbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from "react-bootstrap";
import resumeFile from "../assets/Don Le CV.pdf"

const colstyle = { border: '1px solid black' };

function Resume() {

    return (
        <>
            <Container className="py-5 px-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                </div>
                <div className="mb-4 text-center">
                    <a className="mb-5" href={resumeFile} download>
                        <Button variant="primary">Download Resume</Button>
                    </a>
                </div>
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Skills</span></h1>
                    </div>
                    <Card className="d-inline-flex m-5" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../../coaching.png" />
                        <Card.Body>
                            <Card.Title>Programming</Card.Title>
                            <Card.Text>
                                BE in Computer Science.
                                Experienced with Python, Javascript, React, html, css
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="d-inline-flex m-5" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../../coaching.png" />
                        <Card.Body>
                            <Card.Title>Coaching</Card.Title>
                            <Card.Text>
                                Successfully advanced 50% of staff to senior and management roles through targeted coaching and development initiatives
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="d-inline-flex m-5" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../../coaching.png" />
                        <Card.Body>
                            <Card.Title>Communication</Card.Title>
                            <Card.Text>
                                Possess strong communication skills rooted in active listening, empathy, constructive feedback delivery, transparency, honesty, and patience, enabling me to foster collaboration and trust in any team environment.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="d-inline-flex m-5" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../../coaching.png" />
                        <Card.Body>
                            <Card.Title>Project Management</Card.Title>
                            <Card.Text>
                                Experienced with managing multi projects with strick deadlines. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>

    );

}

export default Resume;