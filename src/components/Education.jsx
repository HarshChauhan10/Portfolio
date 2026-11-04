import React from "react";
import SectionHeading from "./SectionHeading";

const Education = () => {
    const educationData = [
        {
            year: "2023",
            title: "University",
            description:
                "Bachelor Of Engineering in Computer Science Engineering - Chitkara University | CGPA: 9.45/10",
        },
        {
            year: "2019",
            title: "Senior Secondary",
            description:
                "12th Class - 19-Model Sr. Sec. School, Chandigarh | Percentage: 72%",
        },
        {
            year: "2017",
            title: "High School",
            description:
                "10th Class - Mana Mangal School, India | CGPA: 10/10",
        },
    ];

    const publications = [
        {
            year: "2020",
            title: "A Study on Recent Developments in Automated Machine Learning",
            description: "Co-author, Solid State Technology",
        },
    ];

    const renderRows = (rows) => (
        <ul className="border-t border-line">
            {rows.map((item) => (
                <li key={item.title} className="reveal grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6 py-5 border-b border-line">
                    <p className="font-mono text-sm text-accent sm:pt-1">{item.year}</p>
                    <div>
                        <h4 className="font-display text-lg font-bold tracking-tight">{item.title}</h4>
                        <p className="mt-1 text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <section className="py-20 lg:py-28 text-white" id="education">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_2.2fr] gap-10 lg:gap-16">
                <SectionHeading kicker="My background" title="Education" className="" />

                <div>
                    {renderRows(educationData)}

                    {/* Publications */}
                    <h3 id="publications" className="reveal font-display text-2xl font-bold tracking-tight mt-12 mb-5">Publications</h3>
                    {renderRows(publications)}
                </div>
            </div>
        </section>
    );
};

export default Education;
