import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ReadProgress from '../components/ReadProgress';
import ReactionWidget from '../components/ReactionWidget';
import ShareWidget from '../components/ShareWidget';
import BlogComments from '../components/BlogComments';

/* ─────────────────────────────────────────────
   Diagram 1 – Token Bucket
───────────────────────────────────────────── */
const TokenBucketDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">How Token Bucket Works</p>
        <svg viewBox="0 0 560 220" className="w-full max-w-2xl mx-auto block" aria-label="Token Bucket diagram">
            {/* ── Refill source ── */}
            <rect x="10" y="10" width="110" height="44" rx="10" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.5"/>
            <text x="65" y="28" textAnchor="middle" fontSize="11" fill="#0369a1" fontWeight="600">Token Refill</text>
            <text x="65" y="46" textAnchor="middle" fontSize="10" fill="#0284c7">+1 token / sec</text>

            {/* ── Arrow refill → bucket ── */}
            <line x1="120" y1="32" x2="168" y2="32" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>
            <text x="144" y="26" textAnchor="middle" fontSize="9" fill="#64748b">refill</text>

            {/* ── Bucket ── */}
            <rect x="170" y="10" width="120" height="140" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2"/>
            <text x="230" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Bucket</text>
            <text x="230" y="44" textAnchor="middle" fontSize="9" fill="#64748b">capacity = 5</text>
            {/* tokens inside */}
            {[0,1,2,3].map(i => (
                <circle key={i} cx={197 + (i%2)*36} cy={75 + Math.floor(i/2)*36} r="14" fill="#fde68a" stroke="#fbbf24" strokeWidth="1.5"/>
            ))}
            {[0,1,2,3].map(i => (
                <text key={i} x={197 + (i%2)*36} y={80 + Math.floor(i/2)*36} textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="700">T</text>
            ))}
            <text x="230" y="165" textAnchor="middle" fontSize="9" fill="#94a3b8">4 tokens left</text>

            {/* ── Arrow bucket → request processor ── */}
            <line x1="290" y1="80" x2="348" y2="80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>
            <text x="319" y="72" textAnchor="middle" fontSize="9" fill="#64748b">consume 1</text>

            {/* ── Request processor ── */}
            <rect x="350" y="55" width="100" height="50" rx="10" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5"/>
            <text x="400" y="76" textAnchor="middle" fontSize="11" fill="#166534" fontWeight="600">Request</text>
            <text x="400" y="94" textAnchor="middle" fontSize="11" fill="#16a34a">✓ Allowed</text>

            {/* ── Empty bucket scenario ── */}
            <rect x="460" y="10" width="85" height="60" rx="10" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.5"/>
            <text x="502" y="32" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="600">Empty</text>
            <text x="502" y="50" textAnchor="middle" fontSize="10" fill="#dc2626">Bucket</text>
            <text x="502" y="64" textAnchor="middle" fontSize="10" fill="#dc2626">→ Dropped</text>

            {/* arrowhead marker */}
            <defs>
                <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Requests consume tokens. Tokens refill at a constant rate. Burst traffic is allowed while tokens exist.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 2 – Leaking Bucket
───────────────────────────────────────────── */
const LeakingBucketDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">How Leaking Bucket Works</p>
        <svg viewBox="0 0 560 230" className="w-full max-w-2xl mx-auto block" aria-label="Leaking Bucket diagram">
            <defs>
                <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>

            {/* ── Burst requests (left) ── */}
            {[0,1,2,3,4].map(i => (
                <g key={i}>
                    <rect x="10" y={10 + i*38} width="80" height="30" rx="7" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
                    <text x="50" y={30 + i*38} textAnchor="middle" fontSize="10" fill="#1e40af">Req {i+1}</text>
                </g>
            ))}
            <text x="50" y="215" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="600">Burst Traffic</text>

            {/* ── Arrow into queue ── */}
            <line x1="90" y1="95" x2="138" y2="95" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)"/>

            {/* ── Queue (bucket) ── */}
            <rect x="140" y="20" width="110" height="170" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2"/>
            <text x="195" y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">Queue</text>
            <text x="195" y="54" textAnchor="middle" fontSize="9" fill="#64748b">(Bucket)</text>
            {[0,1,2,3].map(i => (
                <rect key={i} x="158" y={65 + i*30} width="74" height="22" rx="5" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1"/>
            ))}
            {[0,1,2,3].map(i => (
                <text key={i} x="195" y={81 + i*30} textAnchor="middle" fontSize="9" fill="#0369a1">queued req</text>
            ))}
            {/* overflow */}
            <rect x="158" y="190" width="74" height="22" rx="5" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" strokeDasharray="4"/>
            <text x="195" y="205" textAnchor="middle" fontSize="9" fill="#dc2626">overflow → ✗</text>

            {/* ── Constant drip arrow ── */}
            <line x1="250" y1="105" x2="318" y2="105" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr2)"/>
            <text x="284" y="97" textAnchor="middle" fontSize="9" fill="#64748b">constant rate</text>
            <text x="284" y="120" textAnchor="middle" fontSize="9" fill="#94a3b8">1 req / sec</text>

            {/* ── Backend ── */}
            <rect x="320" y="80" width="100" height="50" rx="10" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5"/>
            <text x="370" y="100" textAnchor="middle" fontSize="11" fill="#166534" fontWeight="600">Backend</text>
            <text x="370" y="118" textAnchor="middle" fontSize="10" fill="#16a34a">Smooth flow ✓</text>

            {/* ── Drop label ── */}
            <rect x="420" y="180" width="120" height="36" rx="8" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.5"/>
            <text x="480" y="198" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="600">Queue Full?</text>
            <text x="480" y="212" textAnchor="middle" fontSize="10" fill="#b91c1c">New req dropped</text>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Traffic enters at any rate. Requests leave at a fixed, constant rate. Overflow is discarded.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 3 – Fixed Window Counter
───────────────────────────────────────────── */
const FixedWindowDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Fixed Window Counter &amp; The Boundary Effect</p>
        <svg viewBox="0 0 560 190" className="w-full max-w-2xl mx-auto block" aria-label="Fixed Window Counter diagram">
            <defs>
                <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>

            {/* timeline axis */}
            <line x1="30" y1="80" x2="530" y2="80" stroke="#e2e8f0" strokeWidth="2"/>

            {/* Window 1 */}
            <rect x="30" y="30" width="225" height="50" rx="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" opacity="0.7"/>
            <text x="142" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">Window 1</text>
            <text x="142" y="68" textAnchor="middle" fontSize="9" fill="#2563eb">00:00 → 01:00</text>
            <text x="30" y="100" fontSize="9" fill="#64748b">00:00</text>
            {/* 8 requests near boundary */}
            {[0,1,2,3,4,5,6,7].map(i => (
                <circle key={i} cx={130 + i*11} cy={112} r="5" fill="#3b82f6" opacity="0.85"/>
            ))}
            <text x="174" y="130" textAnchor="middle" fontSize="9" fill="#2563eb" fontWeight="600">8 reqs at :59s</text>

            {/* Window boundary line */}
            <line x1="255" y1="20" x2="255" y2="145" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="255" y="16" textAnchor="middle" fontSize="9" fill="#f43f5e" fontWeight="700">RESET</text>
            <text x="255" y="148" textAnchor="middle" fontSize="9" fill="#f43f5e">01:00</text>

            {/* Window 2 */}
            <rect x="255" y="30" width="275" height="50" rx="8" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5" opacity="0.7"/>
            <text x="392" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#166534">Window 2</text>
            <text x="392" y="68" textAnchor="middle" fontSize="9" fill="#16a34a">01:00 → 02:00</text>
            {/* 8 more requests right after boundary */}
            {[0,1,2,3,4,5,6,7].map(i => (
                <circle key={i} cx={268 + i*11} cy={112} r="5" fill="#22c55e" opacity="0.85"/>
            ))}
            <text x="352" y="130" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="600">8 reqs at 01:01s</text>

            {/* Danger zone highlight */}
            <rect x="176" y="95" width="155" height="48" rx="6" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4"/>
            <text x="253" y="155" textAnchor="middle" fontSize="9" fill="#f43f5e" fontWeight="600">⚠ 16 reqs in &lt;2 seconds! (limit was 10/window)</text>

            <text x="530" y="100" textAnchor="end" fontSize="9" fill="#64748b">02:00</text>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Counter resets at each window boundary — allowing a double burst of traffic right around the edge.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 4 – Sliding Window Log
───────────────────────────────────────────── */
const SlidingWindowLogDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Sliding Window Log</p>
        <svg viewBox="0 0 560 200" className="w-full max-w-2xl mx-auto block" aria-label="Sliding Window Log diagram">
            <defs>
                <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>

            {/* Timeline */}
            <line x1="30" y1="95" x2="530" y2="95" stroke="#e2e8f0" strokeWidth="2" markerEnd="url(#arr4)"/>
            <text x="30" y="115" fontSize="9" fill="#64748b">t=0</text>
            <text x="530" y="115" textAnchor="end" fontSize="9" fill="#64748b">now</text>

            {/* Sliding window bracket */}
            <rect x="195" y="70" width="335" height="25" rx="5" fill="#fde68a" opacity="0.4" stroke="#fbbf24" strokeWidth="1.5"/>
            <text x="362" y="86" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="600">← Sliding Window (last 60s) →</text>

            {/* Old expired timestamps */}
            {[40, 80, 130].map((x, i) => (
                <g key={i}>
                    <circle cx={x} cy={95} r="7" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
                    <line x1={x} y1={82} x2={x} y2={70} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3"/>
                    <text x={x} y={63} textAnchor="middle" fontSize="8" fill="#94a3b8">expired</text>
                </g>
            ))}
            {/* big X over expired */}
            {[40, 80, 130].map((x, i) => (
                <text key={i} x={x} y={99} textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="700">✕</text>
            ))}

            {/* Valid timestamps in window */}
            {[220, 280, 340, 400, 460].map((x, i) => (
                <g key={i}>
                    <circle cx={x} cy={95} r="7" fill="#a5f3fc" stroke="#22d3ee" strokeWidth="1.5"/>
                    <line x1={x} y1={108} x2={x} y2={130} stroke="#22d3ee" strokeWidth="1"/>
                    <text x={x} y={142} textAnchor="middle" fontSize="8" fill="#0e7490">t={i+1}</text>
                </g>
            ))}

            {/* New request */}
            <circle cx="510" cy="95" r="9" fill="#f0abfc" stroke="#e879f9" strokeWidth="2"/>
            <text x="510" y="99" textAnchor="middle" fontSize="9" fill="#86198f" fontWeight="700">?</text>
            <text x="510" y="158" textAnchor="middle" fontSize="8" fill="#86198f">new req</text>

            {/* Count */}
            <rect x="170" y="160" width="220" height="32" rx="8" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5"/>
            <text x="280" y="178" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">Count in window = 5 → ✓ Allow (limit: 10)</text>

            {/* Log entries label */}
            <text x="280" y="20" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="600">Timestamp Log: [expired…] [t1, t2, t3, t4, t5]</text>
            <text x="280" y="35" textAnchor="middle" fontSize="9" fill="#64748b">Stale entries are evicted on every new request</text>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Every request timestamp is stored. Old ones are removed. Highly accurate but memory-heavy.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 5 – Sliding Window Counter
───────────────────────────────────────────── */
const SlidingWindowCounterDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Sliding Window Counter (Hybrid Estimate)</p>
        <svg viewBox="0 0 560 210" className="w-full max-w-2xl mx-auto block" aria-label="Sliding Window Counter diagram">
            <defs>
                <marker id="arr5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
            </defs>

            {/* Previous window */}
            <rect x="30" y="30" width="200" height="60" rx="10" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
            <text x="130" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b21b6">Previous Window</text>
            <text x="130" y="68" textAnchor="middle" fontSize="10" fill="#6d28d9">Count = 8 requests</text>
            <text x="130" y="83" textAnchor="middle" fontSize="9" fill="#7c3aed">00:00 – 01:00</text>

            {/* Current window */}
            <rect x="265" y="30" width="265" height="60" rx="10" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.5"/>
            <text x="397" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#075985">Current Window</text>
            <text x="397" y="68" textAnchor="middle" fontSize="10" fill="#0369a1">Count = 3 requests</text>
            <text x="397" y="83" textAnchor="middle" fontSize="9" fill="#0284c7">01:00 – 02:00</text>

            {/* Overlap / now pointer */}
            <line x1="265" y1="25" x2="265" y2="155" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="265" y="20" textAnchor="middle" fontSize="9" fill="#64748b">01:00</text>

            {/* "Now" = 75% into current window */}
            <line x1="464" y1="25" x2="464" y2="155" stroke="#f43f5e" strokeWidth="2"/>
            <text x="464" y="20" textAnchor="middle" fontSize="9" fill="#f43f5e" fontWeight="700">NOW</text>
            <text x="464" y="165" textAnchor="middle" fontSize="9" fill="#f43f5e">75% through</text>

            {/* Weight boxes */}
            <rect x="30" y="115" width="200" height="36" rx="8" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1"/>
            <text x="130" y="136" textAnchor="middle" fontSize="10" fill="#5b21b6" fontWeight="600">25% × 8 = 2.0</text>
            <text x="130" y="148" textAnchor="middle" fontSize="8" fill="#7c3aed">(remaining overlap)</text>

            <rect x="265" y="115" width="265" height="36" rx="8" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1"/>
            <text x="397" y="136" textAnchor="middle" fontSize="10" fill="#075985" fontWeight="600">100% × 3 = 3.0</text>
            <text x="397" y="148" textAnchor="middle" fontSize="8" fill="#0369a1">(current count)</text>

            {/* Plus + result */}
            <text x="280" y="175" fontSize="13" fill="#334155" fontWeight="700" textAnchor="middle">+</text>

            <rect x="160" y="165" width="230" height="36" rx="10" fill="#dcfce7" stroke="#86efac" strokeWidth="2"/>
            <text x="275" y="183" textAnchor="middle" fontSize="11" fill="#166534" fontWeight="700">Estimated total = 5.0</text>
            <text x="275" y="197" textAnchor="middle" fontSize="9" fill="#16a34a">≤ 10 limit → ✓ Request Allowed</text>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Only two counters stored (previous &amp; current window). Weighted estimate smooths the boundary effect.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Comparison Table
───────────────────────────────────────────── */
const ComparisonTable = () => (
    <div className="my-10 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-sm text-left">
            <thead className="bg-slate-800 text-white">
                <tr>
                    <th className="px-5 py-3 font-semibold">Algorithm</th>
                    <th className="px-5 py-3 font-semibold">Memory</th>
                    <th className="px-5 py-3 font-semibold">Burst Allowed?</th>
                    <th className="px-5 py-3 font-semibold">Accuracy</th>
                    <th className="px-5 py-3 font-semibold">Best For</th>
                </tr>
            </thead>
            <tbody>
                {[
                    ['Token Bucket',           'Low',    '✅ Yes',  'Moderate',  'Flexible APIs, SDKs'],
                    ['Leaking Bucket',         'Low',    '❌ No',   'High',      'Stable downstream services'],
                    ['Fixed Window Counter',   'Very Low','⚠️ Edge', 'Low',      'Simple, low-stakes limits'],
                    ['Sliding Window Log',     'High',   '❌ No',   'Very High', 'Strict, accuracy-critical'],
                    ['Sliding Window Counter', 'Low',    '⚠️ Mild', 'High',      'Modern APIs (Stripe, Redis)'],
                ].map(([algo, mem, burst, acc, best], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-5 py-3 font-semibold text-slate-800">{algo}</td>
                        <td className="px-5 py-3 text-slate-600">{mem}</td>
                        <td className="px-5 py-3">{burst}</td>
                        <td className="px-5 py-3 text-slate-600">{acc}</td>
                        <td className="px-5 py-3 text-slate-600">{best}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

/* ─────────────────────────────────────────────
   Main Blog Component
───────────────────────────────────────────── */
const BlogPostRateLimit = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <ReadProgress />
            <SEO
                title="Rate Limiting Strategies at Scale"
                description="A deep dive into token bucket, sliding window, and fixed window rate limiting algorithms — with real-world tradeoffs and implementation patterns."
                url="https://pugalvini.github.io/blog/rate-limiting-strategies"
                image="https://pugalvini.github.io/og-rate-limit.jpg"
            />
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">System Design</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Backend</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Architecture</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Mastering Rate Limiting: 5 Algorithms You Need to Know
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        A conceptual guide to protecting your systems from being overwhelmed.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>September 6, 2025</span>
                        <span>•</span>
                        <span>8 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Imagine a popular nightclub with a bouncer at the door. If everyone tries to rush in at once, the club will be overcrowded, the bartenders won't be able to serve anyone, and the experience will be ruined for everyone. The bouncer's job is to let people in at a manageable pace.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        In the world of software engineering, <strong>Rate Limiting</strong> is our bouncer. It controls the rate of traffic sent by a client or a service. Rate limiting protects your APIs from DDoS attacks, prevents abuse, reduces costs, and ensures fair usage among users.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        But how does the bouncer decide who gets in and who gets turned away? Let's explore the 5 most common rate limiting algorithms, using simple analogies and diagrams to understand how they work under the hood.
                    </p>

                    {/* ── Algorithm 1 ── */}
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        1. The Token Bucket
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> Imagine a bucket that holds arcade tokens. Every second, an attendant drops a new token into the bucket, up to a maximum capacity. When you want to play a game (send an API request), you must take a token out of the bucket. If the bucket is empty, you must wait.
                    </p>
                    <TokenBucketDiagram />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> Tokens are added to the bucket at a fixed rate. Each request consumes one token. If no tokens are available, the request is dropped.</li>
                        <li><strong>Pros:</strong> It allows for bursts of traffic. If you haven't made requests in a while, your bucket is full, and you can spend all those tokens at once. It's also very memory efficient.</li>
                        <li><strong>Cons:</strong> If bursts are too large, they can still overwhelm backend services if not tuned correctly.</li>
                    </ul>

                    {/* ── Algorithm 2 ── */}
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        2. The Leaking Bucket
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> Think of a funnel (the bucket) with a small hole at the bottom. You can pour water (requests) into the top of the funnel at any speed. However, the water only drips out the bottom (gets processed) at a constant, steady rate. If you pour water faster than it drips out, the funnel overflows (requests are dropped).
                    </p>
                    <LeakingBucketDiagram />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> Requests are added to a queue (the bucket). A processor pulls requests from the queue at a fixed rate. If the queue is full, new requests are discarded.</li>
                        <li><strong>Pros:</strong> It smooths out bursts of traffic, ensuring a perfectly stable outflow to your backend services.</li>
                        <li><strong>Cons:</strong> A sudden burst of traffic can fill up the queue with old requests, causing new, potentially more important requests to be dropped until the queue drains.</li>
                    </ul>

                    {/* ── Algorithm 3 ── */}
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        3. Fixed Window Counter
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> Imagine you are allowed 10 free coffees per hour. The coffee shop starts a timer at the top of the hour (e.g., 9:00 AM). They count every coffee you take. At exactly 10:00 AM, the counter resets to zero.
                    </p>
                    <FixedWindowDiagram />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> Time is divided into fixed windows (e.g., 1 minute). A counter is maintained for each window. If the counter exceeds the limit, requests are dropped until the next window begins.</li>
                        <li><strong>Pros:</strong> Very simple to implement and understand. Uses minimal memory.</li>
                        <li><strong>Cons:</strong> The "Boundary Effect". You could use all your quota in the last second of a window, and all your quota for the next window in the first second. This effectively allows twice the allowed rate of traffic in a very short burst around the window boundary.</li>
                    </ul>

                    {/* ── Algorithm 4 ── */}
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        4. Sliding Window Log
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> To fix the boundary effect, the coffee shop now writes down the exact timestamp of every coffee you order in a logbook. When you ask for a coffee, they look at the logbook, cross out any coffees ordered more than 60 minutes ago, and count what's left.
                    </p>
                    <SlidingWindowLogDiagram />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> The system keeps a precise log of the timestamp for every request. When a new request comes in, outdated timestamps are removed from the log. If the size of the log is within the limit, the request is allowed.</li>
                        <li><strong>Pros:</strong> Highly accurate. It completely eliminates the boundary effect problem of the Fixed Window approach.</li>
                        <li><strong>Cons:</strong> Extremely memory intensive. You have to store a timestamp for every single request, even if the request is eventually rejected.</li>
                    </ul>

                    {/* ── Algorithm 5 ── */}
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        5. Sliding Window Counter
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> This is a hybrid approach. The coffee shop uses fixed windows (e.g., hours), but instead of an exact log, they estimate. If you are 15 minutes into the current hour (25% of the way through), they take 75% of your coffees from the previous hour, add it to your coffees from the current hour, and check if that exceeds the limit.
                    </p>
                    <SlidingWindowCounterDiagram />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> It tracks request counts in fixed windows. When a request arrives, it calculates a weighted sum of the current window's count and the previous window's count based on how much time has passed in the current window.</li>
                        <li><strong>Pros:</strong> It's the best of both worlds. It smooths out the boundary effect while remaining highly memory efficient (only storing counts, not timestamps).</li>
                        <li><strong>Cons:</strong> It relies on an assumption that requests are evenly distributed within the previous window, which is an approximation, not perfect precision.</li>
                    </ul>

                    {/* ── Conclusion ── */}
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Conclusion: Which one should you use?
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Here's a quick summary to help you choose the right algorithm for your situation:
                    </p>
                    <ComparisonTable />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>Need to allow bursts? <strong>Token Bucket</strong>.</li>
                        <li>Need to protect a legacy backend from any spikes? <strong>Leaking Bucket</strong>.</li>
                        <li>Need a highly accurate, strict limit? <strong>Sliding Window Log</strong>.</li>
                        <li>Need a highly scalable, balanced approach (used by most modern systems)? <strong>Sliding Window Counter</strong>.</li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Understanding these concepts is the first step in designing resilient, scalable systems that can handle whatever the internet throws at them!
                    </p>
                </div>

                <ShareWidget />
                <ReactionWidget slug="rate-limiting-algorithms" />
                <BlogComments />
            </article>
        </div>
    );
};

export default BlogPostRateLimit;
