import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dbConnection from "../../database/config";
import dotenv from "dotenv";

dotenv.config();


const getUsuarioEstudiante = {
  query: `
    {
      UsuarioEstudiante(rol:"Lider"){
        id
        nombreCompleto
        documento
        rol
        correo
        password
        estadoUsuario
      }
      }
    `,
  variables: {},
  context: {
    user: {
      auth: true
    }
  },
  esperado: {
    data: {
      UsuarioEstudiante: [
        {
          id: "61c20b847d151f77e7a26731",
          nombreCompleto: "Cristhian Dorado",
          documento: 987654321,
          rol: "Lider",
          correo: "cristhian.dorado@gmail.com",
          password: "$2b$10$fC.1HPAxHStlo..AFyilxOIKv5smyq05cApmojGgoI6yAcxmABZXC",
          estadoUsuario: "Aceptado"
        }
      ]
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const { query, variables, context, esperado } = getUsuarioEstudiante

test('Buscar Usuario por Rol Lider', async () => {

  await dbConnection();
  const result = await graphql(schema, query, null, context, variables);
  expect(result).toEqual(esperado);

})
