// routes/profileRoutes.js
const express = require('express');
const User = require('../models/User');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.put('/update', verifyToken, async (req, res) => {
    const { name, bio, skills, employment } = req.body;
    try {
        const updates = { name, bio, skills, employment };
        const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
