// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    skills: [String],
    companyName: String,
    deadline: Date,
    alumnus: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Job', jobSchema);
