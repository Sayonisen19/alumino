// src/components/AdminDashboard.js
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);
    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        axios.get('/api/admin/students').then(res => setStudents(res.data));
        axios.get('/api/admin/alumni').then(res => setAlumni(res.data));
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Students</h2>
                <ul>
                    {students.map(student => (
                        <li key={student._id}>{student.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Alumni</h2>
                <ul>
                    {alumni.map(alumnus => (
                        <li key={alumnus._id}>{alumnus.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
