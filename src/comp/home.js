import React, { useState } from 'react';
import logo from './cybrix1.png';
import './home.css';

const Home = () => {
    const [url, setUrl] = useState('');

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    }

    const handleSubmit = () => {
        console.log("Your URL is: ", url)
    }

    return (
        <div className='main'>
            <div className='main1'>
            <div className='img'>
                <img src={logo} alt="Cybrix" />
            </div>

            <div className='form'>
                <input
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                    placeholder='Enter URL'
                />
                <button onClick={handleSubmit}>Submit</button>
            </div></div>
        </div>
    )
}

export default Home;
