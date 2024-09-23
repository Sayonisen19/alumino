// src/components/StudentDashboard.js
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
    const [profile, setProfile] = useState({});
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/student/profile').then(res => setProfile(res.data));
        axios.get('/api/student/projects').then(res => setProjects(res.data));
    }, []);

    return (
        <div>
            <h1>Student Dashboard</h1>
            <div>
                <h2>Profile</h2>
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
            </div>
            <div>
                <h2>Submitted Projects</h2>
                <ul>
                    {projects.map(project => (
                        <li key={project._id}>{project.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StudentDashboard;
