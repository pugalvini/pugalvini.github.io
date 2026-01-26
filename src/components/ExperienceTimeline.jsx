import React from 'react';

const ExperienceTimeline = () => {
    const experiences = [
        {
            company: 'Guidewire',
            role: 'Software Engineer III',
            period: 'August 2024 - Present',
            location: 'India',
            achievements: [
                'Automating release workflows using AI agents, reducing manual intervention and improving deployment reliability',
                'Maintaining backend services supporting release engineering workflows, enhancing traceability and operational efficiency',
                'Improved CI/CD functionality by automating build steps, streamlining the deployment pipeline',
                'Tech Stack: Java, SpringBoot, TypeScript, AWS'
            ],
            current: true
        },
        {
            company: 'Thoughtworks',
            role: 'Senior Consultant (Application Developer)',
            period: 'February 2021 - August 2024',
            location: 'India',
            achievements: [
                'UBS Integration: Automated file transfers from GCS to Dropbox via SFTP achieving 100% automation; reduced API response time from 1 hour to under 20 minutes',
                'Workday Integration: Developed event-driven system to automatically update user details across applications, saving ~30 minutes per change',
                'Compensation Uploader: Spearheaded microservice-based system with asynchronous processing, increasing efficiency by 20%',
                'Data Platform: Automated verification of 3,000+ records between platforms, reducing manual effort by 75%',
                'Security: Led threat modeling sessions, improving security rating from level 0 to 1; resolved vulnerabilities in Docker images and GCP instances',
                'Infrastructure: Championed Terraform for automated provisioning and introduced Alembic for seamless database migrations',
                'Mentored 6+ junior developers through code reviews and knowledge transfer sessions'
            ],
            current: false
        },
        {
            company: 'Amphisoft Technologies',
            role: 'Product Engineer',
            period: 'June 2018 - January 2021',
            location: 'India',
            achievements: [
                'E-Box Platform: Developed backend framework for course purchases (PayU/PayPal)',
                'Engagement: Designed gamified programming challenges, increasing user engagement by 30%',
                'Visualization: Created dashboards using D3.js to monitor student performance and learning analytics',
                'Integrations: Integrated Google Maps for candidate tracking and Zoom for virtual collaboration'
            ],
            current: false
        }
    ];

    return (
        <section className="section-container">
            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-3 md:mb-4 px-4">
                    Professional Journey
                </h2>
                <p className="text-base md:text-lg text-slate-600 px-4">
                    7+ years of delivering impactful solutions across diverse domains
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-2 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                    {/* Experience Items */}
                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-20">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-6 top-2">
                                    <div className={`timeline-dot ${exp.current ? 'bg-green-500' : 'bg-accent'}`}></div>
                                </div>

                                {/* Content Card */}
                                <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 card-lift">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2 md:gap-0">
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-900">
                                                {exp.company}
                                            </h3>
                                            <p className="text-base md:text-lg text-accent font-medium">{exp.role}</p>
                                        </div>
                                        <div className="md:text-right">
                                            <p className="text-sm md:text-base text-slate-600 font-medium">{exp.period}</p>
                                            <p className="text-xs md:text-sm text-slate-500">{exp.location}</p>
                                            {exp.current && (
                                                <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mt-4">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="flex items-start gap-2 text-sm md:text-base text-slate-600">
                                                <span className="text-accent mt-1 flex-shrink-0">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
