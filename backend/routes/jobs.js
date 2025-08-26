const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

// Simple auth middleware
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({error: 'No token'});
  const token = header.split(' ')[1];
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.id;
    next();
  } catch (err) { return res.status(401).json({error: 'Invalid token'}); }
}

// Create job (admin or any signed in user)
router.post('/', auth, async (req, res) => {
  try {
    const {title, company, location, description} = req.body;
    const job = new Job({title, company, location, description, postedBy: req.userId});
    await job.save();
    res.json(job);
  } catch (err) { res.status(500).json({error: err.message}); }
});

// List jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find().limit(100).sort({createdAt: -1});
  res.json(jobs);
});

// Get single job
router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({error: 'Not found'});
  res.json(job);
});

// Apply to job
router.post('/:id/apply', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({error: 'Job not found'});
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({error: 'User not found'});
    if (!user.appliedJobs) user.appliedJobs = [];
    if (user.appliedJobs.includes(job._id)) return res.status(400).json({error: 'Already applied'});
    user.appliedJobs.push(job._id);
    await user.save();
    res.json({message: 'Applied successfully'});
  } catch (err) { res.status(500).json({error: err.message}); }
});

module.exports = router;
