import React, {useEffect, useState, }  from "react";
import "../../Estilos/producto.css"
import TablaInscripciones from "./TablaInscripciones";
import TablaAvances from "../Avances/TablaAvances";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";




const Gestion_estudiante = () =>{
     return(
      < >
       
            <TablaInscripciones  />
            {/*<TablaAvances listaProductos={productos} setMostrarProductos={setMostrarProductos}/>
            <ToastContainer position="top-center"
      autoClose={5000}/>*/}
      </>
          );
}
export default Gestion_estudiante;