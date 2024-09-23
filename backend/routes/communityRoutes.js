// server/routes/communities.js
const express = require('express');
const router = express.Router();
const Community = require('../models/Community');

// Get all communities
router.get('/', async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities);
    } catch (err) {
        console.error('Error fetching communities:', err);
        res.status(500).json({ message: 'Failed to load communities' });
    }
});

module.exports = router;
