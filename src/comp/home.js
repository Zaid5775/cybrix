import React, { useState } from 'react';
import logo from './cybrix1.png';
import './home.css';
import {Link} from 'react-router-dom'

const Home = () => {
    const [url, setUrl] = useState('');
  

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    }

    const handleSubmit = () => {
        console.log("Your URL is: ", url)
    }
  
    return (
        <div  className= 'main'>
            <div className='navbar'>
            <div className="navbar-brand" id= "main-title" >
                <Link id='mainn' to= "/"><img id='main-title-img' src={require('./cybrixbb.png')}alt = "headimg"/></Link> </div>
                <div className='about'>
                 <Link id='mainn' to= "/Contact">CONTACT</Link>

                </div>
                <div className='contact'>
                <Link id='mainn' to= "/About">ABOUT</Link> 
                </div>
               
            
              
            </div>
           
            <div className='main1'>
            
            <div className='img'>
                <img src={logo} alt="Cybrix" />
            </div>
            <div className='l1'>
                <p> Effortlessly analyze URLs, and detect phishing attacks, malware, and potential security breaches with speed and accuracy!</p>
            </div>

            <div className='nwe'>
            <div className='form'>
                <input
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                    placeholder='Enter URL'
                />
                <button onClick={handleSubmit}>Submit</button>
                
            </div>
            </div>
            </div>
        </div>
    )
}

export default Home;
