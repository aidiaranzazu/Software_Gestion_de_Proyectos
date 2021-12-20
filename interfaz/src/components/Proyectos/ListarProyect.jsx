
import "../../Estilos/producto.css";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import GET_PROYECTOS from "../../Apollo/gql/getProyectos";
import {useQuery} from "@apollo/client"
import { NavLink } from "react-router-dom";

 const ListarProyectos = () => {
  
  const {loading,data,error} = useQuery(GET_PROYECTOS);
  
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
              <th>Nombre </th>
              <th>Objetivos generales  </th>
              <th>Objetivos especificos  </th>
              <th>Presupuesto </th>
              <th>Fecha inicial</th>
              <th>Fecha final </th>
              <th>Documento del lider</th>
              <th>Nombre del lider</th>
              <th>Estado del proyecto</th>
              <th>Fase del proyecto</th>
            </tr>
          </thead>         

          <tbody>
                 {
                         data.Proyectos.map((proyecto,index ) => (
                          <tr key={proyecto.id}>
                          <td scope = "row">{ index + 1}</td>
                                <td>{proyecto.nombre}</td>
                                <td>{proyecto.objetivosGenerales}</td>
                                <td>{proyecto.objetivosEspecificos.map((objetivo, index ) =>{
                                   <td>{objetivo[index + 1]}</td>
                                })}</td>
                                <td>{proyecto.presupuesto}</td>
                                <td>{proyecto.fechaInicio}</td>
                                <td>{proyecto.fechaFinal}</td>
                                <td>{proyecto.docLider}</td>
                                <td>{proyecto.nombreLider}</td>
                                <td>{proyecto.estadoProyecto}</td>
                                <td>{proyecto.faseProyecto}</td>                               

                                <td>
                                  
                                  <NavLink color="primary" to ={`/productos/${proyecto.id}` } >
                                        Editar
                                  </NavLink>{" "}
                                  <button type = "button"color="danger" onClick={() => handleDelete(proyecto.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
              </table>
          }
      </>
  )
                        
  }
  
  export default ListarProyectos;