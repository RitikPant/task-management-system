const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const { Op } = require('sequelize');

// Get task metrics
router.get('/metrics', async (req, res) => {
    try {
        const metrics = await Task.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('status')), 'count'],
                'status',
                [sequelize.fn('DATE_FORMAT', sequelize.col('dueDate'), '%M %Y'), 'date'],
            ],
            group: ['date', 'status'],
        });
        res.status(200).json(metrics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

