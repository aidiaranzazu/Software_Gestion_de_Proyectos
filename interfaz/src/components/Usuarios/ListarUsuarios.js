import "../../Estilos/producto.css";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import GET_USUARIOS from "../../Apollo/gql/getUsuarios"
import {useQuery} from "@apollo/client"
import { NavLink } from "react-router-dom";

const ListarUsuarios = () =>{
//   state = {
//     data: data,
//     modalActualizar: false,
//     modalInsertar: false,
//     form: {
//       id: "",
//       nombre: "",
//       objgeneral: "",
//       objespecifico:"",
//       presupuesto:"",
//       fechainicial: "",
//       fechafinal:"",
//       documento:"",
//       nombrelider:"",
//       estadoproyecto:"",
//       faseproyecto:"",

//     },
//   };

//   insertar= ()=>{
//     var valorNuevo= {...this.state.form};
//     valorNuevo.id=this.state.data.length+1;
//     var lista= this.state.data;
//     lista.push(valorNuevo);
//     this.setState({ modalInsertar: false, data: lista });
//   }

//   editar = (dato) => {
//     var contador = 0;
//     var arreglo = this.state.data;
//     arreglo.map((registro) => {
//       if (dato.id == registro.id) {
//         arreglo[contador].nombrePro = dato.nombrePro;
//         arreglo[contador].inscripcion = dato.inscripcion;
//       }
//       contador++;
//     });
//     this.setState({ data: arreglo, modalActualizar: false });
//   };

//   eliminar = (dato) => {
//     var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
//     if (opcion == true) {
//       var contador = 0;
//       var arreglo = this.state.data;
//       arreglo.map((registro) => {
//         if (dato.id == registro.id) {
//           arreglo.splice(contador, 1);
//         }
//         contador++;
//       });
//       this.setState({ data: arreglo, modalActualizar: false });
//     }
//   };
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
                                    <NavLink color="primary" to ={`/productos/${usuario.id}` } >
                                        Editar
                                    </NavLink>{" "}
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