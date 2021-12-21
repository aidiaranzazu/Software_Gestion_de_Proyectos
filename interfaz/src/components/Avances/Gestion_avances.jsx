import React, {useEffect, useState, }  from "react";
import "../../Estilos/producto.css"
import TablaAvances from "./TablaAvances.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Gestion_avances = () =>{
      return(
      < >   
       
            <TablaAvances />
            <ToastContainer position="top-center"
            autoClose={5000}/>
      </>
          );
}
export default Gestion_avances;