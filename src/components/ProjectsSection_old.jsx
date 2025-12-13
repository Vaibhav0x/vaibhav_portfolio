// ProjectsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
    Briefcase,
    ExternalLink,
    Github,
    Eye,
    Star,
    Calendar,
    Users,
    TrendingUp,
    Award,
    Sparkles,
    Filter,
    Grid3x3,
    List
} from 'lucide-react';

// Import data
import { projects, projectFilters, projectStats } from '../data/projects';

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
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

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    // -----------------------------
    // PROJECT CARD (GRID VIEW)
    // -----------------------------
    const GridCard = ({ project, index }) => {
        return (
            <div
                className={`
                    group relative bg-gradient-to-br from-slate-800 to-slate-900
                    rounded-2xl border border-slate-700 
                    hover:border-purple-500 transition-all duration-300
                    hover:shadow-2xl hover:shadow-purple-500/20 
                    overflow-hidden hover:-translate-y-2
                    opacity-0 translate-y-6
                `}
                style={{
                    transition: "all 0.7s ease",
                    transitionDelay: `${index * 80}ms`,
                    ...(isVisible && { opacity: 1, transform: "translateY(0)" })
                }}
            >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-56">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {project.highlight && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r 
                                        from-yellow-500 to-orange-500 
                                        text-white text-xs font-bold 
                                        px-3 py-1 rounded-full flex items-center space-x-1">
                            <Sparkles size={14} />
                            <span>Featured</span>
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>

                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} 
                                    opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-primary transition-all duration-300">
                        {project.title}
                    </h3>

                    <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                        <span className="flex items-center space-x-1">
                            <Calendar size={14} /> <span>{project.year}</span>
                        </span>

                        {/* <span className="flex items-center space-x-1">
                            <Users size={14} /> <span>{project.team}</span>
                        </span> */}
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 8).map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-pink-400">
                                {tech}
                            </span>
                        ))}

                        {project.tech.length > 4 && (
                            <span className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-gray-400">
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            {/* <span className="flex items-center space-x-1">
                                <Eye size={14} /> <span>{project.stats.users}</span>
                            </span> */}

                            {/* <span className="flex items-center space-x-1">
                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                <span>{project.stats.rating}</span>
                            </span> */}
                        </div>

                        <div className="flex items-center space-x-2">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg 
                                           hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
                            >
                                <ExternalLink size={16} className="text-white" />
                            </a>

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-110"
                            >
                                <Github size={16} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // -----------------------------
    // PROJECT CARD (LIST VIEW)
    // -----------------------------
    const ListCard = ({ project, index }) => {
        return (
            <div
                className={`
                    group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl 
                    border border-slate-700 hover:border-purple-500 
                    transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 
                    overflow-hidden opacity-0 translate-y-6
                `}
                style={{
                    transition: "all 0.7s ease",
                    transitionDelay: `${index * 80}ms`,
                    ...(isVisible && { opacity: 1, transform: "translateY(0)" })
                }}
            >
                <div className="flex flex-col md:flex-row">
                    {/* IMAGE */}
                    <div className="md:w-2/5 relative overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {project.highlight && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r 
                                            from-yellow-500 to-orange-500 
                                            text-white text-xs font-bold 
                                            px-3 py-1 rounded-full flex items-center space-x-1">
                                <Sparkles size={14} />
                                <span>Featured</span>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="md:w-3/5 p-6 md:p-8">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-gradient-primary transition-all duration-300 mb-2">
                                    {project.title}
                                </h3>

                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                    <span className="flex items-center space-x-1">
                                        <Calendar size={14} /> <span>{project.year}</span>
                                    </span>

                                    <span className="flex items-center space-x-1">
                                        <Users size={14} /> <span>{project.team}</span>
                                    </span>
                                </div>
                            </div>

                            <span className={`
                                px-3 py-1 rounded-full text-xs font-semibold
                                ${project.status === 'Live'
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}
                            `}>
                                {project.status}
                            </span>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs text-pink-400">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span className="flex items-center space-x-1">
                                    <Eye size={14} /> <span>{project.stats.users}</span>
                                </span>

                                <span className="flex items-center space-x-1">
                                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                    <span>{project.stats.rating}</span>
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg 
                                               hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
                                >
                                    <ExternalLink size={18} className="text-white" />
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-110"
                                >
                                    <Github size={18} className="text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // ---------------------------------------------
    // MAIN COMPONENT RENDER
    // ---------------------------------------------
    return (
        <section id="projects" ref={sectionRef} className="relative py-20 overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 section-container">

                {/* HEADER */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center justify-center space-x-3 mb-4">
                        {/* <Briefcase className="text-purple-400" size={40} /> */}
                        <h2 className="text-5xl md:text-6xl font-bold text-gradient-primary">Featured Projects</h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A collection of projects I've worked on, showcasing my skills and expertise
                    </p>
                </div>

                {/* STATS */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {projectStats.map((stat, index) => {
                        const Icon = iconMap[stat.icon];
                        return (
                            <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                                <div className="text-3xl font-bold text-gradient-primary mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* FILTER ROW */}
                <div className={`flex flex-col md:flex-row justify-between items-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-wrap justify-center gap-3">
                        {projectFilters.map((filter) => (
                            <button key={filter.id} onClick={() => setActiveFilter(filter.id)}
                                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 
                                    ${activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white shadow-lg scale-105'
                                        : 'bg-slate-800 text-gray-400 border border-slate-700 hover:border-purple-500 hover:text-white'
                                    }`}>
                                <Filter size={16} />
                                <span>{filter.label}</span>
                                <span className="text-xs opacity-70">({filter.count})</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-2 bg-slate-800 p-1 rounded-xl border border-slate-700">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all duration-300 
                                ${viewMode === 'grid'
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                    : 'text-gray-400 hover:text-white'}`}
                        >
                            <Grid3x3 size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-all duration-300 
                                ${viewMode === 'list'
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                    : 'text-gray-400 hover:text-white'}`}
                        >
                            <List size={20} />
                        </button>
                    </div>
                </div>

                {/* PROJECT CARDS */}
                <div
                    className={`${viewMode === 'grid'
                        ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                        : 'space-y-8'
                        }`}
                >
                    {filteredProjects.map((project, index) =>
                        viewMode === 'grid'
                            ? <GridCard key={project.id} project={project} index={index} />
                            : <ListCard key={project.id} project={project} index={index} />
                    )}
                </div>

                {/* LOAD MORE */}
                <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full font-semibold text-white text-lg shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10">View All Projects</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
