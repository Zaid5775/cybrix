import React, { useState , useEffect} from 'react';
import logo from './cybrix1.png';
import './home.css';
import axios from 'axios';  // Import Axios
import { Link } from 'react-router-dom'
import ScanResultsComponent from './ScanResultsComponent'; // Assuming you have a separate component for displaying scan results

const Home = () => {
    const [url, setUrl] = useState('');
    const [scanResults, setScanResults] = useState(null);

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    }
    useEffect(() => {
        return () => {
            setUrl('');
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post('https://cybrix-zaidshaikh.onrender.com/scan', { url: url });
            console.log(response.data);
            setScanResults(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const  scanagain = () =>{
        setScanResults(null);
    }
    return (
        <>
          <div className='main'>
      
      
          
            <div className='navbar'>
                <div className="navbar-brand" id="main-title">
                    <Link id='mainn' to="/"><img id='main-title-img' src={require('./cybrixbb.png')} alt="headimg" /></Link> </div>
                <div className='about'>
                    <Link id='mainn' to="/Contact">CONTACT</Link>
                </div>
                <div className='contact'>
                    <Link id='mainn' to="/About">ABOUT</Link>
                </div>
            </div>
            {scanResults ? (
                <>            <ScanResultsComponent scanResults={scanResults} />
               
                    <button className='hi' onClick={scanagain}>Scan Again</button>
                
            
            </>

        ) : (
            <div className='main1'>
                <div className='img'>
                    <img src={logo} alt="Cybrix" />
                </div>
                <div className='l1'>
                    <p> Effortlessly analyze URLs, and detect phishing attacks, malware, and potential security breaches with speed and accuracy!</p>
                </div>
                <div className='nwe'>
                    <form onSubmit={handleSubmit}>
                        <div className='form'>
                            <input
                                name = 'url'
                                type="text"
                                value={url}
                                onChange={handleInputChange}
                                placeholder='Enter URL'
                            />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
               
            </div>
     )}
        </div>
      
        </>
    )
}

export default Home;