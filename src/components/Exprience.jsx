import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';

const items = [
    {
        id: 1,
        label: 'YOUR CHEF',
        color: '#080808',
        image: assets.chef,
        description: 'A smart and intuitive web application designed to help users discover delicious recipes using only the ingredients they already have at home. By focusing on ingredient-based searches, the app promotes minimal food waste, smart cooking, and budget-friendly meals. Users input available ingredients, and the app instantly returns recipes they can make without a trip to the store. Built using the MERN stack, the app delivers a seamless and responsive experience, ensuring quick and intuitive results. It’s perfect for daily meal planning or last-minute cooking.'
    },
    {
        id: 2,
        label: 'RPK Recon360 – Enterprise Reconciliation Software',
        color: '#080808',
        image: assets.rekon,
        description: 'Built a robust reconciliation platform for ATM, POS, and e-commerce transactions using the MERN stack (MongoDB, Express.js, React.js, Node.js). Designed to automate settlement workflows and ensure compliance with banking standards. The system supports real-time discrepancy detection, integrates with core banking and payment gateway systems, and provides customizable reporting tools for audits and fraud monitoring.'
    },
    {
        id: 3,
        label: 'INMATESS UNIVERSE',
        color: '#080808',
        image: assets.inmates,
        description: 'The fully functional website Inmatess was developed using the MERN stack. It includes a seamless review system, user-friendly admin panel, and mobile-responsive design. RESTful APIs ensure secure and efficient data flow. MongoDB manages fast, reliable storage and retrieval processes.'
    },
    {
        id: 4,
        label: 'TATA TECHNOLOGIES',
        color: '#080808',
        image: assets.tata,
        description: 'Enhanced UX by implementing frontend solutions using HTML, CSS, JavaScript. Built plugins in Teamcenter, increased team productivity by 30% with automated emails, and reduced a 3-hour process to 5 minutes. Customized Teamcenter using ITK (C++) and optimized SQL database.'
    },
    {
        id: 5,
        label: 'TOO DECIMAL PRIVATE LIMITED (Intern)',
        color: '#080808',
        image: assets.too,
        description: 'Led the development of MPPL Jobs app, integrated Video CV, Google Maps, and location-based search. Engineered resume builder, and used advanced caching for faster performance.'
    },
];

const Exprience = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const [openItem, setOpenItem] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const intervalRef = useRef(null);

    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
        resetAutoSlide();
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        resetAutoSlide();
    };

    const resetAutoSlide = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        }, 3000);
    };

    useEffect(() => {
        resetAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

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
        <div className="w-full flex flex-col items-center justify-center py-12 bg-black min-h-screen overflow-hidden text-white px-4" id="exprience">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Experience</h2>

            <div className="relative w-full max-w-7xl flex items-center justify-center">
                <button
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 z-10 px-3 sm:px-4 py-1 sm:py-2 text-2xl sm:text-3xl font-bold text-black bg-white rounded-full hover:scale-125 transition"
                >
                    ‹
                </button>

                <div className="relative w-full h-[400px] flex items-center justify-center transition-all duration-500 ease-in-out">
                    {items.map((item, index) => {
                        const offset = circularOffset(index, activeIndex, items.length);
                        let zIndex = 20 - Math.abs(offset);
                        let scale = 1 - Math.abs(offset) * 0.1;
                        let translateX = getTranslateX(offset);
                        let opacity = 1 - Math.abs(offset) * 0.2;

                        return (
                            <div
                                key={item.id}
                                onClick={() => setOpenItem(item)}
                                className="absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg cursor-pointer hover:scale-105 overflow-hidden"
                                style={{
                                    width: screenWidth < 640 ? '90%' : screenWidth < 1024 ? '400px' : '550px',
                                    height: screenWidth < 640 ? '400px' : '430px',
                                    border: '2px solid #00FEED',
                                    boxShadow: '0 0 25px #00f6e7',
                                    transform: `translateX(${translateX}px) scale(${scale})`,
                                    backgroundColor: item.color,
                                    zIndex,
                                    opacity,
                                }}
                            >
                                <img src={item.image} alt={item.label} className="w-full h-2/3 object-cover" />
                                <div className="p-4 font-semibold text-center text-white text-sm sm:text-base">
                                    {item.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 z-10 px-3 sm:px-4 py-1 sm:py-2 text-2xl sm:text-3xl font-bold text-black bg-white rounded-full hover:scale-125 transition"
                >
                    ›
                </button>
            </div>

            {openItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-[#131313] text-white w-full max-w-md sm:max-w-xl p-4 sm:p-6 rounded-xl shadow-[0_0_40px_#00f6e7] relative max-h-[90vh] overflow-y-auto transition duration-300">
                        <button
                            onClick={() => setOpenItem(null)}
                            className="absolute top-2 right-3 text-xl sm:text-2xl font-bold hover:text-red-500"
                        >
                            ✕
                        </button>
                        <img
                            src={openItem.image}
                            alt={openItem.label}
                            className="w-full h-48 sm:h-60 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">{openItem.label}</h3>
                        <p className="text-sm sm:text-base">{openItem.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Exprience;
