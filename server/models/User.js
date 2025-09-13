const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  contact: String,
  profession: String,
  email: { type: String, unique: true, sparse: true },
  firebaseUid: { type: String, unique: true, sparse: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
