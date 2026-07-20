const fs = require('fs');

const files = [
  { path: 'src/pages/BlogPostMSKIAM.jsx' },
  { path: 'src/pages/BlogPostMentoring.jsx' },
  { path: 'src/pages/BlogPostRateLimit.jsx' },
  { path: 'src/pages/BlogPostSigstore.jsx' },
  { path: 'src/pages/BlogPostCursor.jsx' },
  { path: 'src/pages/BlogPostGCP.jsx' }
];

files.forEach(f => {
  let content = fs.readFileSync(f.path, 'utf8');
  
  if (!content.includes('import BlogComments')) {
    content = content.replace("import ReactionWidget from '../components/ReactionWidget';", "import ReactionWidget from '../components/ReactionWidget';\nimport BlogComments from '../components/BlogComments';");
    
    // Inject BlogComments right after ReactionWidget
    content = content.replace(/<ReactionWidget slug=".*" \/>/, match => `${match}\n            <BlogComments />`);
    
    fs.writeFileSync(f.path, content);
    console.log('✅ Updated ' + f.path);
  }
});
