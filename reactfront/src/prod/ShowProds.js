import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/prods/'

const CompShowProds = () => {
    const [prods,setProd] = useState([])
    useEffect( ()=>{
        getProds()
    },[])

    //procedimiento para mostrar todos los productos
    const getProds = async () => {
        const res = await axios.get(URI)
        setProd(res.data)

    }
    // procedimiento para eliminar un producto
    const deleteProd = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProds()

    }

    return(
        <div className='container'>
            <div className='row'>
                   <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2' ><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Valor</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {prods.map( (prod)=> (
                                <tr key={prod.id}>
                                    <td> {prod.nombre}</td>
                                    <td> {prod.cantidad}</td>
                                    <td> {prod.valor}</td>
                                    <td>
                                        <Link to={`/edit/${prod.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ ()=>deleteProd(prod.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                   </div>
         </div>

        </div>
    )

}

export default CompShowProds