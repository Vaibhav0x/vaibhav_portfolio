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
    Globe,
    Smartphone,
    Bot,
    Cpu,
    Layers,
    Search,
    ArrowRight,
    ArrowLeft,
    Star,
    ChevronLeft,
    ChevronRight
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
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
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
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);


    // Enable smooth scrolling and track scroll position
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Set smooth scroll behavior
        container.style.scrollBehavior = 'smooth';

        // Check initial scroll state
        const checkScroll = () => {
            if (!container) return;
            
            try {
                const hasScrollLeft = container.scrollLeft > 0;
                const hasScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth - 10;
                
                setCanScrollLeft(hasScrollLeft);
                setCanScrollRight(hasScrollRight);
            } catch (error) {
                console.error('Scroll check error:', error);
            }
        };

        // Initial check
        checkScroll();

        // Add scroll listener with passive flag for better performance
        container.addEventListener('scroll', checkScroll, { passive: true });

        // Also check on resize
        window.addEventListener('resize', checkScroll, { passive: true });

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
                container.style.scrollBehavior = 'auto';
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, []);


    // Handle scroll left
    const handleScrollLeft = () => {
        if (!scrollRef.current) return;
        
        try {
            scrollRef.current.scrollLeft -= 340;
        } catch (error) {
            console.error('Scroll left error:', error);
        }
    };

    // Handle scroll right
    const handleScrollRight = () => {
        if (!scrollRef.current) return;
        
        try {
            scrollRef.current.scrollLeft += 340;
        } catch (error) {
            console.error('Scroll right error:', error);
        }
    };

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
                style={{ contain: 'layout style paint' }}
            >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" />
                
                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                    backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/30
                    group-hover:border-slate-500/50 transition-all duration-300
                    shadow-lg shadow-black/50 group-hover:shadow-slate-500/10
                    overflow-hidden p-4 sm:p-5 md:p-6
                    group-hover:scale-105 transform-gpu h-full">
                    
                    {/* Premium shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-300" />
                    </div>

                    {/* Metallic background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} 
                        opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-overlay`} />
                    
                    {/* Compact Icon Container */}
                    <div className="relative mb-3 sm:mb-4">
                        <div className={`inline-flex p-2.5 sm:p-3 bg-gradient-to-br ${gradient} 
                            rounded-xl shadow-lg
                            group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                            will-change-transform`}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Compact Content */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 
                        tracking-tight leading-tight
                        group-hover:text-transparent group-hover:bg-clip-text 
                        group-hover:bg-gradient-to-r group-hover:from-slate-200 group-hover:via-white group-hover:to-slate-300
                        transition-all duration-300">
                        {category.label}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-slate-400 mb-3 sm:mb-4 
                        leading-relaxed font-light tracking-wide line-clamp-2">
                        {categoryDescriptions[category.id]}
                    </p>

                    {/* Compact Badge & Arrow */}
                    <div className="flex items-center justify-between">
                        <div className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${gradient} 
                            rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                            <span className="text-slate-900 font-bold text-[10px] sm:text-xs 
                                tracking-wide drop-shadow">
                                {category.count} Projects
                            </span>
                        </div>

                        <div className="relative p-2 bg-slate-800/80 backdrop-blur-sm rounded-lg 
                            border border-slate-600/30 group-hover:border-slate-400/50
                            group-hover:bg-slate-700/80 transition-all duration-300
                            group-hover:scale-110 will-change-transform">
                            <ArrowRight className="w-4 h-4 text-slate-300 
                                group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
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
                    animation: showProjects ? `slideInUp 0.5s ease-out ${index * 40}ms forwards` : 'none',
                    contain: 'layout style paint'
                }}
            >
                {/* Card outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" />

                <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 
                    backdrop-blur-xl rounded-xl md:rounded-2xl border border-slate-700/30
                    group-hover:border-slate-500/50 transition-all duration-300
                    shadow-lg shadow-black/50 group-hover:shadow-slate-500/10
                    overflow-hidden group-hover:scale-[1.03] transform-gpu">
                    
                    {/* Premium shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-300" />
                    </div>

                    {/* Image Container - Compact */}
                    <div className="relative overflow-hidden h-36 sm:h-44 md:h-48 bg-slate-800/50">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} 
                            opacity-0 group-hover:opacity-15 transition-opacity duration-300 mix-blend-overlay`} />

                        {project.highlight && (
                            <div className="absolute top-3 left-3 z-20">
                                <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 
                                    bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 
                                    rounded-full flex items-center space-x-1 sm:space-x-1.5 
                                    shadow-lg shadow-amber-500/40 group-hover:scale-105 transition-transform duration-300
                                    will-change-transform">
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
                            transition-all duration-300">
                            {project.title}
                        </h3>

                        <div className="flex items-center space-x-2 text-[9px] sm:text-[10px] 
                            text-slate-500 mb-2 sm:mb-3 font-light">
                            <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
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
                                    rounded-lg shadow-md hover:shadow-lg
                                    transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden
                                    will-change-transform"
                            >
                                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white drop-shadow" />
                            </a>

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative p-2 sm:p-2.5 
                                    bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 
                                    hover:border-slate-500/50 hover:bg-slate-700/80
                                    rounded-lg transition-all duration-300 
                                    hover:scale-110 active:scale-95 overflow-hidden
                                    will-change-transform"
                            >
                                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover/btn:text-white 
                                    transition-colors duration-300" />
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
                <div className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-500 
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
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 
                    mb-8 sm:mb-10 md:mb-12 transition-all duration-500 delay-100 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {projectStats.map((stat, index) => {
                        const Icon = iconMap[stat.icon];
                        return (
                            <div key={index} className="group relative" style={{ contain: 'layout style paint' }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl" />
                                
                                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                                    backdrop-blur-xl p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl 
                                    border border-slate-700/30 group-hover:border-slate-500/50
                                    shadow-lg shadow-black/50 group-hover:shadow-slate-500/10
                                    transition-all duration-300 group-hover:scale-105 transform-gpu">
                                    
                                    <div className={`inline-flex p-2 sm:p-2.5 bg-gradient-to-r ${stat.color} 
                                        rounded-xl mb-2 sm:mb-3 shadow-md
                                        group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                                        will-change-transform`}>
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
                </div>

                {/* Horizontal Scrolling Carousel for Categories */}
                {!showProjects && (
                    <div className="relative group">
                        {/* Gradient fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                        
                        {/* Left Arrow Button */}
                        <button
                            onClick={handleScrollLeft}
                            disabled={!canScrollLeft}
                            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-lg
                                transition-all duration-300 transform-gpu
                                ${canScrollLeft 
                                    ? 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 shadow-lg hover:shadow-xl cursor-pointer opacity-100' 
                                    : 'bg-slate-800/30 text-slate-600 cursor-not-allowed opacity-40'
                                }
                                group-hover:opacity-100 hover:scale-110 active:scale-95 will-change-transform
                                border border-slate-500/20 hover:border-slate-400/50`}
                            aria-label="Scroll left"
                            type="button"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow" />
                        </button>

                        {/* Right Arrow Button */}
                        <button
                            onClick={handleScrollRight}
                            disabled={!canScrollRight}
                            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-lg
                                transition-all duration-300 transform-gpu
                                ${canScrollRight 
                                    ? 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 shadow-lg hover:shadow-xl cursor-pointer opacity-100' 
                                    : 'bg-slate-800/30 text-slate-600 cursor-not-allowed opacity-40'
                                }
                                group-hover:opacity-100 hover:scale-110 active:scale-95 will-change-transform
                                border border-slate-500/20 hover:border-slate-400/50`}
                            aria-label="Scroll right"
                            type="button"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow" />
                        </button>
                        
                        <div 
                            ref={scrollRef}
                            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide py-4 px-2 
                                scroll-smooth snap-x snap-mandatory"
                            style={{ 
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {/* Categories - single set only (no duplication needed) */}
                            {projectFilters && projectFilters.map((category, index) => (
                                <CategoryCard key={`${category.id}-${index}`} category={category} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Projects View */}
                {showProjects && selectedCategory && (
                    <div className={`transition-all duration-300 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Compact Back Button */}
                        <div className="mb-6 sm:mb-8">
                            <button
                                onClick={handleBackToCategories}
                                className="group relative flex items-center space-x-2 
                                    px-4 py-2 sm:px-5 sm:py-3 
                                    bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                                    backdrop-blur-xl rounded-lg md:rounded-xl 
                                    border border-slate-700/30 hover:border-slate-500/50
                                    shadow-lg shadow-black/50 hover:shadow-slate-500/10
                                    transition-all duration-300 hover:scale-105 hover:-translate-x-2 overflow-hidden
                                    will-change-transform"
                            >
                                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 
                                    group-hover:text-white group-hover:-translate-x-1 transition-all duration-300" />
                                <span className="text-white font-bold text-xs sm:text-sm md:text-base tracking-wide">
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

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProjectsSection;