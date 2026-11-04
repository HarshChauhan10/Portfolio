import React from 'react';
import SectionHeading from './SectionHeading';

const skills = [
    {
        title: 'Languages',
        items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'C++'],
    },
    {
        title: 'Frontend',
        items: ['React.js', 'Redux', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Sass'],
    },
    {
        title: 'Backend',
        items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
    },
    {
        title: 'Databases',
        items: ['PostgreSQL', 'MongoDB'],
    },
    {
        title: 'AI & Data',
        items: ['LLM integration', 'RAG', 'AI agents', 'Workflow automation', 'Data dashboards'],
    },
    {
        title: 'Tools',
        items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Postman'],
    },
];

const Skills = () => {
    return (
        <section className="bg-panel py-20 lg:py-28 text-white" id="skills">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_2.2fr] gap-10 lg:gap-16">
                <SectionHeading kicker="What I work with" title="Skills" className="" />

                <dl className="border-t border-line">
                    {skills.map((group) => (
                        <div key={group.title} className="reveal grid sm:grid-cols-[9rem_1fr] gap-3 sm:gap-6 py-5 border-b border-line">
                            <dt className="font-mono text-sm text-accent sm:pt-1.5">{group.title}</dt>
                            <dd className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span key={skill} className="text-sm text-gray-200 bg-white/5 rounded-lg px-3 py-1.5">
                                        {skill}
                                    </span>
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default Skills;
