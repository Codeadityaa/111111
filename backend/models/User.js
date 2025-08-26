const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true, required: true},
  password: String,
  role: {type: String, default: 'user'}, // user or admin
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
