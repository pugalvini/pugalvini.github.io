import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPostGCP = () => {
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
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Cloud Security</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">GCP</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">DevSecOps</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        How to Create a Mute Rule in GCP Security Command Center
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        A guide to reducing alert fatigue in cloud security
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>May 13, 2025</span>
                        <span>•</span>
                        <span>4 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Managing security alerts at scale in cloud environments can become overwhelming if every finding is treated equally. Google Cloud's Security Command Center (SCC) offers mute rules to reduce alert fatigue by suppressing specific findings that are expected or low-risk.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        In this blog, I'll walk through how I created a mute rule in SCC to filter out non-actionable findings — helping our security team focus on what truly matters.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        When to Use a Mute Rule
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>You have known benign findings that don't need action.</li>
                        <li>Your team wants to reduce noise in dashboards and alerting systems.</li>
                        <li>You want to document intentional silencing (e.g., "This bucket is public by design").</li>
                    </ul>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-slate-700">
                            <strong>🔒 Note:</strong> Mute rules don't fix the underlying issue. They just silence the finding from showing up in views, dashboards, and exports.
                        </p>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Step-by-Step: Creating a Mute Rule
                    </h2>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        Step 1: Go to Security Command Center
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-lg text-slate-700 mb-6">
                        <li>Navigate to Security Command Center in your GCP Console.</li>
                        <li>Make sure you're in the right organization view (mute rules are org-level settings).</li>
                    </ol>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        Step 2: Select "Mute Rules"
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6">
                        <li>On the left-side panel, click on "Mute Rules".</li>
                        <li>Click "Create Mute Rule".</li>
                    </ul>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        Step 3: Define Rule Details
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6">
                        <li>Name your rule clearly (e.g., <code className="bg-slate-100 px-2 py-1 rounded text-sm">mute-public-bucket-by-design</code>).</li>
                        <li>Optionally, add a description to explain the rationale.</li>
                    </ul>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        Step 4: Add Conditions
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Use filter logic to define which findings should be muted. For example:
                    </p>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6">
                        <code>category = "PUBLIC_BUCKET_ACL" AND resource.project_display_name = "my-project"</code>
                    </pre>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        You can filter by:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6">
                        <li>Category (e.g., <code className="bg-slate-100 px-2 py-1 rounded text-sm">PUBLIC_BUCKET_ACL</code>)</li>
                        <li>Resource type</li>
                        <li>Project name</li>
                        <li>Severity</li>
                        <li>Finding source (like Forseti, SCC)</li>
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                        <p className="text-slate-700">
                            <strong>💡 Tip:</strong> Use the Findings Explorer to test your filter first.
                        </p>
                    </div>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        Step 5: Set the Scope
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Choose whether the mute rule applies to the entire org or specific folders/projects.
                    </p>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        Step 6: Save and Monitor
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 mb-6">
                        <li>Click Create.</li>
                        <li>The rule will start muting future findings that match the conditions.</li>
                        <li>You can view muted findings under the "Muted" tab in Findings Explorer.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Pro Tips
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li>Use labels or custom tags on resources to create dynamic mute rules.</li>
                        <li>Revisit mute rules regularly to ensure you're not ignoring something important.</li>
                        <li>Pair mute rules with alerting policies for high-severity findings to ensure balance.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Use Case Example
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Let's say you have a project where a public GCS bucket is expected because it serves website content. Instead of being distracted by repeated findings:
                    </p>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6">
                        <code>category = "PUBLIC_BUCKET_ACL" resource.project_display_name = "marketing-site"</code>
                    </pre>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        You mute only that case — and let others alert as normal.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Conclusion
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Mute rules are powerful tools to help teams stay focused on real security risks while avoiding alert fatigue. When used correctly, they contribute to a healthier DevSecOps culture.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        If you haven't already, try setting one up for your next recurring false positive in SCC — and let me know how it works for you!
                    </p>

                    <div className="bg-slate-50 border-l-4 border-accent p-6 mt-12">
                        <h3 className="text-xl font-serif font-semibold text-slate-900 mb-4">References</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li>
                                <a href="https://cloud.google.com/security-command-center/docs/how-to-mute-findings" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                    Security Command Center Mute Rules – Official Docs
                                </a>
                            </li>
                            <li>
                                <a href="https://cloud.google.com/security-command-center/docs/how-to-use-findings-filter" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                    SCC Query Language (Filtering)
                                </a>
                            </li>
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

export default BlogPostGCP;
