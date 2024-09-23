// src/components/ProfileUpdate.js
import React, { useState } from 'react';
import axios from 'axios';
import './ProfileUpdate.css';

const ProfileUpdate = () => {
    const [profile, setProfile] = useState({ name: '', bio: '', skills: '', employment: '' });

    const handleChange = e => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.put('/api/profile/update', profile);
    };

    return (
        <div className="profile-update-container">
            <h1 className="profile-update-header">Update Profile</h1>
            <form onSubmit={handleSubmit} className="profile-update-form">
                <input 
                    type="text" 
                    name="name" 
                    value={profile.name} 
                    onChange={handleChange} 
                    className="profile-input"
                    placeholder="Name" 
                />
                <input 
                    type="text" 
                    name="bio" 
                    value={profile.bio} 
                    onChange={handleChange} 
                    className="profile-input"
                    placeholder="Bio" 
                />
                <input 
                    type="text" 
                    name="skills" 
                    value={profile.skills} 
                    onChange={handleChange} 
                    className="profile-input"
                    placeholder="Skills" 
                />
                <input 
                    type="text" 
                    name="employment" 
                    value={profile.employment} 
                    onChange={handleChange} 
                    className="profile-input"
                    placeholder="Current Employment" 
                />
                <button type="submit" className="update-button">Update</button>
            </form>
        </div>
    );
};

export default ProfileUpdate;
