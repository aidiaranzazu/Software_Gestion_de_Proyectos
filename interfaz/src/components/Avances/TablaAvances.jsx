import { useEffect, useState, useRef } from "react/cjs/react.development";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../Estilos/producto.css"
import axios from "axios";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";




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
           <button type="button" id="ingresar" ><Link to={"/ListarAvances"}>listar avances</Link></button> 
           
</div>
</section>
</div>
)
 }

export default TablaAvances;