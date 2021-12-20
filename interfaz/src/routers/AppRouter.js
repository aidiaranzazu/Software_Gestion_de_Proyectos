import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Ingreso from '../components/Login/Ingreso.jsx';
import Footer from "../components/Footer.jsx";
import ContentRouter from "./ContentRoutes.js";

const AppRouter = () =>{
    return(
       <BrowserRouter>
       
       <Routes>          
          <Route path="/Login" element={ <Ingreso/> }/>      
          <Route path="/*" element={<ContentRouter />  }/>     
        </Routes>   
         <Footer/>
       </BrowserRouter>
    )
}
export default AppRouter
