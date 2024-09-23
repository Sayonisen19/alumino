const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profileRoutes');
const projectRoutes = require('./routes/projectRoutes');
const jobRoutes = require('./routes/jobRoutes');
const searchRoutes = require('./routes/searchRoutes');
const webinarRoutes = require('./routes/webinarRoutes');
const communityRoutes = require('./routes/communityRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const socketIo = require('socket.io');
const http = require('http');

// Initialize environment variables before other imports
require('dotenv').config();

const app = express();
app.use(cors());  // Enable CORS for all routes
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/webinars', webinarRoutes);
app.use('/api/communities', communityRoutes);
app.use('/api/notifications', notificationRoutes);

// Create HTTP server and initialize Socket.IO
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",  // Update this to the origin of your frontend
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

// Set up Socket.IO
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
