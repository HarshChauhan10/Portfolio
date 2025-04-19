import React from 'react';
import { assets } from '../assets/assets';

const testimonials = [
    {
        name: 'Inmatess',
        image: assets.profile,
        review: "We are extremely happy with the website! You really understood our requirements and executed them perfectly. You listened carefully to our needs and delivered exactly what we wanted.",
        rating: 5,
        position: 'Clothing Brand',
    },
    {
        name: 'Vishal Katiyar',
        image: assets.profile,
        review: "Harsh is a talent who seamlessly bridges the gap between design and development. His deep understanding of both frontend aesthetics and backend architecture allows him to create well-rounded, high-performing solutions. He’s not just technically sound—he’s a strategic thinker who anticipates challenges and proactively solves them. His ability to deliver clean, scalable code while maintaining a strong user focus consistently elevates the quality of every project he’s part of.",
        rating: 5,
        position: 'Manager | IT-Cell | HARCO Bank',
    },
    {
        name: 'Prikshit Verma',
        image: assets.profile,
        review:
            "One of Harsh 's standout qualities is his proficiency in both backend and frontend development. He possesses a rare blend of technical skill and creativity, making him a valuable asset in any project. His problem-solving abilities are remarkable; he has a unique knack for devising optimized solutions that enhance project performance significantly. This skill set has proven invaluable in handling complex projects, where he has always delivered results that exceed expectations.",
        rating: 5,
        position: 'Solution Developer | Tata Technologies',
    },
    {
        name: 'Gaurav',
        image: assets.profile,
        review: "Harsh brings a powerful mix of full-stack expertise and creative problem-solving to the table. Whether he’s building intuitive user interfaces or architecting robust backend systems, he approaches every project with precision and innovation. What truly sets him apart is his ability to simplify complex challenges and turn them into scalable, efficient solutions. His thoughtful approach and consistent delivery make him a reliable force in any development environment.",
        rating: 5,
        position: 'Sr. Solution Developer | Tata Technologies',
    },
];

const Testimonials = () => {
    return (
        <div className="bg-[#080808] text-white py-16 px-4" id='testimonials'>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 max-w-6xl mx-auto">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className={`bg-[#121212] rounded-2xl p-6 text-center border border-gray-700 transition-all duration-300
                        ${t.active ? 'shadow-[0_0_20px_2px_rgba(0,255,255,0.7)]' : 'hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.4)]'}`}
                    >
                        <div className="flex justify-center mb-4">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-24 h-24 rounded-full border-4 border-black shadow-[0_0_20px_#00f6e7] object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">{t.name}</h3>
                        <div className="text-yellow-400 mb-2">
                            {'★'.repeat(t.rating)}
                        </div>
                        <p className="text-sm text-cyan-400 mb-2">{t.position}</p>
                        <p className=" text-sm text-gray-300 text-justify leading-relaxed  mx-auto">{t.review}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Testimonials;
