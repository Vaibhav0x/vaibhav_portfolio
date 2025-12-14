import React, { useState, useEffect, useRef} from 'react';
import { Code2 } from 'lucide-react';

const CurvedSkillsCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
    { name: 'Next.js', icon: '▲', color: 'from-slate-700 to-slate-900' },
    // { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
    // { name: 'Vue.js', icon: '💚', color: 'from-green-500 to-emerald-600' },
    // { name: 'Redux', icon: '🔮', color: 'from-purple-600 to-violet-700' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-600 to-green-800' },
    { name: 'Express', icon: '⚡', color: 'from-gray-600 to-gray-800' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-blue-600' },
    { name: 'Django', icon: '🎯', color: 'from-green-700 to-emerald-900' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-indigo-800' },
    // { name: 'GraphQL', icon: '🔺', color: 'from-pink-600 to-rose-700' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-orange-700' },
    // { name: 'K8s', icon: '⚓', color: 'from-blue-600 to-indigo-700' },
    { name: 'CI/CD', icon: '🔄', color: 'from-purple-600 to-indigo-700' },
    // { name: 'Nginx', icon: '🌐', color: 'from-green-600 to-teal-700' },
    { name: 'Git', icon: '📦', color: 'from-orange-600 to-red-700' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-cyan-600' },
    // { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-600' },
    { name: 'Postman', icon: '📮', color: 'from-orange-500 to-orange-700' },
    // { name: 'Jest', icon: '🃏', color: 'from-red-600 to-pink-700' },
    // { name: 'Shopify', icon: '🛒', color: 'from-green-600 to-green-800' },
    // { name: 'WordPress', icon: '📝', color: 'from-blue-600 to-blue-800' },
    // { name: 'FlutterFlow', icon: '📱', color: 'from-purple-600 to-pink-700' },
    // { name: 'RN', icon: '📱', color: 'from-cyan-600 to-blue-700' },
    // { name: 'Flutter', icon: '🦋', color: 'from-blue-500 to-cyan-600' },
    // { name: 'Beeware', icon: '🐝', color: 'from-yellow-600 to-orange-700' },
    // { name: 'Kivy', icon: '🎮', color: 'from-pink-600 to-red-700' },
    // { name: 'Kotlin', icon: '🔷', color: 'from-purple-500 to-indigo-600' }
  ];
  const sectionRef = useRef(null);
  
  // Triple the skills for seamless infinite scroll
  const tripleSkills = [...skills, ...skills, ...skills];
  // Intersection Observer
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

  return (
    <section id="skills" ref={sectionRef} className="relative py-8 sm:py-10 md:py-14 lg:py-16 overflow-hidden bg-black">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-black to-black"></div>
      <div className="absolute top-1/4 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-1/4 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-slate-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Compact Section Header */}
        <div
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              {/* <User className="text-slate-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200 tracking-tight">
                Skills & Expertise
              </h3>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Premium Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden py-4 sm:py-5 md:py-6">
            <div className="flex gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 animate-scroll-smooth">
              {tripleSkills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="group relative flex-shrink-0 
                    w-16 h-16 
                    xs:w-18 xs:h-18
                    sm:w-20 sm:h-20 
                    md:w-24 md:h-24 
                    lg:w-28 lg:h-28"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg rounded-xl" />
                  
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                    backdrop-blur-xl rounded-lg md:rounded-xl border border-slate-700/30 
                    group-hover:border-slate-500/50 transition-all duration-500
                    shadow-xl shadow-black/50 group-hover:shadow-slate-500/20
                    overflow-hidden p-2 sm:p-2.5 md:p-3 
                    flex flex-col items-center justify-center
                    group-hover:scale-110 transform-gpu">
                    
                    {/* Premium shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
                    </div>

                    {/* Skill Icon with gradient background */}
                    <div className={`relative text-base sm:text-lg md:text-2xl lg:text-3xl mb-1 
                      bg-gradient-to-r ${skill.color} 
                      w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
                      rounded-md md:rounded-lg 
                      flex items-center justify-center 
                      group-hover:scale-110 transition-transform duration-500 
                      shadow-lg`}>
                      {skill.icon}
                    </div>
                    
                    {/* Skill Name - Compact */}
                    <h3 className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs 
                      font-bold text-white text-center 
                      group-hover:text-transparent group-hover:bg-gradient-to-r 
                      group-hover:from-slate-200 group-hover:via-white group-hover:to-slate-300
                      group-hover:bg-clip-text transition-all duration-300 
                      px-0.5 leading-tight tracking-wide">
                      {skill.name}
                    </h3>

                    {/* Metallic overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} 
                      opacity-0 group-hover:opacity-10 rounded-lg md:rounded-xl 
                      transition-opacity duration-500 mix-blend-overlay`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Info Text */}
        <div className={`text-center mt-4 sm:mt-5 md:mt-6 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-light tracking-wide">
            • Auto-scrolling
          </p>
        </div>

        {/* Compact Stats Section */}
        {/* <div className={`grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '31', label: 'Tech', color: 'from-slate-400 to-slate-200' },
            { value: '90%', label: 'Proficiency', color: 'from-emerald-400 to-teal-300' },
            { value: '50+', label: 'Projects', color: 'from-amber-400 to-yellow-300' },
            { value: '10+', label: 'Certs', color: 'from-violet-400 to-purple-300' }
          ].map((stat, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg rounded-xl" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                backdrop-blur-xl p-2.5 sm:p-3 md:p-4 lg:p-5 
                rounded-lg md:rounded-xl border border-slate-700/30 
                group-hover:border-slate-500/50 transition-all duration-500 
                shadow-xl shadow-black/50 group-hover:shadow-slate-500/20
                group-hover:scale-105 transform-gpu text-center">
                
                <div className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black 
                  bg-gradient-to-r ${stat.color} bg-clip-text text-transparent 
                  mb-0.5 sm:mb-1 tracking-tight`}>
                  {stat.value}
                </div>
                
                <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs 
                  text-slate-400 font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes scrollSmooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll-smooth {
          animation: scrollSmooth 60s linear infinite;
        }
        
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
        
        /* Pause animation when hovering any skill card */
        .group:hover ~ div .animate-scroll-smooth {
          animation-play-state: paused;
        }

        /* Mobile: Show 4 cards horizontally */
        @media (max-width: 640px) {
          .animate-scroll-smooth {
            animation-duration: 40s;
          }
        }

        /* Tablet: Faster scroll */
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-scroll-smooth {
            animation-duration: 50s;
          }
        }

        /* Desktop: Normal speed */
        @media (min-width: 1025px) {
          .animate-scroll-smooth {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
};

export default CurvedSkillsCarousel;