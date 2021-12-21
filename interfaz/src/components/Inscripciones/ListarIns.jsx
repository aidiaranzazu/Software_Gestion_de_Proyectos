import React from "react";
import GET_INSCRIPCIONES from "../../Apollo/gql/getInscripcion";
import "../../Estilos/crud.css"
import { useQuery } from "@apollo/client";
// const data = [
//   { id: 1, nombrePro: "Proyect Ban", inscripcion: "Activo" },
//   { id: 2, nombrePro: "Femi Proyect", inscripcion: "Inactivo" },
  
// ];



const ListarInscripciones = () =>  {
  // state = {
  //   data: data,
  //   modalActualizar: false,
  //   modalInsertar: false,
  //   form: {
  //     id: "",
  //     nombrePro: "",
  //     inscripcion: "",
  //   },
  // };

  // mostrarModalActualizar = (dato) => {
  //   this.setState({
  //     form: dato,
  //     modalActualizar: true,
  //   });
  // };

  // cerrarModalActualizar = () => {
  //   this.setState({ modalActualizar: false });
  // };

  // mostrarModalInsertar = () => {
  //   this.setState({
  //     modalInsertar: true,
  //   });
  // };

  // cerrarModalInsertar = () => {
  //   this.setState({ modalInsertar: false });
  // };

  // editar = (dato) => {
  //   var contador = 0;
  //   var arreglo = this.state.data;
  //   arreglo.map((registro) => {
  //     if (dato.id == registro.id) {
  //       arreglo[contador].nombrePro = dato.nombrePro;
  //       arreglo[contador].inscripcion = dato.inscripcion;
  //     }
  //     contador++;
  //   });
  //   this.setState({ data: arreglo, modalActualizar: false });
  // };

  // eliminar = (dato) => {
  //   var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
  //   if (opcion == true) {
  //     var contador = 0;
  //     var arreglo = this.state.data;
  //     arreglo.map((registro) => {
  //       if (dato.id == registro.id) {
  //         arreglo.splice(contador, 1);
  //       }
  //       contador++;
  //     });
  //     this.setState({ data: arreglo, modalActualizar: false });
  //   }
  // };

  // insertar= ()=>{
  //   var valorNuevo= {...this.state.form};
  //   valorNuevo.id=this.state.data.length+1;
  //   var lista= this.state.data;
  //   lista.push(valorNuevo);
  //   this.setState({ modalInsertar: false, data: lista });
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };
  
  const { loading, data, error } = useQuery(GET_INSCRIPCIONES);

  const handleDelete = (id) => {
    console.log('Delete')
  }
 
    
    return (
        <><div className="login_Developer3">
            <div className="lo">
                <br />
                {loading && <p>Cargando.....</p>}
                {error && <p>Se ha producido un error</p>}
                {
                  data &&
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre del proyecto</th>
                            <th>Nombre del estudiante</th>
                            <th>Documento del estudiante</th>
                            <th>Inscripcion</th>
                            {/* <th>Fecha de ingreso</th>
                            <th>Fecha final</th> */}
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.GestionInscripciones.map((inscripcion,index) => (
                            <tr key={inscripcion.id}>
                               <td scope = "row">{ index + 1}</td>
                                <td>{inscripcion.nombre}</td>
                                <td>{inscripcion.nombreEstudiante}</td>
                                <td>{inscripcion.documentoEstudiante}</td>
                                <td>{inscripcion.estadoInscripcion}</td>
                                {/* <td>{inscripcion.fechaIngreso}</td>
                                <td>{inscripcion.fechaFinal}</td> */}
                                <td>
                                    <button type="submit" color="primary">Editar</button>{" "}
                                    <button type="reset" color="danger" onClick={handleDelete()} >Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                }
             <br />
                          

            </div>
            <div>            
            {/* <div isOpen={this.state.modalActualizar}> */}
                <section>
                    <div><h3>EDITAR INSCRIPCION</h3></div>
                </section>


                <form className="centre">
                    <label>
                        Id:
                    </label>

                    <input
                        className="form-control"
                        readOnly
                        type="text"
                        // value={data.id} 
                        />
                </form>

                <form className="centre">
                    <label>
                        Nombre del proyecto:
                    </label>
                    <input
                        className="form-control"
                        name="nombrePro"
                        type="text"
                        // onChange={this.handleChange}
                        // value={this.state.form.nombrePro} 
                        />
                </form>

                <form className="centre">
                    <label>
                        Inscripcion:
                    </label>
                    <input
                        className="form-control"
                        name="inscripcion"
                        type="text"
                        // onChange={this.handleChange}
                        // value={this.state.form.inscripcion}
                         />
                </form>
            </div>
            <br/><div>
                <button className="buttoninsc"
                    onClick={() => this.editar(this.state.form)}
                >
                    Editar
                </button>

            </div>
<br/>
            {/* <div isOpen={this.state.modalInsertar}>
                <section>
                    <div><h3>INSERTAR INSCRIPCION</h3></div>
                </section>

                <section className="centre">
                    <form>
                        <label>
                            Id:
                        </label>

                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={this.state.data.length + 1} />
                    </form>

                    <form>
                        <label>
                            Nombre del proyecto:
                        </label>
                        <input
                            className="form-control"
                            name="nombrePro"
                            type="text"
                            onChange={this.handleChange} />
                    </form>

                    <form>
                        <label>
                            Inscripcion:
                        </label>
                        <input
                            className="form-control"
                            name="inscripcion"
                            type="text"
                            onChange={this.handleChange} />
                    </form>
                </section>
<br/>
                <section>
                    <button className="buttoninsc"
                        onClick={() => this.insertar()}
                    >
                        Insertar
                    </button>

                </section>
                <br />
                <br />
            </div>
            <div /> */}
</div></>

            );
            }
            
export default ListarInscripciones;
      
