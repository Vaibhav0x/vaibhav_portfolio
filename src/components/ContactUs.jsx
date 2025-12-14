import React, { useState, useEffect, useRef } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Linkedin,
    Github,
    Twitter,
    CheckCircle,
    Calendar,
    User,
    Briefcase,
    ArrowRight,
    FileText,
    Download,
    MessageSquare
} from 'lucide-react';
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        position: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const formRef = useRef(null);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus("error");
            setTimeout(() => setFormStatus(""), 3000);
            return;
        }

        setFormStatus("loading");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setFormStatus("success");

            setFormData({
                name: '',
                email: '',
                company: '',
                position: '',
                message: ''
            });

            setTimeout(() => setFormStatus(""), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setFormStatus("error");
            setTimeout(() => setFormStatus(""), 3000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'rajjvaibhavv121@gmail.com',
            link: 'mailto:rajjvaibhavv121@gmail.com',
            color: 'from-slate-400 to-slate-200'
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+91 7071442334',
            link: 'tel:+917071442334',
            color: 'from-emerald-400 to-teal-300'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'New Delhi, India',
            link: 'https://maps.app.goo.gl/T9i9MxvcpemrZS9m6',
            color: 'from-amber-400 to-yellow-300'
        },
        {
            icon: Linkedin,
            title: 'LinkedIn',
            value: 'Connect with me',
            link: 'https://www.linkedin.com/in/vaibhav-raj-0x/',
            color: 'from-blue-400 to-blue-300'
        }
    ];

    const socialLinks = [
        { icon: Linkedin, link: 'https://www.linkedin.com/in/vaibhav-raj-0x/', label: 'LinkedIn' },
        { icon: Github, link: 'https://github.com/Vaibhav0x/', label: 'GitHub' },
        { icon: Twitter, link: 'https://x.com/LordD0x', label: 'Twitter' },
        { icon: FaTelegramPlane, link: 'https://t.me/Vaibhav0x', label: 'Telegram' },
        { icon: SiFiverr, link: 'https://www.fiverr.com/s/kL45WZy', label: 'Fiverr' },
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

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Premium Header */}
                <div
                    className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="relative inline-block mb-4 sm:mb-6">
                        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200 tracking-tight">
                                Let's Connect
                            </h2>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
                        I'm actively seeking new opportunities. If you think I'd be a great fit for your team, let's discuss how I can contribute to your organization.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
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
                                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl p-4 sm:p-5 rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700 group-hover:scale-[1.02]">
                                    <div className={`inline-flex p-2 sm:p-2.5 bg-gradient-to-r ${info.color} rounded-lg md:rounded-xl mb-2 sm:mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                        <Icon className="text-slate-900 w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <h3 className="text-white font-bold text-xs sm:text-sm mb-1 tracking-wide">{info.title}</h3>
                                    <p className="text-slate-400 text-[10px] sm:text-xs font-light truncate">{info.value}</p>
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
                            
                            <form 
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 md:p-8 shadow-2xl shadow-black/50 transition-all duration-700"
                            >
                                <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-8">
                                    <div className="p-2 sm:p-2.5 bg-gradient-to-r from-slate-400 to-slate-200 rounded-lg shadow-lg">
                                        <MessageSquare className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">Get In Touch</h3>
                                </div>

                                {/* Status Messages */}
                                {formStatus === 'loading' && (
                                    <div className="mb-4 sm:mb-5 bg-blue-500/20 border border-blue-500/50 rounded-xl p-3 sm:p-4">
                                        <p className="text-blue-400 font-semibold text-xs sm:text-sm">
                                            Sending your message...
                                        </p>
                                    </div>
                                )}

                                {formStatus === 'success' && (
                                    <div className="mb-4 sm:mb-5 bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                                        <CheckCircle className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                                        <p className="text-emerald-400 font-semibold text-xs sm:text-sm">
                                            Thank you! I'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                )}

                                {formStatus === 'error' && (
                                    <div className="mb-4 sm:mb-5 bg-red-500/20 border border-red-500/50 rounded-xl p-3 sm:p-4">
                                        <p className="text-red-400 font-semibold text-xs sm:text-sm">
                                            {!formData.name || !formData.email || !formData.message 
                                                ? 'Please fill in all required fields (*)'
                                                : 'Failed to send message. Please try again.'
                                            }
                                        </p>
                                    </div>
                                )}

                                <div className="space-y-4 sm:space-y-5">
                                    {/* Name & Email */}
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Your Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg md:rounded-xl py-2 sm:py-2.5 pl-9 sm:pl-10 pr-3 sm:pr-4 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
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
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg md:rounded-xl py-2 sm:py-2.5 pl-9 sm:pl-10 pr-3 sm:pr-4 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                                    placeholder="john@company.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company & Position */}
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Company
                                            </label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg md:rounded-xl py-2 sm:py-2.5 pl-9 sm:pl-10 pr-3 sm:pr-4 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                                Position/Role
                                            </label>
                                            <input
                                                type="text"
                                                name="position"
                                                value={formData.position}
                                                onChange={handleChange}
                                                className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg md:rounded-xl py-2 sm:py-2.5 px-3 sm:px-4 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300"
                                                placeholder="Hiring Manager"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-slate-400 text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg md:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-slate-500/50 transition-all duration-300 resize-none"
                                            placeholder="Tell me about the opportunity..."
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'loading'}
                                        className="group/btn relative w-full overflow-hidden px-5 py-2.5 sm:py-3 rounded-lg md:rounded-xl font-bold text-sm sm:text-base text-white transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                        <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                                            {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                                            {formStatus !== 'loading' && (
                                                <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            )}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {/* Quick Info */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 shadow-2xl shadow-black/50 transition-all duration-700">
                                <div className="inline-flex p-2 sm:p-2.5 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-lg md:rounded-xl mb-3 sm:mb-4 shadow-lg">
                                    <CheckCircle className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3 tracking-tight">Available for Work</h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 font-light leading-relaxed">
                                    I typically respond within 24 hours and am open to discussing:
                                </p>
                                <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="text-emerald-400 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                                        <span className="font-light">Full-time positions</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="text-emerald-400 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                                        <span className="font-light">Contract opportunities</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="text-emerald-400 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                                        <span className="font-light">Remote work</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="text-emerald-400 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                                        <span className="font-light">Relocation (if required)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 shadow-2xl shadow-black/50 transition-all duration-700">
                                <h3 className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3 tracking-tight">Connect Online</h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-5 font-light leading-relaxed">
                                    View my work and connect with me on social platforms.
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className="group/social relative"
                                                title={social.label}
                                            >
                                                <div className="absolute inset-0 bg-slate-400/20 rounded-lg blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-500" />
                                                <div className="relative bg-slate-800/50 border border-slate-700/30 p-2.5 sm:p-3 rounded-lg text-slate-400 hover:text-white hover:border-slate-500/50 transition-all duration-500 hover:scale-110">
                                                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Download Resume */}
                        {/* <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 p-5 sm:p-6 shadow-2xl shadow-black/50 transition-all duration-700">
                                <div className="inline-flex p-2 sm:p-2.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-lg md:rounded-xl mb-3 sm:mb-4 shadow-lg">
                                    <FileText className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3 tracking-tight">Resume / CV</h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-5 font-light leading-relaxed">
                                    Download my latest resume for a detailed overview of my experience and skills.
                                </p>
                                <button className="group/btn relative w-full overflow-hidden px-4 py-2 sm:py-2.5 rounded-lg md:rounded-xl font-bold text-xs sm:text-sm text-white transition-all duration-500 hover:scale-[1.02]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                                        <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                        Download Resume
                                    </span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;