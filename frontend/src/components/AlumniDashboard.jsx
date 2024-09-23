// src/components/AlumniDashboard.js
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AlumniDashboard = () => {
    const [profile, setProfile] = useState({});
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        axios.get('/api/alumni/profile').then(res => setProfile(res.data));
        axios.get('/api/alumni/job-postings').then(res => setJobPostings(res.data));
    }, []);

    return (
        <div>
            <h1>Alumni Dashboard</h1>
            <div>
                <h2>Profile</h2>
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
            </div>
            <div>
                <h2>Job Postings</h2>
                <ul>
                    {jobPostings.map(job => (
                        <li key={job._id}>{job.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AlumniDashboard;
