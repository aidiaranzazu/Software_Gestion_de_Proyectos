import React, { useEffect, useState} from 'react';
import "../Estilos/bootstrap.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
function parImpar(numero){
    var value = true
    numero%2 === 0 ? value = true : value = false;
    return(value)
}
//simula la base de datos
const listaVentaBackend=[
    
]
const listaProductosBackend=[
    {
        Id: 1,
        nombre: "usuario1",
        cantidad:1,
        precio:1,
        subtotal: 0,
    },
    {
        Id: 2,
        nombre: "usuario2",
        cantidad:2,
        precio:2,
        subtotal: 0,
    },
    {
        Id: 3,
        nombre: "usuario3",
        cantidad:0,
        precio:3,
        subtotal: 0,
    },
    {
        Id: 4,
        nombre: "usuario4",
        cantidad:4,
        precio:4,
        subtotal: 0,
    },   
]
//logica general
const Ventas =()=>{
    const [ventas, setVentas] = useState([])
    const [listaProducto, setListaProducto] = useState([])
    useEffect(() => {
        //obtener lista vehiculos desde el fronten
        setVentas(listaVentaBackend)
    }, []);
    useEffect(() => {
        //obtener lista vehiculos desde el fronten
        setListaProducto(listaProductosBackend)
    }, []);
    return(
        <div className= "container">
        <button type="button" className="btn btn-success">
        <Link to="/src/pages/GestionVentas2.jsx"> historial </Link>
        </button>
        <Formulario funcionParAgregarVenta = {setVentas} listaVenta={ventas} listaProducto={listaProducto}/>
        <ToastContainer position="bottom-center" autoclose ={3000}/>
        <TablaVentas2 listaVenta={ventas}/>  
        
        </div>
    );
}
//parte de la tabla
const TablaVentas2 = ({listaVenta})=>{
    let total = 0;
    let unidad = 0;
    useEffect(() => {
}, [listaVenta])
    return(
      <div className="container ">
        <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Id nombre</th>
                        <th scope="col">nombre</th>
                        <th scope="col">usuario #</th>
                        <th scope="col">otro</th>
                        <th scope="col">otro</th>
                    </tr>
                </thead>
                <tbody>
                
            {listaVenta.map((ventas,index) => {
                total += ventas.subtotal;
                unidad += parseInt(ventas.cantidad);
                return(
                    //  cambia color segun arreglo 
                    index !== 0?(
                    parImpar(index) ?(
                    <tr  className="table-primary">
                        <th scope="row">{ventas.Id}</th>
                        <td>{ventas.nombre}</td>
                        <td>{ventas.cantidad}</td>
                        <td>${ventas.precio}</td>
                        <td>${ventas.subtotal}</td>
                    </tr>)  :
                    (
                    <tr  className="table-light">
                        <th scope="row">{ventas.Id}</th>
                        <td>{ventas.nombre}</td>
                        <td>{ventas.cantidad}</td>
                        <td>${ventas.precio}</td>
                        <td>${ventas.subtotal}</td>
                    </tr> 
                    )
                    ) :(<tr  className="table-light">
                    
                </tr> )

                ) 
                 ;
                })}
                </tbody>
            </table>
        <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th>
                            Usuarios Totales
                        </th>
                        <th>
                            Total
                        </th>
                        <th>
                            Estado Usuario
                        </th>
                    </tr>
                </thead>
                <tbody>
                
                    <tr className="table-secondary">
                        <th scope="row">{unidad}</th>
                        <td>
                            $ {total}
                        </td>
                        <td className="form-group">
                            <select className="form-select" Id="exampleSelect1">
                                <option>Activo</option>
                                <option>Inactivo</option>
                                <option>otro</option>
                            </select>
                        </td>

                    </tr>
                </tbody>
        </table>
        <div className="end">
        <button type="button" className="btn btn-success">
         finalizar 
        </button>
        </div>
        </div>
    );
};
//formulario
const Formulario = ({funcionParAgregarVenta ,listaVenta , listaProducto}) =>{
    const [Id,setID]=useState("")
    const [cantidad,setCantidad] = useState("")
    const [nombre,setProducto] = useState("")
    const [precio,setPrecioUnitario]=useState("")
    
const enviarAlBackend = async () =>{
    
    setPrecioUnitario(buscarPorID(Id))
    funcionParAgregarVenta([...listaVenta,{Id:Id,nombre:nombre,cantidad:cantidad,
        precio:precio,subtotal: precio*cantidad }])
        var axios = require("axios").default;
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/product',
            headers: {'Content-Type': 'application/json'},
            data: {Id:1001,nproducto:5033,nprecio:70000}
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("bien agregado");
          }).catch(function (error) {
            console.error(error);
            toast.warning("ojo mal ingresado ")
          });
    }
    const buscarPorID = (Id) =>{
        const newUser = listaProducto.filter(function(element) {
            return(element.Id==Id);
        })
        console.log("soy new user",newUser[0].precio);
        return(newUser[0].precio)
    }
    return(
        <div>
        <table className="table table-hover">
            <thead>
                    <tr className="table-dark">
                        <th>Nombre </th>
                        <th>Objetivos finales </th>
                        <th>Objetivos específicos</th>
                        
                    </tr>
                </thead>
            <tbody>
                    <tr className="table-secondary">
                        <th> 
                            <select className="form-select" name="productos" value={nombre} onChange={(e)=> setProducto(e.target.value)} required>
                            <option value="" disabled>Productos</option>
                            {listaProducto.map((nombre) => {
                                return(
                            <option>{nombre.nombre}</option>)
                                })}
                    
                            </select>
                            </th>                
                    <td>
                        <select className="form-select" name = "Id" value ={Id} onChange ={(e)=>(setID(e.target.value))} required >
                            <option disabled> buscar por Id</option>
                            {listaProducto.map((nombre) => {
                                
                                return(
                            <option>{nombre.Id}</option>)
                                })}
                        </select>
                        </td>
                        <td>
                        <input type="number" min="0" className="form-control" value={cantidad} onChange={(e)=>setCantidad(e.target.value)}  required />
                        
                        </td>
                        
                </tr>
            </tbody>
        </table>
        <div className="end">
            
        <button type="submit" className="btn btn-success" onClick={()=>{enviarAlBackend()}}>
         agregar
        </button>
        </div>
        </div>
    );

}
export default Ventas