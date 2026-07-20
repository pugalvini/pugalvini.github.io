import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image }) => {
  const siteName = "Pugalvini's Portfolio";
  const defaultImage = "https://pugalvini.github.io/og-image.jpg"; // Placeholder default
  const defaultUrl = "https://pugalvini.github.io";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />

      {/* Open Graph tags for LinkedIn, Facebook, etc. */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
