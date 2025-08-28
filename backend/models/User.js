// server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  address: String,
  zip: String,
  email: String,
  phone: String,
  intro: String,
  quote: String,
  interests: [String],
});

module.exports = mongoose.model("User", userSchema);
