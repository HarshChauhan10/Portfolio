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
        },
        {
            title: 'AI Integration',
            description: 'Adding LLMs, RAG and AI agents to real products, from AI-generated summaries to insights and calculations on top of business data.',
        },
        {
            title: 'Automation & Dashboards',
            description: 'Automating manual processes with workflow engines and batch pipelines, and building data dashboards that make complex operations easy to monitor.',
        }
    ]
        ;

    return (
        <div className="bg-[#080808] text-white py-16 px-4 sm:px-8" id='services'>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="p-8 rounded-2xl transition-all duration-300 bg-[#239797] text-black hover:bg-white shadow-lg"
                    >
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
