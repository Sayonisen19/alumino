// server/routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Post a new job
router.post('/post', async (req, res) => {
    try {
        const { title, description, skills, companyName, deadline } = req.body;

        // Create a new job
        const newJob = new Job({ title, description, skills, companyName, deadline });
        await newJob.save();

        res.status(201).json(newJob);
    } catch (err) {
        console.error('Error posting job:', err);
        res.status(500).json({ message: 'Failed to post job' });
    }
});

module.exports = router;
