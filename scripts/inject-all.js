const fs = require('fs');

const files = [
  { path: 'src/pages/BlogPostMSKIAM.jsx', slug: 'aws-msk-iam-auth' },
  { path: 'src/pages/BlogPostMentoring.jsx', slug: 'mentoring-interns-in-tech' },
  { path: 'src/pages/BlogPostRateLimit.jsx', slug: 'rate-limiting-algorithms' },
  { path: 'src/pages/BlogPostSigstore.jsx', slug: 'sigstore-software-supply-chain' },
  { path: 'src/pages/BlogPostCursor.jsx', slug: 'cursor-tdd-refactoring' },
  { path: 'src/pages/BlogPostGCP.jsx', slug: 'create-mute-rule-gcp-scc' }
];

files.forEach(f => {
  let content = fs.readFileSync(f.path, 'utf8');
  
  if (!content.includes('import ReadProgress')) {
    content = content.replace(
      "import SEO from '../components/SEO';", 
      "import SEO from '../components/SEO';\nimport ReadProgress from '../components/ReadProgress';\nimport ReactionWidget from '../components/ReactionWidget';\nimport BlogComments from '../components/BlogComments';"
    );
    
    content = content.replace(
      '<div className="min-h-screen bg-white pt-20">', 
      '<div className="min-h-screen bg-white pt-20">\n            <ReadProgress />'
    );
    
    content = content.replace(
      '</article>', 
      `    <ReactionWidget slug="${f.slug}" />\n                <BlogComments />\n            </article>`
    );
    
    fs.writeFileSync(f.path, content);
    console.log('✅ Updated ' + f.path);
  }
});
