import React, { useState, useEffect, useRef } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    MessageSquare,
    Linkedin,
    Github,
    Twitter,
    CheckCircle,
    Calendar,
    User,
    Briefcase,
    ArrowRight
} from 'lucide-react';
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
    });

    const [formStatus, setFormStatus] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        setTimeout(() => {
            setFormStatus('');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                budget: '',
                message: '',
                timeline: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'rajjvaibhavv121@gmail.com',
            link: 'mailto:rajjvaibhavv121@gmail.com',
            color: 'from-slate-400 to-slate-300'
        },
        {
            icon: SiFiverr,
            title: 'Fiverr',
            value: 'vaibhavraj01x',
            link: 'https://www.fiverr.com/s/ZmDLwVm',
            color: 'from-slate-400 to-slate-300'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'New Delhi, India',
            link: 'https://maps.app.goo.gl/T9i9MxvcpemrZS9m6',
            color: 'from-slate-400 to-slate-300'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            value: 'Mon - Fri: 9AM - 6PM',
            link: '#',
            color: 'from-slate-400 to-slate-300'
        }
    ];

    const socialLinks = [
        { icon: Linkedin, link: 'https://www.linkedin.com/in/vaibhav-raj-0x/' },
        { icon: Github, link: 'https://github.com/Vaibhav0x/' },
        { icon: Twitter, link: 'https://x.com/LordD0x' },
        { icon: FaTelegramPlane, link: 'https://t.me/Vaibhav0x' },
        { icon: FaDiscord, link: 'https://discord.com/users/669880381649977354' },
    ];

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'E-commerce Solutions',
        'API Development',
        'Consulting',
        'Other'
    ];

    const budgetRanges = [
        'Under $100',
        '$100 - $500',
        '$500 - $1,000',
        '$2,000 - $5,000',
        '$5,000 - $20,000',
        '$20,000+'
    ];

    const timelines = [
        '1-3 days',
        'Within a week',
        '1-3 weeks',
        '1-2 months',
        '2-3 months',
        '3+ months'
    ];

    return (
        <section 
            ref={sectionRef}
            id="contact" 
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden bg-black"
        >
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-black to-black" />
            <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
            <div className="absolute bottom-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Premium Header */}
                <div
                    className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="relative inline-block mb-4 sm:mb-6">
                        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <MessageSquare className="text-slate-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 tracking-tight">
                                Let's Work Together
                            </h2>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
                        Have a project in mind? Let's discuss how we can bring your ideas to life
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <a
                                key={index}
                                href={info.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700 group-hover:scale-[1.02]">
                                    <div className={`inline-flex p-2 sm:p-2.5 bg-gradient-to-r ${info.color} rounded-lg md:rounded-xl mb-3 sm:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                        <Icon className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 tracking-wide">{info.title}</h3>
                                    <p className="text-slate-400 text-xs sm:text-sm font-light truncate">{info.value}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-3xl" />
                            
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl shadow-black/50 transition-all duration-700">
                                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                                    <div className="p-2 sm:p-2.5 bg-gradient-to-r from-slate-400 to-slate-300 rounded-lg shadow-lg">
                                        <Send className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">Send a Message</h3>
                                </div>

                                {formStatus === 'success' && (
                                    <div className="mb-4 sm:mb-6 bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                                        <CheckCircle className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                                        <p className="text-emerald-400 font-semibold text-xs sm:text-sm md:text-base">Thank you! We'll get back to you soon.</p>
                                    </div>
                                )}

                                <div className="space-y-4 sm:space-y-6">
                                    {/* Name & Email */}
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-2.5 sm:py-3 pl-10 sm:pl-11 pr-4 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-2.5 sm:py-3 pl-10 sm:pl-11 pr-4 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone & Company */}
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-2.5 sm:py-3 pl-10 sm:pl-11 pr-4 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Company
                                            </label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-5 sm:h-5" />
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-2.5 sm:py-3 pl-10 sm:pl-11 pr-4 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Selection */}
                                    <div>
                                        <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                            Service Needed *
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Budget & Timeline */}
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Budget Range
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                            >
                                                <option value="">Select budget range</option>
                                                {budgetRanges.map((budget, index) => (
                                                    <option key={index} value={budget}>{budget}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Timeline
                                            </label>
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                            >
                                                <option value="">Select timeline</option>
                                                {timelines.map((time, index) => (
                                                    <option key={index} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                            Project Details *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full bg-slate-800/50 border border-slate-700/30 rounded-xl py-3 px-4 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300 resize-none"
                                            placeholder="Tell us about your project..."
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="group relative w-full overflow-hidden px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg text-white transition-all duration-500 hover:scale-[1.02]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                        <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                                            Send Message
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Quick Response */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/50 transition-all duration-700">
                                <div className="inline-flex p-2 sm:p-2.5 bg-gradient-to-r from-slate-400 to-slate-300 rounded-xl mb-3 sm:mb-4 shadow-lg">
                                    <Clock className="text-slate-900 w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3 tracking-tight">Quick Response</h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 font-light leading-relaxed">
                                    We typically respond within 24 hours on business days.
                                </p>
                                <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-emerald-400 w-4 h-4 flex-shrink-0" />
                                        <span className="font-light">Free consultation call</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-emerald-400 w-4 h-4 flex-shrink-0" />
                                        <span className="font-light">No obligation quote</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-emerald-400 w-4 h-4 flex-shrink-0" />
                                        <span className="font-light">Project timeline estimate</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/50 transition-all duration-700">
                                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3 tracking-tight">Connect With Us</h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 font-light leading-relaxed">
                                    Follow us on social media for updates and insights.
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className="group/social relative"
                                            >
                                                <div className="absolute inset-0 bg-slate-400/20 rounded-xl blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-500" />
                                                <div className="relative bg-slate-800/50 border border-slate-700/30 p-2.5 sm:p-3 rounded-xl text-slate-400 hover:text-white hover:border-slate-500/50 transition-all duration-500 hover:scale-110">
                                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Schedule Meeting */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/50 transition-all duration-700">
                                <div className="inline-flex p-2 sm:p-2.5 bg-gradient-to-r from-slate-400 to-slate-300 rounded-xl mb-3 sm:mb-4 shadow-lg">
                                    <Calendar className="text-slate-900 w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3 tracking-tight">Schedule a Call</h3>
                                <p className="text-slate-300 text-xs sm:text-sm mb-4 sm:mb-6 font-light leading-relaxed">
                                    Prefer to talk directly? Book a free 30-minute consultation call with us.
                                </p>
                                <button className="group/btn relative w-full overflow-hidden px-4 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base text-white transition-all duration-500 hover:scale-[1.02]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                    <span className="relative z-10 tracking-wide">Book Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;