// src/components/ProjectSubmission.js
import React, { useState } from 'react';
import axios from 'axios';
import './ProjectSubmission.css';

const ProjectSubmission = () => {
    const [project, setProject] = useState({ title: '', description: '' });
    const [files, setFiles] = useState([]);

    const handleChange = e => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleFileChange = e => {
        setFiles(e.target.files);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', project.title);
        formData.append('description', project.description);
        for (let file of files) {
            formData.append('files', file);
        }
        await axios.post('/api/projects/submit', formData);
    };

    return (
        <div className="project-submission-container">
            <h1>Submit Project</h1>
            <form className="project-submission-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={project.title} 
                    onChange={handleChange} 
                    className="project-submission-input"
                    placeholder="Project Title" 
                />
                <textarea 
                    name="description" 
                    value={project.description} 
                    onChange={handleChange} 
                    className="project-submission-textarea"
                    placeholder="Project Description" 
                />
                <input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange} 
                    className="project-submission-file"
                />
                <button type="submit" className="project-submission-button">Submit</button>
            </form>
        </div>
    );
};

export default ProjectSubmission;
