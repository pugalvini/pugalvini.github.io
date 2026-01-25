import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    const blogPosts = [
        {
            title: 'Mentoring Interns in Tech: What I Wish I Knew Before',
            excerpt: 'Lessons learned from guiding a second-year college intern through a fast-paced product cycle. From structuring learning to communicating like a teacher, here\'s what I learned about mentorship.',
            readTime: '5 min read',
            date: 'July 17, 2025',
            image: '/blog/blog-1.jpg',
            tags: ['Leadership', 'Mentoring', 'Career Growth'],
            route: '/blog/mentoring-interns-in-tech'
        },
        {
            title: 'How to Create a Mute Rule in GCP Security Command Center',
            excerpt: 'A practical guide to reducing alert fatigue in cloud security. Learn how to create mute rules in GCP SCC to filter out non-actionable findings and help your team focus on what truly matters.',
            readTime: '4 min read',
            date: 'May 13, 2025',
            image: '/blog/blog-2.jpg',
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {blogPosts.map((post, index) => (
                    <Link
                        key={index}
                        to={post.route}
                        className="bg-white rounded-xl overflow-hidden border border-slate-200 card-lift cursor-pointer group block"
                    >
                        {/* Image Placeholder */}
                        <div className="h-64 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-6xl mb-4">📝</div>
                                    <p className="text-slate-600 font-medium">{post.title}</p>
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

        </section>
    );
};

export default BlogSection;
