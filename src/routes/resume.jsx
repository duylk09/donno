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
            <Container className="px-5 my-5">
                <Row className="gx-5 justify-content-center">
                    <Col className="col-lg-11 col-xl-9 col-xxl-8">
                        <div className="text-center mb-5">
                            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                        </div>
                        <div className="mb-4 text-center">
                            <a className="mb-5" href={resumeFile} download>
                                <Button variant="primary">Download Resume</Button>
                            </a>
                        </div>
                        <Container className="py-5">
                   
                            <Card className="p-5 card-body card shadow border-0 rounded-4" >
                                <Card.Body className="">
                                    <Card.Title className="align-items-center mb-4">
                                        <h3 className="fw-bolder mb-0">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                <i className="bi bi-tools"></i>
                                            </div>

                                            <span className="text-gradient d-inline">Professional skills</span>
                                        </h3>
                                    </Card.Title>
                                    <Container>
                                        <Row className="row-cols-md-3">
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Programming</Container></Col>
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Communication</Container></Col>
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Problem-solving</Container></Col>
                                        </Row>
                                        <Row className="row-cols-md-3">
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Teamwork</Container></Col>
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adaptability</Container></Col>
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Time Management</Container></Col>
                                        </Row>
                                        <Row className="row-cols-md-3 mb-4">
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Creativity</Container></Col>
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Empathy</Container></Col>
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Patience</Container></Col>
                                        </Row>
                                    </Container>
                                    <Card.Title className="align-items-center mb-4 pt-3">
                                        <h3 className="fw-bolder mb-0">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                <i class="bi bi-code-slash"></i>
                                            </div>
                                            <span className="text-gradient d-inline">Programming Languages</span>
                                        </h3>
                                    </Card.Title>
                                    <Container>
                                        <Row className="row-cols-md-3 mb-4">
                                            <Col className="col-12 mb-4"><Container className=" align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</Container></Col>
                                            <Col className="col-12 mb-4"><Container className=" align-items-center bg-light rounded-4 p-3 h-100">JavaScript</Container></Col>
                                            <Col className="col-12 mb-4"><Container className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</Container></Col>
                                        </Row>
                                    </Container>
                    
                                </Card.Body>
                            </Card>

                           
                        </Container>

                    </Col>
                </Row>



            </Container>
        </>

    );

}

export default Resume;