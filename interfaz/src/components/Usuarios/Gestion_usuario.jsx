import React, {useState} from 'react';
import "../../Estilos/usuarios.css"
import "../../Estilos/estilos2.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useMutation} from '@apollo/client'
import SET_USUARIO from '../../Apollo/gql/setUsuario'

const Gestion_usuario = () => {
     
   const {action} = useParams();
   
    const {register,handleSubmit} = useForm();

    const[crearUsuario]=useMutation(SET_USUARIO);
    
    const handleCreate = (data) =>{    
        console.log(data)
         
        const{nombreCompleto,documento,correo,password,rol} =data   

       crearUsuario({variables:{nombreCompleto,documento:parseInt(documento),correo,password,rol}})
       
       
    }
   

    return(
        <div className="App">
        <div className="conten">
        <section className="login_Developer">
                 <h3>Registro</h3>
                  <hr/>
                  <form onSubmit={handleSubmit(handleCreate)}>                 
                    
                    <div className='opciones'>
                    <input type="text" name= "id" placeholder="Nombre completo"{...register("nombreCompleto",{required:true})}/>
                    <input type="number" name= "id" id ="docu" placeholder="Identificacion" {...register("documento",{required:true})}  /> 
                    
                    </div>
                    
                    <div >
                         
                    <input type="text" name= "id" placeholder="Correo" {...register("correo",{required:true, pattern: /^\S+@\S+$/i})}/>
                    <input type="password" name= "id" placeholder="Contraseña" {...register("password",{required:true})}/>                      
                        <select {...register("rol",{required:true})} >
                        <option classname="opt" disabled value={0}>
                            Rol de usuario
                        </option>
                        {/* <option>Administrador</option> */}
                        <option value="1">Lider</option>    
                        <option value="2">Estudiante</option>               
                    </select>
                    </div>
                    <hr/>

                
                    <div className="botonesregis">
                        <button type="submit">Registrarse</button> {/* ejecuta funcion enviaAlBakend al dar clic en botón*/}
                        <button type ="reset"> Limpiar  </button>
                        <button type="button" id="ingresar"><Link to="/ListarUsuarios">Listar Usuarios</Link></button> 
                        <ToastContainer position="top-right" autoClose={4000}/>
                    </div>
                 </form>
                </section>
            </div>  
          </div>
    )

};

export default Gestion_usuario