import { gql } from "@apollo/client";

const GET_INSCRIPCIONES = gql `  
    query{
        GestionInscripciones{ 
            id           
            nombre  
            nombreEstudiante
            documentoEstudiante
            estadoInscripcion
            # fechaIngreso
            # fechaFinal
       }
    }
` 
export default GET_INSCRIPCIONES