// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ error: 'No token provided' });

    jwt.verify(token, 'your_jwt_secret', async (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });

        req.user = await User.findById(decoded.id);
        next();
    });
};

// Role-based authorization middleware
exports.isRole = (role) => (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json({ error: 'Forbidden' });
    next();
};
