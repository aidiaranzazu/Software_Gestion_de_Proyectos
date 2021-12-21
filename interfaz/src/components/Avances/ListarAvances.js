import React from "react";
import "../../Estilos/crud.css"
import { useQuery } from "@apollo/client";
import GET_AVANCES from "../../Apollo/gql/getAvance";

const ListarAvances = () =>{
  const { loading, data, error } = useQuery(GET_AVANCES);

  const handleDelete = (id) => {
    console.log('Delete')
  }
    return(
        <><div className="login_Developer3">
        <div className="lo">
            <br />
            {loading && <p>Cargando.....</p>}
                {error && <p>Se ha producido un error</p>}
                {
                  data &&
                <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del proyecto</th>
                        <th>Fecha del avance</th>
                        <th>Descripcion del avance</th>
                        <th>observaciones</th>
                        <th>Acciones</th> 
                    </tr>
                </thead>

                <tbody>
                    {data.GestionAvances.map((avance, index) => (
                        <tr key={avance.id}>
                           <td scope = "row">{ index + 1}</td>
                            <td>{avance.nombre}</td>
                            <td>{avance.fechaAvance}</td>
                            <td>{avance.descripcionAvance}</td>
                            <td>{avance.observaciones.map((obs,index) => {
                               <li key={index}>
                               {obs.observaciones}
                             </li>
                      })}</td>
                            
                            <td>
                                <button type="submit" color="primary" >
                                    Editar
                                </button>{" "}
                                <button type="reset" color="danger" >Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        <br />

        </div> 
        </div> </>    
           
         );
}
export default ListarAvances;