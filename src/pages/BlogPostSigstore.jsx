import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import ReadProgress from '../components/ReadProgress';
import ReactionWidget from '../components/ReactionWidget';
import ShareWidget from '../components/ShareWidget';
import BlogComments from '../components/BlogComments';

/* ─────────────────────────────────────────────
   Diagram: Sigstore Workflow
───────────────────────────────────────────── */
const SigstoreWorkflowDiagram = () => (
    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">How Sigstore Works</p>
        <svg viewBox="0 0 600 320" className="w-full max-w-3xl mx-auto block" aria-label="Sigstore Workflow Diagram">
            {/* ── Background Zones ── */}
            <rect x="20" y="20" width="180" height="280" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeDasharray="4"/>
            <text x="110" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="#64748b">1. Developer</text>

            <rect x="220" y="20" width="180" height="280" rx="12" fill="#f0fdf4" stroke="#bbf7d0" strokeDasharray="4"/>
            <text x="310" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="#22c55e">2. Sigstore Infrastructure</text>

            <rect x="420" y="20" width="160" height="280" rx="12" fill="#eff6ff" stroke="#bfdbfe" strokeDasharray="4"/>
            <text x="500" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="#3b82f6">3. Consumer</text>

            {/* ── Steps & Components ── */}
            {/* Developer Auth */}
            <rect x="40" y="70" width="140" height="40" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="110" y="90" textAnchor="middle" fontSize="10" fontWeight="600" fill="#334155">OIDC Login (GitHub/Google)</text>
            <text x="110" y="102" textAnchor="middle" fontSize="8" fill="#64748b">Authenticate identity</text>

            {/* Cosign / Key Gen */}
            <rect x="40" y="140" width="140" height="40" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="110" y="160" textAnchor="middle" fontSize="10" fontWeight="600" fill="#334155">Ephemeral Keys</text>
            <text x="110" y="172" textAnchor="middle" fontSize="8" fill="#64748b">Generate short-lived keypair</text>

            {/* Signing Artifact */}
            <rect x="40" y="210" width="140" height="40" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5"/>
            <text x="110" y="230" textAnchor="middle" fontSize="10" fontWeight="600" fill="#334155">Sign Container/Code</text>
            <text x="110" y="242" textAnchor="middle" fontSize="8" fill="#64748b">Using private key</text>

            {/* Fulcio */}
            <rect x="240" y="100" width="140" height="50" rx="8" fill="#fff" stroke="#22c55e" strokeWidth="1.5"/>
            <text x="310" y="122" textAnchor="middle" fontSize="11" fontWeight="600" fill="#16a34a">Fulcio (CA)</text>
            <text x="310" y="136" textAnchor="middle" fontSize="9" fill="#15803d">Issues certificate</text>

            {/* Rekor */}
            <rect x="240" y="180" width="140" height="50" rx="8" fill="#fff" stroke="#22c55e" strokeWidth="1.5"/>
            <text x="310" y="202" textAnchor="middle" fontSize="11" fontWeight="600" fill="#16a34a">Rekor (Ledger)</text>
            <text x="310" y="216" textAnchor="middle" fontSize="9" fill="#15803d">Transparency log</text>

            {/* Verification */}
            <rect x="440" y="140" width="120" height="50" rx="8" fill="#fff" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x="500" y="162" textAnchor="middle" fontSize="11" fontWeight="600" fill="#2563eb">Cosign Verify</text>
            <text x="500" y="176" textAnchor="middle" fontSize="9" fill="#1d4ed8">Check signature & log</text>

            {/* ── Arrows ── */}
            <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#64748b"/>
                </marker>
                <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#22c55e"/>
                </marker>
                <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6"/>
                </marker>
            </defs>

            {/* Auth to Keys */}
            <line x1="110" y1="110" x2="110" y2="132" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            
            {/* Keys to Fulcio */}
            <line x1="180" y1="140" x2="232" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text x="210" y="125" textAnchor="middle" fontSize="8" fill="#64748b">OIDC + PubKey</text>

            {/* Keys to Signing */}
            <line x1="110" y1="180" x2="110" y2="202" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>

            {/* Signing to Rekor */}
            <line x1="180" y1="215" x2="232" y2="210" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text x="210" y="200" textAnchor="middle" fontSize="8" fill="#64748b">Cert + Sig</text>

            {/* Rekor to Verification */}
            <line x1="380" y1="190" x2="432" y2="175" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow-green)"/>
            
            {/* Fulcio to Rekor (optional flow but good for context) */}
            <line x1="310" y1="150" x2="310" y2="172" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="2" markerEnd="url(#arrow-green)"/>

        </svg>
        <p className="text-center text-xs text-slate-500 mt-3">Developer authenticates via OIDC, gets short-lived certs from Fulcio, signs the artifact, and logs it transparently in Rekor.</p>
    </div>
);

const BlogPostSigstore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <ReadProgress />
            <SEO
                title="Securing the Software Supply Chain with Sigstore"
                description="Say goodbye to PGP key management and hello to keyless, transparent code signing. Learn how Sigstore revolutionizes artifact signing."
                url="https://pugalvini.github.io/blog/sigstore-software-supply-chain"
                image="https://pugalvini.github.io/og-sigstore.jpg"
            />
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Security</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">DevSecOps</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Supply Chain</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Securing the Software Supply Chain with Sigstore
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        Say goodbye to PGP key management and hello to keyless, transparent code signing.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>November 23, 2025</span>
                        <span>•</span>
                        <span>6 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        In recent years, the software industry has witnessed a dramatic increase in supply chain attacks. From SolarWinds to the Log4j vulnerability, it has become increasingly evident that simply securing our applications isn't enough—we must also secure the <strong>process</strong> by which they are built and distributed.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        One of the fundamental pillars of software supply chain security is code signing: proving that a piece of software (a binary, a container image, or a library) was indeed produced by a trusted entity and hasn't been tampered with. However, traditionally, code signing has been notoriously painful.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">The Problem with Traditional Code Signing</h2>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        For decades, PGP (Pretty Good Privacy) and long-lived cryptographic keys have been the standard for code signing. But managing these keys is a nightmare:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>Key Compromise:</strong> If a developer's laptop is compromised and their private key is stolen, attackers can sign malicious code in their name.</li>
                        <li><strong>Key Loss:</strong> If you lose your private key, you can no longer sign updates for your software.</li>
                        <li><strong>Key Revocation:</strong> Revoking a compromised key and distributing the new public key to all consumers is a chaotic and unreliable process.</li>
                    </ul>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        We needed a better way. Enter <strong>Sigstore</strong>.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">What is Sigstore?</h2>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <a href="https://sigstore.dev" target="_blank" rel="noopener noreferrer">Sigstore</a> is an open-source project managed by the Linux Foundation that aims to make secure software signing easy and accessible to everyone. Instead of relying on long-lived keys, Sigstore introduces a <strong>keyless signing</strong> approach.
                    </p>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        It achieves this by combining OpenID Connect (OIDC) for identity, short-lived certificates, and an immutable transparency log.
                    </p>

                    <SigstoreWorkflowDiagram />

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">The Three Pillars of Sigstore</h2>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">Sigstore is composed of three primary components that work in harmony:</p>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">1. Cosign (The CLI)</h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Cosign is the tool developers use to sign and verify artifacts, particularly container images. When you run a signing command with Cosign, it handles the complex orchestration of generating ephemeral keys, communicating with OIDC providers, and interacting with the other Sigstore services.
                    </p>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">2. Fulcio (The Certificate Authority)</h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Fulcio is a free Root Certificate Authority built specifically for code signing. When a developer authenticates using an OIDC provider (like Google, GitHub, or Microsoft), Fulcio issues a short-lived certificate bound to their identity. This certificate is valid only for a few minutes—just long enough to sign the software artifact. 
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg my-6">
                        <p className="m-0 text-amber-800 text-sm font-medium">
                            💡 <strong>Why short-lived?</strong> Because the certificate expires almost immediately, there is no need for complex key revocation processes. If an attacker gains access to the ephemeral private key, it will already be useless.
                        </p>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">3. Rekor (The Transparency Log)</h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Rekor is an immutable, tamper-resistant ledger that records all signing events. Because Fulcio certificates expire so quickly, consumers need a way to prove that the signature was valid <em>at the exact moment</em> the software was signed. Rekor provides this proof by acting as a public notary.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">The Sigstore Workflow in Action</h2>

                    <p className="text-lg text-slate-700 leading-relaxed mb-4">Let's walk through how a developer signs a container image and how a consumer verifies it:</p>

                    <ol className="list-decimal list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>Generate:</strong> The developer's machine generates a temporary public/private key pair.</li>
                        <li><strong>Authenticate:</strong> The developer logs in via OIDC (e.g., their GitHub account).</li>
                        <li><strong>Certify:</strong> The OIDC token and public key are sent to Fulcio, which returns a short-lived certificate binding the key to the developer's identity.</li>
                        <li><strong>Sign:</strong> The developer signs the container image using the private key.</li>
                        <li><strong>Record:</strong> The signature and the certificate are logged in Rekor. The private key is then securely discarded.</li>
                        <li><strong>Verify:</strong> When a consumer downloads the image, Cosign checks Rekor to verify the signature was logged before the certificate expired.</li>
                    </ol>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">Why This Matters</h2>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        By moving away from manual key management and leveraging identities we already use (OIDC), Sigstore drastically lowers the barrier to entry for securing the software supply chain. It brings the same ease of use to code signing that Let's Encrypt brought to HTTPS.
                    </p>
                    
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Major ecosystems like Kubernetes, Python (PyPI), and npm are already adopting Sigstore. If you're building software today, adopting keyless signing with Sigstore is one of the highest-impact security improvements you can make.
                    </p>

                </div>
                <ShareWidget />
                <ReactionWidget slug="sigstore-software-supply-chain" />
                <BlogComments />
            </article>
        </div>
    );
};

export default BlogPostSigstore;
