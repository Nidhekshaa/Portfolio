const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
