import React from 'react';

const BlogPage = () => {
    const blogPosts = [
        {
            title: 'Mentoring Interns in Tech: What I Wish I Knew Before',
            excerpt: 'Lessons learned from guiding a second-year college intern through a fast-paced product cycle. From structuring learning to communicating like a teacher, here\'s what I learned about mentorship.',
            readTime: '5 min read',
            date: 'July 17, 2025',
            tags: ['Leadership', 'Mentoring', 'Career Growth'],
            link: 'https://pugalvini.github.io/docs/leadership%20&%20mentoring/2025/07/17/mentoring-interns-in-tech.html'
        },
        {
            title: 'How to Create a Mute Rule in GCP Security Command Center',
            excerpt: 'A practical guide to reducing alert fatigue in cloud security. Learn how to create mute rules in GCP SCC to filter out non-actionable findings and help your team focus on what truly matters.',
            readTime: '4 min read',
            date: 'May 13, 2025',
            tags: ['Cloud Security', 'GCP', 'DevSecOps'],
            link: 'https://pugalvini.github.io/docs/cloud%20security/2025/05/13/create-mute-rule-gcp-scc.html'
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Header */}
            <div className="section-container">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-4">
                        Blog
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Insights on software engineering, leadership, and cloud technologies
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <a
                            key={index}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
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

                                <p className="text-slate-600 mb-4 line-clamp-3">
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
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
