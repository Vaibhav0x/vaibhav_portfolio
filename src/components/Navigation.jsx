import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap, ArrowRight } from 'lucide-react';

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

            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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
        // { id: 'reviews', label: 'Reviews' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Premium Scroll Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900/50 backdrop-blur-sm z-50">
                <div className="relative h-full overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-20" />
                    
                    {/* Progress bar with glow */}
                    <div
                        className="relative h-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
                        style={{ width: `${scrollProgress}%` }}
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                </div>
            </div>

            {/* Premium Navigation Bar */}
            <nav
                className={`fixed top-0 w-full z-40 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-black/50 border-b border-slate-700/30'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
                        {/* Premium Logo */}
                        <button
                            onClick={() => scrollTo('home')}
                            className="group relative flex items-center gap-2.5 sm:gap-3"
                        >
                            {/* Logo Icon Container */}
                            {/* <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                                
                                <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-2 sm:p-2.5 rounded-xl border border-slate-700/50 group-hover:border-violet-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 group-hover:text-pink-400 transition-colors duration-500" />
                                </div>
                            </div> */}
                            
                            {/* Logo Text */}
                            {/* <span className="text-xl sm:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200 tracking-tight hidden sm:block group-hover:scale-105 transition-transform duration-300">
                                Portfolio
                            </span> */}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`relative px-4 xl:px-5 py-2.5 rounded-xl font-semibold text-sm xl:text-base transition-all duration-500 group ${
                                        activeSection === item.id 
                                            ? 'text-white scale-105' 
                                            : 'text-slate-400 hover:text-white hover:scale-105'
                                    }`}
                                >
                                    {/* Active state background */}
                                    {activeSection === item.id && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-xl border border-violet-500/30 backdrop-blur-sm" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl animate-shimmer" />
                                        </>
                                    )}

                                    {/* Hover background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Text with tracking */}
                                    <span className="relative z-10 tracking-wide">{item.label}</span>

                                    {/* Premium underline animation */}
                                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-500">
                                        <div
                                            className={`h-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 transition-all duration-500 ${
                                                activeSection === item.id ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                                            }`}
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Premium CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="group relative overflow-hidden px-5 xl:px-6 py-2.5 xl:py-3 rounded-xl font-bold text-sm xl:text-base text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                            >
                                {/* Gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600" />
                                
                                {/* Animated gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                
                                {/* <span className="relative z-10 flex items-center gap-2 tracking-wide">
                                    Hire Me
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span> */}
                                <a href="#contact" className="group relative">
                                    <span className="relative z-10 flex items-center gap-2 tracking-wide">
                                        Hire Me
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </a>
                            </button>
                        </div>

                        {/* Premium Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative group p-2.5 sm:p-3 rounded-xl flex items-center justify-center"
                        >
                            {/* Glow background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500" />
                            
                            {/* Button background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-xl border border-slate-700/50 group-hover:border-violet-500/50 transition-all duration-500" />
                            
                            <div className="relative">
                                {isMenuOpen ? (
                                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 group-hover:rotate-90 transition-transform duration-500" />
                                ) : (
                                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Premium Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-700 ${
                        isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="relative bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-2xl border-t border-slate-700/30 shadow-2xl shadow-black/50">
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5 pointer-events-none" />
                        
                        <div className="relative px-4 sm:px-6 py-6 space-y-2">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`group relative block w-full text-left px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-500 overflow-hidden ${
                                        activeSection === item.id
                                            ? 'text-white scale-[1.02]'
                                            : 'text-slate-400 hover:text-white hover:scale-[1.02]'
                                    }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: isMenuOpen ? 'slideIn 0.5s ease-out forwards' : 'none',
                                    }}
                                >
                                    {/* Active background */}
                                    {activeSection === item.id && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 border border-violet-500/30 rounded-xl backdrop-blur-sm" />
                                            <div className="absolute inset-0 shadow-lg shadow-purple-500/20" />
                                        </>
                                    )}
                                    
                                    {/* Hover background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative flex items-center justify-between">
                                        <span className="tracking-wide">{item.label}</span>
                                        
                                        {activeSection === item.id ? (
                                            <div className="relative">
                                                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-purple-500 blur-sm animate-pulse" />
                                                <div className="relative w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-pink-400" />
                                            </div>
                                        ) : (
                                            <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                        )}
                                    </div>
                                </button>
                            ))}

                            {/* Premium Mobile CTA */}
                            <button
                                onClick={() => scrollTo('contact')}
                                className="group relative w-full mt-4 overflow-hidden px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white transition-all duration-500 hover:scale-[1.02]"
                                style={{
                                    animationDelay: `${navItems.length * 50}ms`,
                                    animation: isMenuOpen ? 'slideIn 0.5s ease-out forwards' : 'none',
                                }}
                            >
                                {/* Gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600" />
                                
                                {/* Animated gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 opacity-0 group-active:opacity-100 transition-opacity duration-500" />
                                
                                {/* Shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                
                                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                                    <Zap className="w-4 h-4" />
                                    Hire Me
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
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
                
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>
        </>
    );
};

export default Navigation;