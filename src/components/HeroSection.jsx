// HeroSection.jsx
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Sparkles,
  Rocket,
  MapPin
} from "lucide-react";

const HeroSection = ({ scrollTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden"
    >
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 blur-lg opacity-50 group-hover:opacity-80 transition" />

              <div className="relative rounded-full overflow-hidden border-4 border-slate-900 shadow-xl
                w-24 h-24
                sm:w-28 sm:h-28
                md:w-36 md:h-36
                lg:w-44 lg:h-44"
              >
                <img
                  src="/hero.png"
                  alt="Vaibhav Raj"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Availability */}
              <div className="absolute -bottom-2 right-1 bg-emerald-500 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full border border-slate-900 shadow">
                Available
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-xs sm:text-sm
            bg-white/5 border border-white/10 backdrop-blur">
            <MapPin size={14} className="text-pink-400" />
            <span className="text-gray-300">New Delhi, India</span>
          </div>

          {/* Name */}
          <h1 className="font-bold mb-2
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Vaibhav Raj
            </span>
          </h1>

          {/* Role */}
          <h2 className="font-medium mb-4
            text-lg
            sm:text-xl
            md:text-2xl
            text-purple-300">
            Software Engineer
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl mb-8
            text-sm
            sm:text-base
            md:text-lg
            text-gray-400 leading-relaxed">
            I build scalable, high-performance web applications using modern
            technologies with a strong focus on clean architecture and UX.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-full text-sm sm:text-base font-semibold
                bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600
                text-white shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition">
              <span className="flex items-center gap-2 justify-center">
                <Rocket size={18} /> View Work
              </span>
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-full text-sm sm:text-base font-semibold
                border border-purple-500 text-white
                hover:bg-purple-500/10 hover:scale-105 transition">
              Contact Me
            </button>

            <a
              href="/your-resume.pdf"
              download
              className="px-6 py-3 rounded-full text-sm sm:text-base font-semibold
                bg-slate-800 border border-slate-700 text-white
                hover:border-purple-500 hover:bg-slate-700 transition flex items-center gap-2 justify-center">
              <Download size={18} /> CV
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollTo("about")}
            className="text-gray-400 hover:text-purple-400 transition animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
