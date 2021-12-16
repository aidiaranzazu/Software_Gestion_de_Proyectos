import Layout from './Layouts/layout.jsx';
import PrivateLayout from './Layouts/PrivateLayout.jsx';

import './Estilos/Style.css';
import "./Estilos/estilos2.css"
import Gestion_avances from './pages/Gestion_avances.jsx';
import Gestion_inscripciones from './pages/Gestion_inscripciones.jsx';
import Gestion_usuario from './pages/Gestion_usuario.jsx';
import Gestion_proyectos from './pages/Gestion_proyectos.jsx';
import Ingreso from './pages/Ingreso.jsx';
import ListarProyect from './pages/ListarProyect.jsx';
import ListarIns from './pages/ListarIns.jsx';
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
          
          <Route path="/src/pages/Gestion_avances.jsx">
          
            <Gestion_avances/>
          </Route>
          <Route path="/src/pages/Gestion_inscripciones.jsx">
          
            <Gestion_inscripciones/>
          </Route>
          <Route path="/src/pages/Gestion_usuario.jsx">
            <Gestion_usuario/>
          </Route>
          
          <Route path="/src/pages/Gestion_proyectos.jsx">
          <Gestion_proyectos/>
          </Route> 
         
          <Route path="/src/pages/ListarProyect.jsx">
          <ListarProyect/>
          </Route> 

          <Route path="/src/pages/ListarIns.jsx">
          <ListarIns/>
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