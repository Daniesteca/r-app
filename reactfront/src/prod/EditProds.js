import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const URI = 'http://localhost:8000/prods/'

const CompEditProd = () =>{
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [valor, setValor] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id,{
            nombre:nombre,
            cantidad: cantidad,
            valor:valor
        })
        navigate('/')
        
    }

    useEffect( () =>{
        getProdById()

    },[])

    const getProdById = async () =>{
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setCantidad(res.data.cantidad)
        setValor(res.data.valor)
    }

    return(
        <div>
            <h3>Edit PRODUCTO</h3>
            <form onSubmit={update}>
            <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                    type="integer"
                    className="form-control"
                    />
                    
                </div>

                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input 
                    value={cantidad}
                    onChange={(e)=> setCantidad(e.target.value)}
                    type="integer"
                    className="form-control"
                    />
                    
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Valor</label>
                    <input 
                    value={valor}
                    onChange={(e)=> setValor(e.target.value)}
                    type="number"
                    className="form-control"
                    />
                    
                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
 
        </div>
    )



}

export default CompEditProd
//probando para github