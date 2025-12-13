// AboutSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
    User,
    Code2,
    Briefcase,
    GraduationCap,
    Award,
    Target,
    Coffee,
    Lightbulb,
    Heart,
    Zap,
    TrendingUp,
    CheckCircle2
} from 'lucide-react';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('about');
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const tabs = [
        { id: 'about', label: 'About Me', icon: User },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'education', label: 'Education', icon: GraduationCap }
    ];

    const aboutContent = {
        intro: "I'm a Software Engineer & Creative Developer who loves pushing the boundaries of web technology. With expertise in Python, Django, React, Three.js, Node.js, React Native, Shopify, WordPress, PHP, Laravel, AI & ML and modern web frameworks, I create immersive digital experiences that captivate users and drive results.",
        description: "",
        passion: "I believe in writing clean, maintainable code and creating user experiences that delight. When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or mentoring aspiring developers."
    };

    const highlights = [
        { icon: Code2, text: 'Expert in Modern Web Technologies', color: 'text-purple-400' },
        { icon: Zap, text: 'Performance Optimization Specialist', color: 'text-pink-400' },
        { icon: TrendingUp, text: 'Agile & Scrum Methodology', color: 'text-orange-400' },
        { icon: Heart, text: 'Passionate About Clean Code', color: 'text-red-400' }
    ];

    const experiences = [
        {
            title: 'Software Engineer',
            company: 'GoSharpener Pvt Ltd',
            period: 'April 2025 - Present',
            location: 'New Delhi, India',
            description: 'Leading development of enterprise-level applications serving 100K+ users. Architecting scalable microservices and mentoring junior developers.',
            achievements: [
                'Reduced application load time by 60% through optimization',
                'Led migration to microservices architecture',
                'Implemented CI/CD pipeline reducing deployment time by 80%'
            ],
            tech: ['PHP', 'Python', 'Node.js', 'Azure', 'MySQL', 'Redis', 'FileZilla', 'Postman', 'Git', 'bitbucket', 'Cron Jobs', 'Automation Emails']
        },
        {
            title: 'Solution Developer',
            company: 'iTech Mission Pvt Ltd',
            period: '2024 - 2025',
            location: 'Green Park New Delhi, India',
            description: 'Developed and maintained multiple client projects, focusing on React-based frontends and Node.js backends.',
            achievements: [
                'Built 15+ production-ready applications',
                'Improved code coverage from 40% to 85%',
                'Introduced TypeScript to the tech stack'
            ],
            tech: ['Python', 'Django', 'Rest Api', 'AI & ML', 'Angular', 'Express', 'Node.js', 'PostgreSQL', 'MongoDB', 'TypeScript', 'JavaScript', 'Git', 'Docker', 'GitLab']
        },
        {
            title: 'Python Developer',
            company: 'Medic Tech Pvt Ltd',
            period: 'Feb 2024 - July 2024',
            location: 'IIT Delhi, India',
            description: 'Contributed to various full-stack projects and learned modern development practices.',
            achievements: [
                'Developed RESTful APIs for mobile applications',
                'Collaborated with design team on UI/UX improvements',
                'Participated in code reviews and agile ceremonies'
            ],
            tech: ['Python', 'JavaScript', 'QT Designer', 'MySQL', 'Git', 'Desktop Applications']
        }
    ];

    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            institution: 'GGSIPU University',
            period: '2022 - 2024',
            location: 'New Delhi, India',
            description: 'Master with honors. Focused on software engineering, algorithms, and data structures.',
            highlights: [
                'GPA: 9.1/10',
                'Dean\'s List: 4 consecutive years',
                'Senior Project: TransVox - AI-powered transcription tool'
            ]
        },
        {
            degree: 'Gate Qualified Engineer',
            institution: 'GATE',
            period: '2024 & 2025',
            location: 'Online',
            description: 'Intensive 12-month program covering modern web development technologies and best practices.',
            highlights: [
                'Built 10+ real-world projects',
                'Learned MERN stack from industry experts',
                'Graduated top 5% of cohort'
            ]
        }
    ];

    const stats = [
        { icon: Code2, value: '50+', label: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
        { icon: Award, value: '1.5+', label: 'Years Experience', color: 'from-pink-500 to-orange-500' },
        { icon: Coffee, value: '100+', label: 'Cups of Coffee', color: 'from-orange-500 to-yellow-500' },
        { icon: Lightbulb, value: '30+', label: 'Happy Clients', color: 'from-yellow-500 to-green-500' }
    ];

    const interests = [
        'Open Source',
        'UI/UX Design',
        'Cloud Architecture',
        'DevOps',
        'Game Development',
        'AI & Machine Learning',
        'Technical Writing',
        'Mentoring'
    ];

    const renderAbout = () => (
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p className="animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
                        {aboutContent.intro}
                    </p>
                    <p className="animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                        {aboutContent.description}
                    </p>
                    <p className="animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
                        {aboutContent.passion}
                    </p>
                </div>

                <div className="space-y-3 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex items-center space-x-3 group">
                                <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 group-hover:border-purple-500 transition-all duration-300">
                                    <Icon className={item.color} size={20} />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors">
                                    {item.text}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="animate-slideInLeft" style={{ animationDelay: '0.5s' }}>
                    <h4 className="text-xl font-semibold mb-4 text-gradient-primary">Interests & Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                        {interests.map((interest, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:border-pink-500 hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 animate-slideInRight"
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                        >
                            <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="text-white" size={24} />
                            </div>
                            <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderExperience = () => (
        <div className="space-y-8">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {/* Timeline Dot */}
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient-primary transition-all duration-300">
                                {exp.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-purple-400 font-semibold mb-1">
                                <Briefcase size={18} />
                                <span>{exp.company}</span>
                            </div>
                            <div className="text-sm text-gray-400">
                                <span>{exp.location}</span>
                            </div>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 whitespace-nowrap">
                            {exp.period}
                        </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                    </p>

                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start space-x-2 text-gray-300">
                                    <CheckCircle2 className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-pink-400 group-hover:border-pink-500/50 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    const renderEducation = () => (
        <div className="space-y-8">
            {education.map((edu, index) => (
                <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 animate-slideUp"
                    style={{ animationDelay: `${index * 0.15}s` }}
                >
                    <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="text-white" size={32} />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient-primary transition-all duration-300">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-lg text-purple-400 font-semibold mb-1">
                                        {edu.institution}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {edu.location}
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 whitespace-nowrap">
                                    {edu.period}
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {edu.description}
                            </p>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 mb-3">Highlights:</h4>
                                <ul className="space-y-2">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start space-x-2 text-gray-300">
                                            <Target className="text-orange-400 mt-0.5 flex-shrink-0" size={18} />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-20 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 section-container">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center justify-center space-x-3 mb-4">
                        <User className="text-purple-400" size={40} />
                        <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary">
                            About Me
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Get to know more about my journey, experience, and what drives me
                    </p>
                </div>

                {/* Tabs */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                                    : 'bg-slate-800 text-gray-400 border border-slate-700 hover:border-purple-500 hover:text-white'
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {activeTab === 'about' && renderAbout()}
                    {activeTab === 'experience' && renderExperience()}
                    {activeTab === 'education' && renderEducation()}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;