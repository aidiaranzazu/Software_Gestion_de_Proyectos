import Developer from "../img/developer.jpg";
import { Link } from "react-router-dom";
import "../Estilos/Style.css"
import { useAuth0 } from "@auth0/auth0-react";

const Header =() =>{
  const {logout } = useAuth0();

  const cerrarSesion = () => {
    logout({ returnTo: window.location.origin })
    
  };

    return (
    <div>
      <div className ="header2">
      <span><Link to="../../public/index.html"> <img className="avatar" src={Developer} />
        </Link> </span>
      </div>
    <header>
      <nav className="menuCSS3">
        <ul>
          <li> <Link to="/src/pages/ingreso.jsx"> Inicio</Link></li>
          
          <li><a href="#">Navegacion</a>
          <ul>
            <li><Link to="/src/pages/Gestion_usuario.jsx"> Usuario </Link> </li>
            <li><Link to="/src/pages/Gestion_administrador.jsx"> administrador </Link></li>
            <li><Link to="/src/pages/Gestion_lider.jsx"> lider </Link></li>
            <li><Link to="/src/pages/Gestion_lider.jsx"> estudiante </Link></li>
            
            <br />
        </ul>
            </li>
            <li><a href="#">Contacto</a></li>
            <li><button id="salir" onClick={() => cerrarSesion()}>Cerrar Sesión</button></li>
            </ul>
        </nav>
    </header>
    </div>
    )
}
export default Header;
