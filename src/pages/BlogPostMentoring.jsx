import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPostMentoring = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <article className="section-container max-w-4xl mx-auto">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
                    ← Back to Home
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Leadership</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Mentoring</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Career Growth</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Mentoring Interns in Tech: What I Wish I Knew Before
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        Lessons learned from guiding a second-year college intern through a fast-paced product cycle
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>July 17, 2025</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        When I was asked to mentor a second-year college intern during a fast-paced product cycle, my first instinct was excitement—and nervousness. I had over 7 years of experience building full-stack solutions, leading feature teams, and navigating Agile ceremonies. But guiding a fresh intern? That was uncharted territory.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Looking back, I learned just as much as I taught. Here's what I wish I had known before taking up the mentor role, so you can be better prepared if you find yourself in similar shoes.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        1. You're Not Just a Senior—You're Their First Real-World Influence
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Most interns come from an academic background where success is about grades, not impact. It took me a while to realize that my role wasn't just assigning tasks—it was helping them transition from textbook knowledge to practical thinking.
                    </p>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        What worked:
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>I started introducing her to Agile rituals—standups, retrospectives, and sprint planning—and asked her to shadow real story before owning any.</li>
                        <li>Gradually, I asked her to write test cases, investigate bugs, and demo small features to the team.</li>
                        <li>This scaffolding helped her build confidence in a safe, supportive environment.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        2. Structure Their Learning (But Not Too Much)
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Interns thrive on structure—but too much structure kills curiosity. Early on, I made the mistake of spoon-feeding. She completed tasks, yes—but she wasn't thinking critically.
                    </p>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        My approach shifted to:
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>Creating a 2-month roadmap with goals like "Basic Node.js" or "GCP interface".</li>
                        <li>Including hands-on, not just theory, e.g. asking her to introduce a small feature based on the existing code.</li>
                        <li>Leaving "buffer hours" in her week for self-exploration or asking "why" behind things.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        3. Communicate Like a Teacher, Not a Reviewer
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        As developers, we're used to short PR comments: "refactor", "naming?", "optimize this." But interns need the why behind every feedback.
                    </p>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        So I started using:
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>Loom videos for feedback walkthroughs</li>
                        <li>Weekly syncs to reflect on "what went well and what confused you?"</li>
                        <li>Encouraging her to write end-of-week reflections, which helped both of us track her growth.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        4. Expose Them to the Real Deal (Within Boundaries)
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Too often, interns are treated as side projects. But giving her real code—our event ingestion service with trace ID logging, GCP Datastore writes, and external API handling—made her feel truly involved.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Yes, I had to double-check everything she did. But her learning was 10x faster. And she took immense pride in seeing logs she wrote show up in production traces (with guardrails, of course!).
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Bonus: What I Gained as a Mentor
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>A sharper eye for articulating technical concepts simply</li>
                        <li>More patience (seriously!)</li>
                        <li>The joy of seeing someone grow from "Can I really do this?" to "I did it!"</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Pro Tips for New Mentors
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>Start with shadowing sessions before assigning independent work</li>
                        <li>Create a learning journal to track progress and challenges</li>
                        <li>Set up regular check-ins but keep them informal and conversational</li>
                        <li>Encourage questions—there are no stupid ones in learning</li>
                        <li>Celebrate small wins as much as big achievements</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Final Thoughts
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Mentoring is not just about shaping someone else's journey. It's about reshaping how you think, teach, and grow as a developer and a leader. If you're stepping into this role—don't wait to be perfect. Be present, be patient, and be human.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Have you mentored an intern before? I'd love to hear what you learned too. Drop your stories in the comments!
                    </p>

                    <div className="bg-slate-50 border-l-4 border-accent p-6 mt-12">
                        <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">Key Takeaways</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-700">
                            <li>Focus on practical application over theoretical knowledge</li>
                            <li>Provide structured learning with room for exploration</li>
                            <li>Communicate with context and explanation, not just feedback</li>
                            <li>Give real responsibilities within safe boundaries</li>
                            <li>Turn failures into learning opportunities</li>
                            <li>Remember that mentoring benefits both parties</li>
                        </ul>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <Link to="/" className="inline-flex items-center gap-2 text-accent hover:underline text-lg font-medium">
                        ← Back to Home
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogPostMentoring;
