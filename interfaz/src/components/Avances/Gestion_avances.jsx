import React, {useEffect, useState, }  from "react";
import "../../Estilos/producto.css"
import TablaAvances from "../TablaAvances";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Gestion_avances = () =>{
      const [productos, setMostrarProductos] = useState([]);
      useEffect(() => {
            const options = { method: 'GET', url: 'http://localhost:3001/api/product' };

            axios.request(options).then(function (response) {
                  console.log(response.data);
                  setMostrarProductos(response.data.productos)

            }).catch(function (error) {
                  console.error(error);
            });
      }, [setMostrarProductos]);


      return(
      < >
       
       
            <TablaAvances listaProductos={productos} setMostrarProductos={setMostrarProductos}/>
            <ToastContainer position="top-center"
            autoClose={5000}/>
      </>
          );
}
export default Gestion_avances;