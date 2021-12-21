import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dbConnection from "../../database/config";
import dotenv from "dotenv";

dotenv.config();

const getProyectoLider = {
    query: `
    {
        ProyectoLider(documento:987654321){
            id
              nombre
              objetivosGenerales
              objetivosEspecificos{
                objetivo
              }
              presupuesto
              nombreLider
              estadoProyecto
              faseProyecto
              docLider
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
            ProyectoLider: [
                {
                  id: "61ae90446f786611b9fb0589",
                  nombre: "proyectouno",
                  objetivosGenerales: "Terminar Proyecto uno",
                  objetivosEspecificos: [
                    {
                      objetivo: "TERMINAR PORYECTO"
                    }
                  ],
                  presupuesto: 12312312,
                  nombreLider: "Daniel",
                  estadoProyecto: true,
                  faseProyecto: "Null",
                  docLider: 123123123
                }
              ]
        }
    }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const { query, variables, context, esperado } = getProyectoLider

test('Listar Proyecto por lider ', async () => {

    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);
    expect(result).toEqual(esperado);

})
