import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        if (isHome) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const navLinks = [
        { name: 'Home', action: () => scrollToSection('home'), isActive: isHome },
        { name: 'Blog', to: '/blog', isActive: location.pathname.startsWith('/blog') },
        { name: 'Resume', href: '/Resume.pdf', external: true }
    ];

    const getLinkStyle = (isActive) => 
        `font-medium transition-colors ${isActive ? 'text-accent underline underline-offset-4 decoration-2' : 'text-slate-700 hover:text-accent'}`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
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

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            link.to ? (
                                <Link key={index} to={link.to} className={getLinkStyle(link.isActive)}>
                                    {link.name}
                                </Link>
                            ) : link.href ? (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={getLinkStyle(false)}>
                                    {link.name}
                                </a>
                            ) : (
                                <button key={index} onClick={link.action} className={getLinkStyle(link.isActive)}>
                                    {link.name}
                                </button>
                            )
                        ))}
                        <a
                            href="mailto:pukazhvinitha@gmail.com"
                            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-slate-700 hover:text-accent"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Drawer */}
                {mobileMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 border-t border-slate-100 mt-4 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            link.to ? (
                                <Link key={index} to={link.to} onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${getLinkStyle(link.isActive)}`}>
                                    {link.name}
                                </Link>
                            ) : link.href ? (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${getLinkStyle(false)}`}>
                                    {link.name}
                                </a>
                            ) : (
                                <button key={index} onClick={link.action} className={`block w-full text-left py-2 ${getLinkStyle(link.isActive)}`}>
                                    {link.name}
                                </button>
                            )
                        ))}
                        <a
                            href="mailto:pukazhvinitha@gmail.com"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-accent font-medium"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
