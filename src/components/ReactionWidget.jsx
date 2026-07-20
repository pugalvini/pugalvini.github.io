import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, onValue, runTransaction } from 'firebase/database';

const ReactionWidget = ({ slug }) => {
  const [reaction, setReaction] = useState(null);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    // Load existing reaction from localStorage if any
    const saved = localStorage.getItem(`reaction_${slug}`);
    if (saved) {
      setReaction(saved);
    }

    // Connect to Firebase Realtime Database
    const likesRef = ref(db, `likes/${slug}`);
    
    // Listen for real-time updates to the like count
    const unsubscribe = onValue(likesRef, (snapshot) => {
      const data = snapshot.val();
      setLikesCount(data || 0);
    });

    return () => unsubscribe();
  }, [slug]);

  const handleReact = (type) => {
    setReaction(type);
    localStorage.setItem(`reaction_${slug}`, type);

    // Only increment the global counter if they voted 'up' (Yes)
    // You could also track 'down' votes in a separate counter if desired
    if (type === 'up') {
      const likesRef = ref(db, `likes/${slug}`);
      runTransaction(likesRef, (currentLikes) => {
        return (currentLikes || 0) + 1;
      });
    }
  };

  return (
    <div className="my-12 p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center">
      <h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">
        {reaction ? 'Thanks for your feedback! 🙌' : 'Was this article helpful?'}
      </h3>
      <div className="flex gap-4 mb-3">
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
      <div className="text-sm text-slate-500 font-medium">
        {likesCount === 1 ? '1 person found this helpful' : `${likesCount} people found this helpful`}
      </div>
    </div>
  );
};

export default ReactionWidget;
