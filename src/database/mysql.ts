import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const db:any = {
    database: process.env.DATABASE,
    user: process.env.USUARIO,
    password: process.env.SENHA,
    host: process.env.HOST
}

export const Mysql = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
})
