const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const jobsRoutes = require('./routes/jobs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);

// Basic root
app.get('/', (req, res) => res.send({status: 'Job Portal API running'}));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobportal';

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log('Server listening on', PORT));
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  app.listen(PORT, () => console.log('Server listening (no DB) on', PORT));
});
