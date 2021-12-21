import { graphql } from "graphql"
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import dbConnection from "../../database/config";
import dotenv from "dotenv";

dotenv.config();

const getUsuarios = {
    query: `
    {
        Usuarios(documento:12345678){
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
            Usuarios: [
                {
                    id: "61b55b6fa6d10110814308a9",
                    nombreCompleto: "Aidi Aranzazu Tobon",
                    documento: 12345678,
                    rol: "Administrador",
                    correo: "Aidi.Aranzazu@gmail.com",
                    password: "$2b$10$.TSx5UCU7KADPCWly.i7d.2Ar5YzQ9C4clNM/THDn/v3GlNPuq9/K",
                    estadoUsuario: "Aceptado"
                },
                {
                    id: "61c011685c109ea26e3ff52f",
                    nombreCompleto: "Myriam Varon",
                    documento: 87654321,
                    rol: "Estudiante",
                    correo: "Myriam.Varon@goldendevelpmen.com",
                    password: "$2b$10$RGr29Zi8AV0dUH3vQbtrsOR6cc4oBFEWkb.g4tYs84gmpI/xUxK5y",
                    estadoUsuario: "Aceptado"
                },
                {
                    correo: "cristhian.dorado@gmail.com",
                    documento: 987654321,
                    estadoUsuario: "Aceptado",
                    id: "61c20b847d151f77e7a26731",
                    nombreCompleto: "Cristhian Dorado",
                    password: "$2b$10$fC.1HPAxHStlo..AFyilxOIKv5smyq05cApmojGgoI6yAcxmABZXC",
                    rol: "Lider",
                }
            ]
        }
    }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const { query, variables, context, esperado } = getUsuarios

test('Listar todos los Usuarios ', async () => {

    await dbConnection();
    const result = await graphql(schema, query, null, context, variables);
    expect(result).toEqual(esperado);

})
