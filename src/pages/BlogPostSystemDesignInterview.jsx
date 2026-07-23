import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ReadProgress from '../components/ReadProgress';
import ReactionWidget from '../components/ReactionWidget';
import ShareWidget from '../components/ShareWidget';
import BlogComments from '../components/BlogComments';

/* ─────────────────────────────────────────────
   Diagram 1 – The System Design Interview Framework Flow
───────────────────────────────────────────── */
const FrameworkDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">The System Design Framework</p>
        <svg viewBox="0 0 560 160" className="w-full max-w-2xl mx-auto block" aria-label="System Design Framework flow diagram">
            {/* Steps */}
            <rect x="20" y="60" width="90" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="65" y="80" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1e40af">1. Clarify &amp; Scope</text>
            <text x="65" y="92" textAnchor="middle" fontSize="8" fill="#2563eb">(Requirements)</text>

            <rect x="150" y="60" width="90" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
            <text x="195" y="80" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3730a3">2. Back-of-the-Env</text>
            <text x="195" y="92" textAnchor="middle" fontSize="8" fill="#4f46e5">(Estimations)</text>

            <rect x="280" y="60" width="90" height="40" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
            <text x="325" y="80" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5b21b6">3. High-Level Arch</text>
            <text x="325" y="92" textAnchor="middle" fontSize="8" fill="#7c3aed">(Draw the boxes)</text>

            <rect x="410" y="60" width="90" height="40" rx="8" fill="#fae8ff" stroke="#d946ef" strokeWidth="1.5"/>
            <text x="455" y="80" textAnchor="middle" fontSize="10" fontWeight="700" fill="#86198f">4. Deep Dive</text>
            <text x="455" y="92" textAnchor="middle" fontSize="8" fill="#c026d3">(Trade-offs &amp; Scale)</text>

            {/* Arrows */}
            <line x1="110" y1="80" x2="145" y2="80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-fw)"/>
            <line x1="240" y1="80" x2="275" y2="80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-fw)"/>
            <line x1="370" y1="80" x2="405" y2="80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-fw)"/>

            <defs>
                <marker id="arr-fw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">A structured approach to prevent you from diving into details too early.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 2 – High-Level Architecture
───────────────────────────────────────────── */
const HighLevelArchDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Typical High-Level Architecture</p>
        <svg viewBox="0 0 560 220" className="w-full max-w-2xl mx-auto block" aria-label="High-Level Architecture diagram">
            {/* Client */}
            <circle cx="40" cy="110" r="15" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
            <text x="40" y="114" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="bold">Client</text>

            {/* DNS / CDN */}
            <rect x="100" y="30" width="70" height="30" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5"/>
            <text x="135" y="49" textAnchor="middle" fontSize="10" fill="#475569" fontWeight="600">DNS / CDN</text>
            
            <path d="M 40 95 C 40 45, 80 45, 95 45" fill="none" stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arr-hl)" strokeDasharray="3"/>

            {/* Load Balancer */}
            <rect x="120" y="90" width="50" height="40" rx="8" fill="#f3e8ff" stroke="#c084fc" strokeWidth="2"/>
            <text x="145" y="114" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7e22ce">LB</text>

            {/* Web/API Servers */}
            <rect x="220" y="50" width="80" height="30" rx="6" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="260" y="69" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">API Server 1</text>
            <rect x="220" y="95" width="80" height="30" rx="6" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="260" y="114" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">API Server 2</text>
            <rect x="220" y="140" width="80" height="30" rx="6" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="260" y="159" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">API Server 3</text>

            {/* Cache */}
            <rect x="360" y="50" width="70" height="40" rx="6" fill="#ffedd5" stroke="#fdba74" strokeWidth="1.5"/>
            <text x="395" y="74" textAnchor="middle" fontSize="10" fill="#c2410c" fontWeight="600">Cache</text>

            {/* DB */}
            <rect x="460" y="95" width="80" height="50" rx="8" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5"/>
            <text x="500" y="120" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="600">Database</text>
            <text x="500" y="132" textAnchor="middle" fontSize="8" fill="#b91c1c">(Master/Replica)</text>

            {/* Async Worker / Queue */}
            <rect x="360" y="150" width="70" height="40" rx="6" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5"/>
            <text x="395" y="174" textAnchor="middle" fontSize="10" fill="#3730a3" fontWeight="600">Msg Queue</text>

            {/* Arrows */}
            <line x1="60" y1="110" x2="115" y2="110" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arr-hl-blue)"/>
            
            <path d="M 175 110 C 190 110, 200 65, 215 65" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-hl-purple)"/>
            <path d="M 175 110 L 215 110" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-hl-purple)"/>
            <path d="M 175 110 C 190 110, 200 155, 215 155" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-hl-purple)"/>

            <path d="M 305 65 L 355 65" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-hl)"/>
            <path d="M 305 110 L 455 110" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-hl)"/>
            <path d="M 305 155 L 355 155" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-hl)"/>

            <path d="M 435 70 C 450 70, 480 80, 490 90" fill="none" stroke="#fdba74" strokeWidth="1.5" markerEnd="url(#arr-hl)" strokeDasharray="3"/>
            <path d="M 435 170 C 450 170, 480 160, 490 150" fill="none" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#arr-hl)" strokeDasharray="3"/>

            <defs>
                <marker id="arr-hl" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
                <marker id="arr-hl-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8"/>
                </marker>
                <marker id="arr-hl-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#c084fc"/>
                </marker>
            </defs>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">The standard starting point for almost any web-scale system design.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 3 – Read vs Write Flow
───────────────────────────────────────────── */
const ReadWriteFlowDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Read-Through &amp; Write-Through Flows</p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Read Flow */}
            <svg viewBox="0 0 250 180" className="w-full max-w-xs block" aria-label="Read flow diagram">
                <rect x="0" y="0" width="250" height="180" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
                <text x="125" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">Read Request (Cache Aside)</text>
                
                <rect x="20" y="50" width="60" height="30" rx="4" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
                <text x="50" y="69" textAnchor="middle" fontSize="10" fill="#166534">API</text>

                <rect x="130" y="50" width="80" height="30" rx="4" fill="#ffedd5" stroke="#fdba74" strokeWidth="1.5"/>
                <text x="170" y="69" textAnchor="middle" fontSize="10" fill="#c2410c">Cache</text>

                <rect x="130" y="120" width="80" height="40" rx="6" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5"/>
                <text x="170" y="144" textAnchor="middle" fontSize="10" fill="#991b1b">Database</text>

                <path d="M 85 65 L 125 65" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-rw)"/>
                <text x="105" y="60" textAnchor="middle" fontSize="8" fill="#64748b">1. check</text>

                <path d="M 170 85 L 170 115" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-rw)"/>
                <text x="195" y="105" textAnchor="middle" fontSize="8" fill="#64748b">2. miss? query</text>

                <path d="M 130 140 C 90 140, 50 110, 50 85" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-rw)" strokeDasharray="3"/>
                <text x="75" y="125" textAnchor="middle" fontSize="8" fill="#64748b">3. return &amp; update cache</text>

                <defs>
                    <marker id="arr-rw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>

            {/* Write Flow */}
            <svg viewBox="0 0 250 180" className="w-full max-w-xs block" aria-label="Write flow diagram">
                <rect x="0" y="0" width="250" height="180" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
                <text x="125" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">Write Request</text>
                
                <rect x="20" y="80" width="60" height="30" rx="4" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
                <text x="50" y="99" textAnchor="middle" fontSize="10" fill="#166534">API</text>

                <rect x="130" y="40" width="80" height="30" rx="4" fill="#ffedd5" stroke="#fdba74" strokeWidth="1.5"/>
                <text x="170" y="59" textAnchor="middle" fontSize="10" fill="#c2410c">Cache</text>

                <rect x="130" y="110" width="80" height="40" rx="6" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5"/>
                <text x="170" y="134" textAnchor="middle" fontSize="10" fill="#991b1b">Database</text>

                <path d="M 85 95 L 125 125" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-rw)"/>
                <text x="115" y="115" textAnchor="middle" fontSize="8" fill="#64748b">1. write</text>

                <path d="M 85 85 L 125 55" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-rw)"/>
                <text x="100" y="65" textAnchor="middle" fontSize="8" fill="#64748b">2. invalidate/update</text>
            </svg>
        </div>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 4 – SQL vs NoSQL Comparison Table
───────────────────────────────────────────── */
const DatabaseComparisonTable = () => (
    <div className="my-10 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-sm text-left">
            <thead className="bg-slate-800 text-white">
                <tr>
                    <th className="px-5 py-3 font-semibold">Feature</th>
                    <th className="px-5 py-3 font-semibold">Relational (SQL)</th>
                    <th className="px-5 py-3 font-semibold">Non-Relational (NoSQL)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b border-slate-100">
                    <td className="px-5 py-3 font-semibold text-slate-800">Examples</td>
                    <td className="px-5 py-3 text-slate-600">PostgreSQL, MySQL</td>
                    <td className="px-5 py-3 text-slate-600">MongoDB, Cassandra, DynamoDB</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-100">
                    <td className="px-5 py-3 font-semibold text-slate-800">Structure</td>
                    <td className="px-5 py-3 text-slate-600">Structured (Tables, Rows, strict schema)</td>
                    <td className="px-5 py-3 text-slate-600">Unstructured/Semi-structured (JSON, Key-Value)</td>
                </tr>
                <tr className="bg-white border-b border-slate-100">
                    <td className="px-5 py-3 font-semibold text-slate-800">Scaling</td>
                    <td className="px-5 py-3 text-slate-600">Vertical (scale-up typically)</td>
                    <td className="px-5 py-3 text-slate-600">Horizontal (scale-out naturally)</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-100">
                    <td className="px-5 py-3 font-semibold text-slate-800">ACID Properties</td>
                    <td className="px-5 py-3 text-slate-600">Strong ACID guarantees</td>
                    <td className="px-5 py-3 text-slate-600">Usually BASE (Eventual Consistency)</td>
                </tr>
                <tr className="bg-white">
                    <td className="px-5 py-3 font-semibold text-slate-800">Best For</td>
                    <td className="px-5 py-3 text-slate-600">Complex joins, transactions, financial data</td>
                    <td className="px-5 py-3 text-slate-600">Massive scale, rapid prototyping, unstructured data</td>
                </tr>
            </tbody>
        </table>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 5 – URL Shortener Architecture
───────────────────────────────────────────── */
const UrlShortenerDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">URL Shortener Architecture</p>
        <svg viewBox="0 0 560 220" className="w-full max-w-2xl mx-auto block" aria-label="URL Shortener Architecture diagram">
            {/* User */}
            <circle cx="40" cy="110" r="15" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
            <text x="40" y="114" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="bold">User</text>

            {/* LB */}
            <rect x="100" y="90" width="40" height="40" rx="6" fill="#f3e8ff" stroke="#c084fc" strokeWidth="2"/>
            <text x="120" y="114" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7e22ce">LB</text>

            {/* Web Servers */}
            <rect x="180" y="50" width="80" height="40" rx="6" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="220" y="70" textAnchor="middle" fontSize="9" fill="#166534" fontWeight="600">Web Server</text>
            <text x="220" y="82" textAnchor="middle" fontSize="8" fill="#15803d">(Read/Write)</text>

            <rect x="180" y="130" width="80" height="40" rx="6" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="220" y="150" textAnchor="middle" fontSize="9" fill="#166534" fontWeight="600">Web Server</text>
            <text x="220" y="162" textAnchor="middle" fontSize="8" fill="#15803d">(Read/Write)</text>

            {/* Rate Limiter */}
            <rect x="290" y="50" width="70" height="30" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5"/>
            <text x="325" y="69" textAnchor="middle" fontSize="9" fill="#475569" fontWeight="600">Rate Limiter</text>

            {/* Redis Cache */}
            <rect x="290" y="135" width="70" height="30" rx="6" fill="#ffedd5" stroke="#fdba74" strokeWidth="1.5"/>
            <text x="325" y="154" textAnchor="middle" fontSize="9" fill="#c2410c" fontWeight="600">Redis Cache</text>

            {/* Key Gen Service */}
            <rect x="400" y="40" width="100" height="40" rx="6" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5"/>
            <text x="450" y="60" textAnchor="middle" fontSize="9" fill="#3730a3" fontWeight="600">Key Gen Service</text>
            <text x="450" y="72" textAnchor="middle" fontSize="8" fill="#4f46e5">(Pre-generates keys)</text>

            {/* Databases */}
            <rect x="420" y="120" width="80" height="60" rx="8" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5"/>
            <text x="460" y="145" textAnchor="middle" fontSize="10" fill="#991b1b" fontWeight="600">NoSQL DB</text>
            <text x="460" y="160" textAnchor="middle" fontSize="8" fill="#b91c1c">(URL Mappings)</text>

            {/* Arrows */}
            <line x1="60" y1="110" x2="95" y2="110" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arr-us)"/>
            
            <path d="M 145 110 C 160 110, 160 70, 175 70" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-us)"/>
            <path d="M 145 110 C 160 110, 160 150, 175 150" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-us)"/>

            <line x1="265" y1="65" x2="285" y2="65" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-us)"/>
            <line x1="265" y1="150" x2="285" y2="150" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-us)"/>
            
            <path d="M 220 50 L 220 20 L 450 20 L 450 35" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-us)"/>
            <text x="335" y="15" textAnchor="middle" fontSize="8" fill="#64748b">get available key</text>

            <path d="M 365 150 L 415 150" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr-us)"/>
            <text x="390" y="145" textAnchor="middle" fontSize="8" fill="#64748b">miss?</text>

            <defs>
                <marker id="arr-us" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">A Key Generation Service ensures fast writes without collisions.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Main Blog Component
───────────────────────────────────────────── */
const BlogPostSystemDesignInterview = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <ReadProgress />
            <SEO
                title="The System Design Interview Playbook: A Senior Engineer's Complete Guide"
                description="Stop memorizing solutions. Learn the structured framework that senior engineers use to tackle any system design interview question — with real examples, diagrams, and a checklist."
                url="https://pugalvini.github.io/blog/system-design-interview-guide"
                image="https://pugalvini.github.io/og-system-design.jpg"
            />
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">System Design</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Interview Prep</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Architecture</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        The System Design Interview Playbook: A Senior Engineer's Complete Guide
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        Stop memorizing solutions. Learn the structured framework to tackle any architecture question.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>February 9, 2026</span>
                        <span>•</span>
                        <span>14 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        System Design interviews are often the most intimidating part of the hiring process for software engineers. Unlike LeetCode questions where there is a clear "correct" answer, system design questions are intentionally ambiguous, open-ended, and messy. Just like real-world engineering.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        Whether you are aiming for a Senior Engineer role at a FAANG company or joining a high-growth startup, mastering the system design interview is crucial. In this playbook, I will walk you through exactly what interviewers are looking for, the structured framework to use, and the core concepts you need to know.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        What Is System Design?
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specific requirements. Think of it as creating the blueprint for a house before you start laying bricks. It's about achieving the right balance of functionality, performance, and reliability.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        <strong>Why do companies ask these questions?</strong> They aren't looking for someone who has memorized the architecture of Netflix or Twitter. They want to see:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-12">
                        <li><strong>How you handle ambiguity:</strong> Can you take a vague prompt ("Design YouTube") and break it down?</li>
                        <li><strong>Your trade-off awareness:</strong> Do you understand that every architectural decision has pros and cons?</li>
                        <li><strong>Your communication skills:</strong> Can you lead a technical discussion and defend your choices?</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        The Framework: A Structured Approach
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        The biggest mistake candidates make is jumping straight to the whiteboard and drawing a database. A system design interview is a conversation, and structure is your best friend.
                    </p>
                    <FrameworkDiagram />

                    <h3 className="text-2xl font-serif font-bold text-slate-800 mt-10 mb-4">
                        Step 1: Clarify Requirements (The Most Important Step)
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        The very first thing you must do is gather information and understand the needs of the user. Define the scope—what the system should do, and equally importantly, <em>what it should not do</em>. Ask these questions before you draw a single box:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">The Clarifying Checklist</h4>
                        <ul className="space-y-2 text-slate-700">
                            <li>🎯 <strong>Who are the users?</strong> (e.g., enterprise clients, consumers, internal tools)</li>
                            <li>🎯 <strong>What do they need?</strong> (Core features only)</li>
                            <li>🎯 <strong>How many users do we need to handle?</strong> (DAU/MAU)</li>
                            <li>🎯 <strong>What is the expected input and output?</strong> (e.g., video upload vs text tweet)</li>
                            <li>🎯 <strong>What is the read-to-write ratio?</strong> (Crucial for database choice)</li>
                            <li>🎯 <strong>How much data do we need to handle?</strong> (Storage estimates)</li>
                            <li>🎯 <strong>How many requests per second (RPS)?</strong> (Throughput estimates)</li>
                        </ul>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        <em>Pro Tip:</em> If you are asked to design an improvement to an existing system, briefly ask about the constraints of the current system. What went well? What didn't?
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        Divide your requirements into <strong>Functional</strong> (what the system does, e.g., "users can upload images") and <strong>Non-Functional</strong> (how the system behaves, e.g., "highly available, low latency").
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        The Core Building Blocks
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Once you've scoped the problem, it's time to create the high-level diagram. Almost every scalable web architecture starts with a variation of this fundamental flow:
                    </p>
                    <HighLevelArchDiagram />

                    <h3 className="text-2xl font-serif font-bold text-slate-800 mt-10 mb-4">
                        Databases: SQL vs NoSQL
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Choosing the right database is usually the most heavily scrutinized decision in the interview. You must justify your choice based on the data schema, scale, and the read/write ratio you identified in Step 1.
                    </p>
                    <DatabaseComparisonTable />

                    <h3 className="text-2xl font-serif font-bold text-slate-800 mt-10 mb-4">
                        Caching Strategies
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Caching is the standard answer to "how do we reduce latency and database load?" But interviewers will push you on <em>how</em> you cache.
                    </p>
                    <ReadWriteFlowDiagram />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-12">
                        <li><strong>Cache Aside (Read-Through):</strong> The application checks the cache first. If it's a miss, it queries the DB, returns the data, and populates the cache. Great for read-heavy workloads.</li>
                        <li><strong>Write-Through:</strong> Data is written to the cache and the database at the same time. Ensures data consistency but adds latency to write operations.</li>
                        <li><strong>Eviction Policies:</strong> Mention how you manage a full cache (e.g., LRU - Least Recently Used).</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Example Walkthrough: Design a URL Shortener
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Let's apply the framework to a classic question: Design a URL Shortener like Bitly.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>1. Requirements:</strong> We need to generate a short URL for a long URL. When a user clicks the short URL, they redirect to the long one. It's read-heavy (100:1 read/write ratio). We need high availability.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>2. Estimations:</strong> If we have 100 million new URLs a month, and we store them for 10 years, that's 12 billion records. A NoSQL database is a good fit.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>3. High-Level Design:</strong>
                    </p>
                    <UrlShortenerDiagram />
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        <strong>4. Deep Dive &amp; Bottlenecks:</strong> If generating a unique ID on the fly requires checking the database for collisions, writes will be slow. We introduce a <strong>Key Generation Service</strong> that pre-generates unique short links and holds them in memory, guaranteeing fast, collision-free writes. We also add a Redis cache for the most frequently accessed short links.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Common Mistakes to Avoid
                    </h2>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                        <ul className="space-y-4 text-slate-800">
                            <li>❌ <strong>Solving the wrong problem:</strong> Starting to design before clarifying the requirements.</li>
                            <li>❌ <strong>Using buzzwords without depth:</strong> Saying "We'll use Kafka" but failing to explain why a message queue is needed or how partitions work.</li>
                            <li>❌ <strong>Designing for impossible scale on day one:</strong> Sometimes a simple Postgres database is the right answer. Over-engineering is a red flag.</li>
                            <li>❌ <strong>Ignoring bottlenecks:</strong> The interviewer wants you to find the flaws in your own design. Always ask yourself: "What happens if this component fails?"</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Final Thoughts
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        A System Design interview is an opportunity to showcase your experience, pragmatism, and communication. Remember to continuously refine the diagram, reiterate requirements until they satisfy the specifications, document your design clearly on the whiteboard, and discuss how you would monitor and improve the system in production.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Don't aim for a perfect architecture—because in reality, it doesn't exist. Aim for an architecture where you understand all the trade-offs you've made.
                    </p>
                </div>

                <ShareWidget />
                <ReactionWidget slug="system-design-interview-guide" />
                <BlogComments />
            </article>
        </div>
    );
};

export default BlogPostSystemDesignInterview;
