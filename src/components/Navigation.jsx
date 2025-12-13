// Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            setScrollProgress(scrolled);

            const sections = ['home', 'about', 'skills', 'projects', 'reviews', 'contact'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 z-50">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 shadow-lg shadow-pink-500/50"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Navigation Bar */}
            <nav
                className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled
                    ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-purple-700/10 border-b border-purple-700/20'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <button
                            onClick={() => scrollTo('home')}
                            className="group flex items-center gap-2 relative"
                        >
                            {/* <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-lg border border-purple-500/30 group-hover:border-pink-500/50 transition-all duration-300 flex items-center justify-center">
                                    <Sparkles className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" size={22} />
                                </div>
                            </div> */}
                            {/* <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent hidden sm:block">
                                Portfolio
                            </span> */}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`relative px-5 py-2 rounded-xl font-medium transition-all duration-300 group ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {/* Active Background */}
                                    {activeSection === item.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-xl border border-purple-500/30 backdrop-blur-sm"></div>
                                    )}

                                    {/* Hover Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Text */}
                                    <span className="relative z-10">{item.label}</span>

                                    {/* Underline Animation */}
                                    <div
                                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 ${activeSection === item.id ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                                            }`}
                                    ></div>
                                </button>
                            ))}
                        </div>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="relative group overflow-hidden px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative z-10">Hire Me</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative group p-2 rounded-lg flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
                            <div className="relative">
                                {isMenuOpen ? (
                                    <X className="text-pink-400" size={26} />
                                ) : (
                                    <Menu className="text-purple-400" size={26} />
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-gradient-to-br from-slate-900/95 via-purple-900/10 to-slate-900/95 backdrop-blur-xl border-t border-purple-500/20">
                        <div className="px-4 py-6 space-y-3">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`block w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 transform ${activeSection === item.id
                                        ? 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 text-white border border-purple-500/30 scale-105 shadow-lg shadow-purple-500/20'
                                        : 'text-gray-400 hover:text-white hover:bg-slate-800/50 hover:scale-105'
                                        }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{item.label}</span>
                                        {activeSection === item.id && (
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                                        )}
                                    </div>
                                </button>
                            ))}

                            {/* Mobile CTA */}
                            <button
                                onClick={() => scrollTo('contact')}
                                className="w-full mt-4 relative group overflow-hidden px-6 py-4 rounded-xl font-semibold text-white"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-active:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">Hire Me</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </>
    );
};

export default Navigation;
