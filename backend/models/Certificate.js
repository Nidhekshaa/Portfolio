const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema(
  {
    title: String,
    issuer: String,
    year: Number,
    imageUrl: String
  },
  { collection: 'certificate' }
);

module.exports = mongoose.model('Certificate', CertificateSchema);
