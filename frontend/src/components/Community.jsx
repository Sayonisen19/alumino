// src/components/Community.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Community.css';

const Community = () => {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        axios.get('/api/communities')
            .then(res => {
                if (Array.isArray(res.data)) {
                    setCommunities(res.data);
                } else {
                    console.error("Unexpected response structure:", res.data);
                    setCommunities([]);
                }
            })
            .catch(err => console.error("Error fetching communities:", err));
    }, []);

    return (
        <div className="community-container">
            <h1 className="community-header">Communities</h1>
            <ul className="community-list">
                {communities.length > 0 ? (
                    communities.map(community => (
                        <li key={community._id} className="community-item">
                            <span>{community.name}</span>
                            <button className="join-button">Join</button>
                        </li>
                    ))
                ) : (
                    <p>No communities available.</p>
                )}
            </ul>
        </div>
    );
};

export default Community;
