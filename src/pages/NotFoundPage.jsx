import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-20 px-6">
            <h1 className="text-9xl font-serif font-bold text-slate-900 mb-4">404</h1>
            <h2 className="text-3xl font-serif font-semibold text-slate-800 mb-6">Page Not Found</h2>
            <p className="text-lg text-slate-600 mb-8 text-center max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="px-6 py-3 bg-accent text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:scale-105">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
