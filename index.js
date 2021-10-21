const express = require('express')
const cors = require('cors')
const rl = require('express-rate-limit')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

//Rate Limiting
const limiter = rl({
    windowMs: 10 * 60 * 1000,
    max: 5
})
app.use(limiter)
app.set('trust proxy', 1)

// Routes
const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)

// Cors
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})