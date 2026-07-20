import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = [
        {
            title: 'Building Anish Aqua Minerals Website with Antigravity',
            excerpt: 'How I leveraged Antigravity AI to rapidly design, build, and deploy a responsive React web app for a new packaged drinking water business in Coimbatore.',
            readTime: '6 min read',
            date: 'February 28, 2026',
            theme: { color: 'from-cyan-100 via-blue-100 to-indigo-100', emoji: '💧' },
            tags: ['React', 'AI', 'Vite', 'Vercel'],
            route: '/blog/anish-aqua-minerals-antigravity',
            image: '/og-anish-aqua.jpg'
        },
        {
            title: 'Scaling from Zero to Millions of Users',
            excerpt: 'A visual journey of how modern systems evolve to handle massive scale. Learn about single servers, load balancing, caching, and sharding.',
            readTime: '7 min read',
            date: 'January 11, 2026',
            theme: { color: 'from-pink-100 via-rose-100 to-red-100', emoji: '🚀' },
            tags: ['System Design', 'Architecture', 'Scalability'],
            route: '/blog/scaling-zero-to-millions',
            image: '/og-scaling.jpg'
        },
        {
            title: 'Migrating AWS MSK to IAM Authentication for EKS Pods',
            excerpt: 'Simplifying security, eliminating certificate rotation, and enabling smoother Disaster Recovery.',
            readTime: '6 min read',
            date: 'July 14, 2026',
            theme: { color: 'from-sky-100 via-cyan-100 to-blue-100', emoji: '☁️' },
            tags: ['AWS', 'MSK', 'Kubernetes', 'Security'],
            route: '/blog/aws-msk-iam-auth',
            image: '/og-aws-msk.jpg'
        },
        {
            title: 'Supercharging TDD and Refactoring with Cursor',
            excerpt: 'How AI fundamentally changes the Red-Green-Refactor loop and makes maintaining code a breeze.',
            readTime: '7 min read',
            date: 'December 14, 2025',
            theme: { color: 'from-violet-100 via-purple-100 to-fuchsia-100', emoji: '🤖' },
            tags: ['Productivity', 'AI Tools', 'TDD'],
            route: '/blog/cursor-tdd-refactoring',
            image: '/og-cursor-tdd.jpg'
        },
        {
            title: 'Securing the Software Supply Chain with Sigstore',
            excerpt: 'Say goodbye to PGP key management and hello to keyless, transparent code signing. Learn how Sigstore uses OIDC, Fulcio, and Rekor to secure your artifacts.',
            readTime: '6 min read',
            date: 'November 23, 2025',
            theme: { color: 'from-amber-100 via-orange-100 to-yellow-100', emoji: '🔐' },
            tags: ['Security', 'DevSecOps', 'Supply Chain'],
            route: '/blog/sigstore-software-supply-chain',
            image: '/og-sigstore.jpg'
        },
        {
            title: 'Mastering Rate Limiting: 5 Algorithms You Need to Know',
            excerpt: 'A conceptual guide to protecting your systems from being overwhelmed. Learn about the Token Bucket, Leaking Bucket, Fixed Window, and Sliding Window algorithms.',
            readTime: '8 min read',
            date: 'September 6, 2025',
            theme: { color: 'from-blue-100 via-indigo-100 to-purple-100', emoji: '🚦' },
            tags: ['System Design', 'Backend', 'Architecture'],
            route: '/blog/rate-limiting-algorithms',
            image: '/og-rate-limit.jpg'
        },
        {
            title: 'Mentoring Interns in Tech: What I Wish I Knew Before',
            excerpt: 'Lessons learned from guiding a second-year college intern through a fast-paced product cycle. From structuring learning to communicating like a teacher, here\'s what I learned about mentorship.',
            readTime: '5 min read',
            date: 'July 17, 2025',
            theme: { color: 'from-green-100 via-teal-100 to-emerald-100', emoji: '🌱' },
            tags: ['Leadership', 'Mentoring', 'Career Growth'],
            route: '/blog/mentoring-interns-in-tech',
            image: '/og-mentoring.jpg'
        },
        {
            title: 'How to Create a Mute Rule in GCP Security Command Center',
            excerpt: 'A practical guide to reducing alert fatigue in cloud security. Learn how to create mute rules in GCP SCC to filter out non-actionable findings and help your team focus on what truly matters.',
            readTime: '4 min read',
            date: 'May 13, 2025',
            theme: { color: 'from-orange-100 via-red-100 to-rose-100', emoji: '🛡️' },
            tags: ['Cloud Security', 'GCP', 'DevSecOps'],
            route: '/blog/create-mute-rule-gcp-scc',
            image: '/og-gcp-scc.jpg'
        }
    ];

    const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

    // State for filtering
    const [activeFilter, setActiveFilter] = useState('All');
    const [isAnimating, setIsAnimating] = useState(false);
    const [displayedPosts, setDisplayedPosts] = useState(sortedBlogPosts);

    // Extract unique tags for the filter bar
    const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))].sort();

    const handleFilterChange = (tag) => {
        if (tag === activeFilter) return;
        
        setIsAnimating(true);
        setActiveFilter(tag);
        
        // Wait for fade out animation before updating content
        setTimeout(() => {
            if (tag === 'All') {
                setDisplayedPosts(sortedBlogPosts);
            } else {
                setDisplayedPosts(sortedBlogPosts.filter(post => post.tags.includes(tag)));
            }
            setIsAnimating(false);
        }, 300); // Matches the fadeOut animation duration
    };

    const latestPost = sortedBlogPosts[0];
    const gridPosts = activeFilter === 'All' ? displayedPosts.slice(1) : displayedPosts;

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <SEO 
                title="Blog" 
                description="Insights on software engineering, leadership, and cloud technologies by Pugalvini."
                url="https://pugalvini.github.io/blog"
            />
            
            {/* Hero Section */}
            <div className="bg-white border-b border-slate-200 py-16 relative overflow-hidden">
                {/* Subtle background dots */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5 }}></div>
                
                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Engineering</span> Blog
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        Insights on software engineering, leadership, cloud architecture, and modern development workflows.
                    </p>
                    
                    <div className="flex justify-center gap-4 text-sm">
                        <span className="px-4 py-2 bg-slate-100 rounded-full font-medium text-slate-700 border border-slate-200">
                            {blogPosts.length} Articles
                        </span>
                        <span className="px-4 py-2 bg-slate-100 rounded-full font-medium text-slate-700 border border-slate-200">
                            {allTags.length - 1} Topics
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Filter Bar */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                    {allTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChange(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === tag 
                                ? 'bg-accent text-white shadow-md' 
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Content Area with Fade Animation */}
                <div className={`${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`}>
                    
                    {/* Featured Post (Only show on 'All' filter) */}
                    {activeFilter === 'All' && displayedPosts.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-px bg-slate-300"></span> Latest Post
                            </h2>
                            <Link 
                                to={latestPost.route}
                                className="group block bg-white rounded-2xl overflow-hidden blog-card-hover"
                            >
                                <div className="grid md:grid-cols-2">
                                    <div className="h-64 md:h-full relative overflow-hidden bg-slate-100">
                                        <img 
                                            src={latestPost.image} 
                                            alt={latestPost.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                                                {latestPost.readTime}
                                            </span>
                                            <span className="text-sm text-slate-500">{latestPost.date}</span>
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                                            {latestPost.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 text-lg line-clamp-3">
                                            {latestPost.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {latestPost.tags.map((tag, i) => (
                                                <span key={i} className="text-sm font-medium text-slate-500 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Grid Posts */}
                    {gridPosts.length > 0 ? (
                        <div>
                            {activeFilter === 'All' && (
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-px bg-slate-300"></span> Previous Articles
                                </h2>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {gridPosts.map((post, index) => (
                                    <Link
                                        key={index}
                                        to={post.route}
                                        className="bg-white rounded-2xl overflow-hidden blog-card-hover group flex flex-col animate-fade-in-up"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="h-48 relative overflow-hidden bg-slate-100">
                                            <img 
                                                src={post.image} 
                                                alt={post.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                                                    {post.tags[0]}
                                                </span>
                                                <span className="text-xs text-slate-500">{post.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                                                {post.excerpt}
                                            </p>
                                            
                                            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                                <span className="text-sm text-slate-500">{post.date}</span>
                                                <span className="text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                                    Read <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-5xl mb-4">🔍</div>
                            <h3 className="text-xl font-medium text-slate-900 mb-2">No articles found</h3>
                            <p className="text-slate-500">There are no articles for the tag "{activeFilter}" yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
