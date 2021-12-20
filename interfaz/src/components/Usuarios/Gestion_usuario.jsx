import React, {useState} from 'react';
import "../../Estilos/usuarios.css"
import "../../Estilos/estilos2.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Gestion_usuario = () => {
    const [fecha,setFecha] = useState ([]); //estados
    const [rol,setRol] = useState ([]);
    const [estado,setEstado] = useState ([]);
    

    const enviarAlBackend =() => {             //Función
        console.log( 'Fecha: ', fecha);        //imprime en consola
        console.log( 'Rol asignado: ', rol);
        console.log( 'Estado: ', estado);
        toast.success ('Cambios guardados');
        /*alert(rol);*/
    };

    return(
        <div className="App">
        <div className="conten">
        <section className="login_Developer">
                 <h3>Registro</h3>
                  <hr/>
                  <form> 
                  
                    
                    <div className='opciones'>
                    <input type="text" name= "id" placeholder="Nombre completo"/>
                    <input type="text" name= "id" placeholder="Identificacion"/> 
                    
                    </div>
                    
                    <div >
                         
                    <input type="text" name= "id" placeholder="Correo"/>
                    <input type="text" name= "id" placeholder="Contraseña"/>                      
                        <select required defaultValue={0} onChange={(e) => {setRol(e.target.value);}} >
                        <option classname="opt" disabled value={0}>
                            Rol de usuario
                        </option>
                        <option>Administrador</option>
                        <option>Lider</option>    
                        <option>Estudiante</option>               
                    </select>
                    </div>
                    <hr/>

                
                    <div className="botonesregis">
                        <button type="button" onClick = {enviarAlBackend}>Registrarse</button> {/* ejecuta funcion enviaAlBakend al dar clic en botón*/}
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