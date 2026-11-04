import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

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

const publication = {
    year: "2020",
    title: "A Study on Recent Developments in Automated Machine Learning",
    description: "Co-author, Solid State Technology",
};

const cardClass = (isReached) => `rounded-2xl border px-6 py-5 transition duration-500 ${isReached
    ? "bg-panel border-neon shadow-[0_0_20px_rgba(0,246,231,0.55)]"
    : "bg-panel border-line"
    }`;

const CardText = ({ item, isReached }) => (
    <>
        <p className={`font-mono text-sm mb-1 transition-colors duration-500 ${isReached ? "text-neon" : "text-accent"}`}>{item.year}</p>
        <h4 className="font-display text-lg font-bold tracking-tight">{item.title}</h4>
        <p className="mt-1 text-sm text-gray-300 leading-relaxed">{item.description}</p>
    </>
);

const Education = () => {
    const timeline = useRef(null);
    const lineFill = useRef(null);
    const points = useRef([]);
    const [reached, setReached] = useState(0);

    // Lights up everything that has scrolled above this line on the screen
    useEffect(() => {
        let frame = null;

        const update = () => {
            frame = null;
            const trigger = window.innerHeight * 0.65;
            const box = timeline.current.getBoundingClientRect();
            const progress = Math.min(Math.max((trigger - box.top) / box.height, 0), 1);
            lineFill.current.style.height = `${progress * 100}%`;
            setReached(points.current.filter((point) => point.getBoundingClientRect().top < trigger).length);
        };

        const handleScroll = () => {
            if (frame === null) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, []);

    const isPublicationReached = reached > educationData.length;

    return (
        <section className="py-20 lg:py-28 text-white" id="education">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="My background" title="Education" />

                <div ref={timeline} className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-line" aria-hidden="true">
                        <div ref={lineFill} className="w-full bg-neon shadow-[0_0_10px_#00f6e7]"></div>
                    </div>

                    {educationData.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const isReached = reached > index;

                        return (
                            <div key={item.title} className="relative pl-10 sm:pl-0 mb-8 sm:mb-12 last:mb-0">
                                {/* Dot */}
                                <div
                                    ref={(el) => { points.current[index] = el; }}
                                    className={`absolute left-2.5 sm:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full z-10 flex items-center justify-center transition duration-500 ${isReached
                                        ? "bg-neon shadow-[0_0_15px_#00f6e7] scale-110"
                                        : "bg-ink border-2 border-white/25"
                                        }`}
                                    aria-hidden="true"
                                >
                                    <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${isReached ? "bg-black" : "bg-transparent"}`}></div>
                                </div>

                                {/* Card Container */}
                                <div className={`flex w-full ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}>
                                    <div className={`w-full sm:w-[46%] ${cardClass(isReached)}`}>
                                        <CardText item={item} isReached={isReached} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Publications */}
                <div className="max-w-4xl mx-auto mt-16">
                    <h3 id="publications" className="font-display text-2xl font-bold tracking-tight mb-5">Publications</h3>
                    <div
                        ref={(el) => { points.current[educationData.length] = el; }}
                        className={cardClass(isPublicationReached)}
                    >
                        <CardText item={publication} isReached={isPublicationReached} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
