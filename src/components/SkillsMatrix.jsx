import React from 'react';

const SkillsMatrix = () => {
    const skillCategories = [
        {
            title: 'Backend & Languages',
            icon: '⚙️',
            skills: ['Python', 'NodeJS', 'Java', 'Groovy', 'Flask', 'Express', 'SpringBoot', 'Grails'],
            color: 'from-blue-50 to-indigo-50'
        },
        {
            title: 'Cloud & Infrastructure',
            icon: '☁️',
            skills: ['GCP', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'TeamCity', 'CircleCI', 'Jenkins'],
            color: 'from-purple-50 to-pink-50'
        },
        {
            title: 'Frontend & Data',
            icon: '🎨',
            skills: ['React', 'JavaScript', 'TypeScript', 'D3.js', 'HTML/CSS', 'PostgreSQL', 'MySQL'],
            color: 'from-green-50 to-teal-50'
        }
    ];

    return (
        <section className="section-container bg-secondary-bg">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                    Technical Expertise
                </h2>
                <p className="text-lg text-slate-600">
                    A comprehensive skill set spanning backend, cloud, and frontend technologies
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl border border-slate-200 card-lift`}
                    >
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-xl font-serif font-semibold text-slate-900 mb-6">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-pill">
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
