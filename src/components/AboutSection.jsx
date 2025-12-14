// AboutSection.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Coffee,
  Lightbulb,
  Zap,
  Heart,
  TrendingUp,
  CheckCircle2,
  Star,
  Sparkles
} from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap }
  ];

  const aboutContent = {
    intro:
      "I'm a Software Engineer focused on building scalable, high-performance web applications using modern technologies.",
    passion:
      "I value clean architecture, maintainable code, and user-centric design. Outside work, I enjoy mentoring, writing technical blogs, and contributing to open source."
  };

  const highlights = [
    { icon: Code2, text: "Modern Web Technologies", color: "from-slate-400 to-slate-200" },
    { icon: Zap, text: "Performance Optimization", color: "from-emerald-400 to-teal-300" },
    { icon: TrendingUp, text: "Agile Development", color: "from-amber-400 to-yellow-300" },
    { icon: Heart, text: "Clean & Maintainable Code", color: "from-violet-400 to-purple-300" }
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
            tech: ['PHP', 'Python', 'Node.js', 'Azure', 'MySQL', 'Redis', 'FileZilla', 'Postman', 'Git', 'bitbucket', 'Cron Jobs', 'Automation Emails'],
            featured: true
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
      degree: "Master of Computer Applications (MCA)",
      institution: "GGSIPU University",
      period: "2022 – 2024",
      description:
        "Focused on software engineering, algorithms, and full-stack development.",
      featured: true
    }
  ];

  const stats = [
    { icon: Code2, value: "50+", label: "Projects", color: "from-slate-400 to-slate-200" },
    { icon: Award, value: "1.5+", label: "Years Exp", color: "from-emerald-400 to-teal-300" },
    { icon: Coffee, value: "50+", label: "Coffee", color: "from-amber-400 to-yellow-300" },
    { icon: Lightbulb, value: "20+", label: "Clients", color: "from-violet-400 to-purple-300" }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden bg-black"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-black to-black"></div>
      <div className="absolute top-1/4 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-1/4 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Premium Header */}
        <div
          className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              {/* <User className="text-slate-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" /> */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200 tracking-tight">
                About Me
              </h3>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            A quick overview of my skills, experience, and background
          </p>
        </div>

        {/* Premium Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
                  rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all duration-500 
                  overflow-hidden
                  ${
                    isActive
                      ? "bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 text-white shadow-2xl scale-105"
                      : "bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/30 text-slate-400 hover:border-slate-500/50 hover:text-white hover:scale-105"
                  }`}
              >
                {/* Shimmer effect */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                )}
                {/* <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 ${isActive ? '' : 'group-hover:rotate-12 transition-transform duration-300'}`} /> */}
                <span className="relative z-10 tracking-wide">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ABOUT TAB */}
        {activeTab === "about" && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">
              {/* Left: Content */}
              <div className="space-y-4 sm:space-y-5">
                {/* About Cards */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                  <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl p-5 sm:p-6 md:p-7 rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light tracking-wide mb-4">
                      {aboutContent.intro}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light tracking-wide">
                      {aboutContent.passion}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 sm:space-y-4">
                  {highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg rounded-xl" />
                        <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl p-3 sm:p-4 rounded-lg md:rounded-xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-500 group-hover:scale-[1.02] flex items-center gap-3 sm:gap-4">
                          <div className={`p-2 sm:p-2.5 bg-gradient-to-r ${item.color} rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                          </div>
                          <span className="text-xs sm:text-sm md:text-base text-slate-300 font-medium tracking-wide">{item.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-2xl" />
                      <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl p-5 sm:p-6 md:p-7 rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700 group-hover:scale-105 text-center">
                        <div className={`inline-flex p-2.5 sm:p-3 bg-gradient-to-r ${stat.color} rounded-xl mb-3 sm:mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-700`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-slate-200 mb-1 sm:mb-2 tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-light tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE TAB */}
        {activeTab === "experience" && (
          <div className={`space-y-5 sm:space-y-6 md:space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {experiences.map((exp, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-3xl" />
                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700 group-hover:scale-[1.01]">
                  
                  {/* Featured Badge */}
                  {exp.featured && (
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full flex items-center space-x-1.5 shadow-xl shadow-amber-500/50">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-900 fill-slate-900" />
                        <span className="text-slate-900 font-black text-[9px] sm:text-[10px] tracking-wide">CURRENT</span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-white to-slate-300 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 mb-3 sm:mb-4 font-light tracking-wide">
                    {exp.period}
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-4 sm:mb-5 leading-relaxed font-light tracking-wide">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {exp.achievements.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 text-slate-300 font-medium tracking-wide hover:border-slate-500/50 hover:bg-slate-700/80 transition-all duration-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EDUCATION TAB */}
        {activeTab === "education" && (
          <div className={`space-y-5 sm:space-y-6 md:space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {education.map((edu, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-3xl" />
                <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-700/30 group-hover:border-slate-500/50 shadow-2xl shadow-black/50 group-hover:shadow-slate-500/20 transition-all duration-700 group-hover:scale-[1.01]">
                  
                  {/* Featured Badge */}
                  {edu.featured && (
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                      <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 rounded-full flex items-center space-x-1.5 shadow-xl shadow-purple-500/50">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-900" />
                        <span className="text-slate-900 font-black text-[9px] sm:text-[10px] tracking-wide">FEATURED</span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-white to-slate-300 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 mb-3 sm:mb-4 font-light tracking-wide">
                    {edu.period}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-light tracking-wide">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;