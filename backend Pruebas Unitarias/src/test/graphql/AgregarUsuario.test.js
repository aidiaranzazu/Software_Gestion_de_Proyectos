import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dbConnection from "../../database/config";
import dotenv from "dotenv";

dotenv.config();


const postAgregarUsuario = {
    mutation: `{
        AgregarUsuario(usuario:{
          id:""
          nombreCompleto:"Julio Botero",
          documento:8765432189,
          rol:"Estudiante",
          correo:"Julio.Botero@goldendevelpmen.com",
          password:"*q123456",
          estadoUsuario:"Aceptado"
        }){
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
    //,
    // variables: {},
    // context: {
    //     user: {
    //         auth: true
    //     }
    // },
    // esperado: {
    //     data: {
    //         AgregarUsuario: {
    //             id:"",
    //             nombreCompleto:"Julio Botero",
    //             documento:8765432189,
    //             rol:"Estudiante",
    //             correo:"Julio.Botero@goldendevelpmen.com",
    //             password:"*q123456",
    //             estadoUsuario:"Aceptado"
    //         }
    //     }
    // }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const { query, variables, context, esperado } = postAgregarUsuario

test('traer todos los proyectos', async () => {

    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);
    if(result.data){
        return result.data.addEventTag
    }else{
        throw new Error(...result.errors.map(err => ` \n${err.message}`));
    }

})
