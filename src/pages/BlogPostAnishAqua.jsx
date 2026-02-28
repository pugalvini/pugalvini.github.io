import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ReadProgress from '../components/ReadProgress';
import ReactionWidget from '../components/ReactionWidget';
import ShareWidget from '../components/ShareWidget';
import BlogComments from '../components/BlogComments';

const DevelopmentFlowDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Development &amp; Deployment Flow</p>
        <svg viewBox="0 0 600 240" className="w-full max-w-2xl mx-auto block" aria-label="Development flow diagram">
            {/* Developer */}
            <circle cx="60" cy="100" r="25" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
            <text x="60" y="98" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="bold">Developer</text>
            <text x="60" y="110" textAnchor="middle" fontSize="9" fill="#0369a1">+ AI</text>

            {/* React */}
            <rect x="160" y="70" width="100" height="60" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="2"/>
            <text x="210" y="98" textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">React App</text>
            <text x="210" y="112" textAnchor="middle" fontSize="9" fill="#15803d">(Vite)</text>

            {/* UI / CSS Components */}
            <rect x="170" y="15" width="80" height="30" rx="6" fill="#fef9c3" stroke="#facc15" strokeWidth="1"/>
            <text x="210" y="34" textAnchor="middle" fontSize="10" fill="#854d0e">UI</text>

            <rect x="170" y="155" width="80" height="30" rx="6" fill="#fef9c3" stroke="#facc15" strokeWidth="1"/>
            <text x="210" y="174" textAnchor="middle" fontSize="10" fill="#854d0e">Vanilla CSS</text>

            {/* GitHub */}
            <rect x="320" y="75" width="90" height="50" rx="8" fill="#f3e8ff" stroke="#c084fc" strokeWidth="2"/>
            <text x="365" y="100" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7e22ce">GitHub</text>
            <text x="365" y="112" textAnchor="middle" fontSize="9" fill="#6b21a8">Repo</text>

            {/* Vercel */}
            <rect x="470" y="75" width="90" height="50" rx="8" fill="#000000" stroke="#333333" strokeWidth="2"/>
            <text x="515" y="100" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">Vercel</text>
            <text x="515" y="112" textAnchor="middle" fontSize="9" fill="#a3a3a3">Edge Network</text>

            {/* Users */}
            <circle cx="515" cy="190" r="25" fill="#fee2e2" stroke="#f87171" strokeWidth="2"/>
            <text x="515" y="194" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="bold">Users</text>

            {/* Arrows */}
            <line x1="85" y1="100" x2="150" y2="100" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arr-blue)"/>
            <text x="117" y="92" textAnchor="middle" fontSize="8" fill="#0284c7">Design/Code</text>

            <line x1="210" y1="70" x2="210" y2="45" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3" markerEnd="url(#arr-green)"/>
            <line x1="210" y1="130" x2="210" y2="155" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3" markerEnd="url(#arr-green)"/>

            <line x1="260" y1="100" x2="310" y2="100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr-slate)"/>
            <text x="285" y="92" textAnchor="middle" fontSize="8" fill="#64748b">Push</text>

            <line x1="410" y1="100" x2="460" y2="100" stroke="#c084fc" strokeWidth="2" markerEnd="url(#arr-purple)"/>
            <text x="435" y="92" textAnchor="middle" fontSize="8" fill="#7e22ce">CI/CD</text>

            <line x1="515" y1="125" x2="515" y2="155" stroke="#333333" strokeWidth="2" markerEnd="url(#arr-dark)"/>
            <text x="535" y="145" textAnchor="middle" fontSize="8" fill="#525252">Serves</text>

            <defs>
                <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#38bdf8"/></marker>
                <marker id="arr-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4ade80"/></marker>
                <marker id="arr-slate" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker>
                <marker id="arr-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#c084fc"/></marker>
                <marker id="arr-dark" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#333333"/></marker>
            </defs>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Fig 1: The rapid development and deployment pipeline</p>
    </div>
);

const BlogPostAnishAqua = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <ReadProgress />
            <SEO 
                title="Building Anish Aqua Minerals Website with Antigravity"
                description="How I leveraged Antigravity AI to rapidly design, build, and deploy a responsive React web app for a new packaged drinking water business in Coimbatore."
                url="https://pugalvini.github.io/blog/anish-aqua-minerals-antigravity"
                image="https://pugalvini.github.io/assets/anish-aqua-og.jpg"
            />
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">React</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Vite</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">AI Assistance</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Vercel</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Building the Anish Aqua Minerals Website with Antigravity
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        A journey of rapidly creating and deploying a modern web app for a new small business using AI
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>February 28, 2026</span>
                        <span>•</span>
                        <span>6 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        The Story of Anish Aqua Minerals
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Anish Aqua Minerals is a brand new, premium packaged drinking water business based in Coimbatore. With their focus set on providing pure, high-quality RO drinking water, they needed a compelling digital storefront to establish trust, showcase their purification process, and make it easy for potential customers to reach them.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Being a new local business, speed to market and a highly professional look were essential. Instead of a traditional, prolonged development cycle, I decided to pair up with <strong>Antigravity</strong> — an advanced AI coding assistant — to design, code, and deploy the entire website.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Architecture and Tech Stack
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        The requirements were straightforward: a fast, responsive, SEO-friendly landing page with sections for products, processes, and testimonials, plus a floating WhatsApp widget for instant customer communication. We chose a modern, lightweight stack:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>Frontend Framework:</strong> React 19</li>
                        <li><strong>Build Tool:</strong> Vite for lightning-fast HMR and optimized builds</li>
                        <li><strong>Styling:</strong> Vanilla CSS modules for component-scoped, custom aesthetics</li>
                        <li><strong>Hosting:</strong> Vercel for seamless CI/CD and edge delivery</li>
                    </ul>

                    <DevelopmentFlowDiagram />

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Building the UI with AI Assistance
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Working with Antigravity fundamentally changed how the UI was built. Rather than manually writing boilerplate, I could focus on the overarching design system and user flow. We broke the site down into distinct React components: <code>Hero.jsx</code>, <code>Products.jsx</code>, <code>Process.jsx</code>, and <code>Benefits.jsx</code>.
                    </p>

                    {/* Screenshot Placeholder */}
                    <div className="my-10 bg-slate-100 rounded-xl border border-slate-200 p-2 overflow-hidden shadow-sm">
                        <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden group">
                            {/* In production, replace the src below with the actual screenshot */}
                            <img 
                                src="/assets/anish-aqua-screenshot-placeholder.jpg" 
                                alt="Anish Aqua Minerals Homepage Interface" 
                                className="w-full h-full object-cover text-transparent"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.parentElement.innerHTML = '<div class="text-slate-400 font-medium flex flex-col items-center"><svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>Screenshot Placement: Anish Aqua Homepage</div>';
                                }}
                            />
                        </div>
                        <p className="text-center text-sm text-slate-500 mt-3 font-medium">
                            The clean, water-inspired aesthetic of the Anish Aqua Minerals website.
                        </p>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        One of the standout features we implemented was the <strong>Floating WhatsApp Widget</strong> (<code>FloatingWhatsApp.jsx</code>). For a local business in India, WhatsApp is the primary communication channel. By making this widget globally accessible on the site, we significantly reduced the friction for a customer wanting to order water cans or inquire about services.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Every component was styled using dedicated CSS files (e.g., <code>Navbar.css</code>, <code>Hero.css</code>). This vanilla approach kept the project dependency-light and allowed for pixel-perfect adjustments to micro-animations and hover effects.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Seamless Deployment with Vercel
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Once the local Vite environment looked perfect, moving to production took less than five minutes. The repository was connected to Vercel, which automatically detected the Vite setup. Every time a new feature is pushed to the <code>main</code> branch, Vercel triggers a build and deploys it to their edge network globally.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-slate-700">
                            <strong>🚀 The Result:</strong> A perfect Lighthouse performance score right out of the gate.
                        </p>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Conclusion
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        The Anish Aqua Minerals project was a fantastic showcase of how modern tools like React and Vite, when paired with an AI assistant like Antigravity, can democratize high-quality web development for new, local businesses. What previously might have taken weeks of design, slicing, and coding was accomplished rapidly, allowing the business owners to focus on what they do best: delivering pure water.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        You can check out the live site here: <a href="https://anishaqua.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Anish Aqua Minerals</a>.
                    </p>
                </div>

                <ShareWidget />
                <ReactionWidget slug="anish-aqua-minerals-antigravity" />
                <BlogComments />
            </article>
        </div>
    );
};

export default BlogPostAnishAqua;
