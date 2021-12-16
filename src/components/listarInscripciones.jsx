import React from "react";

const data = [
  { id: 1, personaje: "Naruto", anime: "Naruto" },
  { id: 2, personaje: "Goku", anime: "Dragon Ball" },
  { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
  { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
  { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
  { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];



class listarInscripciones extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      personaje: "",
      anime: "",
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
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
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
        <><div className="login_Developer1">
            <br />
            <button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</button>
            <br />
            <br />
            <table>
                <thead> 
                    <tr>
                        <th>ID</th>
                        <th>Personaje</th>
                        <th>Anime</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.data.map((dato) => (
                        <tr key={dato.id}>
                            <td>{dato.id}</td>
                            <td>{dato.personaje}</td>
                            <td>{dato.anime}</td>
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
        </div><div isOpen={this.state.modalActualizar}>
                <section>
                    <div><h3>Editar Registro</h3></div>
                </section>


                <form>
                    <label>
                        Id:
                    </label>

                    <input
                        className="form-control"
                        readOnly
                        type="text"
                        value={this.state.form.id} />
                </form>

                <form>
                    <label>
                        Personaje:
                    </label>
                    <input
                        className="form-control"
                        name="personaje"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.form.personaje} />
                </form>

                <form>
                    <label>
                        Anime:
                    </label>
                    <input
                        className="form-control"
                        name="anime"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.form.anime} />
                </form>
            </div><div>
                <button
                    color="primary"
                    onClick={() => this.editar(this.state.form)}
                >
                    Editar
                </button>
                <button
                    color="danger"
                    onClick={() => this.cerrarModalActualizar()}
                >
                    Cancelar
                </button>
            </div><div isOpen={this.state.modalInsertar}>
                <section>
                    <div><h3>Insertar Personaje</h3></div>
                </section>

                <section>
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
                            Personaje:
                        </label>
                        <input
                            className="form-control"
                            name="personaje"
                            type="text"
                            onChange={this.handleChange} />
                    </form>

                    <form>
                        <label>
                            Anime:
                        </label>
                        <input
                            className="form-control"
                            name="anime"
                            type="text"
                            onChange={this.handleChange} />
                    </form>
                </section>

                <section>
                    <button
                        color="primary"
                        onClick={() => this.insertar()}
                    >
                        Insertar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.cerrarModalInsertar()}
                    >
                        Cancelar
                    </button>
                </section>
            </div></>
      
    );
  }
}
export default listarInscripciones;
