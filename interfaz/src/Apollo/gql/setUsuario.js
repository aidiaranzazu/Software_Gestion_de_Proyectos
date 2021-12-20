import { gql } from "@apollo/client";

const SET_USUARIO = gql `  
    mutation setUsuario( $nombreCompleto:String!,$documento:Int!,$correo:String!,$password:String!,$rol:String! ){
        AgregarUsuario(usuario :{
            nombreCompleto:$nombreCompleto,
            documento: $documento,            
            correo:$correo, 
            password:$password,
            rol:$rol
       }){
        
           nombreCompleto
           documento
           correo
           password
           rol
       }
    }
` ;
export default SET_USUARIO;