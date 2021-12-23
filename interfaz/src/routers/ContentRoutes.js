import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Gestion_avances from '../components/Avances/Gestion_avances.jsx';
import Gestion_inscripciones from '../components/Inscripciones/Gestion_inscripciones';
import Gestion_usuario from '../components/Usuarios/Gestion_usuario.jsx';
import Gestion_proyectos from '../components/Proyectos/Gestion_proyectos.jsx';
import Editar_perfil from '../components/Usuarios/Editar_perfil.jsx';
import Ingreso from '../components/Login/Ingreso.jsx';
import ListarProyect from '../components/Proyectos/ListarProyect.jsx';
import ListarAvances from "../components/Avances/ListarAvances"
import Header from '../components/container/header.jsx';
import Footer from "../components/Footer.jsx";
import ListarUsuarios from "../components/Usuarios/ListarUsuarios.js"
import TablaEditarPerfil from "../components/Usuarios/TablaEditarPerfil.jsx";
import ListarIns from "../components/Inscripciones/ListarIns"
const ContentRouter = () =>{
    return(
       <>
       <Header />
       <Routes>
          
          <Route path="/GestionAvances" element={ <Gestion_avances/> }/>          
          <Route path="/GestionInscripciones" element={ <Gestion_inscripciones/>}/>                     
          <Route path="/GestionUsuario" element ={<Gestion_usuario/>}/>                 
          <Route path="/GestionProyectos" element = {<Gestion_proyectos/> }/>        
          <Route path="/EditarPerfil" element ={<Editar_perfil/>}/>              */}
          <Route path="/ListarProyect" element={<ListarProyect/>}/>          
          <Route path="/ListarIns" element={<ListarIns/>}/>  
          <Route path="/ListarUsuarios" element={<ListarUsuarios/>}/> 
          <Route path="/TablaEditarPerfil" element={<TablaEditarPerfil/>}/> 
          <Route path="/listarInscripciones" element={<ListarIns/>}/>   
          <Route path="/listarAvances" element={<ListarAvances/>}/>          
              
        

        </Routes>   
         <Footer/>
       </>  
      
    )
}
export default ContentRouter