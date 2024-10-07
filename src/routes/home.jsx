import Navigationbar from "../components/Navigationbar"
import profilePic from '../assets/profile.png'
import Container from 'react-bootstrap/Container';
import { Button, Nav } from "react-bootstrap";
import Footer from "../components/Footer";

function Home() {

  return (
    <>
      <Navigationbar />
      <Container className="py-5">
        <div className="col-xxl-5">
          <div className="text-center text-xxl-center align-items-center d-flex flex-column justify-content-center">
            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Education &middot; Leadership &middot; Website Development</div></div>
            <div className="fs-3 fw-light text-muted">I can help your business to</div>
            <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online and grow fast</span></h1>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
              <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="resume.html">Resume</a>
              <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects.html">Projects</a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 mt-xxl-0">
          <div className="profile bg-gradient-primary-to-secondary">
            <img src={profilePic} className="profile-img" />
          </div>
        </div>
        <div className="text-center">
          <h1>About me</h1>
          <p>
            Professionally versed in customer service, English coaching, event management, learning assistance,
            and operation management. A conscientious individual with a proven track record of excellence in
            collaborative team environments, adept at utilising effective communication and problem-solving skills.
            Currently seeking a position within educational settings that provides opportunities to facilitate
            individuals' educational journeys, with a keen aspiration to further my professional growth as an educator.
          </p>
        </div>

      </Container>
      <Footer />
    </>
  )
}

export default Home
