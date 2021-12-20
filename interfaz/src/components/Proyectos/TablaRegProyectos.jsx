import React from "react";
import "../../Estilos/tablaadmin.css"
import { Link } from "react-router-dom";
import {ApolloClient, HttpLink,InMemoryCache,gql} from '@apollo/client';

const data = [
    { id: 1, nombre: "Proyecto 1", objgeneral: "lograr eficiencia", objespecifico:"dddddddd", 
    presupuesto:"200.000", fechainicial:"12/02/2021", fechafinal:"30/09/2021", documento:"22222",
nombrelider:"Ana Mileth" },
    { id: 2, nombre: "Proyecto 1", objgeneral: "ganar publico" },
    
  ];
 
 
  

const Tabla_proyectos =() =>{
  
//   const  state = {
//         data: data,
//         modalActualizar: false,
//         modalInsertar: false,
//         form: {
//           id: "",
//           nombre: "",
//           objgeneral: "",
//           objespecifico:"",
//           presupuesto:"",
//           fechainicial: "",
//           fechafinal:"",
//           documento:"",
//           nombrelider:"",
//           estadoproyecto:"",
//           faseproyecto:"",

//         },
//       };

//   const  insertar = ()=>{
//         var valorNuevo= {...this.state.form};
//         valorNuevo.id=this.state.data.length+1;
//         var lista= this.state.data;
//         lista.push(valorNuevo);
//         this.setState({ modalInsertar: false, data: lista });
//       }
    
//      const handleChange = (e) => {
//         this.setState({
//           form: {
//             ...this.state.form,
//             [e.target.name]: e.target.value,
//           },
//         });
//       };
    
      
    return(
        

      <div className="con">
           <section className="login_Developer1">
          <h1>Registrar proyecto</h1>   
        <div className="campos1 ">
            <label >Nombre </label>
            <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    // onChange={this.handleChange} 
                    />  

            <label >Objetivos generales </label>
            <input
                    className="form-control"
                    name="objgenerales"
                    type="text"
                    // onChange={this.handleChange}
                     />  

            <label >Objetivos especificos </label>
            <input className="form-control"
                    name="objespecifico"
                    type="text"
                    // onChange={this.handleChange} 
                    /> 

            <label >Presupuesto </label>
            <input className="form-control"
                    name="presupuesto"
                    type="text"
                    // onChange={this.handleChange} 
                    /> 

            <label >Fecha inicial</label>
            <input className="form-control"
                    name="fechainicial"
                    type="text"
                    // onChange={this.handleChange}
                     /> 
        </div>

      
        <div className="campos2 ">   
            <label >Fecha final</label>
            <input className="form-control"
                    name="fechafinal"
                    type="text"
                    // onChange={this.handleChange} 
                    /> 
            <label >Documento</label>
            <input className="form-control"
                    name="documento"
                    type="text"
                    // onChange={this.handleChange}
                     /> 
            <label >Nombre del lider</label>
            <input className="form-control"
                    name="nombrelider"
                    type="text"
                    // onChange={this.handleChange}
                     /> 
            <label >Estado del proyecto</label>
            <select className="lista">
                <option classname="opt" disabled value={0}>
                    Estado del proyecto
                </option>
                    <option>Autorizado</option>
                    <option>No autorizado</option> 
                    <option>Pendiente</option>                
            </select>
            <label >Fase del proyecto</label>
            <select className="lista">
                <option classname="opt" disabled value={0}>
                   Fase del proyecto
                </option>
                    <option>Activo</option>
                    <option>Inactivo</option>               
            </select>
           
           
        </div>
        <div className="boton1">
        <button className="buttoninsc"
                        onClick={() => this.insertar()}
                    >
                        Insertar Proyecto
                    </button>
          
           </div>
           <div className="boton">
        <button type="button" id="ingresar"><Link to="/ListarProyect">Listar proyectos</Link></button> 
        </div>

        
      </section>    
</div>
    );
  }

export default Tabla_proyectos