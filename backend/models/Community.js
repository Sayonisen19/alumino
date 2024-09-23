// models/Community.js
const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    name: String,
    description: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model('Community', communitySchema);
