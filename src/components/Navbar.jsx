import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const navItems = ['Home', 'Experience', 'Skills', 'Education', 'Services', 'Testimonials', 'Contact'];
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    // Highlights the link of whichever section crosses the middle of the screen
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        navItems.forEach((item) => {
            const section = document.getElementById(item.toLowerCase());
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className="w-full bg-ink/80 backdrop-blur-md text-white border-b border-line sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex justify-between items-center">

                {/* Left: HC */}
                <a href="#home" className="font-display text-xl font-bold tracking-tight animate-3d-spin">
                    Harsh <span className="text-accent">Chauhan</span>
                </a>

                {/* Hamburger for mobile */}
                <button
                    className="lg:hidden cursor-pointer p-3 -mr-3"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-white transition duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                    </div>
                </button>

                {/* Right: Nav Links */}
                <nav className="hidden lg:flex gap-7 text-sm font-medium">
                    {navItems.map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                aria-current={active === id ? 'true' : undefined}
                                className={`relative py-1 transition-colors duration-200 hover:text-white ${active === id ? 'text-white' : 'text-gray-400'}`}
                            >
                                {item}
                                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all duration-300 ${active === id ? 'w-full' : 'w-0'}`}></span>
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="lg:hidden border-t border-line px-5 sm:px-8 py-2">
                    {navItems.map((item) => {
                        const id = item.toLowerCase();
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                onClick={() => setMenuOpen(false)}
                                className={`block py-3 font-medium ${active === id ? 'text-accent' : 'text-gray-300'}`}
                            >
                                {item}
                            </a>
                        );
                    })}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
