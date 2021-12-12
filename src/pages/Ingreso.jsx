import React  from "react";
import "../Estilos/estilos2.css";
import { useAuth0 } from "@auth0/auth0-react"; //Autenticación de usuario con el onClick={() => loginWithRedirect()}

const Ingreso = () =>{
 
  const { loginWithRedirect } = useAuth0();
  
  
    return(
      <div className="App">
      <div className="conten">
      <section className="login_Developer">
   
      <h1>Iniciar Sesion</h1>      
      <form>
      <label for="nombre_usuario">Nombre de usuario</label>
      <input type="text" placeholder="Ingrese Nombre de Usuario"></input>
      <label for="Constraseña">Contraseña</label>
      <input type="password" placeholder="Ingrese su contraseña"></input>
      
      <div className="botones">
      <button  onClick={() => loginWithRedirect()} id="ingresar">Ingresar</button> 
      <span> -------  o  ------- </span>
      <button type="Google">Ingresar con Google</button> 
      </div>
     
      <div class="foot-lnk">
        <a href="#forgot">Registrarse</a>
        </div>
      

      </form>
      </section>
    </div>
    </div>

);
}

export default Ingreso