import { gql } from "@apollo/client";

const GET_PROYECTOS = gql `
    query{
    Proyectos{
    id
    nombre
    objetivosGenerales
    objetivosEspecificos{
      objetivo
    }
    presupuesto
    docLider
    nombreLider
    estadoProyecto
    faseProyecto
    
  }
 
        }

 `
 export default GET_PROYECTOS

    
