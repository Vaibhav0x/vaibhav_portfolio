import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Twitter,
    Globe,
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
            color: 'hover:bg-blue-500',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            icon: Github,
            href: 'https://github.com/Vaibhav0x/',
            label: 'GitHub',
            color: 'hover:bg-purple-500',
            gradient: 'from-purple-500 to-purple-600'
        },
        {
            icon: Twitter,
            href: 'https://x.com/LordD0x',
            label: 'Twitter',
            color: 'hover:bg-black-500',
            gradient: 'from-cyan-500 to-cyan-600'
        },
        {
            icon: FaTelegramPlane,
            href: 'https://t.me/Vaibhav0x',
            label: 'Telegram',
            color: 'hover:bg-blue-700',
            gradient: 'from-black-500 to-cyan-600'
        },
        {
            icon: SiFiverr,
            href: 'https://www.fiverr.com/s/kL45WZy',
            label: 'Fiverr',
            color: 'hover:bg-pink-500',
            gradient: 'from-pink-500 to-pink-600'
        }
    ];

    const contactInfo = [
        {
            icon: Mail,
            text: 'rajjvaibhavv121@gmail.com',
            href: 'mailto:rajjvaibhav121@gmail.com',
            color: 'text-purple-400'
        },
        {
            icon: Phone,
            text: '+917071442334',
            href: 'tel:+917071442334',
            color: 'text-pink-400'
        },
        {
            icon: MapPin,
            text: 'New Delhi,India',
            href: 'https://maps.app.goo.gl/T9i9MxvcpemrZS9m6',
            color: 'text-orange-400'
        }
    ];

    return (
        <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                                            <Send className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white">Stay Updated</h3>
                                    </div>
                                    <p className="text-gray-400 text-lg">
                                        Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                        />
                                        <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-3">
                                        By subscribing, you agree to our Privacy Policy and consent to receive updates.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl">
                                    <Code className="text-white" size={28} />
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                                    VaibStudio
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Building innovative digital solutions that transform businesses and create exceptional user experiences.
                            </p>

                            {/* Social Links */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target='_blank'
                                            aria-label={social.label}
                                            className="group relative bg-slate-800 border border-slate-700 p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:border-purple-500"
                                        >
                                            <Icon size={20} />
                                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 border border-slate-700 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {social.label}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></span>
                                <span>Quick Links</span>
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="group flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                            >
                                                <Icon size={16} className="group-hover:scale-110 transition-transform" />
                                                <span>{link.label}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded"></span>
                                <span>Services</span>
                            </h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            target='_blank'
                                            className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {service.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Resources */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 flex items-center space-x-2">
                                <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded"></span>
                                <span>Get In Touch</span>
                            </h4>
                            <ul className="space-y-4 mb-8">
                                {contactInfo.map((contact, index) => {
                                    const Icon = contact.icon;
                                    return (
                                        <li key={index}>
                                            <a
                                                href={contact.href}
                                                className="group flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                                            >
                                                <Icon size={18} className={`flex-shrink-0 mt-0.5 ${contact.color} group-hover:scale-110 transition-transform`} />
                                                <span className="text-sm">{contact.text}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Resources */}
                            <h4 className="text-white font-bold text-sm mb-3">Resources</h4>
                            <ul className="space-y-2">
                                {resources.slice(0, 3).map((resource, index) => (
                                    <li key={index}>
                                        <a
                                            href={resource.href}
                                            className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-300"
                                        >
                                            {resource.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-slate-800 mb-8">
                        {[
                            { value: '100+', label: 'Projects Completed' },
                            { value: '30+', label: 'Happy Clients' },
                            { value: '1.5+', label: 'Years Experience' },
                            { value: '98%', label: 'Satisfaction Rate' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800">
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm">
                            <span>© {currentYear} VaibStudio. All rights reserved.</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1">
                                Made with <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse" /> by VaibStudio
                            </span>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex gap-4 text-sm">
                                <a href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Privacy
                                </a>
                                <a href="#terms" className="text-gray-400 hover:text-pink-400 transition-colors">
                                    Terms
                                </a>
                                <a href="#cookies" className="text-gray-400 hover:text-orange-400 transition-colors">
                                    Cookies
                                </a>
                            </div>

                            {/* Scroll to Top Button */}
                            <button
                                onClick={scrollToTop}
                                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 p-2 rounded-xl text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp size={20} className="group-hover:animate-bounce" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;