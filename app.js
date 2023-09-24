const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Include your task and metrics routes
const sequelize = require('./db');
const taskRoutes = require('./routes/taskRoutes');
const metricsRoutes = require('./routes/metricsRoutes');

app.use('/api', taskRoutes);
app.use('/api', metricsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });