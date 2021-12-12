const graphql  = require("graphql");
const {GraphQLObjectType, GraphQLString, GraphQLSchema}= graphql;
const Usuarios = [
    {
        id : "1",
        nombreCompleto: "patrones de diseño java",
        rol: "java",
        correo : "2021",
        contrasena : "micontraseña",
        estadoUsuario : "activo",
    },
    {
        id : "1",
        nombreCompleto: "patrones de diseño java",
        rol: "java",
        correo : "2021",
        contrasena : "micontraseña",
        estadoUsuario : "activo",
    },
    {
        id : "1",
        nombreCompleto: "patrones de diseño java",
        rol: "java",
        correo : "2021",
        contrasena : "micontraseña",
        estadoUsuario : "activo",
    },
    {
        id : "1",
        nombreCompleto: "patrones de diseño java",
        rol: "java",
        correo : "2021",
        contrasena : "micontraseña",
        estadoUsuario : "activo",
    }
]
const UsuarioType = new GraphQLObjectType({
    name : "Curso",
    fields : () => ({
        id : {type : GraphQLString}, 
        nombreCompleto : {type : GraphQLString},
        rol: {type : GraphQLString},
        correo : {type : GraphQLString},
        contrasena : {type : GraphQLString},
        estadoUsuario : {type : GraphQLString},

     })
});

const RootQuery = new GraphQLObjectType({
    name : "RootQuery",
    fields : {
        usuario : {
            type : UsuarioType,
            args : {
                id : {
                        type : GraphQLString, 

                }
            },
            resolve(parent,args){
                return Usuarios.find(usuario => usuario.id === args.id)

            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : RootQuery
})