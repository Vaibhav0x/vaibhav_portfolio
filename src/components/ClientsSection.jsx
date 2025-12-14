import React, { useState, useEffect, useRef } from "react";
import {
  DollarSign,
  Calendar,
  CreditCard,
  User,
  CheckCircle,
  Pause,
  Play,
  Star,
  TrendingUp,
  Briefcase
} from "lucide-react";

import { clientPayments } from "../data/clientPayments";
// Sample data - replace with: import { clientPayments } from "../data/clientPayments";

const ClientSection = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  // Intersection Observer for visibility
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

  // Infinite Auto-scroll animation
  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame - adjust for speed

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when scrolled past first set of items
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Duplicate items for seamless infinite scroll
  const duplicatedPayments = [...clientPayments, ...clientPayments];

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden bg-black"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-black to-black" />
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
      <div className="absolute bottom-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <div
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              {/* <TrendingUp className="text-slate-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 tracking-tight">
                Client Success Stories
              </h3>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            Trusted partnerships and successful project deliveries with satisfied clients worldwide
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative -mx-4 sm:mx-0">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-hidden scrollbar-hide py-2"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPayments.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
              >
                <div className="group relative h-full">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                  
                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700 overflow-hidden group-hover:scale-[1.02]">
                    
                    {/* Compact Image Section */}
                    <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden">
                      <img
                        src={client.image}
                        alt={client.project}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-50" />
                          <div className="relative bg-gradient-to-r from-emerald-400 to-green-400 text-slate-900 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black flex items-center gap-1 border border-white/20">
                            <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="tracking-wide">{client.status}</span>
                          </div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {idx % clientPayments.length === 0 && (
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                          <div className="relative">
                            <div className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-50" />
                            <div className="relative bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black flex items-center gap-1 border border-white/20">
                              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-slate-900" />
                              <span className="tracking-wide">TOP</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Compact Content */}
                    <div className="p-3 sm:p-4">
                      {/* Client Header */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-3">
                        <div className={`${client.color} w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}>
                          {client.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-xs sm:text-sm truncate">
                            {client.name}
                          </h3>
                          <p className="text-slate-400 text-[10px] sm:text-xs truncate flex items-center gap-1">
                            <Briefcase className="w-3 h-3 flex-shrink-0" />
                            {client.project}
                          </p>
                        </div>
                      </div>

                      {/* Amount Display */}
                      <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 rounded-lg p-2.5 sm:p-3 border border-slate-700/30 overflow-hidden mb-3">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <p className="relative text-slate-400 text-[9px] sm:text-[10px] font-medium tracking-wide mb-0.5">
                          Payment Received
                        </p>
                        <p className="relative text-lg sm:text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300">
                          {client.amount}
                        </p>
                      </div>

                      {/* Compact Info Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <CompactInfo
                          icon={<DollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                          label="Budget"
                          value={client.budget}
                        />
                        <CompactInfo
                          icon={<Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                          label="Timeline"
                          value={client.timeline}
                        />
                        <CompactInfo
                          icon={<CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                          label="Method"
                          value={client.paymentMethod}
                        />
                        <CompactInfo
                          icon={<User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                          label="Date"
                          value={client.paymentDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>

        {/* Control Panel */}
        <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
          {/* Auto-play Status */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
            <span className="text-xs sm:text-sm text-slate-400 font-light tracking-wide">
              {isAutoPlaying ? 'Auto-scrolling' : 'Paused'}
            </span>
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className="group relative"
            aria-label={isAutoPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
          >
            <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/30 group-hover:border-slate-500/50 rounded-full p-2.5 sm:p-3 shadow-xl transition-all duration-500 group-hover:scale-110">
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white transition-colors duration-300 ml-0.5" />
              )}
            </div>
          </button>
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const CompactInfo = ({ icon, label, value }) => (
  <div className="group bg-slate-800/50 rounded-lg p-2 sm:p-2.5 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
    <div className="flex items-center gap-1.5 mb-1">
      <div className="bg-gradient-to-r from-slate-400 to-slate-300 p-1 rounded text-slate-900 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <p className="text-slate-400 text-[9px] sm:text-[10px] font-light tracking-wide">
        {label}
      </p>
    </div>
    <p className="text-white font-semibold text-[10px] sm:text-xs truncate pl-1">
      {value}
    </p>
  </div>
);

export default ClientSection;