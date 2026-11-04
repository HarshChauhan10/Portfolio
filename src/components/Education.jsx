import React from "react";

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

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-8" id="education">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Education</h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00f6e7]"></div>

                {educationData.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="relative mb-6 sm:mb-10 last:mb-0">
                            {/* Dot */}
                            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 top-4 w-5 h-5 bg-[#00f6e7] rounded-full shadow-[0_0_15px_#00f6e7] z-10 items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                            </div>

                            {/* Card Container */}
                            <div
                                className={`
                                    flex w-full
                                    ${isLeft ? "sm:justify-start" : "sm:justify-end"}
                                    justify-center
                                `}
                            >
                                <div className="w-full sm:w-[46%] bg-[#0f0f0f] border border-[#00f6e7] rounded-2xl px-6 py-4 shadow-[0_0_12px_rgba(0,246,231,0.35)]">
                                    <p className="text-sm text-[#00f6e7] font-semibold mb-1">{item.year}</p>
                                    <p className="text-lg font-bold mb-1">{item.title}</p>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Publications */}
            <div className="max-w-4xl mx-auto mt-16" id="publications">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">Publications</h3>
                <div className="bg-[#0f0f0f] border border-[#00f6e7] rounded-2xl px-6 py-4 shadow-[0_0_12px_rgba(0,246,231,0.35)]">
                    <p className="text-sm text-[#00f6e7] font-semibold mb-1">2020</p>
                    <p className="text-lg font-bold mb-1">A Study on Recent Developments in Automated Machine Learning</p>
                    <p className="text-gray-300 text-sm">Co-author, Solid State Technology</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
