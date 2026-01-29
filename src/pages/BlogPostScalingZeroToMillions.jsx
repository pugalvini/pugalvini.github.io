import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ReadProgress from '../components/ReadProgress';
import ReactionWidget from '../components/ReactionWidget';
import ShareWidget from '../components/ShareWidget';
import BlogComments from '../components/BlogComments';

/* ─────────────────────────────────────────────
   Diagram 1 – Single Server Setup
───────────────────────────────────────────── */
const SingleServerDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Stage 1: Single Server Setup</p>
        <svg viewBox="0 0 560 160" className="w-full max-w-xl mx-auto block" aria-label="Single Server Setup diagram">
            {/* User / Client */}
            <circle cx="80" cy="80" r="20" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
            <text x="80" y="84" textAnchor="middle" fontSize="12" fill="#0284c7" fontWeight="bold">User</text>

            {/* DNS */}
            <rect x="220" y="20" width="80" height="40" rx="8" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.5"/>
            <text x="260" y="44" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="600">DNS Server</text>

            {/* The single server */}
            <rect x="350" y="40" width="160" height="100" rx="12" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2"/>
            <text x="430" y="60" textAnchor="middle" fontSize="12" fontWeight="700" fill="#334155">MyAwesomeApp.com</text>
            <text x="430" y="75" textAnchor="middle" fontSize="10" fill="#64748b">Single Server</text>
            
            <rect x="365" y="90" width="130" height="35" rx="6" fill="#fef9c3" stroke="#facc15" strokeWidth="1"/>
            <text x="430" y="112" textAnchor="middle" fontSize="11" fill="#854d0e">Web App + Database</text>

            {/* Arrows */}
            {/* User to DNS */}
            <path d="M 95 70 C 130 50, 180 40, 215 40" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)" strokeDasharray="4"/>
            <text x="160" y="40" textAnchor="middle" fontSize="9" fill="#64748b">1. IP request</text>
            
            {/* DNS to User */}
            <path d="M 215 45 C 180 55, 130 65, 95 75" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)" strokeDasharray="4"/>
            <text x="160" y="75" textAnchor="middle" fontSize="9" fill="#64748b">2. IP Address</text>

            {/* User to Server */}
            <line x1="105" y1="80" x2="340" y2="80" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arr-blue)"/>
            <text x="220" y="95" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="600">3. HTTP Request</text>

            <defs>
                <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
                </marker>
                <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8"/>
                </marker>
            </defs>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">In the beginning, everything runs on a single server. Simple, cheap, but risky.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 2 – Separation of Web and Database
───────────────────────────────────────────── */
const WebAndDbDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Stage 2: Separating Web &amp; DB Tiers</p>
        <svg viewBox="0 0 560 160" className="w-full max-w-xl mx-auto block" aria-label="Separation of Web and DB diagram">
            {/* User */}
            <circle cx="60" cy="80" r="20" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
            <text x="60" y="84" textAnchor="middle" fontSize="12" fill="#0284c7" fontWeight="bold">User</text>

            {/* Web Server */}
            <rect x="180" y="40" width="120" height="80" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="2"/>
            <text x="240" y="75" textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">Web Tier</text>
            <text x="240" y="90" textAnchor="middle" fontSize="10" fill="#15803d">(Stateless)</text>

            {/* DB Server */}
            <rect x="400" y="40" width="120" height="80" rx="10" fill="#fef9c3" stroke="#facc15" strokeWidth="2"/>
            <text x="460" y="75" textAnchor="middle" fontSize="12" fontWeight="700" fill="#854d0e">Data Tier</text>
            <text x="460" y="90" textAnchor="middle" fontSize="10" fill="#a16207">(Database)</text>

            {/* Arrows */}
            <line x1="85" y1="80" x2="170" y2="80" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arr-blue)"/>
            
            <line x1="305" y1="70" x2="390" y2="70" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>
            <text x="350" y="60" textAnchor="middle" fontSize="9" fill="#64748b">Read/Write</text>
            
            <line x1="390" y1="90" x2="305" y2="90" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>
            <text x="350" y="105" textAnchor="middle" fontSize="9" fill="#64748b">Data</text>

        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Splitting the application and database allows independent scaling and better resource allocation.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Diagram 3 – Load Balancer & DB Replication
───────────────────────────────────────────── */
const LoadBalancerDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">Stage 3: Load Balancer &amp; Replication</p>
        <svg viewBox="0 0 560 220" className="w-full max-w-2xl mx-auto block" aria-label="Load Balancer diagram">
            {/* User */}
            <circle cx="40" cy="110" r="15" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
            <text x="40" y="114" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="bold">User</text>

            {/* Load Balancer */}
            <rect x="120" y="80" width="50" height="60" rx="8" fill="#f3e8ff" stroke="#c084fc" strokeWidth="2"/>
            <text x="145" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7e22ce">Load</text>
            <text x="145" y="120" textAnchor="middle" fontSize="10" fill="#7e22ce">Balancer</text>

            {/* Web Servers */}
            <rect x="230" y="30" width="90" height="40" rx="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="275" y="55" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">Web Server 1</text>
            
            <rect x="230" y="90" width="90" height="40" rx="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="275" y="115" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">Web Server 2</text>
            
            <rect x="230" y="150" width="90" height="40" rx="8" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5"/>
            <text x="275" y="175" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="600">Web Server 3</text>

            {/* Databases */}
            <rect x="420" y="40" width="100" height="50" rx="8" fill="#fee2e2" stroke="#f87171" strokeWidth="2"/>
            <text x="470" y="65" textAnchor="middle" fontSize="11" fontWeight="700" fill="#991b1b">Master DB</text>
            <text x="470" y="80" textAnchor="middle" fontSize="9" fill="#b91c1c">(Writes)</text>

            <rect x="420" y="140" width="100" height="50" rx="8" fill="#fef9c3" stroke="#facc15" strokeWidth="1.5"/>
            <text x="470" y="165" textAnchor="middle" fontSize="11" fontWeight="700" fill="#854d0e">Slave DB</text>
            <text x="470" y="180" textAnchor="middle" fontSize="9" fill="#a16207">(Reads)</text>

            {/* Arrows */}
            <line x1="60" y1="110" x2="110" y2="110" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arr-blue)"/>
            
            <path d="M 175 110 C 200 110, 200 50, 225 50" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-purple)"/>
            <path d="M 175 110 L 225 110" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-purple)"/>
            <path d="M 175 110 C 200 110, 200 170, 225 170" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arr-purple)"/>

            <path d="M 325 50 C 370 50, 370 65, 415 65" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>
            <path d="M 325 170 L 415 170" fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>

            {/* DB sync arrow */}
            <path d="M 470 95 L 470 135" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#arr-red)"/>
            <text x="495" y="120" textAnchor="middle" fontSize="8" fill="#b91c1c">sync</text>

            <defs>
                <marker id="arr-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#c084fc"/>
                </marker>
                <marker id="arr-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#f87171"/>
                </marker>
            </defs>
        </svg>
        <p className="text-center text-xs text-slate-400 mt-3">Scaling horizontally. A load balancer distributes traffic, and databases are split into Master/Slave.</p>
    </div>
);

/* ─────────────────────────────────────────────
   Main Blog Component
───────────────────────────────────────────── */
const BlogPostScalingZeroToMillions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <ReadProgress />
            <SEO title="Scaling from Zero to Millions of Users" description="A visual journey of system architecture evolution." url={window.location.href} />
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">System Design</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Architecture</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Scalability</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Scaling from Zero to Millions of Users
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        A visual journey of how modern systems evolve to handle massive scale.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>January 11, 2026</span>
                        <span>•</span>
                        <span>7 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Building a system that supports a few users is simple. Building one that supports millions is an evolutionary process. Every system begins somewhere, often as a monolithic architecture running on a single computer. As traffic grows, bottlenecks emerge, forcing the system to evolve.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        Let's take a journey through the typical evolution of a web application as it scales from a dorm-room project to a global platform, based on the foundational concepts from Alex Xu's <em>System Design Interview</em>.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Stage 1: The Humble Beginnings
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        When you first launch your app, a complex setup is completely unnecessary. Everything—the web server, the application logic, and the database—runs on a single machine.
                    </p>
                    <SingleServerDiagram />
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        The request flow is straightforward: The user requests the IP address from a DNS server, receives it, and sends an HTTP request directly to your single server. The server computes the response, possibly talking to its local database, and sends HTML or JSON back. 
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        <strong>The Bottleneck:</strong> Your server runs out of CPU/Memory as traffic increases, or a single hardware failure brings down your entire application.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Stage 2: Dividing the Labor
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        To resolve resource contention, the web tier and the database tier are separated onto different servers. This is the first step towards independent scalability.
                    </p>
                    <WebAndDbDiagram />
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Now, the web server can focus purely on processing business logic, while the database server is optimized for storage and retrieval. If the web server starts struggling, we can upgrade its hardware (Vertical Scaling).
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        <strong>The Bottleneck:</strong> Vertical scaling has a hard limit. You can only buy a server so big. Furthermore, a single web server is still a single point of failure (SPOF).
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Stage 3: Horizontal Scaling &amp; Load Balancing
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Instead of buying a bigger server, we buy <em>more</em> servers. A <strong>Load Balancer</strong> is introduced to distribute incoming traffic evenly across a cluster of web servers.
                    </p>
                    <LoadBalancerDiagram />
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        With a load balancer, if Server 1 goes down, traffic is automatically routed to Servers 2 and 3. The system is now highly available.
                        Simultaneously, the database becomes a bottleneck. To solve this, we introduce <strong>Master-Slave Replication</strong>. The master handles all write operations, while multiple slaves synchronize the data and handle read operations.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-12">
                        <strong>The Bottleneck:</strong> Repeated database reads for the same data are slow. Users located geographically far from your servers experience high latency.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Stage 4: Caching &amp; CDN
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        To improve response times and reduce database load, we introduce a <strong>Cache</strong> (like Redis or Memcached). The web server checks the cache before querying the database.
                        For static assets (images, CSS, JS), we use a <strong>Content Delivery Network (CDN)</strong>, which stores these files on edge servers distributed globally. Users download assets from the server physically closest to them, drastically reducing latency.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Stage 5: Stateless Architecture &amp; Sharding
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        As the application scales further, we must ensure the web tier is entirely <strong>stateless</strong>. User session data is moved out of individual web servers and into a shared NoSQL data store. This allows the load balancer to route any request to any web server seamlessly.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Finally, when the master database can no longer handle the sheer volume of write operations, we implement <strong>Database Sharding</strong>. Sharding splits a large database into smaller, faster, more easily managed parts across multiple servers based on a sharding key (e.g., user_id).
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Conclusion
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Scaling a system to millions of users is an iterative process of identifying bottlenecks and resolving them. From a single machine to a complex globally distributed network of load balancers, caches, and sharded databases, every architectural choice is a trade-off. 
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        By applying these core principles—decoupling, redundancy, caching, and horizontal scaling—you can ensure your application remains responsive and resilient, no matter how large it grows.
                    </p>
                </div>

                <ShareWidget />
                <ReactionWidget slug="scaling-zero-to-millions" />
                <BlogComments />
            </article>
        </div>
    );
};

export default BlogPostScalingZeroToMillions;
