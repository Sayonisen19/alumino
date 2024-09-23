// client/src/pages/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Welcome to the Alumni Connecting Platform</h1>
                <nav className="homepage-nav">
                    <Link to="/profile">Profile</Link>
                    <Link to="/project">Submit Project</Link>
                    <Link to="/job">Job Portal</Link>
                    <Link to="/webinars">Webinars</Link>
                    <Link to="/community">Community</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/notifications">Notifications</Link>
                    <Link to="/chat">Chat</Link>
                </nav>
            </header>
            <main className="homepage-main">
                <section className="homepage-intro">
                    <h2>Explore Your Opportunities</h2>
                    <p>Connect with alumni, attend webinars, and explore job opportunities.</p>
                </section>
                <section className="homepage-features">
                    <div className="feature">
                        <h3>Real-Time Chat</h3>
                        <p>Connect with students and alumni in real-time.</p>
                        <Link to="/chat" className="button">Go to Chat</Link>
                    </div>
                    <div className="feature">
                        <h3>Webinars</h3>
                        <p>Join live webinars hosted by alumni and admins.</p>
                        <Link to="/webinars" className="button">View Webinars</Link>
                    </div>
                    <div className="feature">
                        <h3>Community Discussions</h3>
                        <p>Engage in discussions within various communities.</p>
                        <Link to="/community" className="button">Join Community</Link>
                    </div>
                    <div className="feature">
                        <h3>Profile Management</h3>
                        <p>Update your profile information and view your submissions.</p>
                        <Link to="/profile" className="button">Update Profile</Link>
                    </div>
                    <div className="feature">
                        <h3>Job Portal</h3>
                        <p>Find and apply for job opportunities posted by alumni.</p>
                        <Link to="/job" className="button">Explore Jobs</Link>
                    </div>
                </section>
            </main>
            <footer className="homepage-footer">
                <p>&copy; {new Date().getFullYear()} Alumni Connecting Platform. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Homepage;
