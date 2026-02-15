import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ReadProgress from '../components/ReadProgress';
import ReactionWidget from '../components/ReactionWidget';
import ShareWidget from '../components/ShareWidget';
import BlogComments from '../components/BlogComments';

/* ─────────────────────────────────────────────
   Diagram 1 – The Big Picture Interconnection
───────────────────────────────────────────── */
const BigPictureDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Distributed Systems Core Concepts</p>
        <svg viewBox="0 0 560 250" className="w-full max-w-2xl mx-auto block" aria-label="Distributed Systems concepts interconnection">
            {/* Center Node */}
            <circle cx="280" cy="125" r="45" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4"/>
            <text x="280" y="129" textAnchor="middle" fontSize="12" fontWeight="700" fill="#475569">SYSTEM</text>
            
            {/* Top Left: Scalability */}
            <circle cx="150" cy="60" r="35" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
            <text x="150" y="64" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0284c7">Scalability</text>
            
            {/* Top Right: Reliability */}
            <circle cx="410" cy="60" r="35" fill="#dcfce7" stroke="#4ade80" strokeWidth="2"/>
            <text x="410" y="64" textAnchor="middle" fontSize="10" fontWeight="700" fill="#166534">Reliability</text>

            {/* Middle Left: Throughput */}
            <circle cx="100" cy="125" r="35" fill="#f3e8ff" stroke="#c084fc" strokeWidth="2"/>
            <text x="100" y="129" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7e22ce">Throughput</text>

            {/* Middle Right: Latency */}
            <circle cx="460" cy="125" r="35" fill="#ffedd5" stroke="#fdba74" strokeWidth="2"/>
            <text x="460" y="129" textAnchor="middle" fontSize="10" fontWeight="700" fill="#c2410c">Latency</text>

            {/* Bottom Left: Consistency */}
            <circle cx="150" cy="190" r="35" fill="#fee2e2" stroke="#f87171" strokeWidth="2"/>
            <text x="150" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="#991b1b">Consistency</text>

            {/* Bottom Right: Availability */}
            <circle cx="410" cy="190" r="35" fill="#e0e7ff" stroke="#818cf8" strokeWidth="2"/>
            <text x="410" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3730a3">Availability</text>

            {/* Lines to Center */}
            <line x1="180" y1="78" x2="242" y2="105" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3"/>
            <line x1="380" y1="78" x2="318" y2="105" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3"/>
            <line x1="135" y1="125" x2="235" y2="125" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3"/>
            <line x1="425" y1="125" x2="325" y2="125" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3"/>
            <line x1="180" y1="172" x2="242" y2="145" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3"/>
            <line x1="380" y1="172" x2="318" y2="145" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3"/>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Every design decision shifts the balance between these six forces.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 2 – Vertical vs Horizontal Scaling
───────────────────────────────────────────── */
const ScalingDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Scaling Strategies</p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Vertical Scaling */}
            <svg viewBox="0 0 250 180" className="w-full max-w-xs block" aria-label="Vertical Scaling">
                <rect x="0" y="0" width="250" height="180" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
                <text x="125" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">Vertical Scaling (Scale Up)</text>
                
                {/* Small Box */}
                <rect x="40" y="80" width="40" height="60" rx="4" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5"/>
                <text x="60" y="105" textAnchor="middle" fontSize="10" fill="#0284c7">8GB</text>
                <text x="60" y="120" textAnchor="middle" fontSize="9" fill="#0284c7">2 Core</text>

                {/* Arrow */}
                <path d="M 95 110 L 140 110" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr-scale)"/>
                <text x="117" y="100" textAnchor="middle" fontSize="9" fill="#64748b">Upgrade</text>

                {/* Big Box */}
                <rect x="155" y="50" width="60" height="90" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
                <text x="185" y="90" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1d4ed8">32GB</text>
                <text x="185" y="110" textAnchor="middle" fontSize="10" fill="#1d4ed8">8 Core</text>
            </svg>

            {/* Horizontal Scaling */}
            <svg viewBox="0 0 250 180" className="w-full max-w-xs block" aria-label="Horizontal Scaling">
                <rect x="0" y="0" width="250" height="180" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
                <text x="125" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">Horizontal Scaling (Scale Out)</text>
                
                {/* Existing Server */}
                <rect x="30" y="80" width="40" height="60" rx="4" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
                <text x="50" y="105" textAnchor="middle" fontSize="10" fill="#166534">8GB</text>
                
                {/* Arrow */}
                <path d="M 80 110 L 110 110" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr-scale)"/>
                <text x="95" y="100" textAnchor="middle" fontSize="9" fill="#64748b">Add</text>

                {/* Servers Group */}
                <rect x="120" y="80" width="40" height="60" rx="4" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
                <text x="140" y="105" textAnchor="middle" fontSize="10" fill="#166534">8GB</text>

                <rect x="165" y="80" width="40" height="60" rx="4" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
                <text x="185" y="105" textAnchor="middle" fontSize="10" fill="#166534">8GB</text>

                <rect x="210" y="80" width="40" height="60" rx="4" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3"/>
                <text x="230" y="105" textAnchor="middle" fontSize="10" fill="#166534">...</text>
                
                {/* Load Balancer */}
                <rect x="120" y="45" width="130" height="20" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
                <text x="185" y="58" textAnchor="middle" fontSize="9" fill="#475569">Load Balancer</text>
                <line x1="140" y1="65" x2="140" y2="80" stroke="#cbd5e1" strokeWidth="1"/>
                <line x1="185" y1="65" x2="185" y2="80" stroke="#cbd5e1" strokeWidth="1"/>
                <line x1="230" y1="65" x2="230" y2="80" stroke="#cbd5e1" strokeWidth="1"/>

                <defs>
                    <marker id="arr-scale" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                    </marker>
                </defs>
            </svg>
        </div>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 3 – Network Partition (CAP)
───────────────────────────────────────────── */
const CAPNetworkPartitionDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Handling Network Partitions (The Bank ATM Dilemma)</p>
        <svg viewBox="0 0 560 160" className="w-full max-w-2xl mx-auto block" aria-label="Network Partition diagram">
            {/* ATM 1 */}
            <rect x="100" y="40" width="80" height="100" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
            <text x="140" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">ATM 1</text>
            <text x="140" y="110" textAnchor="middle" fontSize="10" fill="#4f46e5">(Balance: $100)</text>

            {/* ATM 2 */}
            <rect x="380" y="40" width="80" height="100" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
            <text x="420" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3730a3">ATM 2</text>
            <text x="420" y="110" textAnchor="middle" fontSize="10" fill="#4f46e5">(Balance: $100)</text>

            {/* Network Connection Broken */}
            <line x1="190" y1="90" x2="370" y2="90" stroke="#f87171" strokeWidth="3" strokeDasharray="6"/>
            
            {/* The 'X' indicating breakage */}
            <line x1="270" y1="80" x2="290" y2="100" stroke="#ef4444" strokeWidth="3"/>
            <line x1="290" y1="80" x2="270" y2="100" stroke="#ef4444" strokeWidth="3"/>
            
            <text x="280" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">Network Disconnected!</text>
            <text x="280" y="130" textAnchor="middle" fontSize="10" fill="#475569">Choose one:</text>
            <text x="280" y="145" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">1) Refuse transaction (Consistency) OR 2) Allow transaction (Availability)</text>
        </svg>
    </div>
);

/* ─────────────────────────────────────────────
   Comparison Table Component
───────────────────────────────────────────── */
const ComparisonTable = ({ title, col1Header, col2Header, rows }) => (
    <div className="my-10 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-sm text-left">
            <thead className="bg-slate-800 text-white">
                <tr>
                    <th className="px-5 py-3 font-semibold w-1/4">{title}</th>
                    <th className="px-5 py-3 font-semibold">{col1Header}</th>
                    <th className="px-5 py-3 font-semibold">{col2Header}</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white border-b border-slate-100" : "bg-slate-50 border-b border-slate-100"}>
                        <td className="px-5 py-3 font-semibold text-slate-800">{row.feature}</td>
                        <td className="px-5 py-3 text-slate-600">{row.val1}</td>
                        <td className="px-5 py-3 text-slate-600">{row.val2}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


const BlogPostDistributedSystems = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <ReadProgress />
            <SEO
                title="Distributed Systems Fundamentals: A Developer's Guide"
                description="Understand Scalability, Reliability, Latency, Throughput, Availability, and Consistency. A complete guide to System Design trade-offs."
                url="https://pugalvini.github.io/blog/distributed-systems-fundamentals"
                image="https://pugalvini.github.io/og-distributed-systems.jpg"
            />
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">System Design</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Architecture</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Fundamentals</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Distributed Systems Fundamentals: A Developer's Guide to Scale and Resiliency
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        Scalability, Reliability, Latency, Throughput, Availability, and Consistency—decoded and explained through the lens of real-world trade-offs.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>February 15, 2026</span>
                        <span>•</span>
                        <span>12 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        If you've ever prepared for a System Design interview, or had to architect a backend from scratch, you've undoubtedly collided with the "Big Six" buzzwords: <strong>Scalability, Reliability, Availability, Latency, Throughput, and Consistency</strong>.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        Many developers memorize the dictionary definitions of these terms just to pass an interview. But in practice, experienced engineers know that these concepts do not exist in a vacuum—they are heavily intertwined. Optimizing for one almost always costs you another. Let's peel back the layers and look at the real-world trade-offs you need to make when designing scalable systems.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        The Big Picture
                    </h2>
                    <BigPictureDiagram />
                    <p className="text-lg text-slate-700 leading-relaxed mb-12 mt-6">
                        Imagine building a house. You can't have a giant, cathedral-like roof (Scalability) without a stronger foundation (Reliability). You can't widen the entrance doors to let more people in at once (Throughput) without it taking longer for them to travel through the hallways (Latency). Distributed systems are a balancing act.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        1. Scalability: Handling the Crowd
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Scalability is the system's ability to handle an increasing amount of load by adding resources. When traffic spikes, your system shouldn't crash; it should expand. 
                    </p>
                    <ScalingDiagram />
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-8 mt-4">
                        <li><strong>Vertical Scaling (Scale Up):</strong> Throwing more money at a single machine. Increasing RAM from 8GB to 32GB, or upgrading the CPU cores. It's incredibly simple to implement (just click a button in AWS), but it has a hard limit. You can only buy a server so big, and it remains a single point of failure.</li>
                        <li><strong>Horizontal Scaling (Scale Out):</strong> Adding <em>more</em> machines to the pool. Instead of one giant server, you have ten small ones sitting behind a Load Balancer. This theoretically allows infinite scale.</li>
                    </ul>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-12">
                        <p className="text-lg text-slate-700 font-semibold mb-2">💡 The Golden Rule of Horizontal Scaling</p>
                        <p className="text-slate-700">To scale horizontally, your application servers must be <strong>stateless</strong>. If Server A stores user session data in its local memory, and the Load Balancer routes the user's next request to Server B, the user will be logged out. Move state to a centralized cache (like Redis) or database!</p>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        2 &amp; 3. Reliability vs. Availability (The Unbreakable Duo)
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        People often use these two interchangeably, but they measure different things.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>Reliability:</strong> The probability that a system will operate without failure over a specific period. It means the system handles errors gracefully, doesn't corrupt data, and we can <em>literally rely on it</em>. It's tied to Mean Time Between Failures (MTBF).</li>
                        <li><strong>Availability:</strong> The percentage of time the system is up and running, ready to serve requests. Often expressed in "nines" (e.g., 99.99% uptime).</li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        <strong>Can a system be Highly Available but Unreliable?</strong> Absolutely. Imagine a buggy server that crashes every 5 minutes (low reliability). But, you have an automated script that instantly reboots it in 2 seconds. Because the downtime is so short, the total uptime percentage at the end of the year remains very high (high availability).
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        4 &amp; 5. Latency vs. Throughput (The Speed Metrics)
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        These two dictate the performance of your system.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>Latency:</strong> The time it takes to serve a <em>single request</em>. Measured in milliseconds (ms). If a user clicks a button, how long until the page loads?</li>
                        <li><strong>Throughput:</strong> The number of requests the system can process per unit of time (e.g., Requests Per Second, or RPS).</li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        <strong>The Trade-off:</strong> High throughput can severely increase latency. Think of a highway. The speed limit (latency) might be 60mph. But during rush hour, when thousands of cars try to enter the highway at once (high throughput), traffic jams form (queues). As the queues fill up, the time it takes for a single car to reach its destination (latency) skyrockets. 
                    </p>
                    <ComparisonTable 
                        title="Metric"
                        col1Header="Latency"
                        col2Header="Throughput"
                        rows={[
                            { feature: "Definition", val1: "Time to complete a single action", val2: "Number of actions completed over time" },
                            { feature: "Analogy", val1: "Time it takes water to travel through a pipe", val2: "Volume of water exiting the pipe per minute" },
                            { feature: "Unit", val1: "Milliseconds (ms)", val2: "Requests Per Second (RPS)" },
                            { feature: "Optimization", val1: "Caching, CDNs, faster algorithms", val2: "Adding more servers, parallel processing" }
                        ]}
                    />

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        6. Consistency: The Data Truth
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Consistency ensures that once a piece of data is written successfully, any subsequent read operation will return that exact updated data.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        When you have one database, consistency is easy. But at scale, data is replicated across multiple servers to ensure Availability. This brings us to the famous <strong>CAP Theorem</strong>.
                    </p>
                    <CAPNetworkPartitionDiagram />
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Imagine a bank with two ATMs (servers) connected by a network. You deposit $100 in ATM 1. Before ATM 1 can sync the new balance to ATM 2, the network cable is cut (a <strong>Network Partition - P</strong>). 
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        You immediately run to ATM 2 and try to withdraw the $100. What should the system do?
                        <br/><br/>
                        <strong>Choice A (Favor Consistency):</strong> ATM 2 realizes it can't talk to ATM 1. It refuses your withdrawal to prevent you from taking money you might not have. The system is Consistent, but <strong>not Available</strong>.
                        <br/>
                        <strong>Choice B (Favor Availability):</strong> ATM 2 allows the transaction using the old balance it has cached. You get your money (highly Available), but the system is <strong>not Consistent</strong> (you might overdraw).
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Real Interview Example: Designing a Chat App
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Let's say an interviewer asks you to design WhatsApp. How do these concepts dictate your choices?
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-12">
                        <li><strong>Latency vs Throughput:</strong> A chat app needs real-time delivery. You prioritize ultra-low <strong>Latency</strong> over bulk throughput. You choose WebSockets instead of HTTP polling so the connection stays open.</li>
                        <li><strong>Availability vs Consistency:</strong> If the central database is momentarily slow, should a user be blocked from sending a message? No. We favor <strong>Availability</strong>. We allow the message to be queued locally on the phone or in a message broker, and deliver it eventually. (Eventual Consistency).</li>
                        <li><strong>Scalability:</strong> Since millions of users are chatting, we can't route all messages through one server. We scale horizontally by hashing user IDs to assign them to specific chat servers.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Common Mistakes to Avoid
                    </h2>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                        <ul className="space-y-4 text-slate-800">
                            <li>❌ <strong>Assuming "Scalable" means "Highly Available".</strong> You can have 1,000 servers (scalable), but if they all rely on one single master database that goes down, your availability is 0%.</li>
                            <li>❌ <strong>Believing Eventual Consistency is always bad.</strong> Almost all modern large-scale systems (like Instagram likes, YouTube views) rely on eventual consistency to stay fast. Only strict financial or inventory systems require strong consistency everywhere.</li>
                            <li>❌ <strong>Optimizing average latency instead of tail latency.</strong> If 99% of your requests take 10ms, but 1% take 5 seconds, those 1% of users are having a terrible experience. Always monitor the p99 latency.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Key Takeaways
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-12">
                        <li>Scale horizontally for capacity, scale vertically for simplicity.</li>
                        <li>Reliability prevents failures; Availability handles them quickly.</li>
                        <li>High throughput causes queues, and queues increase latency.</li>
                        <li>In distributed systems, you must choose what happens when the network fails (CAP Theorem).</li>
                    </ul>
                </div>

                <ShareWidget />
                <ReactionWidget slug="distributed-systems-fundamentals" />
                <BlogComments />
            </article>
        </div>
    );
};

export default BlogPostDistributedSystems;
