import React from 'react';
import SectionHeading from './SectionHeading';

const testimonials = [
    {
        name: 'Inmatess',
        review: "We are extremely happy with the website! You really understood our requirements and executed them perfectly. You listened carefully to our needs and delivered exactly what we wanted.",
        rating: 5,
        position: 'Clothing Brand',
    },
    {
        name: 'Vishal Katiyar',
        review: "Harsh is a talent who seamlessly bridges the gap between design and development. His deep understanding of both frontend aesthetics and backend architecture allows him to create well-rounded, high-performing solutions. He’s not just technically sound—he’s a strategic thinker who anticipates challenges and proactively solves them. His ability to deliver clean, scalable code while maintaining a strong user focus consistently elevates the quality of every project he’s part of.",
        rating: 5,
        position: 'Manager | IT-Cell | HARCO Bank',
    },
    {
        name: 'Prikshit Verma',
        review:
            "One of Harsh's standout qualities is his proficiency in both backend and frontend development. He possesses a rare blend of technical skill and creativity, making him a valuable asset in any project. His problem-solving abilities are remarkable; he has a unique knack for devising optimized solutions that enhance project performance significantly. This skill set has proven invaluable in handling complex projects, where he has always delivered results that exceed expectations.",
        rating: 5,
        position: 'Solution Developer | Tata Technologies',
    },
    {
        name: 'Gaurav',
        review: "Harsh brings a powerful mix of full-stack expertise and creative problem-solving to the table. Whether he’s building intuitive user interfaces or architecting robust backend systems, he approaches every project with precision and innovation. What truly sets him apart is his ability to simplify complex challenges and turn them into scalable, efficient solutions. His thoughtful approach and consistent delivery make him a reliable force in any development environment.",
        rating: 5,
        position: 'Sr. Solution Developer | Tata Technologies',
    },
];

const initials = (name) => name.split(' ').map((word) => word[0]).join('');

const Testimonials = () => {
    return (
        <section className="py-20 lg:py-28 text-white" id='testimonials'>
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="What people say" title="Testimonials" />
                {/* Columns let the short and long reviews pack together without gaps */}
                <div className="md:columns-2 gap-6">
                    {testimonials.map((t) => (
                        <figure
                            key={t.name}
                            className="reveal break-inside-avoid mb-6 bg-panel rounded-2xl p-7 border border-line transition-colors duration-300 hover:border-accent/60"
                        >
                            <div className="text-yellow-400 text-sm tracking-widest" aria-label={`${t.rating} out of 5 stars`}>
                                {'★'.repeat(t.rating)}
                            </div>
                            <blockquote className="mt-4 text-gray-300 leading-relaxed">{t.review}</blockquote>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <span className="shrink-0 w-11 h-11 rounded-full bg-accent/15 border border-accent/50 text-accent font-display font-bold flex items-center justify-center" aria-hidden="true">
                                    {initials(t.name)}
                                </span>
                                <span>
                                    <span className="block font-semibold">{t.name}</span>
                                    <span className="block text-sm text-gray-400">{t.position}</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
