import Layout from './Layouts/layout.jsx';
import PrivateLayout from './Layouts/PrivateLayout.jsx';

import './Estilos/Style.css';
import "./Estilos/estilos2.css"
import Gestion_lider from './pages/Gestion_lider.jsx';
import Gestion_estudiante from './pages/Gestion_estudiante.jsx';
import Gestion_usuario from './pages/Gestion_usuario.jsx';
import Gestion_administrador from './pages/Gestion_administrador.jsx';
import Ingreso from './pages/Ingreso.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";  //autenticación de usuario


function App() {
  
  return (     
    <Auth0Provider                 //autenticación de ususario con Auth0
      domain="misiontic-proyecto.us.auth0.com"
      clientId="S4qEAxjMrFTFLOLcUoDUNeci3bLHJWag"
      redirectUri= {window.location.origin}>
        
        <div className="App">
        
        <Router>
        <PrivateLayout>
        
        <Layout>

          <Switch>
          
          <Route path="/src/pages/Gestion_lider.jsx">
          
            <Gestion_lider/>
          </Route>
          <Route path="/src/pages/Gestion_estudiante.jsx">
          
            <Gestion_estudiante/>
          </Route>
          <Route path="/src/pages/Gestion_usuario.jsx">
            <Gestion_usuario/>
          </Route>
          
          <Route path="/src/pages/Gestion_administrador.jsx">
          <Gestion_administrador/>
          </Route> 
         
          
        </Switch>  
          
        </Layout>
     
        <Switch>
        
        <Route path="/src/pages/ingreso.jsx">
          <Ingreso/>
          
        
        </Route> 
        
        </Switch>
        </PrivateLayout>
        </Router>
        
        
      </div>
    </Auth0Provider>   
    
      
      
     
  );
}
export default App;