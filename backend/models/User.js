// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['student', 'alumni', 'admin'], default: 'student' },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare passwords
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

// Generate JWT token
userSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id, role: this.role }, 'your_jwt_secret', { expiresIn: '1h' });
};

module.exports = mongoose.model('User', userSchema);
