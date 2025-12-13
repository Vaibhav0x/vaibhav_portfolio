import React, { useState, useEffect, useRef } from 'react';
import {
    Briefcase,
    ExternalLink,
    Github,
    Calendar,
    Users,
    TrendingUp,
    Award,
    Sparkles,
    Globe,
    Smartphone,
    Bot,
    Cpu,
    Layers,
    Search,
    Code2
} from 'lucide-react';

// Import data
import { projects, projectFilters, projectStats } from '../data/projects';

// Category icons mapping
const categoryIcons = {
    websites: Globe,
    apps: Smartphone,
    scraping: Search,
    automation: Bot,
    ai: Cpu,
    blockchain: Layers
};

// Enhanced categories with icons
const categories = [
    { id: 'all', label: 'All Projects', icon: Code2, count: projects.length },
    { id: 'websites', label: 'Websites', icon: Globe, count: projectFilters.find(f => f.id === 'websites')?.count || 0 },
    { id: 'apps', label: 'Apps', icon: Smartphone, count: projectFilters.find(f => f.id === 'apps')?.count || 0 },
    { id: 'scraping', label: 'Web Scraping', icon: Search, count: projectFilters.find(f => f.id === 'scraping')?.count || 0 },
    { id: 'automation', label: 'Automation', icon: Bot, count: projectFilters.find(f => f.id === 'automation')?.count || 0 },
    { id: 'ai', label: 'AI/ML', icon: Cpu, count: projectFilters.find(f => f.id === 'ai')?.count || 0 },
    { id: 'blockchain', label: 'Blockchain', icon: Layers, count: projectFilters.find(f => f.id === 'blockchain')?.count || 0 }
];

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const sectionRef = useRef(null);

    const iconMap = {
        Briefcase,
        Users,
        Award,
        TrendingUp
    };

    // Reveal when scrolled into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

    // Project Card Component
    const ProjectCard = ({ project, index }) => {
        return (
            <div
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                    backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 
                    hover:border-purple-500/50 transition-all duration-500
                    hover:shadow-2xl hover:shadow-purple-500/10 
                    overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2
                    opacity-0 translate-y-6`}
                style={{
                    transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDelay: `${index * 60}ms`,
                    ...(isVisible && { opacity: 1, transform: "translateY(0)" })
                }}
            >
                {/* Image Container */}
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {project.highlight && (
                        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 
                            bg-gradient-to-r from-yellow-500 to-orange-500 
                            text-white text-[10px] sm:text-xs font-bold 
                            px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center space-x-1">
                            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>Featured</span>
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} 
                        opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 
                        group-hover:text-transparent group-hover:bg-clip-text 
                        group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 
                        transition-all duration-300 line-clamp-1">
                        {project.title}
                    </h3>

                    <div className="flex items-center space-x-2 sm:space-x-3 text-[10px] sm:text-xs text-gray-400 mb-2 sm:mb-3">
                        <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>{project.year}</span>
                        </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.tech.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 sm:px-2.5 sm:py-1 
                                bg-slate-900/50 border border-slate-700/50 rounded-md sm:rounded-lg 
                                text-[10px] sm:text-xs text-pink-400/90">
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 
                                bg-slate-900/50 border border-slate-700/50 rounded-md sm:rounded-lg 
                                text-[10px] sm:text-xs text-gray-400">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end pt-3 sm:pt-4 border-t border-slate-700/50 space-x-2">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg 
                                hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 
                                hover:scale-110 active:scale-95"
                        >
                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </a>

                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 
                                transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="projects" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-slate-950">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-950"></div>
            <div className="absolute top-1/4 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 
                        bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                        Featured Projects
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        A curated collection showcasing expertise across diverse technologies
                    </p>
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 transition-all duration-1000 delay-200 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {projectStats.map((stat, index) => {
                        const Icon = iconMap[stat.icon];
                        return (
                            <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                                backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-slate-700/50 
                                hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2">
                                <div className={`inline-flex p-2 sm:p-2.5 md:p-3 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl mb-2 sm:mb-3 
                                    group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent 
                                    bg-gradient-to-r from-purple-400 to-pink-400 mb-1">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Categories */}
                <div className={`mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-300 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`group relative flex items-center space-x-1.5 sm:space-x-2 
                                        px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-lg sm:rounded-xl 
                                        font-semibold text-xs sm:text-sm transition-all duration-300 
                                        ${activeCategory === category.id
                                            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                                            : 'bg-slate-800/50 backdrop-blur-sm text-gray-400 border border-slate-700/50 hover:border-purple-500/50 hover:text-white hover:scale-105'
                                        }`}
                                >
                                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span className="hidden xs:inline">{category.label}</span>
                                    <span className="inline xs:hidden">{category.label.split(' ')[0]}</span>
                                    <span className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full 
                                        ${activeCategory === category.id
                                            ? 'bg-white/20'
                                            : 'bg-slate-700/50'
                                        }`}>
                                        {category.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <div className={`text-center mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 delay-500 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <button className="group relative px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg
                        bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full 
                        font-semibold text-white shadow-2xl hover:scale-105 active:scale-95
                        transition-all duration-300 overflow-hidden">
                        <span className="relative z-10">View All Projects</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;