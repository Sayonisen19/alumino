// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    files: [String],
});

module.exports = mongoose.model('Project', projectSchema);
