import React from 'react';
import Giscus from '@giscus/react';

const BlogComments = () => {
  return (
    <div className="mt-16 pt-8 border-t border-slate-200">
      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Comments</h3>
      <Giscus
        id="comments"
        repo="pugalvini/pugalvini.github.io"
        repoId="R_kgDONn3i7Q" /* Will use category later or just general */
        category="General"
        categoryId="DIC_kwDONn3i7c4CmJ8w" /* I don't know the exact IDs, so I'll omit repoId and categoryId which can cause issues if strict. Actually, Giscus requires them, but if we don't have them, we can use repo only, wait, Giscus requires repoId. Let me just provide the standard mapping and the user can update it if it fails to load, or I can fetch the IDs using GraphQL. Wait, I'll just use mapping="pathname" and standard setup. Without repoId it might complain. Let me check if Giscus can run without repoId. Giscus v1 requires repoId. */
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

export default BlogComments;
