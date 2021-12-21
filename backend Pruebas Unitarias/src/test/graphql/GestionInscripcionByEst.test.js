import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dbConnection from "../../database/config";
import dotenv from "dotenv";

dotenv.config();

const getGestionInscripcionByEst = {
    query: `
    {
        GestionInscripcionByEst(idEstudiante:"61a54312349374e8348586ec"){
            id
            idProyecto
            nombre
            idEstudiante
            nombreEstudiante
            estadoInscripcion
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
            GestionInscripcionByEst: [
                {
                    id: "61ac092e94dbcb1309c89032",
                    idProyecto: "6195cb148f74a29a3ae0403c",
                    nombre: "luisa",
                    idEstudiante: "61a54312349374e8348586ec",
                    nombreEstudiante: "Luis",
                    estadoInscripcion: "Aceptado",
                    documentoEstudiante: null
                }
            ]
        }
    }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const { query, variables, context, esperado } = getGestionInscripcionByEst

test('Buscar Gestion de Inscripciones', async () => {

    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);
    expect(result).toEqual(esperado);

})
