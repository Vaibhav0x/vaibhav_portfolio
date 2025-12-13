import React, { useState } from 'react';
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
    Globe,
    CheckCircle,
    Calendar,
    User,
    Briefcase
} from 'lucide-react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
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
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: SiFiverr,
            title: 'Fiverr',
            value: 'vaibhavraj01x',
            link: 'https://www.fiverr.com/s/ZmDLwVm',
            color: 'from-pink-500 to-orange-500'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'New Delhi, India',
            link: 'https://maps.app.goo.gl/T9i9MxvcpemrZS9m6',
            color: 'from-orange-500 to-yellow-500'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            value: 'Mon - Fri: 9AM - 6PM',
            link: '#',
            color: 'from-green-500 to-cyan-500'
        }
    ];

    const socialLinks = [
        { icon: Linkedin, link: 'https://www.linkedin.com/in/vaibhav-raj-0x/', color: 'hover:text-blue-400' },
        { icon: Github, link: 'https://github.com/Vaibhav0x/', color: 'hover:text-purple-400' },
        { icon: Twitter, link: 'https://x.com/LordD0x', color: 'hover:text-cyan-400' },
        { icon: FaTelegramPlane, link: 'https://t.me/Vaibhav0x', color: 'hover:text-blue-400' },
        { icon: FaDiscord, link: 'https://discord.com/users/669880381649977354', color: 'hover:text-indigo-400' },
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
        <div id="contact" className="min-h-screen bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
                        Let's Work Together
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can help bring your ideas to life.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <a
                                key={index}
                                href={info.link}
                                target='_blank'
                                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
                            >
                                <div className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                                <p className="text-gray-400 text-sm">{info.value}</p>
                            </a>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 md:p-10">
                            <div className="flex items-center space-x-3 mb-8">
                                <MessageSquare className="text-purple-400" size={32} />
                                <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
                            </div>

                            {formStatus === 'success' && (
                                <div className="mb-6 bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center space-x-3">
                                    <CheckCircle className="text-green-400" size={24} />
                                    <p className="text-green-400 font-semibold">Thank you! We'll get back to you soon.</p>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Name & Email */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Phone & Company */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">
                                            Company
                                        </label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div>
                                    <label className="block text-gray-400 text-sm font-medium mb-2">
                                        Service Needed *
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Budget & Timeline */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        >
                                            <option value="">Select budget range</option>
                                            {budgetRanges.map((budget, index) => (
                                                <option key={index} value={budget}>{budget}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm font-medium mb-2">
                                            Timeline
                                        </label>
                                        <select
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
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
                                    <label className="block text-gray-400 text-sm font-medium mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Response */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8">
                            <div className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                                <Clock className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Quick Response</h3>
                            <p className="text-gray-400 mb-4">
                                We typically respond within 24 hours on business days.
                            </p>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="text-green-400" size={16} />
                                    <span>Free consultation call</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="text-green-400" size={16} />
                                    <span>No obligation quote</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="text-green-400" size={16} />
                                    <span>Project timeline estimate</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
                            <p className="text-gray-400 mb-6">Follow us on social media for updates and insights.</p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target='_blank'
                                            className={`bg-slate-900 border border-slate-700 p-3 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-purple-500`}
                                        >
                                            <Icon size={24} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Schedule Meeting */}
                        <div className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
                            <Calendar className="text-purple-400 mb-4" size={32} />
                            <h3 className="text-2xl font-bold text-white mb-3">Schedule a Call</h3>
                            <p className="text-gray-300 mb-6">
                                Prefer to talk directly? Book a free 30-minute consultation call with us.
                            </p>
                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;