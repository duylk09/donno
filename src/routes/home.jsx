import Navigationbar from "../components/Navigationbar"
import profilePic from '../assets/profile.png'
import Container from 'react-bootstrap/Container';

function Home(){

  return (
    <>
      <Navigationbar/>
      <Container>
        <div class="text-center">
          <img src={profilePic} class="rounded mx-auto d-block" style={{ width: '400px' }}/>
        </div>
        <div class="text-center">
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

    </>
  )
}

export default Home
