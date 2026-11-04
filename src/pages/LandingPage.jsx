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
        <div className="h-screen w-full flex justify-center items-center bg-black text-white">
            <button
                onClick={handleClick}
                className={`group flex flex-col items-center gap-5 cursor-pointer transition duration-1000 ${lightOn ? 'opacity-0 scale-110' : ''}`}
            >
                <img src={assets.enter} alt="" className="w-20 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-display text-3xl font-bold tracking-tight">
                    Harsh <span className="text-accent">Chauhan</span>
                </span>
                <span className="font-mono text-sm text-gray-400">Click to enter</span>
            </button>
        </div>
    );
};

export default LandingPage;
