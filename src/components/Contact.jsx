import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
            <div className="max-w-4xl w-full text-white">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Contact <span className="text-[#239797]">Me</span>
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="6"
                        className="md:col-span-2 bg-black border border-[#239797] rounded-md p-3 text-white outline-none"
                    />
                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="border border-[#239797] bg-[#239797] text-[#ffffff] font-semibold px-6 py-2 rounded-full transition hover:bg-[#239797] hover:text-black hover:shadow-[0_0_20px_#00f6e7]"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
