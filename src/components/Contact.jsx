import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import SectionHeading from './SectionHeading';

const contactLinks = [
    { label: 'Email', value: 'harshchauhan2867@gmail.com', href: 'mailto:harshchauhan2867@gmail.com' },
    { label: 'LinkedIn', value: 'harsh-chauhan10', href: 'https://www.linkedin.com/in/harsh-chauhan10/' },
    { label: 'GitHub', value: 'HarshChauhan10', href: 'https://github.com/HarshChauhan10' },
    { label: 'Location', value: 'Gurugram' },
];

const fieldClass = "w-full bg-ink border border-line rounded-xl px-4 py-3 text-white outline-none transition-colors duration-200 hover:border-white/25 focus:border-accent";
const labelClass = "block text-sm font-medium text-gray-300 mb-2";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            'service_2fj0x8g',     // Replace with your actual service ID
            'template_56msxij',    // Replace with your actual template ID
            form.current,
            'LZ3H2ARGus7twh_K8'      // Replace with your actual public key
        ).then(
            () => {
                setStatus('sent');
                form.current.reset();
            },
            (error) => {
                setStatus('error');
                console.error(error.text);
            }
        );
    };

    return (
        <section className="bg-panel py-20 lg:py-28 text-white" id='contact'>
            <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
                <div>
                    <SectionHeading kicker="Get in touch" className="mb-8">
                        Contact <span className="text-accent">Me</span>
                    </SectionHeading>
                    <dl className="border-t border-line">
                        {contactLinks.map((link) => (
                            <div key={link.label} className="flex justify-between gap-4 py-4 border-b border-line text-sm">
                                <dt className="font-mono text-gray-400">{link.label}</dt>
                                <dd className="min-w-0 break-words text-right">
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="transition-colors duration-200 hover:text-accent"
                                        >
                                            {link.value}
                                        </a>
                                    ) : link.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label>
                        <span className={labelClass}>Full Name</span>
                        <input name="name" type="text" autoComplete="name" required className={fieldClass} />
                    </label>
                    <label>
                        <span className={labelClass}>Email</span>
                        <input name="email" type="email" autoComplete="email" required className={fieldClass} />
                    </label>
                    <label>
                        <span className={labelClass}>Phone Number</span>
                        <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
                    </label>
                    <label>
                        <span className={labelClass}>Subject</span>
                        <input name="subject" type="text" className={fieldClass} />
                    </label>
                    <label className="md:col-span-2">
                        <span className={labelClass}>Your Message</span>
                        <textarea name="message" rows="6" required className={`${fieldClass} resize-y`} />
                    </label>
                    <div className="md:col-span-2 flex flex-wrap items-center gap-4">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="bg-accent text-black font-semibold px-7 py-3 rounded-full cursor-pointer transition duration-200 hover:bg-white disabled:opacity-60 disabled:cursor-wait"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        <p className="text-sm" role="status">
                            {status === 'sent' && <span className="text-neon">Message sent successfully!</span>}
                            {status === 'error' && <span className="text-red-400">Failed to send message. Please try again later.</span>}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
