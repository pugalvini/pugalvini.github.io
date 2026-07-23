import React, { useEffect, useRef, useState } from 'react';

// Clean SVG icons matching the site's accent color
const BackendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3m-13.5 0V9.75m13.5 4.5V9.75m0 0a3 3 0 0 0-3-3H8.25a3 3 0 0 0-3 3m13.5 0h1.5a1.5 1.5 0 0 1 0 3H3.75a1.5 1.5 0 0 1 0-3H5.25" />
    </svg>
);

const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
);

const FrontendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5 3 12l3.75 4.5m10.5 0L21 12l-3.75-4.5m-6.75 9 3-13.5" />
    </svg>
);

const SkillsMatrix = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            title: 'Backend & Languages',
            Icon: BackendIcon,
            primarySkills: ['Python', 'Java', 'NodeJS'],
            skills: ['Groovy', 'Flask', 'Express', 'SpringBoot', 'Grails'],
        },
        {
            title: 'Cloud & Infrastructure',
            Icon: CloudIcon,
            primarySkills: ['GCP', 'AWS', 'Docker'],
            skills: ['Terraform', 'Kubernetes', 'TeamCity', 'CircleCI', 'Jenkins'],
        },
        {
            title: 'Frontend & Data',
            Icon: FrontendIcon,
            primarySkills: ['React', 'TypeScript', 'PostgreSQL'],
            skills: ['JavaScript', 'D3.js', 'HTML/CSS', 'MySQL'],
        }
    ];

    return (
        <section id="skills" ref={sectionRef} className="section-container bg-white">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-3">
                    Technical Expertise
                </h2>
                {/* Accent underline bar — matches site typographic polish */}
                <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
                <p className="text-lg text-slate-600">
                    A comprehensive skill set spanning backend, cloud, and frontend technologies
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white border border-slate-200 border-t-4 border-t-accent rounded-2xl p-8 card-lift"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(24px)',
                            transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
                        }}
                    >
                        {/* Icon + Title row */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <category.Icon />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-slate-900 leading-tight">
                                {category.title}
                            </h3>
                        </div>

                        {/* Skill count badge */}
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-5">
                            {category.primarySkills.length + category.skills.length} skills
                        </p>

                        {/* Primary skills — accent-highlighted */}
                        <div className="flex flex-wrap gap-2 mb-2">
                            {category.primarySkills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-accent text-white rounded-full text-xs font-semibold"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Secondary skills — standard pill */}
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-pill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsMatrix;
