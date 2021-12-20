import { gql } from "@apollo/client";

const GET_USUARIOS = gql `  
    query{
       Usuarios{
            id
            nombreCompleto
            documento
            rol
            correo 
            password
            estadoUsuario 
       }
    }
` 
export default GET_USUARIOS