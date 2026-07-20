import React, { useState, useEffect } from 'react';

const ReactionWidget = ({ slug }) => {
  const [reaction, setReaction] = useState(null);

  useEffect(() => {
    // Load existing reaction from localStorage if any
    const saved = localStorage.getItem(`reaction_${slug}`);
    if (saved) {
      setReaction(saved);
    }
  }, [slug]);

  const handleReact = (type) => {
    setReaction(type);
    localStorage.setItem(`reaction_${slug}`, type);
    // In a real app with a backend, you'd send an API call here.
    // For a static site, this provides instant feedback to the user.
  };

  return (
    <div className="my-12 p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center">
      <h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">
        {reaction ? 'Thanks for your feedback! 🙌' : 'Was this article helpful?'}
      </h3>
      <div className="flex gap-4">
        <button
          onClick={() => handleReact('up')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
            reaction === 'up'
              ? 'bg-emerald-100 text-emerald-700 border-emerald-200 shadow-sm'
              : reaction === 'down'
              ? 'bg-slate-100 text-slate-400 opacity-50 cursor-not-allowed'
              : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-600 shadow-sm hover:shadow'
          }`}
          disabled={reaction !== null}
        >
          <span>👍</span> Yes
        </button>
        <button
          onClick={() => handleReact('down')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
            reaction === 'down'
              ? 'bg-rose-100 text-rose-700 border-rose-200 shadow-sm'
              : reaction === 'up'
              ? 'bg-slate-100 text-slate-400 opacity-50 cursor-not-allowed'
              : 'bg-white border border-slate-200 text-slate-600 hover:border-rose-300 hover:text-rose-600 shadow-sm hover:shadow'
          }`}
          disabled={reaction !== null}
        >
          <span>👎</span> No
        </button>
      </div>
    </div>
  );
};

export default ReactionWidget;
