const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const dns = require('dns');

// Fix for SRV record resolution issues on some local DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 5000;

const Contact = require('./models/Contact');
const Project = require('./models/Project');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB connected successfully');
        console.log('   Host:', mongoose.connection.host);
    })
    .catch(err => {
        console.error('❌ MongoDB connection error details:');
        console.error('   Code:', err.code);
        console.error('   Error Name:', err.name);
        console.error('   Message:', err.message);
        if (err.code === 'ECONNREFUSED' || err.message.includes('SRV')) {
            console.warn('⚠️  TIP: This error often occurs when SRV records (mongodb+srv) are blocked by the network.');
            console.warn('   Consider using the "Standard Connection String" (non-srv) from MongoDB Atlas.');
        }
    });

// Routes
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: 'Message received successfully!' });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// GET Projects Route
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Export the app for Vercel
module.exports = app;
