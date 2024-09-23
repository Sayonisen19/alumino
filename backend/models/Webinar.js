// models/Webinar.js
const mongoose = require('mongoose');

const webinarSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Webinar', webinarSchema);
