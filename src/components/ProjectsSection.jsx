// ProjectsSection.jsx
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
    ArrowRight,
    ArrowLeft,
    Star
} from 'lucide-react';

// Import data from your existing projects.js file
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

// Category descriptions
const categoryDescriptions = {
    websites: "Full-stack web applications with modern frameworks and responsive designs",
    apps: "Native and cross-platform mobile applications for iOS and Android",
    scraping: "High-performance data extraction and web scraping solutions",
    automation: "Intelligent automation tools and workflow optimization systems",
    ai: "Machine learning models and AI-powered solutions",
    blockchain: "Decentralized applications and smart contract development"
};

// Premium luxury gradients
const categoryGradients = {
    websites: 'from-slate-400 via-slate-200 to-slate-400',
    apps: 'from-emerald-400 via-teal-300 to-cyan-400',
    scraping: 'from-amber-400 via-yellow-300 to-orange-400',
    automation: 'from-violet-400 via-purple-300 to-fuchsia-400',
    ai: 'from-blue-400 via-indigo-300 to-purple-400',
    blockchain: 'from-pink-400 via-rose-300 to-red-400'
};

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showProjects, setShowProjects] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);

    const iconMap = {
        Briefcase,
        Users,
        Award,
        TrendingUp
    };

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


    // Smooth auto-scroll using requestAnimationFrame
    useEffect(() => {
        if (!scrollRef.current || showProjects) return;

        const container = scrollRef.current;
        let animationFrameId;
        let lastTimestamp = null;
        const speed = 25; // px per second (adjust if needed)

        const step = (timestamp) => {
            if (isHovering || showProjects) {
                lastTimestamp = null;
                animationFrameId = requestAnimationFrame(step);
                return;
            }

            if (!lastTimestamp) lastTimestamp = timestamp;
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            container.scrollLeft += (speed * delta) / 1000;

            // Seamless reset (no jump)
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            }

            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, [showProjects, isHovering]);


    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        setShowProjects(true);
    };

    const handleBackToCategories = () => {
        setShowProjects(false);
        setTimeout(() => setSelectedCategory(null), 300);
    };

    const filteredProjects = selectedCategory 
        ? projects.filter(p => p.category === selectedCategory)
        : [];

    const selectedCategoryData = projectFilters.find(f => f.id === selectedCategory);

    // Compact Premium Category Card Component
    const CategoryCard = ({ category, index }) => {
        const Icon = categoryIcons[category.id];
        const gradient = categoryGradients[category.id];

        return (
            <div
                className="group relative cursor-pointer flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px]"
                onClick={() => handleCategoryClick(category.id)}
            >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                
                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                    backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/30
                    group-hover:border-slate-500/50 transition-all duration-700
                    shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20
                    overflow-hidden p-4 sm:p-5 md:p-6
                    group-hover:scale-105 transform-gpu h-full">
                    
                    {/* Premium shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
                    </div>

                    {/* Metallic background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} 
                        opacity-0 group-hover:opacity-[0.15] transition-all duration-700 mix-blend-overlay`} />
                    
                    {/* Compact Icon Container */}
                    <div className="relative mb-3 sm:mb-4">
                        <div className={`inline-flex p-2.5 sm:p-3 bg-gradient-to-br ${gradient} 
                            rounded-xl shadow-xl
                            group-hover:scale-110 group-hover:rotate-3 transition-all duration-700
                            relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 relative z-10 drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Compact Content */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 
                        tracking-tight leading-tight
                        group-hover:text-transparent group-hover:bg-clip-text 
                        group-hover:bg-gradient-to-r group-hover:from-slate-200 group-hover:via-white group-hover:to-slate-300
                        transition-all duration-500">
                        {category.label}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-slate-400 mb-3 sm:mb-4 
                        leading-relaxed font-light tracking-wide line-clamp-2">
                        {categoryDescriptions[category.id]}
                    </p>

                    {/* Compact Badge & Arrow */}
                    <div className="flex items-center justify-between">
                        <div className="relative">
                            <div className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${gradient} 
                                rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                                <span className="text-slate-900 font-bold text-[10px] sm:text-xs 
                                    tracking-wide drop-shadow">
                                    {category.count} Projects
                                </span>
                            </div>
                        </div>

                        <div className="relative p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg 
                            border border-slate-600/30 group-hover:border-slate-400/50
                            group-hover:bg-slate-700/80 transition-all duration-500
                            group-hover:scale-110">
                            <ArrowRight className="w-4 h-4 text-slate-300 
                                group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                </div>
            </div>
        );
    };

    // Compact Project Card Component
    const ProjectCard = ({ project, index }) => {
        return (
            <div
                className={`group relative opacity-0 translate-y-6`}
                style={{
                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transitionDelay: `${index * 80}ms`,
                    ...(showProjects && { opacity: 1, transform: "translateY(0)" })
                }}
            >
                {/* Card outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />

                <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 
                    backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/30
                    group-hover:border-slate-500/50 transition-all duration-700
                    shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20
                    overflow-hidden group-hover:scale-[1.03] transform-gpu">
                    
                    {/* Premium shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
                    </div>

                    {/* Image Container - Compact */}
                    <div className="relative overflow-hidden h-36 sm:h-44 md:h-48">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} 
                                opacity-0 group-hover:opacity-20 transition-all duration-700 mix-blend-overlay pointer-events-none`} />

                        
                        {project.highlight && (
                            <div className="absolute top-3 left-3 z-20">
                                <div className="relative px-2.5 py-1 sm:px-3 sm:py-1.5 
                                    bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
                                    rounded-full flex items-center space-x-1 sm:space-x-1.5 
                                    shadow-xl shadow-amber-500/50 group-hover:scale-105 transition-transform duration-300">
                                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-900 fill-slate-900" />
                                    <span className="text-slate-900 font-black text-[9px] sm:text-[10px] tracking-wide">
                                        FEATURED
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Compact Content */}
                    <div className="relative p-4 sm:p-5">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 
                            tracking-tight leading-tight line-clamp-1
                            group-hover:text-transparent group-hover:bg-clip-text 
                            group-hover:bg-gradient-to-r group-hover:from-slate-200 group-hover:via-white group-hover:to-slate-300
                            transition-all duration-500">
                            {project.title}
                        </h3>

                        <div className="flex items-center space-x-2 text-[9px] sm:text-[10px] 
                            text-slate-500 mb-2 sm:mb-3 font-light">
                            <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="tracking-wide">{project.year}</span>
                        </div>

                        <p className="text-[10px] sm:text-xs text-slate-400 mb-3 sm:mb-4 
                            leading-relaxed font-light tracking-wide line-clamp-2">
                            {project.description}
                        </p>

                        {/* Compact Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                            {project.tech.slice(0, 3).map((tech, i) => (
                                <span key={i} className="px-2 py-1 sm:px-2.5 sm:py-1 
                                    bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 
                                    rounded-md text-[9px] sm:text-[10px]
                                    text-slate-300 font-medium tracking-wide
                                    hover:border-slate-500/50 hover:bg-slate-700/80 transition-all duration-300">
                                    {tech}
                                </span>
                            ))}
                            {project.tech.length > 3 && (
                                <span className="px-2 py-1 sm:px-2.5 sm:py-1 
                                    bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 
                                    rounded-md text-[9px] sm:text-[10px]
                                    text-slate-500 font-medium">
                                    +{project.tech.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Compact Action Buttons */}
                        <div className="flex items-center justify-end pt-3 sm:pt-4 
                            border-t border-slate-700/30 space-x-2">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative p-2 sm:p-2.5 
                                    bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 
                                    hover:from-slate-500 hover:via-slate-400 hover:to-slate-500
                                    rounded-lg shadow-lg hover:shadow-xl
                                    transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent 
                                    translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white relative z-10 drop-shadow" />
                            </a>

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative p-2 sm:p-2.5 
                                    bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 
                                    hover:border-slate-500/50 hover:bg-slate-700/80
                                    rounded-lg transition-all duration-500 
                                    hover:scale-110 active:scale-95 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent 
                                    translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover/btn:text-white 
                                    relative z-10 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="projects" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-black">
            {/* Premium background gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                from-slate-800/20 via-black to-black" />
            
            {/* Animated orbs */}
            <div className="absolute top-1/4 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-500/10 rounded-full blur-3xl 
                animate-pulse" style={{animationDuration: '4s'}} />
            <div className="absolute bottom-1/3 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-400/10 rounded-full blur-3xl 
                animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Compact Premium Header */}
                <div className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative inline-block mb-4 sm:mb-6">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 
                            bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200
                            tracking-tight leading-none">
                            Featured Projects
                        </h3>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 
                            bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto px-4 
                        font-light tracking-wide leading-relaxed">
                        A curated collection showcasing expertise across diverse technologies
                    </p>
                </div>

                {/* Compact Premium Stats */}
                {/* <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 
                    mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-200 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {projectStats.map((stat, index) => {
                        const Icon = iconMap[stat.icon];
                        return (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                                
                                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                                    backdrop-blur-xl p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl 
                                    border border-slate-700/30 group-hover:border-slate-500/50
                                    shadow-xl shadow-black/50 group-hover:shadow-slate-500/20
                                    transition-all duration-700 group-hover:scale-105 transform-gpu">
                                    
                                    <div className={`inline-flex p-2 sm:p-2.5 bg-gradient-to-r ${stat.color} 
                                        rounded-xl mb-2 sm:mb-3 shadow-xl
                                        group-hover:scale-110 group-hover:rotate-3 transition-all duration-700`}>
                                        <Icon className="text-slate-900 w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" />
                                    </div>
                                    
                                    <div className="text-xl sm:text-2xl md:text-3xl font-black bg-clip-text text-transparent 
                                        bg-gradient-to-r from-slate-200 via-white to-slate-200 mb-1 tracking-tight">
                                        {stat.value}
                                    </div>
                                    
                                    <div className="text-[10px] sm:text-xs text-slate-400 font-light tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div> */}

                {/* Horizontal Scrolling Carousel for Categories */}
                {!showProjects && (
                    <div className="relative">
                        {/* Gradient fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                        
                        <div 
                            ref={scrollRef}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide py-4 px-2 
                                scroll-smooth"
                            style={{ 
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {/* Duplicate categories for infinite scroll effect */}
                            {[...projectFilters, ...projectFilters].map((category, index) => (
                                <CategoryCard key={`${category.id}-${index}`} category={category} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Projects View */}
                {showProjects && selectedCategory && (
                    <div className={`transition-all duration-500 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Compact Back Button */}
                        <div className="mb-6 sm:mb-8">
                            <button
                                onClick={handleBackToCategories}
                                className="group relative flex items-center space-x-2 
                                    px-4 py-2 sm:px-5 sm:py-3 
                                    bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                                    backdrop-blur-xl rounded-lg md:rounded-xl 
                                    border border-slate-700/30 hover:border-slate-500/50
                                    shadow-xl shadow-black/50 hover:shadow-slate-500/20
                                    transition-all duration-700 hover:scale-105 hover:-translate-x-2 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 
                                    group-hover:text-white group-hover:-translate-x-1 transition-all duration-300 relative z-10" />
                                <span className="text-white font-bold text-xs sm:text-sm md:text-base tracking-wide relative z-10">
                                    Back to Categories
                                </span>
                            </button>
                        </div>

                        {/* Compact Category Header */}
                        <div className="mb-8 sm:mb-10 text-center">
                            <div className="inline-flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                                {React.createElement(categoryIcons[selectedCategory], { 
                                    className: `w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-slate-400` 
                                })}
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent 
                                    bg-gradient-to-r from-slate-200 via-white to-slate-200 tracking-tight">
                                    {selectedCategoryData?.label}
                                </h3>
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm md:text-base px-4 max-w-2xl mx-auto 
                                font-light tracking-wide leading-relaxed">
                                {categoryDescriptions[selectedCategory]}
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default ProjectsSection;