//importamos la conexion a la BD
import db from "../database/db.js";
//importamos sequelize
import {DataTypes } from "sequelize";

const ProdModel = db.define('prod_react', {
    nombre:{type:DataTypes.STRING},
    cantidad:{type: DataTypes.NUMBER},
    valor:{type: DataTypes.NUMBER},
})

export default ProdModel