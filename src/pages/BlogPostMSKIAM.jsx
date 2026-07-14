import React, { useEffect } from 'react';

const BlogPostMSKIAM = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <article className="section-container max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">AWS</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">MSK</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Kubernetes</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Security</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                        Migrating AWS MSK to IAM Authentication for EKS Pods
                    </h1>
                    <p className="text-xl text-slate-600 mb-4">
                        Simplifying security, eliminating certificate rotation, and enabling smoother Disaster Recovery.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>July 14, 2026</span>
                        <span>•</span>
                        <span>6 min read</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Managing Kafka clusters at scale is challenging enough, but securing the communication between your microservices and the broker adds an entirely different layer of complexity. For a long time, mutual TLS (mTLS) has been the gold standard for authenticating clients to AWS Managed Streaming for Apache Kafka (MSK).
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        However, when you have hundreds of microservices running in Amazon EKS, managing certificates becomes a full-time job. Recently, my team made the architectural decision to migrate our MSK authentication from Certificate-based (mTLS) to IAM-based authentication using IAM Roles for Service Accounts (IRSA).
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        In this post, I'll walk you through why we made this transition, the architectural changes we implemented, and how this drastically improved our Disaster Recovery (DR) capabilities.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        The Problem with mTLS at Scale
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        mTLS provides strong, cryptographic identity verification. To use it with MSK, you deploy an AWS Certificate Manager (ACM) Private Certificate Authority (PCA), generate certificates for your clients, and load those certificates into your pods. 
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        While secure, it introduces significant operational overhead:
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>Certificate Rotation:</strong> Certificates expire. Automating the rotation of certificates across hundreds of EKS pods without causing downtime is non-trivial.</li>
                        <li><strong>Secret Management:</strong> You need a secure pipeline to inject these certificates and private keys into your Kubernetes pods, usually via HashiCorp Vault, AWS Secrets Manager, or Kubernetes Secrets.</li>
                        <li><strong>Cross-Region DR:</strong> ACM PCAs are region-specific. In a Disaster Recovery scenario, your failover cluster needs its own PCA, and your client pods need to be dynamically reconfigured with new certificates for the failover region.</li>
                    </ul>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        The Solution: MSK IAM Authentication
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        AWS introduced IAM authentication for MSK, allowing Kafka clients to authenticate using AWS Identity and Access Management (IAM) credentials. For workloads running in EKS, this pairs perfectly with <strong>IAM Roles for Service Accounts (IRSA)</strong>.
                    </p>

                    {/* Tailwind CSS Architecture Diagram */}
                    <div className="my-10 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Architecture Diagram: MSK IAM Auth via IRSA</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            
                            {/* EKS Cluster Node */}
                            <div className="flex flex-col items-center">
                                <div className="bg-white border-2 border-blue-500 rounded-xl p-4 w-48 text-center shadow-sm relative">
                                    <div className="text-blue-500 font-bold mb-2">Amazon EKS Pod</div>
                                    <div className="bg-slate-100 text-xs py-1 px-2 rounded mb-1">Service Account</div>
                                    <div className="text-xs text-slate-600">Kafka Client App</div>
                                    
                                    {/* Connection Line pointing down */}
                                    <div className="hidden md:block absolute -right-9 top-1/2 w-8 border-t-2 border-dashed border-slate-400"></div>
                                </div>
                            </div>

                            {/* OIDC & IAM Node */}
                            <div className="flex flex-col items-center">
                                <div className="hidden md:block h-8 border-l-2 border-dashed border-slate-400 mb-2"></div>
                                <div className="bg-white border-2 border-purple-500 rounded-xl p-4 w-48 text-center shadow-sm z-10">
                                    <div className="text-purple-500 font-bold mb-2">AWS IAM (IRSA)</div>
                                    <div className="text-xs text-slate-600 mb-1">OIDC Federation</div>
                                    <div className="bg-purple-50 text-xs py-1 px-2 rounded text-purple-700 border border-purple-200">
                                        Role: msk-client-role
                                    </div>
                                </div>
                                <div className="hidden md:block h-8 border-l-2 border-dashed border-slate-400 mt-2"></div>
                            </div>

                            {/* MSK Cluster Node */}
                            <div className="flex flex-col items-center">
                                <div className="hidden md:block absolute -left-9 top-1/2 w-8 border-t-2 border-dashed border-slate-400"></div>
                                <div className="bg-white border-2 border-orange-500 rounded-xl p-4 w-48 text-center shadow-sm">
                                    <div className="text-orange-500 font-bold mb-2">Amazon MSK</div>
                                    <div className="bg-slate-100 text-xs py-1 px-2 rounded mb-1">Kafka Broker</div>
                                    <div className="text-xs text-slate-600">IAM Auth Enabled</div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-xs text-slate-500 mt-6">
                            The EKS Pod assumes an IAM Role via OIDC/IRSA. The Kafka client uses the AWS IAM Authenticator to generate a token, which MSK validates to grant access.
                        </p>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        How This Enables Robust Disaster Recovery
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        The biggest win for us was the impact on our DR strategy. In an Active-Passive multi-region setup, transitioning to IAM Auth removed our biggest friction point.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-lg text-slate-700 mb-6">
                        <li><strong>Global Identities:</strong> IAM Roles are global entities. The same IAM Role assumed by a pod in `us-east-1` can be replicated or used globally. You don't need a separate regional CA.</li>
                        <li><strong>Stateless Authentication:</strong> There are no physical certificates to synchronize across regions or inject during a failover deployment. The pod simply requests temporary credentials via the AWS metadata service.</li>
                        <li><strong>Simplified Failover:</strong> When failing over to a secondary region, the EKS pods spin up, assume their predefined IAM roles via IRSA, and immediately connect to the standby MSK cluster. Zero certificate provisioning required.</li>
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                        <p className="text-slate-700">
                            <strong>☁️ Note:</strong> While IAM roles are global, MSK clusters and EKS clusters are regional. Ensure your Kafka client is configured to dynamically resolve the broker URLs of the active region during a failover.
                        </p>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Implementation Steps
                    </h2>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        1. Configure MSK for IAM Auth
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        First, enable IAM Access Control on your MSK cluster. This can be done via the AWS Console or Terraform.
                    </p>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6">
                        <code>{`resource "aws_msk_cluster" "example" {
  # ... other config ...
  client_authentication {
    sasl {
      iam = true
    }
  }
}`}</code>
                    </pre>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        2. Create the IAM Policy and Role
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Create an IAM policy that grants the `kafka-cluster:Connect`, `kafka-cluster:WriteData`, and `kafka-cluster:ReadData` actions. Attach this policy to an IAM Role that trusts your EKS cluster's OIDC provider.
                    </p>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        3. Update the Kubernetes Service Account
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Annotate your Kubernetes Service Account with the ARN of the IAM role you just created.
                    </p>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6">
                        <code>{`apiVersion: v1
kind: ServiceAccount
metadata:
  name: msk-client-sa
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::123456789012:role/msk-client-role`}</code>
                    </pre>

                    <h3 className="text-2xl font-serif font-semibold text-slate-900 mt-8 mb-4">
                        4. Update the Kafka Client Code
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Your Kafka client needs the AWS MSK IAM Authenticator library. For Java, you include the `aws-msk-iam-auth` dependency and configure the producer/consumer properties:
                    </p>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6">
                        <code>{`properties.put("security.protocol", "SASL_SSL");
properties.put("sasl.mechanism", "AWS_MSK_IAM");
properties.put("sasl.jaas.config", "software.amazon.msk.auth.iam.IAMLoginModule required;");
properties.put("sasl.client.callback.handler.class", "software.amazon.msk.auth.iam.IAMClientCallbackHandler");`}</code>
                    </pre>

                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-12 mb-6">
                        Conclusion
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Moving from mTLS to IAM Authentication for AWS MSK removed a massive operational burden from our platform team. No more certificate rotation panics, no more complex secret injection pipelines, and most importantly, a drastically simplified Disaster Recovery posture.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        If you are running workloads in EKS and using MSK, I highly recommend evaluating IRSA with MSK IAM Authentication for your architecture.
                    </p>

                </div>
            </article>
        </div>
    );
};

export default BlogPostMSKIAM;
