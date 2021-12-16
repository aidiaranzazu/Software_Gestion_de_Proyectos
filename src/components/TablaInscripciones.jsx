import { Link } from "react-router-dom";

const TablaInscripciones = () =>{
    return (
        <div className="login_Developer">
        <h3>Registrar</h3>
        <table className="table">
          <thead>
            <tr>
              <th> ID </th>
              <th> Nombre del proyecto </th>
              <th> Inscripcion </th>
            </tr>
          </thead>
        </table>
        <div className="boton">
          <button type="button" id="ingresar"><Link to="/src/pages/ListarIns.jsx">Editar Inscripciones</Link></button>
        </div>
      </div>


);
};
        // eslint-disable-next-line no-lone-blocks
        {/*<div>
        <div className="conten">
          
            <div>
        <section className="login_Developer_1"> 
              <h1>ESTUDIANTE</h1>
               <form>
               <label for="Constraseña">Buscar estudiante</label>
               <input type="text" placeholder="Ingrese estudiante"></input>
              <input type="submit" value="Buscar"></input> 
               Productos
              <select>
                  <option>estudiante1</option>
                  <option>estudiante2</option>
                  <option>estudiante3</option>
                  <option>estudiante4</option>
                  </select>    
              <div class="foot-lnk">            
               </div>    
            </form>
            </section>
            </div>
          </div>
        </div>  */}


export default TablaInscripciones;
