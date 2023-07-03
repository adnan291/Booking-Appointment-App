// const mysql = require('mysql2');   

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: ''
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('user_details_form','root','', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;