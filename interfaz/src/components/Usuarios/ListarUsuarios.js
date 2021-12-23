import "../../Estilos/producto.css";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import GET_USUARIOS from "../../Apollo/gql/getUsuarios"
import {useQuery} from "@apollo/client"
import { Link, useParams } from "react-router-dom";
import TablaEditarPerfil from "./TablaEditarPerfil";

const ListarUsuarios = () =>{

    const {action} = useParams()
    const {loading,data,error} = useQuery(GET_USUARIOS);
    
    const handleDelete = (id)  =>{
        console.log('Delete')
    }
  
  return(    
     <>
          
          {loading && <p>Cargando.....</p>}   
          {error && <p>Se ha producido un error</p>}
          {
           data &&    
            <table className="table login_Developer3 lo">
          <thead>
            <tr>
              <th> # </th>
              <th> nombreCompleto </th>
              <th> documento  </th>
              <th> rol  </th>
              <th> correo </th>
              <th> password</th>
              <th> estadoUsuario</th>
             
            </tr>
          </thead>          

          <tbody>
              {
                   data.Usuarios.map((usuario,index ) => (
                           
                            <tr key={usuario.id}>
                                <td scope = "row">{ index + 1}</td>
                                <td>{usuario.nombreCompleto}</td>
                                <td>{usuario.documento}</td>
                                <td>{usuario.rol}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.password}</td>
                                <td>{usuario.estadoUsuario}</td>
                                <td>
                                  
                                  <button type="button"><Link to ={"/EditarPerfil/"} > Editar  </Link> </button>            
                                    {""} 
                                    <button type = "button"color="danger" onClick={() => handleDelete(usuario.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
               }     
             
     </>
  
  )
   
  }
  
  export default ListarUsuarios;