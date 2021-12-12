import React, {useState} from 'react';
import "../Estilos/usuarios.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <div className="contenedor">
                 <h3>Gestión de usuarios</h3>
                  <hr/>
                  <form> 
                    <input id="fecha" type="date" onChange={(e) => {setFecha(e.target.value);}}/> {/*Captura el cambio en el estado y lo guarda en la veriable setFecha*/} 
                    <div className="opciones">
                    <select className="seleccionar" required defaultValue={0}>
                        <option disabled value={0}>
                        Usuario
                        </option>
                        <option>Usuario1</option>
                        <option>Usuario2</option>
                        <option>Usuario3</option>
                    </select>

                    <input className="seleccionar" name= "id" placeholder="Identificación"/> 
                    
                    </div>
                    
                    <div className="opciones2">
                         
                        <input namet= "estado" placeholder="Estado Actual"/> 
                        <input type="codigo" placeholder="Código"/>                         
                        <select required defaultValue={0} onChange={(e) => {setRol(e.target.value);}} >
                        <option disabled value={0}>
                            Rol de usuario
                        </option>
                        <option>Administrador</option>
                        <option>Vendedor</option>                  
                    </select>
                    </div>
                    <hr/>

                    
                    <div className="selec">
                        <label htmlFort="Estado">Cambiar estado de usuario</label>
                        <select required defaultValue={0} onChange={(e) => {setEstado(e.target.value);}}> 
                        <option disabled value={0}>Estado</option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                        </select> 
                    </div>

                    <div className="botones1">
                        <button type="button" onClick = {enviarAlBackend}>Guardar Datos</button> {/* ejecuta funcion enviaAlBakend al dar clic en botón*/}
                        <button type ="reset"> Limpiar Campos </button>
                        <ToastContainer position="top-right" autoClose={4000}/>
                    </div>
            </form>
                
            </div>  
    )

};

export default Gestion_usuario