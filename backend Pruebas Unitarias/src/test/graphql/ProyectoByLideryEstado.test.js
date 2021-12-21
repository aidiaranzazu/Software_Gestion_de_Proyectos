import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dbConnection from "../../database/config";
import dotenv from "dotenv";

dotenv.config();

const getProyectoByLider = {
    query: `
    {
        ProyectoByLideryEstado(docLider:"123123123",estadoProyecto:true){
            id
            nombre
            objetivosGenerales
            objetivosEspecificos{
              objetivo
            }
            presupuesto
            docLider
            nombreLider
            estadoProyecto
            faseProyecto
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
            ProyectoByLideryEstado: [
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
                    docLider: 123123123,
                    nombreLider: "Daniel",
                    estadoProyecto: true,
                    faseProyecto: "Null"
                }
            ]
        }
    }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const { query, variables, context, esperado } = getProyectoByLider

test('Buscar Proyecto por ID', async () => {

    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);
    expect(result).toEqual(esperado);

})
