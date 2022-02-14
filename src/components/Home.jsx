import React,{useState} from 'react'
import people from '../assets/people.png';
import ai from '../assets/ai.gif';
import '../CSS/home.css';
import { GoogleLogin } from 'react-google-login';

const Home = () => {
   
    const [Login, setLogin] = useState(0);
    
    const responseGoogle = (response) => {
        setLogin(1);
        console.log(response);
        
      
      }
    // console.log(props.data);
  return (
    <>
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to SAE-NITD auditons</h1>
      <p>The SAEINDIA Collegiate Club of NIT Durgapur is exhilarated to announce that the Auditions for 2022 will be kicking off in a short while and we honestly cannot wait to recruit our dream team!</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>70+ people are actively working in this club</p>
      </div>
      <div className='me-auto mt-4 '>
      {
                (Login==0)?
                    <div class=" flex-column sim"> <span style={{color:"orangered"}}> 
                        <GoogleLogin
                        clientId="1065057197304-8rodo2c5iv0f6ff2bjf5c98pkod0n122.apps.googleusercontent.com"
                        // buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        theme="dark"
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                        /></span> 
                    </div>: <button class="custom-btn btn-13  bold"><spna style={{color:"lightblue"}}>Start</spna></button>
            }
            </div>

    </div>
    
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  </>
  )
}

export default Home


