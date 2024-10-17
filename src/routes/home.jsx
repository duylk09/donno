import { Image } from 'react-bootstrap';
import profilePic from '../assets/profile.png'
import Container from 'react-bootstrap/Container';

function Home() {

  return (
    <>
      <Container className="pt-5">
        <div>
          <div className="text-center align-items-center d-flex flex-column justify-content-center pb-5">
            <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Development &middot; Leadership &middot; Education</div></div>
            <div className="fs-3 fw-light text-muted">Innovative problem-solver transitioning to</div>
            <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient">Front-end development</span></h1>
            {/* <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
              <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="resume.html">Resume</a>
              <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects.html">Projects</a>
            </div> */}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 pt-5">
          <div className="profile bg-gradient-primary-to-secondary">
            <Image src={profilePic} className="profile-img" />
            
          </div>
        </div>

      </Container>
      <Container className="pt-5 pb-3 px-5">
          <div className="text-center">
            <h2 className="display-5 fw-bolder">
              <span className="text-gradient d-inline">About me</span>
            </h2>
            <p class="lead fw-light mb-4">Hello, my name is Don</p>
            <p className="text-muted">
              An innovative professional with a background in education and leadership, 
              now transitioning into website development. With a Bachelor of Computer Science, 
              a Master's in Education and extensive experience in coaching and management, I bring a unique blend of skills to the tech world. 
              My strong suits in communication, problem-solving, and adaptability, 
              honed through years of leading teams and managing projects, 
              complement my technical foundation in computer science. 
              I'm excited to leverage this diverse experience to create user-centric, 
              efficient web solutions. Let's connect and explore how my unique perspective can contribute to 
              your next digital project!
            </p>
            
          </div>
        </Container>
    </>
  )
}

export default Home
