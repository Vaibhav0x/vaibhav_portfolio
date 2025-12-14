import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Twitter,
    Heart,
    Code,
    Send,
    ArrowUp,
    Briefcase,
    MessageSquare,
    Home,
    User,
    Folder,
    Award,
    Sparkles,
} from 'lucide-react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { icon: Home, label: 'Home', href: '#home' },
        { icon: User, label: 'About', href: '#about' },
        { icon: Briefcase, label: 'Services', href: '#services' },
        { icon: Folder, label: 'Portfolio', href: '#portfolio' },
        { icon: Award, label: 'Clients', href: '#clients' },
        { icon: MessageSquare, label: 'Contact', href: '#contact' }
    ];

    const services = [
        { label: 'Web Development', href: 'https://www.fiverr.com/s/Ke4B99l' },
        { label: 'Mobile Apps', href: 'https://www.fiverr.com/s/9930WWd' },
        { label: 'UI/UX Design', href: 'https://www.fiverr.com/s/Ke4B99l' },
        { label: 'E-commerce', href: 'https://www.fiverr.com/s/Ke4B99l' },
        { label: 'API Development', href: 'https://www.fiverr.com/s/5r9D8p6' },
        { label: 'Consulting', href: '#consulting' }
    ];

    const resources = [
        { label: 'Blog', href: '#blog' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'FAQ', href: '#faq' }
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/vaibhav-raj-0x/',
            label: 'LinkedIn',
            gradient: 'from-blue-400 via-blue-300 to-blue-400'
        },
        {
            icon: Github,
            href: 'https://github.com/Vaibhav0x/',
            label: 'GitHub',
            gradient: 'from-slate-400 via-slate-300 to-slate-400'
        },
        {
            icon: Twitter,
            href: 'https://x.com/LordD0x',
            label: 'Twitter',
            gradient: 'from-cyan-400 via-cyan-300 to-cyan-400'
        },
        {
            icon: FaTelegramPlane,
            href: 'https://t.me/Vaibhav0x',
            label: 'Telegram',
            gradient: 'from-blue-400 via-sky-300 to-blue-400'
        },
        {
            icon: SiFiverr,
            href: 'https://www.fiverr.com/s/kL45WZy',
            label: 'Fiverr',
            gradient: 'from-emerald-400 via-teal-300 to-emerald-400'
        }
    ];

    const contactInfo = [
        {
            icon: Mail,
            text: 'rajjvaibhavv121@gmail.com',
            href: 'mailto:rajjvaibhav121@gmail.com',
            gradient: 'from-slate-400 to-slate-200'
        },
        {
            icon: Phone,
            text: '+917071442334',
            href: 'tel:+917071442334',
            gradient: 'from-emerald-400 to-teal-300'
        },
        {
            icon: MapPin,
            text: 'New Delhi, India',
            href: 'https://maps.app.goo.gl/T9i9MxvcpemrZS9m6',
            gradient: 'from-amber-400 to-yellow-300'
        }
    ];

    return (
        <footer className="relative bg-black border-t border-slate-800/30 overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-black to-black"></div>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>

            <div className="relative z-10">
                {/* Premium Newsletter Section */}
                {/* <div className="border-b border-slate-800/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-3xl"></div>
                            
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700 p-6 sm:p-8 md:p-10 lg:p-12">
                                
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 rounded-3xl"></div>
                                </div>

                                <div className="relative grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                                    <div>
                                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                                            <div className="p-2 sm:p-2.5 md:p-3 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                                                <Send className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200 tracking-tight">
                                                Stay Updated
                                            </h3>
                                        </div>
                                        <p className="text-slate-400 text-xs sm:text-sm md:text-base font-light tracking-wide leading-relaxed">
                                            Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700/30 rounded-lg md:rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                            />
                                            <button className="group/btn relative bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg md:rounded-xl text-sm sm:text-base font-bold hover:scale-105 transition-all duration-500 whitespace-nowrap shadow-xl overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                                                <span className="relative z-10">Subscribe</span>
                                            </button>
                                        </div>
                                        <p className="text-slate-500 text-[10px] sm:text-xs mt-2 sm:mt-3 font-light tracking-wide">
                                            By subscribing, you agree to our Privacy Policy and consent to receive updates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
                        
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                                <div className="p-2 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-xl shadow-xl">
                                    <Code className="text-slate-900 w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-slate-200 via-white to-slate-200 bg-clip-text text-transparent tracking-tight">
                                    VaibStudio
                                </span>
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed font-light tracking-wide">
                                Building innovative digital solutions that transform businesses and create exceptional user experiences.
                            </p>

                            {/* Premium Social Links */}
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <div key={index} className="group relative">
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg rounded-xl"></div>
                                            
                                            <a
                                                href={social.href}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className="relative block bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/30 group-hover:border-slate-500/50 p-2.5 sm:p-3 rounded-lg md:rounded-xl text-slate-400 hover:text-white transition-all duration-500 group-hover:scale-110 shadow-xl shadow-black/50 group-hover:shadow-slate-500/20"
                                            >
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 backdrop-blur-xl border border-slate-700/50 px-2 py-1 rounded-lg text-[10px] sm:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                    {social.label}
                                                </span>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
                                <span className="w-1 h-5 sm:h-6 bg-gradient-to-b from-slate-400 to-slate-200 rounded"></span>
                                <span>Quick Links</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {quickLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="group flex items-center space-x-2 text-slate-400 hover:text-white transition-all duration-300 text-xs sm:text-sm"
                                            >
                                                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
                                <span className="w-1 h-5 sm:h-6 bg-gradient-to-b from-emerald-400 to-teal-300 rounded"></span>
                                <span>Services</span>
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            className="group text-slate-400 hover:text-white transition-all duration-300 text-xs sm:text-sm inline-flex items-center space-x-1"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{service.label}</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Resources */}
                        <div>
                            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-4 sm:mb-6 flex items-center space-x-2">
                                <span className="w-1 h-5 sm:h-6 bg-gradient-to-b from-amber-400 to-yellow-300 rounded"></span>
                                <span>Get In Touch</span>
                            </h4>
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                {contactInfo.map((contact, index) => {
                                    const Icon = contact.icon;
                                    return (
                                        <li key={index} className="group">
                                            <a
                                                href={contact.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-start space-x-2 sm:space-x-3 text-slate-400 hover:text-white transition-all duration-300"
                                            >
                                                <div className={`p-1.5 sm:p-2 bg-gradient-to-r ${contact.gradient} rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0`}>
                                                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-900" />
                                                </div>
                                                <span className="text-[10px] sm:text-xs md:text-sm leading-relaxed">{contact.text}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Resources */}
                            <h4 className="text-white font-bold text-xs sm:text-sm mb-2 sm:mb-3">Resources</h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {resources.slice(0, 3).map((resource, index) => (
                                    <li key={index}>
                                        <a
                                            href={resource.href}
                                            className="text-slate-400 text-[10px] sm:text-xs hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {resource.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Premium Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-800/30">
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-slate-500 text-[10px] sm:text-xs font-light tracking-wide">
                            <span>© {currentYear} VaibStudio. All rights reserved.</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1.5">
                                Made with <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-400 fill-pink-400 animate-pulse" /> by VaibStudio
                            </span>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="flex gap-3 sm:gap-4 text-[10px] sm:text-xs">
                                <a href="#privacy" className="text-slate-500 hover:text-white transition-colors duration-300 font-light tracking-wide">
                                    Privacy
                                </a>
                                <a href="#terms" className="text-slate-500 hover:text-white transition-colors duration-300 font-light tracking-wide">
                                    Terms
                                </a>
                                <a href="#cookies" className="text-slate-500 hover:text-white transition-colors duration-300 font-light tracking-wide">
                                    Cookies
                                </a>
                            </div>

                            {/* Premium Scroll to Top Button */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg rounded-xl"></div>
                                <button
                                    onClick={scrollToTop}
                                    className="relative bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 p-2 sm:p-2.5 rounded-lg md:rounded-xl text-white hover:scale-110 transition-all duration-500 shadow-xl shadow-black/50 hover:shadow-slate-500/50 overflow-hidden"
                                    aria-label="Scroll to top"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:animate-bounce" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;