import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPostRateLimit = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <article className="section-container max-w-4xl mx-auto">
                {/* Back Button */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:underline mb-8">
                    ← Back to Blog
                </Link>

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
                        <span>July 20, 2026</span>
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
                        But how does the bouncer decide who gets in and who gets turned away? Let's explore the 5 most common rate limiting algorithms, using simple analogies to understand how they work under the hood.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        1. The Token Bucket
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> Imagine a bucket that holds arcade tokens. Every second, an attendant drops a new token into the bucket, up to a maximum capacity. When you want to play a game (send an API request), you must take a token out of the bucket. If the bucket is empty, you must wait.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> Tokens are added to the bucket at a fixed rate. Each request consumes one token. If no tokens are available, the request is dropped.</li>
                        <li><strong>Pros:</strong> It allows for bursts of traffic. If you haven't made requests in a while, your bucket is full, and you can spend all those tokens at once. It's also very memory efficient.</li>
                        <li><strong>Cons:</strong> If bursts are too large, they can still overwhelm backend services if not tuned correctly.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        2. The Leaking Bucket
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> Think of a funnel (the bucket) with a small hole at the bottom. You can pour water (requests) into the top of the funnel at any speed. However, the water only drips out the bottom (gets processed) at a constant, steady rate. If you pour water faster than it drips out, the funnel overflows (requests are dropped).
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> Requests are added to a queue (the bucket). A processor pulls requests from the queue at a fixed rate. If the queue is full, new requests are discarded.</li>
                        <li><strong>Pros:</strong> It smooths out bursts of traffic, ensuring a perfectly stable outflow to your backend services.</li>
                        <li><strong>Cons:</strong> A sudden burst of traffic can fill up the queue with old requests, causing new, potentially more important requests to be dropped until the queue drains.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        3. Fixed Window Counter
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> Imagine you are allowed 10 free coffees per hour. The coffee shop starts a timer at the top of the hour (e.g., 9:00 AM). They count every coffee you take. At exactly 10:00 AM, the counter resets to zero.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> Time is divided into fixed windows (e.g., 1 minute). A counter is maintained for each window. If the counter exceeds the limit, requests are dropped until the next window begins.</li>
                        <li><strong>Pros:</strong> Very simple to implement and understand. Uses minimal memory.</li>
                        <li><strong>Cons:</strong> The "Boundary Effect". You could use all your quota in the last second of a window, and all your quota for the next window in the first second. This effectively allows twice the allowed rate of traffic in a very short burst around the window boundary.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        4. Sliding Window Log
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> To fix the boundary effect, the coffee shop now writes down the exact timestamp of every coffee you order in a logbook. When you ask for a coffee, they look at the logbook, cross out any coffees ordered more than 60 minutes ago, and count what's left.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> The system keeps a precise log of the timestamp for every request. When a new request comes in, outdated timestamps are removed from the log. If the size of the log is within the limit, the request is allowed.</li>
                        <li><strong>Pros:</strong> Highly accurate. It completely eliminates the boundary effect problem of the Fixed Window approach.</li>
                        <li><strong>Cons:</strong> Extremely memory intensive. You have to store a timestamp for every single request, even if the request is eventually rejected.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        5. Sliding Window Counter
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>The Analogy:</strong> This is a hybrid approach. The coffee shop uses fixed windows (e.g., hours), but instead of an exact log, they estimate. If you are 15 minutes into the current hour (25% of the way through), they take 75% of your coffees from the previous hour, add it to your coffees from the current hour, and check if that exceeds the limit.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>How it works:</strong> It tracks request counts in fixed windows. When a request arrives, it calculates a weighted sum of the current window's count and the previous window's count based on how much time has passed in the current window.</li>
                        <li><strong>Pros:</strong> It's the best of both worlds. It smooths out the boundary effect while remaining highly memory efficient (only storing counts, not timestamps).</li>
                        <li><strong>Cons:</strong> It relies on an assumption that requests are evenly distributed within the previous window, which is an approximation, not perfect precision.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Conclusion: Which one should you use?
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Choosing the right algorithm depends on your specific needs:
                    </p>
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

                {/* Back to Blog */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:underline text-lg font-medium">
                        ← Back to Blog
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogPostRateLimit;
