import React, { useState } from 'react';

const Navbar = () => {
    const navItems = ['Home', 'Exprience', 'Education', 'Services', 'Testimonials', 'Contact'];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Left: HC */}
                <div className="text-2xl sm:text-3xl font-extrabold tracking-widest animate-3d-spin">
                    Harsh <span className='text-[#239797] drop-shadow-[0_0_20px_#00f6e7]'>Chauhan</span>
                </div>

                {/* Hamburger for mobile */}
                <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>
                </div>

                {/* Right: Nav Links */}
                <div className="hidden lg:flex gap-6 text-sm sm:text-base font-medium">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase()}`}
                            className="relative group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#239797] transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full shadow-[0_0_8px_#239797]"></span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden mt-4 flex flex-col gap-4 items-start px-2">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="relative group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#239797] transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full shadow-[0_0_8px_#239797]"></span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
