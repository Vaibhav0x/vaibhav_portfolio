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
  CheckCircle2
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
      "I’m a Software Engineer focused on building scalable, high-performance web applications using modern technologies.",
    passion:
      "I value clean architecture, maintainable code, and user-centric design. Outside work, I enjoy mentoring, writing technical blogs, and contributing to open source."
  };

  const highlights = [
    { icon: Code2, text: "Modern Web Technologies", color: "text-purple-400" },
    { icon: Zap, text: "Performance Optimization", color: "text-pink-400" },
    { icon: TrendingUp, text: "Agile Development", color: "text-orange-400" },
    { icon: Heart, text: "Clean & Maintainable Code", color: "text-red-400" }
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "GoSharpener Pvt Ltd",
      period: "Apr 2025 – Present",
      description:
        "Working on scalable enterprise applications, optimizing performance, and mentoring junior developers.",
      achievements: [
        "Improved application performance by 60%",
        "Implemented CI/CD pipelines",
        "Designed scalable backend systems"
      ],
      tech: ["Python", "Node.js", "PHP", "MySQL", "Docker", "Git"]
    },
    {
      title: "Solution Developer",
      company: "iTech Mission Pvt Ltd",
      period: "2024 – 2025",
      description:
        "Built multiple production-ready applications using React and Node.js.",
      achievements: [
        "Delivered 15+ client projects",
        "Improved test coverage to 85%",
        "Introduced TypeScript"
      ],
      tech: ["React", "Node.js", "Django", "PostgreSQL", "Docker"]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "GGSIPU University",
      period: "2022 – 2024",
      description:
        "Focused on software engineering, algorithms, and full-stack development."
    }
  ];

  const stats = [
    { icon: Code2, value: "50+", label: "Projects" },
    { icon: Award, value: "1.5+", label: "Years Exp" },
    { icon: Coffee, value: "100+", label: "Coffee" },
    { icon: Lightbulb, value: "30+", label: "Clients" }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-14 sm:py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex justify-center items-center gap-3 mb-2">
            <User size={26} className="text-purple-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary">
              About Me
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            A quick overview of my skills, experience, and background
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition
                  ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white shadow-md"
                      : "bg-slate-800 border border-slate-700 text-gray-400 hover:text-white hover:border-purple-500"
                  }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ABOUT */}
        {activeTab === "about" && (
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-sm sm:text-base text-gray-300">
              <p>{aboutContent.intro}</p>
              <p>{aboutContent.passion}</p>

              <div className="space-y-2 mt-4">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon size={18} className={item.color} />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center"
                  >
                    <Icon size={20} className="text-purple-400 mx-auto mb-1" />
                    <div className="text-xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-purple-400">{exp.company}</p>
                <p className="text-xs text-gray-400 mb-3">{exp.period}</p>

                <p className="text-sm text-gray-300 mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((a, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 size={14} className="text-green-400 mt-1" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-slate-900 border border-slate-700 text-purple-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EDUCATION */}
        {activeTab === "education" && (
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-xl p-4 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-purple-400">{edu.institution}</p>
                <p className="text-xs text-gray-400 mb-3">{edu.period}</p>
                <p className="text-sm text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
