import os

files = [
    ('src/pages/BlogPostMSKIAM.jsx', 'aws-msk-iam-auth'),
    ('src/pages/BlogPostMentoring.jsx', 'mentoring-interns-in-tech'),
    ('src/pages/BlogPostRateLimit.jsx', 'rate-limiting-algorithms'),
    ('src/pages/BlogPostSigstore.jsx', 'sigstore-software-supply-chain'),
    ('src/pages/BlogPostCursor.jsx', 'cursor-tdd-refactoring'),
    ('src/pages/BlogPostGCP.jsx', 'create-mute-rule-gcp-scc')
]

for filepath, slug in files:
    if not os.path.exists(filepath): continue
    
    with open(filepath, 'r') as f:
        content = f.read()
        
    if 'import ReadProgress' not in content:
        # 1. Imports
        content = content.replace(
            "import SEO from '../components/SEO';",
            "import SEO from '../components/SEO';\nimport ReadProgress from '../components/ReadProgress';\nimport ReactionWidget from '../components/ReactionWidget';\nimport BlogComments from '../components/BlogComments';"
        )
        
        # 2. ReadProgress
        content = content.replace(
            '<div className="min-h-screen bg-white pt-20">',
            '<div className="min-h-screen bg-white pt-20">\n            <ReadProgress />'
        )
        
        # 3. Widgets at bottom
        content = content.replace(
            '</article>',
            f'    <ReactionWidget slug="{slug}" />\n                <BlogComments />\n            </article>'
        )
        
        with open(filepath, 'w') as f:
            f.write(content)
        
        print(f"Updated {filepath}")
