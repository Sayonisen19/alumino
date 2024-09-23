// server/routes/projects.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Project = require('../models/Project');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Submit project with files
router.post('/submit', upload.array('files', 5), async (req, res) => {
    try {
        const { title, description } = req.body;
        const files = req.files.map(file => file.path);  // Save file paths
        
        const newProject = new Project({ title, description, files });
        await newProject.save();
        
        res.status(201).json(newProject);
    } catch (err) {
        console.error('Error submitting project:', err);
        res.status(500).json({ message: 'Failed to submit project' });
    }
});

module.exports = router;
