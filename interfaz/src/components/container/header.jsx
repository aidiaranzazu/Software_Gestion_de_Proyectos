import Developer from "../../img/developer.jpg";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "../../Estilos/Style.css"
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const { logout } = useAuth0();

  // const cerrarSesion = () => {
  //   logout({ returnTo: window.location.origin })

  // };
  const navigate = useNavigate();
  const handleLogout = () =>{
    navigate("/login",{
      replace:true
    }
    );
    
  }

  return (
    <div>
      <div className="header2">
        <span><Link to="../../public/index.html"> <img className="avatar" src={Developer} />
        </Link> </span>
      </div>
      <header>
        <nav className="menuCSS3">
          <ul>
            <li> <Link to="/"> Inicio</Link></li>

            <li><a href="#">Navegacion</a>
              <ul>
                <li><NavLink
                        to="/GestionUsuario"> 
                        Gestion Usuarios
                   </NavLink> </li>
                <li><Link to="/GestionProyectos"> Gestion proyectos </Link></li>
                <li><Link to="/GestionAvances"> Gestión Avances </Link></li>
                <li><Link to="/GestionInscripciones"> Gestión Inscripciones </Link></li>

                <br />
              </ul>
            </li>
            <li><a href="#">Contacto</a></li>

            <li id="perfil"><a href="#">Perfil</a>
              <ul>
                <li><Link to="/EditarPerfil"> Editar perfil </Link> </li>
                <li><button id="salir" onClick={handleLogout}>Cerrar Sesión</button></li>


              </ul>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Header;
