import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    const blogPosts = [
        {
            title: 'Supercharging TDD and Refactoring with Cursor',
            excerpt: 'How AI fundamentally changes the Red-Green-Refactor loop and makes maintaining code a breeze.',
            readTime: '7 min read',
            date: 'December 14, 2025',
            theme: { color: 'from-violet-100 via-purple-100 to-fuchsia-100', emoji: '🤖' },
            tags: ['Productivity', 'AI Tools', 'TDD'],
            route: '/blog/cursor-tdd-refactoring'
        },
        {
            title: 'Securing the Software Supply Chain with Sigstore',
            excerpt: 'Say goodbye to PGP key management and hello to keyless, transparent code signing. Learn how Sigstore uses OIDC, Fulcio, and Rekor to secure your artifacts.',
            readTime: '6 min read',
            date: 'November 23, 2025',
            theme: { color: 'from-amber-100 via-orange-100 to-yellow-100', emoji: '🔐' },
            tags: ['Security', 'DevSecOps', 'Supply Chain'],
            route: '/blog/sigstore-software-supply-chain'
        },
        {
            title: 'Mastering Rate Limiting: 5 Algorithms You Need to Know',
            excerpt: 'A conceptual guide to protecting your systems from being overwhelmed. Learn about the Token Bucket, Leaking Bucket, Fixed Window, and Sliding Window algorithms.',
            readTime: '8 min read',
            date: 'September 6, 2025',
            theme: { color: 'from-blue-100 via-indigo-100 to-purple-100', emoji: '🚦' },
            tags: ['System Design', 'Backend', 'Architecture'],
            route: '/blog/rate-limiting-algorithms'
        },
        {
            title: 'Mentoring Interns in Tech: What I Wish I Knew Before',
            excerpt: 'Lessons learned from guiding a second-year college intern through a fast-paced product cycle. From structuring learning to communicating like a teacher, here\'s what I learned about mentorship.',
            readTime: '5 min read',
            date: 'July 17, 2025',
            theme: { color: 'from-green-100 via-teal-100 to-emerald-100', emoji: '🌱' },
            tags: ['Leadership', 'Mentoring', 'Career Growth'],
            route: '/blog/mentoring-interns-in-tech'
        },
        {
            title: 'How to Create a Mute Rule in GCP Security Command Center',
            excerpt: 'A practical guide to reducing alert fatigue in cloud security. Learn how to create mute rules in GCP SCC to filter out non-actionable findings and help your team focus on what truly matters.',
            readTime: '4 min read',
            date: 'May 13, 2025',
            theme: { color: 'from-orange-100 via-red-100 to-rose-100', emoji: '🛡️' },
            tags: ['Cloud Security', 'GCP', 'DevSecOps'],
            route: '/blog/create-mute-rule-gcp-scc'
        }
    ];

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
                {blogPosts.slice(0, 3).map((post, index) => (
                    <Link
                        key={index}
                        to={post.route}
                        className="bg-white rounded-xl overflow-hidden border border-slate-200 card-lift cursor-pointer group block"
                    >
                        {/* Dynamic Image Placeholder */}
                        <div className={`h-64 bg-gradient-to-br ${post.theme.color} relative overflow-hidden`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-6xl mb-4">{post.theme.emoji}</div>
                                    <p className="text-slate-700/80 font-medium">{post.title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                                    {post.readTime}
                                </span>
                                <span className="text-sm text-slate-500">{post.date}</span>
                            </div>

                            <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-slate-600 mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 hover:text-accent hover:border-accent rounded-full font-medium transition-all card-lift"
                >
                    View All Posts →
                </Link>
            </div>

        </section>
    );
};

export default BlogSection;
