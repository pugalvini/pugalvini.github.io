import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SkillsMatrix from '../components/SkillsMatrix';
import ExperienceTimeline from '../components/ExperienceTimeline';
import MentorshipSection from '../components/MentorshipSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <main>
                <Hero />
                <SkillsMatrix />
                <ExperienceTimeline />
                <MentorshipSection />
                <BlogSection />
            </main>
        </div>
    );
};

export default HomePage;
