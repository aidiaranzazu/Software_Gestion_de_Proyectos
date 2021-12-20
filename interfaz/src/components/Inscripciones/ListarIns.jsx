import React from "react";
import "../../Estilos/crud.css"
const data = [
  { id: 1, nombrePro: "Proyect Ban", inscripcion: "Activo" },
  { id: 2, nombrePro: "Femi Proyect", inscripcion: "Inactivo" },
  
];



class listarInscripciones extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombrePro: "",
      inscripcion: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

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

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
        <><div className="login_Developer3">
            <div className="lo">
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre del proyecto</th>
                            <th>Inscripcion</th>
                            <th>Acción</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.nombrePro}</td>
                                <td>{dato.inscripcion}</td>
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
                    </tbody>
                </table>
                <br />

            </div>

            <div isOpen={this.state.modalActualizar}>
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
                        value={this.state.form.id} />
                </form>

                <form className="centre">
                    <label>
                        Nombre del proyecto:
                    </label>
                    <input
                        className="form-control"
                        name="nombrePro"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.form.nombrePro} />
                </form>

                <form className="centre">
                    <label>
                        Inscripcion:
                    </label>
                    <input
                        className="form-control"
                        name="inscripcion"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.form.inscripcion} />
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
            <div isOpen={this.state.modalInsertar}>
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
            <div />
</div></>

            );
            }
            }
            export default listarInscripciones;
      
