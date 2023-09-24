const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.ENUM('open', 'inprogress', 'completed'),
        defaultValue: 'open',
    },
    dueDate: {
        type: DataTypes.DATE,
    },
});

module.exports = Task;

