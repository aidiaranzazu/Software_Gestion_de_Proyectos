import { gql } from "@apollo/client";

const SET_AVANCE = gql `  
    mutation setUsuario( $nombre:String!,$descripcionAvance:String! ){
        AgregarUsuario(usuario :{
            nombre:$nombre
            descripcionAvance:$descripcionAvance
       }){
            nombre
            descripcionAvance        
                 }
    }
` ;
export default SET_AVANCE;