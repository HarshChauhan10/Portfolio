import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_2fj0x8g',     // Replace with your actual service ID
            'template_56msxij',    // Replace with your actual template ID
            form.current,
            'LZ3H2ARGus7twh_K8'      // Replace with your actual public key
        ).then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message. Please try again later.");
                console.error(error.text);
            }
        );
    };

    return (
        <div className="bg-[#080808] flex items-center justify-center px-4 sm:px-8 py-16" id='contact'>
            <div className="max-w-4xl w-full text-white">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
                    Contact <span className="text-[#239797]">Me</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-10">
                    <a href="mailto:harshchauhan2867@gmail.com" className="hover:text-[#239797] transition">harshchauhan2867@gmail.com</a>
                    <a href="https://www.linkedin.com/in/harsh-chauhan10/" target="_blank" rel="noopener noreferrer" className="hover:text-[#239797] transition">LinkedIn</a>
                    <a href="https://github.com/HarshChauhan10" target="_blank" rel="noopener noreferrer" className="hover:text-[#239797] transition">GitHub</a>
                    <span>Gurugram</span>
                </div>
                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="name" type="text" placeholder="Full Name" required
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none focus:border-[#00f6e7]" />
                    <input name="email" type="email" placeholder="Email" required
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none focus:border-[#00f6e7]" />
                    <input name="phone" type="tel" placeholder="Phone Number"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none focus:border-[#00f6e7]" />
                    <input name="subject" type="text" placeholder="Subject"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none focus:border-[#00f6e7]" />
                    <textarea name="message" placeholder="Your Message" rows="6" required
                        className="md:col-span-2 bg-black border border-[#239797] rounded-md p-3 text-white outline-none focus:border-[#00f6e7]" />
                    <div className="md:col-span-2 flex justify-center">
                        <button type="submit"
                            className="border border-[#239797] bg-[#239797] text-[#ffffff] font-semibold px-6 py-2 rounded-full transition hover:bg-[#239797] hover:text-black hover:shadow-[0_0_20px_#00f6e7]">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
