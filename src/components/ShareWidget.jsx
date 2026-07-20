import React, { useState } from 'react';

const ShareWidget = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  // Fallback to window.location if url isn't provided (e.g. static generation differences)
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
  };

  return (
    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col items-center">
      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Share this article</h3>
      <div className="flex gap-4">
        <button
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
          title="Copy Link"
        >
          {copied ? '✓' : '🔗'}
        </button>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-100 hover:text-sky-500 transition-colors"
          title="Share on X / Twitter"
        >
          𝕏
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
          title="Share on LinkedIn"
        >
          in
        </a>
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-green-100 hover:text-green-600 transition-colors"
          title="Share on WhatsApp"
        >
          💬
        </a>
      </div>
    </div>
  );
};

export default ShareWidget;
