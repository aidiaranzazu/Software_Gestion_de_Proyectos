import { gql } from "@apollo/client";

const SET_PROYECTO = gql `  
    mutation setProyecto( $nombre:String!,$objetivosGenerales:String!,$objetivosEspecificos:[ObjetivoInput]!,$presupuesto:Int!,$docLider:Int!,$nombreLider:String! ){
        AgregarProyecto(proyecto :{
            nombre:$nombre,
            objetivosGenerales: $objetivosGenerales,            
            objetivosEspecificos:$objetivosEspecificos, 
            presupuesto:$presupuesto,
            docLider:$docLider,
            nombreLider:$nombreLider

       }){        
            nombre
            objetivosGenerales            
            objetivosEspecificos{
                objetivo
            }
            presupuesto
            docLider
            nombreLider
       }
    }
` ;
export default SET_PROYECTO;