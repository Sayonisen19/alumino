// src/components/Signin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="signin-container">
            <h1>Signin</h1>
            <form className="signin-form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="signin-input"
                    placeholder="Email" 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    className="signin-input"
                    placeholder="Password" 
                />
                <button type="submit" className="signin-button">Signin</button>
            </form>
        </div>
    );
};

export default Signin;
