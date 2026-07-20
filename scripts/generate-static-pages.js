import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://pugalvini.github.io';

const blogs = [
  {
    title: 'Migrating AWS MSK to IAM Authentication for EKS Pods',
    description: 'Simplifying security, eliminating certificate rotation, and enabling smoother Disaster Recovery.',
    url: '/blog/aws-msk-iam-auth',
    date: 'July 14, 2026'
  },
  {
    title: 'Supercharging TDD and Refactoring with Cursor',
    description: 'How AI fundamentally changes the Red-Green-Refactor loop and makes maintaining code a breeze.',
    url: '/blog/cursor-tdd-refactoring',
    date: 'December 14, 2025'
  },
  {
    title: 'Securing the Software Supply Chain with Sigstore',
    description: 'Say goodbye to PGP key management and hello to keyless, transparent code signing. Learn how Sigstore uses OIDC, Fulcio, and Rekor to secure your artifacts.',
    url: '/blog/sigstore-software-supply-chain',
    date: 'November 23, 2025'
  },
  {
    title: 'Mastering Rate Limiting: 5 Algorithms You Need to Know',
    description: 'A conceptual guide to protecting your systems from being overwhelmed. Learn about the Token Bucket, Leaking Bucket, Fixed Window, and Sliding Window algorithms.',
    url: '/blog/rate-limiting-algorithms',
    date: 'September 6, 2025'
  },
  {
    title: 'Mentoring Interns in Tech: What I Wish I Knew Before',
    description: 'Lessons learned from guiding a second-year college intern through a fast-paced product cycle. From structuring learning to communicating like a teacher, here\'s what I learned about mentorship.',
    url: '/blog/mentoring-interns-in-tech',
    date: 'July 17, 2025'
  },
  {
    title: 'How to Create a Mute Rule in GCP Security Command Center',
    description: 'A practical guide to reducing alert fatigue in cloud security. Learn how to create mute rules in GCP SCC to filter out non-actionable findings and help your team focus on what truly matters.',
    url: '/blog/create-mute-rule-gcp-scc',
    date: 'May 13, 2025'
  }
];

function generateStaticPages() {
  const indexHtmlPath = path.resolve('dist', 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  // We also create a 404.html from the base index.html for general fallback
  fs.writeFileSync(path.resolve('dist', '404.html'), baseHtml);
  console.log('✅ Created dist/404.html for SPA routing fallback');

  blogs.forEach(blog => {
    // We want to replace the title and meta tags in the head
    // A simple regex approach to find the closing </head> and insert our tags right before it, 
    // while trying to remove old <title> and <meta name="description"> if possible.
    
    let newHtml = baseHtml;
    
    // Remove existing title
    newHtml = newHtml.replace(/<title>.*?<\/title>/gi, '');
    // Remove existing description
    newHtml = newHtml.replace(/<meta\s+name=["']description["'].*?>/gi, '');
    // Remove existing og tags
    newHtml = newHtml.replace(/<meta\s+property=["']og:.*?["'].*?>/gi, '');

    const customMetaTags = `
    <title>${blog.title} | Vinitha Pukazh Bagya R.</title>
    <meta name="description" content="${blog.description}" />
    <meta property="og:site_name" content="Pugalvini's Portfolio" />
    <meta property="og:title" content="${blog.title}" />
    <meta property="og:description" content="${blog.description}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${SITE_URL}${blog.url}" />
    <meta property="og:image" content="${SITE_URL}/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${blog.title}" />
    <meta property="twitter:description" content="${blog.description}" />
    <meta property="twitter:image" content="${SITE_URL}/og-image.jpg" />
    `;

    newHtml = newHtml.replace('</head>', `${customMetaTags}\n</head>`);

    const htmlPath = path.resolve('dist', blog.url.replace(/^\//, '') + '.html'); // e.g. dist/blog/cursor-tdd-refactoring.html
    const dirPath = path.dirname(htmlPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    fs.writeFileSync(htmlPath, newHtml);
    console.log(`✅ Generated static HTML for ${blog.url}`);
  });
}

generateStaticPages();
