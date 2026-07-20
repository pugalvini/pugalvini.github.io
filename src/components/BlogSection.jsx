import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
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

    return (
        <section id="blog" className="section-container bg-secondary-bg">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                    Latest Insights
                </h2>
                <p className="text-lg text-slate-600">
                    Sharing knowledge and experiences from the field
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {sortedBlogPosts.slice(0, 3).map((post, index) => (
                    <Link
                        key={index}
                        to={post.route}
                        className="bg-white rounded-2xl overflow-hidden blog-card-hover group flex flex-col"
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

            <div className="text-center">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white hover:bg-accent/90 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                    View All Posts →
                </Link>
            </div>

        </section>
    );
};

export default BlogSection;
