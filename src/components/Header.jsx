import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Check if we're on a blog post page
    const isBlogPostPage = location.pathname.startsWith('/blog/');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-xl font-serif font-semibold text-slate-900 hover:text-accent transition-colors"
                    >
                        VPB
                    </button>

                    <div className="flex items-center gap-8">
                        {!isBlogPostPage && (
                            <>
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="text-slate-700 hover:text-accent transition-colors font-medium"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection('blog')}
                                    className="text-slate-700 hover:text-accent transition-colors font-medium"
                                >
                                    Blog
                                </button>
                                <a
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-700 hover:text-accent transition-colors font-medium"
                                >
                                    Resume
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
