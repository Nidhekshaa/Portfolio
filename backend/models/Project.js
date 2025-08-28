const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  githubLink: String,
  imageUrl: String,
  techStack: String
});

module.exports = mongoose.model('Project', projectSchema);
