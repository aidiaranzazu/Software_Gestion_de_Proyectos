import { useEffect, useState, useRef } from "react/cjs/react.development";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Estilos/producto.css"
import axios from "axios";
import { nanoid } from "nanoid";

// eslint-disable-next-line no-lone-blocks
{/*const FilaProducto =({productos}) => {
  console.log("productos",productos)
  const[edit, setEdit] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    id: productos._id,
    codigo:productos.codigo,
    nombre: productos.nombre,
    precio: productos.precio,
    estado: productos.estado,
  })
  const actualizarProducto = async()=>{
    console.log(infoNuevoProducto)
    // const options = {
    //   method: 'PUT',
    //   url: 'http://localhost:3001/api/product',
    //   headers: {'Content-Type': 'application/json'},
    //   data: { infoNuevoProducto}
    // };
    
    await axios.put('http://localhost:3001/api/product', infoNuevoProducto)
    .then(function (response) {
      console.log(response.data);
      toast.success("producto modificado con exito");
      setEdit(false);
      window.location.reload();
     
    })
    .catch(function (error) {
      toast.error("Error al modificar producto")
      console.error(error);
    });

  };
  
// eslint-disable-next-line no-lone-blocks
return (
    
<tr> 
  {edit ? (
 <>
    <td>
      <input  
      type ="text" 
      value={infoNuevoProducto.codigo}
      onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, codigo:e.target.value})} 
      />
    </td>
    <td>
      <input 
      type ="text" 
      value={infoNuevoProducto.nombre}
      onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, nombre:e.target.value})}
      />
    </td>
    <td>
      <input 
      type ="text"
      value={infoNuevoProducto.precio}
      onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, precio:e.target.value})}
      />
      </td>
    <td>
      <input 
      type ="text"
      value={infoNuevoProducto.estado}
      onChange={(e)=>setInfoNuevoProducto({...infoNuevoProducto, estado:e.target.value})} 
      />
      </td>
    </>
  
   ): (
     <>
  <td>{productos.codigo} </td>
  <td>{productos.nombre}</td> 
  <td>{productos.precio}</td>
  <td>{productos.estado}</td> 
    </>
   )}
   <td>
   <div >
     {edit ? (
     <a 
     onClick={()=> actualizarProducto()} 
     className="fas fa-check a"
     />
     ):(
     <a 
     onClick={()=>setEdit(!edit)} 
     className="fas fa-pencil-alt a" 
     />
     )}
     < a  
     className="fas fa-trash-alt a"/>
     </div>
     </td>
     </tr>
 

) 

}

const TablaAvances = ({listaProductos, setMostrarProductos }) =>{
  
  useEffect(() =>{
    console.log("este es el contenido del la lsita de productos", listaProductos)
    }, [listaProductos]);

    const form = useRef(null);
    
    
    const submitForm = async(e)=> {
      e.preventDefault();
      const fd = new  FormData(form.current);
      // esa variable esta como objeto vacio y alli ingresa los imput como un formato Json, 
      const nuevoProducto ={};
      fd.forEach((value, key)=>{
          nuevoProducto[key] = value;
      })  
      setMostrarProductos([...listaProductos,nuevoProducto]);
      toast.success( "El producto se ha agragado con éxito")
      console.log("datos del form enviados", nuevoProducto); //" aca se puede ver en la consoloa el Json"
      await axios.post("http://localhost:3001/api/product", nuevoProducto)
  }

    return (

      
            
         
            <section className="login_Developer_2"> 

              <form ref={form} onSubmit ={submitForm}>
                <h3>Nuevo estudiante</h3>
                <label htmlfor="producto">ingrese id</label>
                  <label htmlfor="producto">ingrese estudiante</label>
              
                  <label htmlfor="producto">ingrese cedula</label>
                  <label htmlfor="producto">estado</label>
                  <input  required type="text" placeholder="IdEstudiante"  name ="codigo" />
                  <input required type="text" placeholder="NuevoEstudiante" name="nombre" /> 
                  <input  required  type="id" placeholder="documento"  name="precio" />
                   
                    <select  required    
                    name="estado" 
                     type="id" 
                    placeholder="Estado" >
                      <option>Activo</option>
                      <option>No_activo</option>
                      </select>
                      <button type="submit" className ="buttoning "  >
                     Ingresar 
                     </button>
                    
                
              </form>
              
              <table>
                    <thead>
                      <tr> 
                        <th>id estudiante</th> 
                        <th>Detalle estudiante</th> 
                        <th>documento</th>  
                        <th>  Estado </th> 
                        <th>Acciones</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      {listaProductos.map((productos)=>{
                        return (
                          
                          < FilaProducto key={nanoid()} productos = {productos}/>
                        )
                      })}              
                    </tbody>

             
                  </table>  
          
                  </section>    
                   
    );
    
 }; */}

 const TablaAvances = () =>{
return(
<div className="con">
<section className="login_Developer1">
<h1>Registrar Avance</h1>   
<div className="hhh ">
 <label >Identificador del proyecto </label>
 <input type="text" className="form-control" />
 <label >Fecha del avance </label>
 <input type="text" className="form-control"  />
 <label >Descripcion del avance </label>
 <input type="text"  className="form-control"  /> 
 <label >Observacion </label>
 <input type="text" className="form-control"  />
 <label >Id del usuario</label>
 <input type="text "  className="form-control"  />
</div>

<div className="boton4">
           <button type="button" id="ingresar" >Insertar avance</button> 
           
</div>
</section>
</div>
)
 }

export default TablaAvances;