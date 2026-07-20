import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="section-container min-h-screen flex items-center pt-20">
            <div className="w-full">
                <div className="max-w-4xl">

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                        Vinitha Pukazh Bagya R.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-2xl md:text-3xl text-slate-600 mb-8 font-light">
                        Software Engineer III | {new Date().getFullYear() - 2018}+ Years Experience
                    </p>

                    {/* Brief Introduction */}
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
                        Passionate about building scalable solutions and automating complex workflows.
                        Experienced in cloud infrastructure, full-stack development, and AI-driven automation.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-accent text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:scale-105"
                        >
                            Download Resume
                        </a>
                        <Link
                            to="/blog"
                            className="btn-ghost"
                        >
                            Read My Blog
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
