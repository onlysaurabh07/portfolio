const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    github_link: String,
    demo_link: String,
    image_url: String
});

module.exports = mongoose.model('Project', ProjectSchema);
