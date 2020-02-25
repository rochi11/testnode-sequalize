import Sequelize from 'sequelize';
import mysql2 from 'mysql2';
// import sequelize, {
//     Sequelize
// } from 'sequelize';

export const sequelize = new Sequelize('recomendations', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: mysql2,
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    logging: false
})