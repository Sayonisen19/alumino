// src/components/Notifications.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('/api/notifications').then(res => setNotifications(res.data));
    }, []);

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification._id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
