const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('your_database_name', 'your_database_user', 'your_database_password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;

