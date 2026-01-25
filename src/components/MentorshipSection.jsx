import React from 'react';

const MentorshipSection = () => {
    return (
        <section className="section-container">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="text-6xl">🎓</div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 mb-3">
                                Leadership & Mentorship
                            </h3>
                            <p className="text-lg text-slate-600 mb-2">
                                Passionate about nurturing the next generation of developers
                            </p>
                            <p className="text-accent font-semibold">
                                Trained and mentored 6+ junior developers in agile practices, TDD, and clean code principles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;
