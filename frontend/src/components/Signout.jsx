// src/components/Signout.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
    const Navigate = useNavigate();

    const handleSignout = async () => {
        await axios.post('/api/auth/logout');
        localStorage.removeItem('token');
        Navigate.push('/login');
    };

    return (
        <button onClick={handleSignout}>Signout</button>
    );
};

export default Signout;
