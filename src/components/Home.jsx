import React from 'react';
import { assets } from '../assets/assets';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-4 sm:px-6" id='home'>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl fade-in gap-10 py-14 sm:py-20">

                {/* Left Section - Text */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mt-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Hi, It's <span className="text-[#239797]">Harsh Chauhan</span>
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300">
                        I'm a <span className="text-[#239797]">MERN Stack Developer</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        Versatile MERN Stack Developer with 2.5 years of experience, specializing in creating robust,
                        scalable web applications. Strong proficiency in MongoDB, Express.js, React, and Node.js, ensuring
                        seamless integration and optimal performance. Demonstrates exceptional problem-solving skills,
                        delivering innovative solutions that enhance user experience and drive business growth. Collaborative
                        team player with a proven track record of successfully managing projects from concept to completion.
                    </p>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <img src={assets.mongodb} alt="MongoDB" className="w-10 h-10" />
                        <img src={assets.express} alt="Express" className="w-10 h-10" />
                        <img src={assets.reactt} alt="React" className="w-10 h-10" />
                        <img src={assets.node} alt="Node.js" className="w-10 h-10" />
                        <img src={assets.html} alt="HTML" className="w-10 h-10" />
                        <img src={assets.css} alt="CSS" className="w-10 h-10" />
                        <img src={assets.tailwind} alt="Tailwind" className="w-10 h-10" />
                    </div>

                    <p className="text-gray-500 text-sm">& much more...</p>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=harshchauhan2867@gmail.com&su=Interested in Hiring You&body=Hi Harsh, I came across your portfolio and would love to connect!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#239797] text-[#239797] font-semibold px-6 py-2 rounded-full transition hover:bg-[#239797] hover:text-black hover:shadow-[0_0_20px_#00f6e7]"
                        >
                            Hire
                        </a>


                        <button className="border border-[#239797] text-[#239797] font-semibold px-6 py-2 rounded-full transition hover:bg-[#239797] hover:text-black hover:shadow-[0_0_20px_#00f6e7]">
                            Contact
                        </button>
                    </div>
                </div>

                {/* Right Section - Profile Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center -mt-10">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full bg-[#239797] bg-opacity-10 border border-[#239797] p-2 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_#00f6e7]">
                        <img
                            src={assets.pp}
                            alt="Profile"
                            className="rounded-full w-full h-full object-cover border-4 border-[#239797] shadow-[0_0_20px_#00f6e7]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
