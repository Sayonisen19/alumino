// server/routes/webinars.js
const express = require('express');
const router = express.Router();
const Webinar = require('../models/Webinar');

// Get all webinars
router.get('/', async (req, res) => {
    try {
        const webinars = await Webinar.find();
        res.json(webinars);
    } catch (err) {
        console.error('Error fetching webinars:', err);
        res.status(500).json({ message: 'Failed to load webinars.' });
    }
});

module.exports = router;
