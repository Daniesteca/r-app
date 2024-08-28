//importamos el modelo
import ProdModel from "../models/ProdModel.js";

//**Metodos para el CRUD */

//Mostrar todos los registros
export const getAllProds = async (req, res)=>{
    try{
        const prods = await ProdModel.findAll()
        res.json(prods)
    }catch(error){
        res.json({message: error.message})

    }

}


//Mostrar un registro

export const getProd = async (req, res)=>{
    try {
        const prod = await ProdModel.findAll({
            where:{ id:req.params.id}
        })
        res.json(prod[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un registro
export const createProd = async (req, res)=>{
    try {
       await ProdModel.create(req.body)
       res.json({
        "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar un registro
export const updateProd = async( req, res)=>{
    try {
        await ProdModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
           })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro
export const deleteProd = async (req, res)=>{
    try {
        await ProdModel.destroy({
            where: {id : req.params.id}
        })
        res.json({
            "message":"¡Registro Elimiado correctamente!"
           })
    } catch (error) {
        res.json({message: error.message})
    }
}