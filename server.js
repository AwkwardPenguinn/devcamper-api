const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// Middleware
// const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to databse
const db = require('./config/db');

db();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body Parser
app.use(express.json());

// Development logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);

// Use error handler
app.use(errorHandler);


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`.red.italic);

    // Close server and exit process
    server.close(() => process.exit(1));
});