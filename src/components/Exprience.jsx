import React, { useState } from 'react';
import { assets } from '../assets/assets';
import SectionHeading from './SectionHeading';

const items = [
    {
        id: 6,
        label: 'Expergo Technologies',
        role: 'Software Development Engineer 1',
        period: 'May 2025 – Present',
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
        image: assets.rekon,
        imageClass: 'object-contain',
        description: 'Built a robust reconciliation platform for ATM, POS, and e-commerce transactions using the MERN stack (MongoDB, Express.js, React.js, Node.js). Designed to automate settlement workflows and ensure compliance with banking standards. The system supports real-time discrepancy detection, integrates with core banking and payment gateway systems, and provides customizable reporting tools for audits and fraud monitoring.',
        highlights: [
            'Built the enterprise reconciliation platform from the ground up for transaction matching and settlement.',
            'Developed automated reconciliation pipelines across payment channels and built audit and compliance reporting.',
        ],
    },
    {
        id: 3,
        label: 'Inmatess Universe',
        role: 'Full Stack Developer (Freelance)',
        period: 'Aug 2024 – Nov 2024',
        image: assets.inmates,
        imageClass: 'object-contain p-1',
        description: 'The fully functional website Inmatess was developed using the MERN stack. It includes a seamless review system, user-friendly admin panel, and mobile-responsive design. RESTful APIs ensure secure and efficient data flow. MongoDB manages fast, reliable storage and retrieval processes.',
        highlights: [
            'Built inmatess.com end to end with React.js, Node.js, Express, MongoDB and Tailwind CSS.',
        ],
    },
    {
        id: 4,
        label: 'Tata Technologies',
        role: 'Solution Developer',
        period: 'Jan 2023 – Jul 2024',
        image: assets.tata,
        imageClass: 'object-contain bg-white scale-125',
        description: 'Enhanced UX by implementing frontend solutions using HTML, CSS, JavaScript. Built plugins in Teamcenter, increased team productivity by 30% with automated emails, and reduced a 3-hour process to 5 minutes. Customized Teamcenter using ITK (C++) and optimized SQL database.',
        highlights: [
            'Built JavaScript plugins and C++ ITK customisations for Teamcenter PLM workflows.',
            'Automated team email notifications, saving ~2 hours a day.',
            'Contributed to CI/CD workflows and reduced system downtime by 25%.',
        ],
    },
    {
        id: 5,
        label: 'Too Decimal Private Limited',
        role: 'Intern',
        image: assets.too,
        imageClass: 'object-cover object-left',
        description: 'Led the development of MPPL Jobs app, integrated Video CV, Google Maps, and location-based search. Engineered resume builder, and used advanced caching for faster performance.'
    },
    {
        id: 1,
        label: 'Your Chef',
        role: 'MERN Stack Project',
        image: assets.chef,
        imageClass: 'object-cover',
        description: 'A smart and intuitive web application designed to help users discover delicious recipes using only the ingredients they already have at home. By focusing on ingredient-based searches, the app promotes minimal food waste, smart cooking, and budget-friendly meals. Users input available ingredients, and the app instantly returns recipes they can make without a trip to the store. Built using the MERN stack, the app delivers a seamless and responsive experience, ensuring quick and intuitive results. It’s perfect for daily meal planning or last-minute cooking.'
    },
];

// Highlights that open with a short topic ("Risk scoring: ...") show that topic in bold
const Highlight = ({ text }) => {
    const match = text.match(/^([A-Z][A-Za-z ]+): (.*)$/);
    if (!match) return text;
    return (
        <>
            <strong className="font-semibold text-white">{match[1]}:</strong> {match[2]}
        </>
    );
};

const Exprience = () => {
    const [openIds, setOpenIds] = useState([items[0].id]);

    const toggle = (id) => {
        setOpenIds((prev) => (prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]));
    };

    return (
        <section className="py-20 lg:py-28 text-white" id="experience">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="Where I've worked" title="Experience" />

                <ol className="border-t border-line">
                    {items.map((item) => {
                        const isOpen = openIds.includes(item.id);
                        return (
                            <li key={item.id} className="reveal border-b border-line">
                                <h3>
                                    <button
                                        onClick={() => toggle(item.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={`experience-${item.id}`}
                                        className="group w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-6 text-left cursor-pointer"
                                    >
                                        <span className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-line bg-black flex items-center justify-center">
                                            {item.image ? (
                                                <img src={item.image} alt="" loading="lazy" className={`w-full h-full ${item.imageClass}`} />
                                            ) : (
                                                <span className="font-display text-2xl font-bold text-accent">{item.label[0]}</span>
                                            )}
                                        </span>
                                        <span className="flex-1 min-w-0">
                                            <span className="block font-display text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-accent">
                                                {item.label}
                                            </span>
                                            <span className="block mt-1 text-sm text-gray-300">{item.role}</span>
                                            {item.period && <span className="sm:hidden block mt-1 font-mono text-xs text-gray-400">{item.period}</span>}
                                        </span>
                                        {item.period && <span className="hidden sm:block shrink-0 font-mono text-sm text-gray-400">{item.period}</span>}
                                        <span
                                            className={`shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-gray-300 transition duration-300 group-hover:border-accent group-hover:text-accent ${isOpen ? 'rotate-45' : ''}`}
                                            aria-hidden="true"
                                        >
                                            +
                                        </span>
                                    </button>
                                </h3>

                                <div
                                    id={`experience-${item.id}`}
                                    className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] visible' : 'grid-rows-[0fr] invisible'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-7 sm:pl-[5.5rem] sm:pr-14 max-w-4xl">
                                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                            {item.highlights && (
                                                <ul className="mt-4 space-y-2.5 list-disc pl-5 marker:text-accent text-sm text-gray-400 leading-relaxed">
                                                    {item.highlights.map((point) => (
                                                        <li key={point}><Highlight text={point} /></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default Exprience;
