import React from 'react';
import SectionHeading from './SectionHeading';

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
        <section className="bg-panel py-20 lg:py-28 text-white" id='services'>
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="What I can do for you" title="Services" />
                {/* The 1px gap on a light background draws the lines between cells */}
                <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="group p-8 bg-panel transition-colors duration-300 hover:bg-accent"
                        >
                            <p className="font-mono text-sm text-accent transition-colors duration-300 group-hover:text-black">
                                {String(idx + 1).padStart(2, '0')}
                            </p>
                            <h3 className="font-display text-xl font-bold tracking-tight mt-8 mb-3 transition-colors duration-300 group-hover:text-black">{service.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-black">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
