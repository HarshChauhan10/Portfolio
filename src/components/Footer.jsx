import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-line text-sm text-gray-400">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-wrap justify-between gap-3">
                <p>© {new Date().getFullYear()} Harsh Chauhan</p>
                <a href="#home" className="transition-colors duration-200 hover:text-accent">Back to top ↑</a>
            </div>
        </footer>
    );
};

export default Footer;
