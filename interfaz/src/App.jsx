import Layout from './Layouts/layout.jsx';
import PrivateLayout from './Layouts/PrivateLayout.jsx';
import './Estilos/Style.css';
import "./Estilos/estilos2.css"
import { Auth0Provider } from "@auth0/auth0-react";  //autenticación de usuario
import AppRouter from './routers/AppRouter.js';



function App() {
  
  return (     
    // <Auth0Provider                 //autenticación de ususario con Auth0
    //   domain="misiontic-proyecto.us.auth0.com"
    //   clientId="S4qEAxjMrFTFLOLcUoDUNeci3bLHJWag"
    //   redirectUri= {window.location.origin}>    
        <div>
          <AppRouter/>
        </div>
      
    // </Auth0Provider>        
      
     
  );
}
export default App;