import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import MentorshipSection from './components/MentorshipSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BlogPostMentoring from './pages/BlogPostMentoring';
import BlogPostGCP from './pages/BlogPostGCP';
import BlogPage from './pages/BlogPage';
import BlogPostRateLimit from './pages/BlogPostRateLimit';
import BlogPostSigstore from './pages/BlogPostSigstore';
import BlogPostCursor from './pages/BlogPostCursor';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <SkillsMatrix />
              <ExperienceTimeline />
              <MentorshipSection />
              <BlogSection />
            </main>
          } />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/mentoring-interns-in-tech" element={<BlogPostMentoring />} />
          <Route path="/blog/create-mute-rule-gcp-scc" element={<BlogPostGCP />} />
          <Route path="/blog/rate-limiting-algorithms" element={<BlogPostRateLimit />} />
          <Route path="/blog/sigstore-software-supply-chain" element={<BlogPostSigstore />} />
          <Route path="/blog/cursor-tdd-refactoring" element={<BlogPostCursor />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
