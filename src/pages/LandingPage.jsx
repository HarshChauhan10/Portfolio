import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [lightOn, setLightOn] = useState(false);
    const navigate = useNavigate()

    const handleClick = () => {
        setLightOn(true);
        setTimeout(() => { navigate('/main-page') }, 1000); // Wait for the door to fade out

    };

    return (
        <div className="h-screen w-full flex justify-center items-center bg-black">
            <button
                onClick={handleClick}
                className={`transition duration-1000 hover:scale-110 ${lightOn ? 'opacity-0 scale-125' : ''}`}
            >
                <img src={assets.enter} alt="enter" className="w-20" />
                {/* <h1 className='text-white text-3xl'>Enter</h1> */}
            </button>
        </div>
    );
};

export default LandingPage;
