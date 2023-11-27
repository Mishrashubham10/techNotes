const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500
const root = require('./routes/root')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const { logEvents } = require('./middleware/logger')
const cookieParser = require('cookie-parser')

console.log(process.env.NODE_ENV)

// DB Connection
connectDB()

// Middleware
app.use(logger)
app.use(express.json())
app.use(cookieParser())

// Cors
app.use(cors(corsOptions))

// Serving static folders or files
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', root)

// Handling error routes
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// Custom Middleware
app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})