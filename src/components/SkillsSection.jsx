import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const CurvedSkillsCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
    { name: 'Next.js', icon: '▲', color: 'from-slate-700 to-slate-900' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
    { name: 'Vue.js', icon: '💚', color: 'from-green-500 to-emerald-600' },
    { name: 'Redux', icon: '🔮', color: 'from-purple-600 to-violet-700' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-800' },
    { name: 'Express', icon: '⚡', color: 'from-gray-600 to-gray-800' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-blue-600' },
    { name: 'Django', icon: '🎯', color: 'from-green-700 to-emerald-900' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-indigo-800' },
    { name: 'GraphQL', icon: '🔺', color: 'from-pink-600 to-rose-700' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-orange-700' },
    { name: 'Kubernetes', icon: '⚓', color: 'from-blue-600 to-indigo-700' },
    { name: 'CI/CD', icon: '🔄', color: 'from-purple-600 to-indigo-700' },
    { name: 'Nginx', icon: '🌐', color: 'from-green-600 to-teal-700' },
    { name: 'Git', icon: '📦', color: 'from-orange-600 to-red-700' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-cyan-600' },
    { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-600' },
    { name: 'Postman', icon: '📮', color: 'from-orange-500 to-orange-700' },
    { name: 'Jest', icon: '🃏', color: 'from-red-600 to-pink-700' },
    { name: 'Shopify', icon: '🛒', color: 'from-green-600 to-green-800' },
    { name: 'WordPress', icon: '📝', color: 'from-blue-600 to-blue-800' },
    { name: 'FlutterFlow', icon: '📱', color: 'from-purple-600 to-pink-700' },
    { name: 'React Native', icon: '📱', color: 'from-cyan-600 to-blue-700' },
    { name: 'Flutter', icon: '🦋', color: 'from-blue-500 to-cyan-600' },
    { name: 'Beeware', icon: '🐝', color: 'from-yellow-600 to-orange-700' },
    { name: 'Kivy', icon: '🎮', color: 'from-pink-600 to-red-700' },
    { name: 'Kotlin', icon: '🔷', color: 'from-purple-500 to-indigo-600' }
  ];

  // Triple the skills for seamless infinite scroll
  const tripleSkills = [...skills, ...skills, ...skills];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-12 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center space-x-2 md:space-x-3 mb-3 md:mb-4">
            <Code2 className="text-purple-400" size={32} />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* 360° Curved Carousel */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Perspective Container */}
          <div className="perspective-container">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-48 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Container with Perspective */}
            <div className="overflow-x-auto scrollbar-hide py-8 md:py-12 scroll-container" style={{ perspective: '1200px' }}>
              <div className="flex gap-4 md:gap-6 lg:gap-8 animate-scroll-360 preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
                {tripleSkills.map((skill, index) => {
                  // Calculate position for 3D effect
                  const position = index % skills.length;
                  const angle = (position / skills.length) * 360;
                  const scale = 0.85 + Math.abs(Math.cos((angle * Math.PI) / 180)) * 0.15;
                  const opacity = 0.4 + Math.abs(Math.cos((angle * Math.PI) / 180)) * 0.6;
                  const translateZ = Math.sin((angle * Math.PI) / 180) * 50;
                  
                  return (
                    <div
                      key={`skill-${index}`}
                      className="group relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 skill-card"
                      style={{
                        transform: `scale(${scale}) translateZ(${translateZ}px)`,
                        opacity: opacity,
                        transition: 'transform 0.3s ease, opacity 0.3s ease'
                      }}
                    >
                      <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl md:rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-110 overflow-hidden p-3 md:p-4 flex flex-col items-center justify-center">
                        {/* Skill Icon */}
                        <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 md:mb-2 bg-gradient-to-r ${skill.color} w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {skill.icon}
                        </div>
                        
                        {/* Skill Name */}
                        <h3 className="text-xs sm:text-xs md:text-sm lg:text-base font-bold text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300 px-1">
                          {skill.name}
                        </h3>

                        {/* Hover Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl md:rounded-2xl transition-opacity duration-300`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Info Text */}
        <div className={`text-center mt-6 md:mt-8 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs md:text-sm text-gray-500">
            Hover or scroll to interact • Continuous 360° carousel
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-12 md:mt-16 px-4 md:px-8 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '31', label: 'Technologies', color: 'from-purple-500 to-pink-500' },
            { value: '90%', label: 'Avg Proficiency', color: 'from-pink-500 to-orange-500' },
            { value: '100+', label: 'Projects', color: 'from-orange-500 to-yellow-500' },
            { value: '10+', label: 'Certifications', color: 'from-yellow-500 to-green-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 text-center">
              <div className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 md:mb-2`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective-container {
          position: relative;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes scroll360 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll-360 {
          animation: scroll360 90s linear infinite;
        }
        .scroll-container:hover .animate-scroll-360,
        .skill-card:hover ~ .animate-scroll-360 {
          animation-play-state: paused;
        }
        .skill-card:hover {
          transform: scale(1.1) translateZ(100px) !important;
          opacity: 1 !important;
          z-index: 20;
        }
      `}</style>
    </section>
  );
};

export default CurvedSkillsCarousel;