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
            (result) => {
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
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10" id='contact'>
            <div className="max-w-4xl w-full text-white">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Contact <span className="text-[#239797]">Me</span>
                </h2>
                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="name" type="text" placeholder="Full Name" required
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none" />
                    <input name="email" type="email" placeholder="Email" required
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none" />
                    <input name="phone" type="tel" placeholder="Phone Number"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none" />
                    <input name="subject" type="text" placeholder="Subject"
                        className="bg-black border border-[#239797] rounded-md p-3 text-white outline-none" />
                    <textarea name="message" placeholder="Your Message" rows="6" required
                        className="md:col-span-2 bg-black border border-[#239797] rounded-md p-3 text-white outline-none" />
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
