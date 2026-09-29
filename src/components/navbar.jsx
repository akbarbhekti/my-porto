import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    
    const navItems = [
        { href: "#Home", label: "Beranda" },
        { href: "#About", label: "Tentang" },
        { href: "#Portofolio", label: "Proyek" },
        { href: "#Contact", label: "Kontak" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#0A0D10]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Name persis LamzDev */}
                <a href="#Home" className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                    Akbar<span className="text-[#2dd4bf]">Dev</span><span className="text-[#2dd4bf]">.</span>
                </a>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-sm font-medium text-gray-400 hover:text-[#2dd4bf] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    
                    {/* Badge ID */}
                    <div className="px-2.5 py-1 rounded-md border border-white/10 text-xs text-gray-300 font-medium">
                        ID ▾
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0D1117] border-b border-white/10 px-6 py-4 space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="block text-gray-300 hover:text-[#2dd4bf] text-base"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;