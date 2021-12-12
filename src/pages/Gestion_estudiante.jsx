import React, {useEffect, useState, }  from "react";
import "../Estilos/producto.css"
import TablaEstudiante1 from "../components/TablaEstudiante1";
import TablaEstudiante2 from "../components/TablaEstudiante2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";




const Gestion_estudiante = () =>{
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
       
            <TablaEstudiante1  />
            <TablaEstudiante2 listaProductos={productos} setMostrarProductos={setMostrarProductos}/>
            <ToastContainer position="top-center"
                  autoClose={5000}/>
      </>
          );
}
export default Gestion_estudiante;