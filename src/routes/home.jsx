import Navigationbar from "../components/Navigationbar"

function Home(){

  return (
    <>
      <Navigationbar/>
      <div class="text-center">
        <img src="/src/assets/profile.png" class="rounded mx-auto d-block" style={{ width: '400px' }}/>
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
    </>
  )
}

export default Home
