import {Sequelize} from 'sequelize'
const db = new Sequelize('c_barber_prueba','usuario2', '1234',{
    host:'localhost',
    dialect:'mysql'
})

export default db
