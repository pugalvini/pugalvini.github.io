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

const mainRoutes = [
  '',
  '/blog'
];

function generateSitemap() {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${mainRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
${blogs.map(blog => `  <url>
    <loc>${SITE_URL}${blog.url}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemapContent);
  console.log('✅ sitemap.xml generated');
}

function generateRSS() {
  const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Pugalvini's Portfolio Blog</title>
  <link>${SITE_URL}</link>
  <description>Insights on software engineering, leadership, and cloud technologies</description>
  <language>en-us</language>
${blogs.map(blog => {
    // Parse date for RSS format (RFC 822)
    const dateObj = new Date(blog.date);
    const pubDate = dateObj.toUTCString();
    return `  <item>
    <title>${blog.title}</title>
    <link>${SITE_URL}${blog.url}</link>
    <description><![CDATA[${blog.description}]]></description>
    <pubDate>${pubDate}</pubDate>
  </item>`;
}).join('\n')}
</channel>
</rss>`;

  fs.writeFileSync(path.resolve('public', 'rss.xml'), rssContent);
  console.log('✅ rss.xml generated');
}

function generateRobots() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  fs.writeFileSync(path.resolve('public', 'robots.txt'), robotsContent);
  console.log('✅ robots.txt generated');
}

// Execute
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}
generateSitemap();
generateRSS();
generateRobots();
