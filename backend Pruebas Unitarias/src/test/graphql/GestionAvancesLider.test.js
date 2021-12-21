import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dbConnection from "../../database/config";
import dotenv from "dotenv";

dotenv.config();

const getGestionAvancesLider = {
    query: `
    {
        GestionAvancesLider(documentoEstudiante:987654321){
            id
            idProyecto
            nombre
            descripcionAvance
            observaciones{
              observacion
            }
            idUsuario
            documentoEstudiante
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
            GestionAvancesLider: [
                {
                  id: "61ae4433575d4123df0f8a2f",
                  idProyecto: "6195cb148f74a29a3ae0403c",
                  nombre: "luisa",
                  descripcionAvance: "2021",
                  observaciones: [
                    {
                      observacion: "Pasa a Desarrollo"
                    }
                  ],
                  idUsuario: "61c20b847d151f77e7a26731",
                  documentoEstudiante: 987654321
                }
              ]
        }
    }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const { query, variables, context, esperado } = getGestionAvancesLider

test('Buscar Gestion de Inscripciones', async () => {

    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);
    expect(result).toEqual(esperado);

})
