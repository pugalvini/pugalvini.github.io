import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ReadProgress from '../components/ReadProgress';
import ReactionWidget from '../components/ReactionWidget';
import ShareWidget from '../components/ShareWidget';
import BlogComments from '../components/BlogComments';

/* ─────────────────────────────────────────────
   Diagram: AI-Assisted TDD Workflow
───────────────────────────────────────────── */
const TDDWorkflowDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">The AI-Assisted TDD Loop</p>
        <svg viewBox="0 0 600 250" className="w-full max-w-2xl mx-auto block" aria-label="AI-Assisted TDD Workflow Diagram">
            {/* ── Background Nodes ── */}
            {/* 1. Red */}
            <rect x="50" y="80" width="120" height="80" rx="12" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2"/>
            <text x="110" y="115" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ef4444">1. RED</text>
            <text x="110" y="135" textAnchor="middle" fontSize="10" fill="#7f1d1d">Sidebar Chat:</text>
            <text x="110" y="148" textAnchor="middle" fontSize="10" fill="#7f1d1d">Generate Test Case</text>

            {/* 2. Green */}
            <rect x="240" y="80" width="120" height="80" rx="12" fill="#f0fdf4" stroke="#86efac" strokeWidth="2"/>
            <text x="300" y="115" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#22c55e">2. GREEN</text>
            <text x="300" y="135" textAnchor="middle" fontSize="10" fill="#14532d">Tab Autocomplete:</text>
            <text x="300" y="148" textAnchor="middle" fontSize="10" fill="#14532d">Write Implementation</text>

            {/* 3. Refactor */}
            <rect x="430" y="80" width="120" height="80" rx="12" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2"/>
            <text x="490" y="115" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">3. REFACTOR</text>
            <text x="490" y="135" textAnchor="middle" fontSize="10" fill="#1e3a8a">Cmd+K (Inline):</text>
            <text x="490" y="148" textAnchor="middle" fontSize="10" fill="#1e3a8a">Apply Design Patterns</text>

            {/* ── Arrows ── */}
            <defs>
                <marker id="arrow-red-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
                <marker id="arrow-green-refactor" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
                <marker id="arrow-refactor-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>

            {/* Red to Green */}
            <path d="M 170 120 L 232 120" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-red-green)" fill="none"/>
            
            {/* Green to Refactor */}
            <path d="M 360 120 L 422 120" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow-green-refactor)" fill="none"/>
            
            {/* Refactor to Red (Loop back) */}
            <path d="M 490 80 C 490 20, 110 20, 110 72" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow-refactor-red)" fill="none"/>

        </svg>
        <p className="text-center text-xs text-slate-500 mt-3">The traditional TDD cycle, supercharged with AI at every step.</p>
    </div>
);

const BlogPostCursor = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <ReadProgress />
            <SEO 
                title="Supercharging TDD and Refactoring with Cursor"
                description="How AI fundamentally changes the Red-Green-Refactor loop and makes maintaining code a breeze."
                url="https://pugalvini.github.io/blog/cursor-tdd-refactoring"
            />
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Productivity</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">AI Tools</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">TDD</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Supercharging TDD and Refactoring with Cursor
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        How AI fundamentally changes the Red-Green-Refactor loop and makes maintaining code a breeze.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>December 14, 2025</span>
                        <span>•</span>
                        <span>7 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        For a long time, Test-Driven Development (TDD) has been the gold standard for writing robust, maintainable code. The cycle is simple: write a failing test (Red), write just enough code to make it pass (Green), and finally, clean it up (Refactor). 
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        However, getting into the flow of TDD can sometimes feel tedious, especially when boilerplate gets in the way. Recently, I fully integrated the <strong>Cursor IDE</strong> into my day-to-day workflow, and it has completely revolutionized how I approach this cycle—specifically when writing Python/Pytest and JavaScript/Jest.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">Phase 1: Chat Sidebar for the "Red" Phase</h2>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        The key to effective AI assistance is providing strong constraints. If you just ask an AI to "build this feature," it often hallucinates or builds something slightly off-spec. By writing the test case first, you are essentially providing a machine-readable specification for the AI to follow.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Instead of writing tests completely manually, I leverage Cursor's <strong>Chat Sidebar</strong>. Let's say I'm working in Pytest. I'll open the sidebar and prompt:
                    </p>

                    <div className="bg-slate-800 text-slate-200 p-4 rounded-lg my-6 font-mono text-sm border border-slate-700">
                        <span className="text-emerald-400">User:</span> Write a Pytest case for a function `calculate_discount` that takes a `cart_total` and a `user_tier`. It should apply a 10% discount for 'gold' tier if the total is over $100, and a 20% discount for 'platinum' tier regardless of the total.
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Cursor generates the exact Pytest cases, covering edge cases I might have missed (like exactly $100 or an invalid tier). I drop this into my test file, run it, and naturally, it fails. We are officially in the Red.
                    </p>

                    <TDDWorkflowDiagram />

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">Phase 2: Autocomplete for the "Green" Phase</h2>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Now comes the magic. With the failing test saved in the workspace, Cursor's context engine knows exactly what needs to be built. When I open `discount.py` and start defining `def calculate_discount(cart_total, user_tier):`, Cursor's ghost text (autocomplete) will usually generate the entire function logic perfectly on the first try. It reads the test case in the background and writes the source code to satisfy it. Tab, save, and the tests pass. We are Green.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">Phase 3: Cmd+K for Confident Refactoring</h2>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        This is where Cursor truly shines in my day-to-day work: the Refactor phase. With a comprehensive test suite covering our backs, we can safely restructure the code. 
                    </p>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        I recently worked on a system where we had an enormous, tangled set of decision points—a massive `if/else` chain (in JavaScript) determining how different notification channels should be formatted. It was difficult to read and a nightmare to maintain.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Instead of manually peeling apart the logic, I highlighted the entire block of `if/else` statements, hit <code>Cmd+K</code> (Inline Edit), and prompted:
                    </p>

                    <div className="bg-slate-800 text-slate-200 p-4 rounded-lg my-6 font-mono text-sm border border-slate-700">
                        <span className="text-emerald-400">Cmd+K:</span> Refactor this set of decision points into a Factory Method pattern to make it more maintainable. Create individual formatter classes for each channel and a factory to instantiate them based on the channel type.
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Within seconds, Cursor stripped out the procedural code and generated a beautiful, object-oriented Factory pattern. 
                    </p>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Before (The Spaghetti):</h3>
                    <pre className="bg-slate-50 border border-slate-200 p-4 rounded-lg overflow-x-auto text-sm text-slate-800 mb-6 font-mono">
{`function formatNotification(type, data) {
    if (type === 'EMAIL') {
        // 15 lines of email formatting logic...
        return \`<h1>\${data.title}</h1><p>\${data.body}</p>\`;
    } else if (type === 'SMS') {
        // 10 lines of SMS formatting...
        return \`[\${data.title}]: \${data.body}\`;
    } else if (type === 'PUSH') {
        // ...
        return { title: data.title, message: data.body };
    } else {
        throw new Error('Unknown notification type');
    }
}`}
                    </pre>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">After (The Factory Method):</h3>
                    <pre className="bg-slate-50 border border-slate-200 p-4 rounded-lg overflow-x-auto text-sm text-slate-800 mb-6 font-mono">
{`class EmailFormatter {
    format(data) { return \`<h1>\${data.title}</h1><p>\${data.body}</p>\`; }
}
class SMSFormatter {
    format(data) { return \`[\${data.title}]: \${data.body}\`; }
}
class PushFormatter {
    format(data) { return { title: data.title, message: data.body }; }
}

class NotificationFormatterFactory {
    static getFormatter(type) {
        const formatters = {
            'EMAIL': EmailFormatter,
            'SMS': SMSFormatter,
            'PUSH': PushFormatter
        };
        
        const Formatter = formatters[type];
        if (!Formatter) throw new Error('Unknown notification type');
        return new Formatter();
    }
}`}
                    </pre>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Because I had already established my tests in the "Red" phase, verifying this massive structural change was as simple as running <code>npm test</code>. It passed immediately.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">The Takeaway</h2>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        AI hasn't replaced the need for good software design principles like TDD; rather, it has amplified their value. By using Cursor's Sidebar to generate tests, relying on autocomplete to pass them, and using <code>Cmd+K</code> to refactor mercilessly, we can write cleaner, more maintainable code faster than ever before.
                    </p>

                </div>
                <ShareWidget />
                <ReactionWidget slug="cursor-tdd-refactoring" />
                <BlogComments />
            </article>
        </div>
    );
};

export default BlogPostCursor;
