const express = require('express');
const cors = require('cors');
const rl = require('express-rate-limit');

const app = express();

//Rate Limiting
const limiter = rl({
  windowMs: 10 * 60 * 1000,
  max: 5
});
app.use(limiter);
app.set('trust proxy', 1);

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Cors
app.use(cors());

module.exports = app;