// src/components/WebinarList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WebinarList.css'; // Import CSS file for styling

const WebinarList = () => {
    const [webinars, setWebinars] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/webinars')
            .then(res => {
                // Check if the response is an array
                if (Array.isArray(res.data)) {
                    setWebinars(res.data);
                } else {
                    console.error("Unexpected response structure:", res.data);
                    setError("Failed to load webinars.");
                }
            })
            .catch(err => {
                console.error("Error fetching webinars:", err);
                setError("Failed to load webinars.");
            });
    }, []);

    return (
        <div className="webinar-container">
            <h1 className="webinar-header">Upcoming Webinars</h1>
            {error && <p className="error-message">{error}</p>}
            <ul className="webinar-list">
                {webinars.length > 0 ? (
                    webinars.map(webinar => (
                        <li key={webinar._id} className="webinar-item">
                            <span className="webinar-title">{webinar.title}</span>
                            <span className="webinar-date">
                                {new Date(webinar.date).toLocaleString()}
                            </span>
                        </li>
                    ))
                ) : (
                    <p>No webinars available.</p>
                )}
            </ul>
        </div>
    );
};

export default WebinarList;
