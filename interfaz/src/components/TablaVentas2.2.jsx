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
        Factura: 1,
        Cliente: "producto1",
        Cliente_ID:1,
        Fecha:1,
        Estado_Venta: "entregado",
    },
    {
        Factura: 2,
        Cliente: "producto2",
        Cliente_ID:2,
        Fecha:2,
        Estado_Venta: "En Proceso",
    },
    {
        Factura: 3,
        Cliente: "producto1",
        Cliente_ID:3,
        Fecha:3,
        Estado_Venta: "cancelado",
    },
    {
        Factura: 4,
        Cliente: "producto1",
        Cliente_ID:4,
        Fecha:4,
        Estado_Venta: "entregado",
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
        setListaProducto(listaVentaBackend)
    }, []);
    return(
        <div className= "container">
        <button type="button" className="btn btn-success">
        <Link to="/src/pages/GestionVentas.jsx"> Devolver </Link> 
        </button> 
        <Formulario funcionParAgregarVenta = {setVentas} listaVenta={ventas} listaProducto={listaProducto}/>
        <ToastContainer position="bottom-center" autoclose ={3000}/>
        <TablaVentas2 listaVenta={ventas}/>  
        
        </div>
    );
}
//parte de la tabla
const TablaVentas2 = ({listaVenta})=>{
    
    useEffect(() => {
    console.log("lista venta" )
}, [listaVenta])
    return(
      <div className="container ">
        <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Fecha</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Cliente_ID</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Estado_Venta</th>
                    </tr>
                </thead>
                <tbody>
                
            {listaVenta.map((ventas,index) => {
                
                return(
                    //  cambia color segun arreglo 
                    index !== 0?(
                    parImpar(index) ?(
                    <tr  className="table-primary">
                        <th scope="row">{ventas.Factura}</th>
                        <td>{ventas.Cliente}</td>
                        <td>{ventas.Cliente_ID}</td>
                        <td>${ventas.Fecha}</td>
                        <td>${ventas.Estado_Venta}</td>
                    </tr>)  :
                    (
                    <tr  className="table-light">
                        <th scope="row">{ventas.Factura}</th>
                        <td>{ventas.Cliente}</td>
                        <td>{ventas.Cliente_ID}</td>
                        <td>${ventas.Fecha}</td>
                        <td>${ventas.Estado_Venta}</td>
                    </tr> 
                    )
                    ) :(<tr  className="table-light">
                    
                </tr> )

                ) 
                 ;
                })}
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
    const [Factura,setFactura]=useState("")
    const [Cliente,setCliente] = useState("")
    const [Cliente_ID,setCliente_ID] = useState("")
    const [Fecha,setFecha]=useState("")
    const [Estado_Venta,setEstado_Venta]=useState("")

const enviarAlBackend = () =>{
    setEstado_Venta(buscarPorFactura(Factura))
    funcionParAgregarVenta([...listaVenta,{Factura:Factura,Cliente:Cliente,Cliente_ID:Cliente_ID,
        Fecha:Fecha,Estado_Venta:Estado_Venta, }])
    toast.success("bien agregado")
    }
    const buscarPorFactura = (Factura) =>{
        const newUser = listaProducto.filter(function(element) {
            return(element.Factura==Factura);
        })
        console.log("soy new user",newUser[0].precio);
        return(newUser[0].precio)
    }
    return(
        <div>
        <table className="table table-hover">
            <thead>
                    <tr className="table-dark">
                        <th>
                            Factura
                        </th>
                        <th>
                            Cliente
                        </th>
                        <th>
                            Cliente_ID
                        </th>
                    </tr>
                </thead>
            <tbody>
                    <tr className="table-secondary">
                        <th>
                            <select className="form-select" name="Cliente" value={Cliente} onChange={(e)=> setCliente(e.target.value)} required>
                            <option value="" disabled>Cliente</option>
                            {listaProducto.map((nombre) => {
                                return(
                            <option>{nombre.Cliente}</option>)
                                })}
                    
                            </select>
                            </th>                
                    <td>
                        <select className="form-select" name = "Factura" value ={Factura} onChange ={(e)=>(setFactura(e.target.value))} required >
                            <option disabled> buscar por Factura</option>
                            {listaProducto.map((nombre) => {
                                
                                return(
                            <option>{nombre.Factura}</option>)
                                })}
                        </select>
                        </td>
                        <td>
                        <input type="number" min="0" className="form-control" value={Cliente_ID} onChange={(e)=>setCliente_ID(e.target.value)}  required />
                        
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