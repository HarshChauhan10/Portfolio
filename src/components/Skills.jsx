import React from 'react';

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
        <div className="bg-[#080808] text-white py-16 px-4 sm:px-8" id="skills">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Skills</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {skills.map((group) => (
                    <div key={group.title} className="bg-[#121212] rounded-2xl p-6 border border-gray-700 transition-colors duration-300 hover:border-[#239797]">
                        <h3 className="text-lg font-bold text-[#239797] mb-4">{group.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <span key={skill} className="text-sm text-gray-300 border border-gray-700 rounded-full px-3 py-1">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
