import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
// ProyectoYavances(nombre : String!) : [Proyecto, GestionAvance]
const typeDefs = ` 
    type Query {
        Hola(nombre : String!) : String
        Proyectos : [Proyecto]
        ProyectoLider(nombreLider : String!) : [Proyecto] 
        ProyectoID(id:String!): Proyecto       
        Usuarios : [Usuario]
        UsuarioEstudiante(rol : String!) : [Usuario]
        GestionInscripciones : [GestionInscripcion]
        GestionInscripcionByEst(idEstudiante : String!) : [GestionInscripcion]
        GestionInscripcionByEstadoIns(estadoInscripcion : String!) : [GestionInscripcion]
        GestionAvances : [GestionAvance]
        GestionAvanceByidPro(idProyecto : String!) : [GestionAvance]    
    }
    
    type Mutation{
        AgregarProyecto( proyecto : ProyectoInput ): Proyecto
        AgregarUsuario( usuario : UsuarioInput ): Usuario 
        AgregarGestionInscripcion( gestioninscripcion : GestionInscripcionInput  ): GestionInscripcion  
        AgregarGestionAvance( gestionAvances : GestionAvanceInput  ): GestionAvance

        ActualizarUsuario( usuario : UsuarioInput ): Usuario
        ActualizarUsuarioEstado( usuario : ActualizarUsuarioInput ): Usuario 
        ActualizarEstadoProyecto(proyecto: ActualizarEstadoProyectoInput):Proyecto  
        ActualizarFaseProyecto(proyecto: ActualizarFaseProyectoInput):Proyecto
        ActualizarProyecto(proyecto : ActualizarProyectoInput):Proyecto
        ActualizarEstadoInscripcion(gestioninscripcion: ActualizarEstadoInscripcionInput):GestionInscripcion
        ActualizarDescripcionAvance(gestionAvances: ActualizarDescripcionAvanceInput):GestionAvance
    }

     type Proyecto {
         id: ID,
         nombre: String,
         objetivosGenerales: String,
         objetivosEspecificos: [Objetivo],
         presupuesto: Int,
         fechaInicio: String,
         fechaFinal: String,
         docLider: Int,
         nombreLider: String,
         estadoProyecto: Boolean,
         faseProyecto: String
     }
     type Objetivo {
         objetivo: String
     }

     input ActualizarProyectoInput{
         nombre:String!,
         objetivosGenerales:String!,
         presupuesto:Int!
     }

     input ProyectoInput {
        nombre: String!,
        objetivosGenerales: String!,
        objetivosEspecificos: [ObjetivoInput]!,
        presupuesto: Int!,
        fechaInicio: String!,
        fechaFinal: String!,
        docLider: Int!,
        nombreLider: String!,
        estadoProyecto: Boolean!,
        faseProyecto: String!
    }
    input ActualizarEstadoProyectoInput{
        id:ID!,
        estadoProyecto:Boolean!
    }

    input ActualizarFaseProyectoInput{
        id:ID!,
        faseProyecto:String!
    }

    input ObjetivoInput {
        objetivo: String
    }


    type Usuario {
        id: ID,
        nombreCompleto: String,
        documento: Int,
        rol: String,
        correo: String,
        password: String,
        estadoUsuario: String
    }

    input UsuarioInput {
        id : ID!
        nombreCompleto: String!,
        documento: Int!,
        rol: String!,
        correo: String!,
        password: String!,
        estadoUsuario: String!        
    }

    input ActualizarUsuarioInput {
        id : ID!
        estadoUsuario: String!        
    }

    type GestionInscripcion {
        id: ID,
        idProyecto: ID,
        nombre: String,
        idEstudiante: ID,
        nombreEstudiante: String,
        estadoInscripcion: String,
        fechaEgreso: String,
        fechaFinal: String
    }

    input GestionInscripcionInput {
        idProyecto: ID,
        nombre: String,
        idEstudiante: ID,
        nombreEstudiante: String,
        estadoInscripcion: String,
        fechaEgreso: String,
        fechaFinal: String    
    }
    input ActualizarEstadoInscripcionInput{
        id:ID!,
        estadoInscripcion:String!
    }
    type GestionAvance {
        id: ID,
        idProyecto: ID,
        nombre: String,
        fechaAvance: String,
        descripcionAvance : String,
        observaciones: [Observacion],
        idUsuario: ID
    }
    type Observacion{
        observacion: String
    }

    input GestionAvanceInput {
        idProyecto: ID,
        nombre: String,
        fechaAvance: String,
        descripcionAvance : String,
        observaciones: [ObservacionInput], 
        idUsuario: ID
    }
    input ObservacionInput{
        observacion: String
    }

    input ActualizarDescripcionAvanceInput{
        id:ID!,
        descripcionAvance:String!
    }

`; 


export default makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})