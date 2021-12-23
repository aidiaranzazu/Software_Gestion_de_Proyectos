import { gql } from "@apollo/client";

const GET_AVANCES = gql`  
    query{
        GestionAvances{ 
            nombre
            # fechaAvance
            descripcionAvance
            observaciones{
                observacion
            },
           }
    }
`
export default GET_AVANCES