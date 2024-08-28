import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/prods/'

const CompCreateProd = () =>{
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [valor, setValor] = useState('')
    const navigate = useNavigate()
    
    //procedimiento guardar

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre:nombre, cantidad:cantidad, valor:valor})
        navigate('/')
    }



    return(
        <div>
            <h3>Create PRODUCTO</h3>
            <form onSubmit={store}>
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

export default CompCreateProd