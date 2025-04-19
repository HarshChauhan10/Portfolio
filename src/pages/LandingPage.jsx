import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import MainPage from './MainPage';

const LandingPage = () => {
    const [showBulb, setShowBulb] = useState(true);
    const [lightOn, setLightOn] = useState(false);
    const navigate = useNavigate()

    const handleClick = () => {
        setLightOn(true);
        setTimeout(() => { setShowBulb(false); navigate('/main-page') }, 1000); // Wait for the "light" to come on

    };

    return (
        <div
            className={`
                h-screen w-full flex justify-center items-center transition-colors duration-1000
                ${showBulb ? 'bg-black' : 'bg-white'} 
                ${lightOn ? 'bg-opacity-90' : showBulb ? '' : 'bg-opacity-100'}
            `}
        >
            {showBulb ? (
                <button onClick={handleClick} className="transition-transform duration-300 hover:scale-110">
                    <img src={assets.enter} alt="enter" className="w-20" />
                    {/* <h1 className='text-white text-3xl'>Enter</h1> */}
                </button>
            ) : (
                error
            )}
        </div>
    );
};

export default LandingPage;
