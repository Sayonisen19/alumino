// src/components/JobPosting.js
import React, { useState } from 'react';
import axios from 'axios';
import './JobPosting.css';

const JobPosting = () => {
    const [job, setJob] = useState({ title: '', description: '', skills: '', companyName: '', deadline: '' });

    const handleChange = e => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/jobs/post', job);
    };

    return (
        <div className="job-posting-container">
            <h1>Post a Job</h1>
            <form className="job-posting-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={job.title} 
                    onChange={handleChange} 
                    className="job-posting-input"
                    placeholder="Job Title" 
                />
                <textarea 
                    name="description" 
                    value={job.description} 
                    onChange={handleChange} 
                    className="job-posting-textarea"
                    placeholder="Job Description" 
                />
                <input 
                    type="text" 
                    name="skills" 
                    value={job.skills} 
                    onChange={handleChange} 
                    className="job-posting-input"
                    placeholder="Required Skills" 
                />
                <input 
                    type="text" 
                    name="companyName" 
                    value={job.companyName} 
                    onChange={handleChange} 
                    className="job-posting-input"
                    placeholder="Company Name" 
                />
                <input 
                    type="date" 
                    name="deadline" 
                    value={job.deadline} 
                    onChange={handleChange} 
                    className="job-posting-input"
                />
                <button type="submit" className="job-posting-submit">Post Job</button>
            </form>
        </div>
    );
};

export default JobPosting;
