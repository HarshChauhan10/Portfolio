import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'UI Design',
            description: 'Crafting intuitive, aesthetically pleasing user interfaces that enhance usability and create seamless user experiences across all devices.',
        },
        {
            title: 'Frontend Development',
            description: 'Building responsive and high-performance interfaces using modern technologies to ensure fast, interactive, and user-friendly web experiences.',
        },
        {
            title: 'Backend Development',
            description: 'Developing robust, secure, and scalable server-side applications and APIs to power seamless functionality and efficient data management.',
        },
        {
            title: 'Testing',
            description: 'Ensuring application reliability and performance through rigorous manual and automated testing processes across different environments.',
        }
    ]
        ;

    return (
        <div className="min-h-screen bg-black text-white p-10 scroll-mt-17" id='services'>
            <h1 className="text-5xl font-bold text-center mb-10">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-2xl transition-all duration-300 bg-[#239797] text-black hover:bg-white shadow-lg"
                    >
                        <h3 className="text-xl font-bold mt-10 mb-4 ">{service.title}</h3>
                        <p className='mb-10'> {service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
