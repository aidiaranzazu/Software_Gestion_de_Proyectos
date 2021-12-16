
import "../Estilos/producto.css";
import React from "react";


import 'react-toastify/dist/ReactToastify.css';
const data = [
  { id: 1, nombre: "Proyecto 1", objgeneral: "lograr eficiencia", objespecifico:"dddddddd", 
  presupuesto:"200.000", fechainicial:"12/02/2021", fechafinal:"30/09/2021", documento:"22222",
nombrelider:"Ana Mileth" },
  { id: 2, nombrePro: "Femi Proyect", inscripcion: "Inactivo" },
  
]; 

class listarProyectos extends React.Component{
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      objgeneral: "",
      objespecifico:"",
      presupuesto:"",
      fechainicial: "",
      fechafinal:"",
      documento:"",
      nombrelider:"",
      estadoproyecto:"",
      faseproyecto:"",

    },
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombrePro = dato.nombrePro;
        arreglo[contador].inscripcion = dato.inscripcion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  render() {
  return(
    
  
  <div className="login_Developer3">
    <div className="lo">
              <h3>Listar proyectos</h3>
          <table className="table">
          <thead>
            <tr>
              <th> Nombre </th>
              <th>Objetivos generales  </th>
              <th>Objetivos especificos  </th>
              <th>Presupuesto </th>
              <th>Fecha inicial</th>
              <th>Fecha final </th>
              <th>Documento</th>
              <th>Nombre del lider</th>
              <th>Estado del proyecto</th>
              <th>Fase del proyecto</th>
            </tr>
          </thead>
          

          <section>
                        {this.state.data.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.objgeneral}</td>
                                <td>{dato.objespecifico}</td>
                                <td>{dato.presupuesto}</td>
                                <td>{dato.fechainicial}</td>
                                <td>{dato.fechafinal}</td>
                                <td>{dato.documento}</td>
                                <td>{dato.nombrelider}</td>

                                <td>
                                    <button
                                        color="primary"
                                        onClick={() => this.mostrarModalActualizar(dato)}
                                    >
                                        Editar
                                    </button>{" "}
                                    <button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </section>
                    </table>
          </div>
  
  </div>
  )
   }
  }
  
  export default listarProyectos;