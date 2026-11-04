import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const items = [
    {
        id: 6,
        label: 'EXPERGO TECHNOLOGIES',
        role: 'Software Development Engineer 1',
        period: 'May 2025 – Present',
        color: '#080808',
        description: 'Build core modules of EarlySafe, Expergo’s AI risk platform used by banks, NBFCs and HFCs for portfolio monitoring, early default detection and regulatory case management (React, Node/Express, MongoDB, PostgreSQL).',
        highlights: [
            'Early Warning System: Designed and built the EWS from scratch, flagging borrowers likely to default early and automating recovery workflows for housing finance institutions.',
            'Risk scoring: Implemented an 8-layer, CIBIL-style scoring engine, each layer with its own logic and parameters, automating borrower risk assessment and case prioritisation.',
            'Case management: Built a web and mobile platform for RBI/NHB-guided EWS, RCU, wilful-defaulter and vigilance cases, with hierarchical case routing, evidence requests, AI-generated case summaries and GPS-spoofing detection on mobile.',
            'Built a no-code workflow orchestration engine for hierarchical case resolution, reducing engineering dependency by ~70% and manual case handling by >60%.',
            'Combined 50+ database tables into one node-based data model (~40% faster processing) and led the MongoDB to PostgreSQL migration (30–50% faster queries).',
            'Built portfolio-surveillance dashboards (cohort, branch-wise, delinquency and concentration-risk analysis) and a GST analysis pipeline, using LLMs and RAG for insights and calculations.',
            'Refactored legacy code into a modular backend (~35% faster feature delivery); built REST APIs and batch pipelines handling thousands of cases daily, with bulk Excel ingestion cutting processing time by ~60%.',
        ],
    },
    {
        id: 2,
        label: 'RPK Recon360 – Enterprise Reconciliation Software',
        role: 'Full Stack Developer (Founding Engineer)',
        period: 'Sep 2024 – Apr 2025',
        color: '#080808',
        image: assets.rekon,
        description: 'Built a robust reconciliation platform for ATM, POS, and e-commerce transactions using the MERN stack (MongoDB, Express.js, React.js, Node.js). Designed to automate settlement workflows and ensure compliance with banking standards. The system supports real-time discrepancy detection, integrates with core banking and payment gateway systems, and provides customizable reporting tools for audits and fraud monitoring.',
        highlights: [
            'Built the enterprise reconciliation platform from the ground up for transaction matching and settlement.',
            'Developed automated reconciliation pipelines across payment channels and built audit and compliance reporting.',
        ],
    },
    {
        id: 3,
        label: 'INMATESS UNIVERSE',
        role: 'Full Stack Developer (Freelance)',
        period: 'Aug 2024 – Nov 2024',
        color: '#080808',
        image: assets.inmates,
        description: 'The fully functional website Inmatess was developed using the MERN stack. It includes a seamless review system, user-friendly admin panel, and mobile-responsive design. RESTful APIs ensure secure and efficient data flow. MongoDB manages fast, reliable storage and retrieval processes.',
        highlights: [
            'Built inmatess.com end to end with React.js, Node.js, Express, MongoDB and Tailwind CSS.',
        ],
    },
    {
        id: 4,
        label: 'TATA TECHNOLOGIES',
        role: 'Solution Developer',
        period: 'Jan 2023 – Jul 2024',
        color: '#080808',
        image: assets.tata,
        description: 'Enhanced UX by implementing frontend solutions using HTML, CSS, JavaScript. Built plugins in Teamcenter, increased team productivity by 30% with automated emails, and reduced a 3-hour process to 5 minutes. Customized Teamcenter using ITK (C++) and optimized SQL database.',
        highlights: [
            'Built JavaScript plugins and C++ ITK customisations for Teamcenter PLM workflows.',
            'Automated team email notifications, saving ~2 hours a day.',
            'Contributed to CI/CD workflows and reduced system downtime by 25%.',
        ],
    },
    {
        id: 5,
        label: 'TOO DECIMAL PRIVATE LIMITED (Intern)',
        color: '#080808',
        image: assets.too,
        description: 'Led the development of MPPL Jobs app, integrated Video CV, Google Maps, and location-based search. Engineered resume builder, and used advanced caching for faster performance.'
    },
    {
        id: 1,
        label: 'YOUR CHEF',
        color: '#080808',
        image: assets.chef,
        description: 'A smart and intuitive web application designed to help users discover delicious recipes using only the ingredients they already have at home. By focusing on ingredient-based searches, the app promotes minimal food waste, smart cooking, and budget-friendly meals. Users input available ingredients, and the app instantly returns recipes they can make without a trip to the store. Built using the MERN stack, the app delivers a seamless and responsive experience, ensuring quick and intuitive results. It’s perfect for daily meal planning or last-minute cooking.'
    },
];

// Entries without a photo get a text panel in the same space
const ItemVisual = ({ item, className }) => (
    item.image ? (
        <img src={item.image} alt={item.label} className={`${className} object-cover`} />
    ) : (
        <div className={`${className} flex items-center justify-center bg-[#0f0f0f] border-b border-[#239797] px-4`}>
            <span className="text-2xl sm:text-4xl font-extrabold tracking-widest text-center text-[#239797]">
                {item.label}
            </span>
        </div>
    )
);

const Exprience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [openItem, setOpenItem] = useState(null);
    const [hovered, setHovered] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    // Auto-slide, paused while a card is being read. Depending on activeIndex restarts the timer after a manual move.
    useEffect(() => {
        if (openItem || hovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [openItem, hovered, activeIndex]);

    useEffect(() => {
        if (!openItem) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') setOpenItem(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [openItem]);

    const circularOffset = (index, centerIndex, length) => {
        const rawOffset = index - centerIndex;
        const half = Math.floor(length / 2);
        if (rawOffset > half) return rawOffset - length;
        if (rawOffset < -half) return rawOffset + length;
        return rawOffset;
    };

    const getTranslateX = (offset) => {
        if (screenWidth < 640) return offset * 90; // Mobile
        if (screenWidth < 1024) return offset * 120; // Tablet
        return offset * 150; // Desktop
    };

    return (
        <div className="w-full flex flex-col items-center justify-center py-16 bg-black min-h-screen overflow-hidden text-white px-4" id="experience">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Experience</h2>

            <div
                className="relative w-full max-w-7xl flex items-center justify-center"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <button
                    onClick={handlePrev}
                    aria-label="Previous"
                    className="absolute left-2 sm:left-4 z-30 px-3 sm:px-4 py-1 sm:py-2 text-2xl sm:text-3xl font-bold text-black bg-white rounded-full hover:scale-125 transition"
                >
                    ‹
                </button>

                <div className="relative w-full h-[460px] flex items-center justify-center transition-all duration-500 ease-in-out">
                    {items.map((item, index) => {
                        const offset = circularOffset(index, activeIndex, items.length);
                        let zIndex = 20 - Math.abs(offset);
                        let scale = 1 - Math.abs(offset) * 0.1;
                        let translateX = getTranslateX(offset);
                        // Only two cards show on each side, so the stack stays symmetrical
                        let hidden = Math.abs(offset) > 2;
                        let opacity = hidden ? 0 : 1 - Math.abs(offset) * 0.2;

                        return (
                            <div
                                key={item.id}
                                onClick={() => setOpenItem(item)}
                                className="absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg cursor-pointer overflow-hidden flex flex-col"
                                style={{
                                    width: screenWidth < 640 ? '90%' : screenWidth < 1024 ? '400px' : '550px',
                                    height: '430px',
                                    border: '2px solid #00FEED',
                                    boxShadow: offset === 0 ? '0 0 18px rgba(0, 246, 231, 0.55)' : 'none',
                                    transform: `translateX(${translateX}px) scale(${scale})`,
                                    backgroundColor: item.color,
                                    zIndex,
                                    opacity,
                                    pointerEvents: hidden ? 'none' : 'auto',
                                }}
                            >
                                <ItemVisual item={item} className="w-full h-[58%] shrink-0" />
                                <div className="flex-1 p-4 flex flex-col items-center justify-center gap-1 text-center">
                                    <p className="font-semibold text-white text-sm sm:text-base">{item.label}</p>
                                    {item.role && <p className="text-[#239797] text-sm font-medium">{item.role}</p>}
                                    {item.period && <p className="text-gray-400 text-xs sm:text-sm">{item.period}</p>}
                                    <p className="text-gray-500 text-xs mt-1">Click for details</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={handleNext}
                    aria-label="Next"
                    className="absolute right-2 sm:right-4 z-30 px-3 sm:px-4 py-1 sm:py-2 text-2xl sm:text-3xl font-bold text-black bg-white rounded-full hover:scale-125 transition"
                >
                    ›
                </button>
            </div>

            {openItem && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
                    onClick={() => setOpenItem(null)}
                >
                    <div
                        className="bg-[#131313] text-white w-full max-w-md sm:max-w-2xl p-4 sm:p-6 rounded-xl shadow-[0_0_24px_rgba(0,246,231,0.5)] relative max-h-[90vh] overflow-y-auto transition duration-300"
                        role="dialog"
                        aria-modal="true"
                        aria-label={openItem.label}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpenItem(null)}
                            aria-label="Close"
                            className="absolute top-2 right-3 z-10 text-xl sm:text-2xl font-bold hover:text-red-500"
                        >
                            ✕
                        </button>
                        <ItemVisual item={openItem} className="w-full h-40 sm:h-52 rounded-md mb-4" />
                        <h3 className="text-xl sm:text-2xl font-bold mb-1">{openItem.label}</h3>
                        {(openItem.role || openItem.period) && (
                            <p className="text-sm mb-3">
                                <span className="text-[#239797] font-medium">{openItem.role}</span>
                                <span className="text-gray-400"> · {openItem.period}</span>
                            </p>
                        )}
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{openItem.description}</p>
                        {openItem.highlights && (
                            <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-[#239797] text-sm text-gray-300 leading-relaxed">
                                {openItem.highlights.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Exprience;
