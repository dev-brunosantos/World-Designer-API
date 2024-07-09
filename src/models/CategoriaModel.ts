import { DataTypes } from "sequelize";
import { Mysql } from "../database/mysql";

export const CategoriasModel = Mysql.define('categorias', {
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})