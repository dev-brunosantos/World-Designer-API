import { DataTypes } from "sequelize";
import { Mysql } from "../database/mysql";

export const ProdutosModel = Mysql.define('produtos', {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    produto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})