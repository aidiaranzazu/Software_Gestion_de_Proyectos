import 'react-toastify/dist/ReactToastify.css';
import "../../Estilos/producto.css"
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useMutation} from '@apollo/client'




const TablaEditarPerfil = ({userid}) => {
  console.log(userid)
  const {register,handleSubmit} = useForm(); 
    
  const handleUpdate = (usuarioid) =>{    
      console.log(usuarioid)
  }
  return (
    <div className="con">
      <section className="login_Developer1">
        <h1>Editar Perfil</h1>
        <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="hhh ">
          <label >Nombre del Usuario </label>
          <input type="text" className="form-control"  placeholder="nombre"{...register("nombreCompleto",{required:true})}/>
          <label >Correo </label>
          <input type="text" className="form-control" placeholder="Correo" {...register("correo",{required:true, pattern: /^\S+@\S+$/i})} />
          <label >Identificación </label>
          <input type="number" className="form-control" placeholder="Identificacion" {...register("documento",{required:true})}/>
          <label >Contraseña</label>
          <input type="password" className="form-control" placeholder="Contraseña" {...register("password",{required:true})}/>
        </div>


        <div className="boton4">
          <button type="submit" id="ingresar" >Actualizar</button>

        </div>
        </form>
      </section>
    </div>
  )
}

export default TablaEditarPerfil;