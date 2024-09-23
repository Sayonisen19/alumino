// routes/searchRoutes.js
const express = require('express');
const User = require('../models/User');
const Job = require('../models/Job');
const router = express.Router();

router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const students = await User.find({ role: 'student', name: new RegExp(query, 'i') });
        const alumni = await User.find({ role: 'alumni', name: new RegExp(query, 'i') });
        const jobs = await Job.find({ title: new RegExp(query, 'i') });

        res.json({ students, alumni, jobs });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
