import React from 'react';
import { assets } from '../assets/assets';

const stats = [
    { value: '~4 yrs', label: 'Building fintech and enterprise platforms' },
    { value: '8-layer', label: 'CIBIL-style risk scoring engine' },
    { value: '~70%', label: 'Less engineering dependency with a no-code workflow engine' },
    { value: '30–50%', label: 'Faster queries after leading the PostgreSQL migration' },
];

const techStack = [
    { src: assets.mongodb, alt: 'MongoDB' },
    { src: assets.express, alt: 'Express' },
    { src: assets.reactt, alt: 'React' },
    { src: assets.node, alt: 'Node.js' },
    { src: assets.html, alt: 'HTML' },
    { src: assets.css, alt: 'CSS' },
    { src: assets.tailwind, alt: 'Tailwind' },
];

const primaryButton = "bg-accent text-black font-semibold px-6 py-3 rounded-full transition duration-200 hover:bg-white";
const secondaryButton = "border border-white/20 text-white font-semibold px-6 py-3 rounded-full transition duration-200 hover:border-accent hover:text-accent";

const Home = () => {
    return (
        <section className="relative overflow-hidden text-white" id='home'>
            <div className="hero-dots absolute inset-0 pointer-events-none" aria-hidden="true"></div>

            <div className="relative max-w-6xl mx-auto px-5 sm:px-8 fade-in">
                <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-16 items-center pt-14 pb-16 lg:pt-20 lg:pb-20">

                    {/* Left Section - Text */}
                    <div>
                        <p className="font-mono text-sm text-accent mb-4">Hi, It's</p>
                        <h1 className="font-display text-6xl sm:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
                            Harsh<br /><span className="text-accent">Chauhan</span>
                        </h1>
                        <h2 className="mt-6 text-xl sm:text-2xl font-medium text-gray-200">
                            I'm a Full Stack Developer
                        </h2>
                        <p className="mt-4 max-w-xl text-gray-400 leading-relaxed">
                            Full stack developer with nearly 4 years building fintech and enterprise platforms with the MERN stack
                            and PostgreSQL. Built early-warning, risk-scoring and case-management systems used by banks and NBFCs,
                            and works directly with CEO/CTO stakeholders to turn complex financial and regulatory processes into
                            scalable software. Collaborative team player with a proven track record of successfully managing
                            projects from concept to completion.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex gap-3 flex-wrap">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=harshchauhan2867@gmail.com&su=Interested in Hiring You&body=Hi Harsh, I came across your portfolio and would love to connect!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={primaryButton}
                            >
                                Hire
                            </a>
                            <a href="#contact" className={secondaryButton}>
                                Contact
                            </a>
                            <a href="https://www.linkedin.com/in/harsh-chauhan10/" target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                                LinkedIn
                            </a>
                            <a href="https://github.com/HarshChauhan10" target="_blank" rel="noopener noreferrer" className={secondaryButton}>
                                GitHub
                            </a>
                        </div>

                        {/* Tech Stack Icons */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            {techStack.map((tech) => (
                                <img key={tech.alt} src={tech.src} alt={tech.alt} title={tech.alt} className="w-8 h-8 object-contain" />
                            ))}
                            <span className="text-gray-400 text-sm">& much more...</span>
                        </div>
                    </div>

                    {/* Right Section - Profile Image */}
                    <div className="relative w-full max-w-sm mx-auto lg:max-w-md lg:mr-0 p-2 rounded-[2rem] border border-accent transition duration-300 hover:border-neon hover:shadow-[0_0_30px_#00f6e7]">
                        <img
                            src={assets.hero}
                            alt="Harsh Chauhan"
                            width="800"
                            height="1000"
                            className="w-full aspect-[4/5] object-cover rounded-3xl"
                        />
                        <div className="absolute left-5 right-5 bottom-5 bg-ink/90 border border-line rounded-2xl px-4 py-3">
                            <p className="flex items-center gap-2 font-mono text-xs text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-neon" aria-hidden="true"></span>
                                Currently · Gurugram
                            </p>
                            <p className="mt-1 text-sm font-semibold">Software Development Engineer 1 at Expergo Technologies</p>
                        </div>
                    </div>
                </div>

                {/* Stats from the resume */}
                <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-line">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.value}
                            className={`py-7 lg:pr-6 ${index % 2 === 1 ? 'pl-5 border-l border-line' : 'pr-5'} ${index > 0 ? 'lg:pl-6 lg:border-l lg:border-line' : ''} ${index > 1 ? 'border-t border-line lg:border-t-0' : ''}`}
                        >
                            <dt className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{stat.value}</dt>
                            <dd className="mt-2 text-sm text-gray-400 leading-snug">{stat.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default Home;
