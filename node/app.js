import express from 'express'
import cors from 'cors'
//imprtar conexion a la bd
import db from "./database/db.js"
//importamos nuestro enrutador
import prodRoutes from './routes/routes.js'

const app = express()

app.use( cors() )
app.use(express.json())
app.use('/prods',prodRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

// app.get('/',(req, res)=>{
//     res.send('HOLA MUNDO')
// })

app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000/')
})
