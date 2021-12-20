import React  from "react";
import "../../Estilos/estilos2.css";
import { useAuth0 } from "@auth0/auth0-react"; //Autenticación de usuario con el onClick={() => loginWithRedirect()}
import { useNavigate } from "react-router-dom";

const Ingreso = () =>{
  
  const navigate = useNavigate();
  // const { loginWithRedirect } = useAuth0();
  const handleLogin =(e) =>{
     e.preventDefault();
     navigate("/GestionUsuario",{
       replace:true
     })
  }
  
    return(
      <div className="App">
      <div className="conten">
      <section className="login_Developer">
   
      <h1>Iniciar Sesión</h1>      
      <form onSubmit={handleLogin}>
      <label for="correo">Correo</label>
      <input type="text" placeholder="Ingrese el correo"></input>
      <label for="Constraseña">Contraseña</label>
      <input type="password" placeholder="Ingrese su contraseña"></input>
      
      <div className="botones">
      <button  type="submit" id="ingresar" value="Login">Ingresar</button> 
      <span> -------  o  ------- </span>
      <button type="Google">Ingresar con Google</button> 
      
      </div>
     
      <div class="foot-lnk">
        <a href="/src/pages/Gestion_usuario.jsx">Registrarse</a>
        </div>
      

      </form>
      </section>
    </div>
    </div>

);
}

export default Ingreso