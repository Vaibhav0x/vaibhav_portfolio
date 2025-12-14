import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Sparkles,
  Rocket,
  MapPin,
  ArrowRight,
  Code2,
  Zap
} from "lucide-react";

const HeroSection = ({ scrollTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Vaibhav0x", 
      label: "GitHub",
      color: "from-slate-400 to-slate-200"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/vaibhav-raj-0x/", 
      label: "LinkedIn",
      color: "from-blue-400 to-blue-300"
    },
    { 
      icon: Mail, 
      href: "mailto:your.rajjvaibhavv121@gmail.com", 
      label: "Email",
      color: "from-violet-400 to-purple-300"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 px-4 overflow-hidden bg-black"
    >
      {/* Premium Background with Parallax */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-black to-black" />
      
      {/* Animated Orbs with Parallax */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse"
        style={{
          animationDuration: '4s',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
        style={{
          animationDuration: '5s',
          animationDelay: '1s',
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{
          animationDuration: '6s',
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          {/* Avatar with Premium Effect */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div 
              className={`relative group transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" 
                style={{animationDuration: '3s'}}
              />
              
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 animate-spin" 
                style={{animationDuration: '3s'}}
              />
              
              {/* Avatar Container */}
              <div className="relative rounded-full overflow-hidden border-4 border-black shadow-2xl
                w-28 h-28
                sm:w-36 sm:h-36
                md:w-44 md:h-44
                lg:w-52 lg:h-52
                m-1
                group-hover:scale-105 transition-transform duration-700"
              >
                <img
                  src="/hero.png"
                  alt="Vaibhav Raj"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6 rounded-full
              bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
              backdrop-blur-xl border border-slate-700/30 shadow-xl
              transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
              New Delhi, India
            </span>
          </div>

          {/* Name with Premium Gradient */}
          <h3 
            className={`font-black mb-3 sm:mb-4 tracking-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 opacity-50" />
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200">
                Vaibhav Raj
              </span>
            </span>
          </h3>

          {/* Role with Icon */}
          <div 
            className={`flex items-center justify-center gap-3 mb-4 sm:mb-6
              transition-all duration-700 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                Software Engineer
              </span>
            </h3>
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
          </div>

          {/* Description */}
          <p 
            className={`mx-auto max-w-2xl mb-8 sm:mb-10
              text-sm
              sm:text-base
              md:text-lg
              text-slate-400 leading-relaxed font-light tracking-wide
              transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            I build scalable, high-performance web applications using modern
            technologies with a strong focus on clean architecture and exceptional user experiences.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 sm:mb-12
              transition-all duration-700 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold
                bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600
                text-white shadow-2xl shadow-purple-500/50 
                hover:shadow-purple-500/70 hover:scale-105 
                transition-all duration-500 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <a href="#projects" className="group">
                <span className="relative flex items-center gap-2 justify-center tracking-wide">
                  View My Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold
                bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
                backdrop-blur-xl border border-slate-700/30
                text-white hover:border-violet-500/50
                hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <a href="#contact" className="group">
                <span className="relative tracking-wide">Let's Connect</span>
              </a>
              
            </button>

            <a
              href="/Software_Engineer_Vaibhav_Resume.pdf"
              download
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold
                bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
                backdrop-blur-xl border border-slate-700/30
                text-white hover:border-emerald-500/50
                hover:scale-105 transition-all duration-500
                flex items-center gap-2 justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Download className="relative w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
              <span className="relative tracking-wide">Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          {/* <div 
            className={`flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12
              transition-all duration-700 delay-900 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg rounded-xl" />
                  <div className="relative p-3 sm:p-4 rounded-xl
                    bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
                    backdrop-blur-xl border border-slate-700/30
                    group-hover:border-slate-500/50
                    shadow-xl shadow-black/50
                    group-hover:scale-110 group-hover:rotate-3
                    transition-all duration-500"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              );
            })}
          </div> */}

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollTo("about")}
            className={`group inline-flex flex-col items-center gap-2
              text-slate-500 hover:text-violet-400 transition-all duration-500
              transition-all duration-700 delay-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            aria-label="Scroll to about section"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide">Scroll to explore</span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce" />
              <div className="absolute inset-0 blur-sm">
                <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 opacity-50" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;