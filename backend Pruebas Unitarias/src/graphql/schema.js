import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers.js";
// ProyectoYavances(nombre : String!) : [Proyecto, GestionAvance]
export const typeDefs = ` 
    type Query {
        Hola(nombre : String!) : String
        Proyectos(documento:Int!): [Proyecto]
        ProyectoLider(documento: Int!):[Proyecto]
        ProyectoByLideryEstado( docLider : String!, estadoProyecto : Boolean ) : [Proyecto] 
        ProyectoID(id:String!): Proyecto

        Usuarios(documento:Int!):[Usuario]
        UsuarioEstudiante(rol : String!) : [Usuario]
        UsuarioEstudianteById(id : String!) : [Usuario]
        UsuarioEstado(estadoUsuario:String!) : [Usuario]

        GestionInscripciones : [GestionInscripcion]
        GestionInscripcionByEst(idEstudiante : String!) : [GestionInscripcion]
        GestionInscripcionByEstadoIns(estadoInscripcion : String!) : [GestionInscripcion]
        GestionAvancesLider(documentoEstudiante: Int!) : [GestionAvance]
        GestionAvanceByidPro(documentoEstudiante: Int!) : [GestionAvance] 
        Login( correo : String!, password : String!) : String   
    }
    
    type Mutation{
        AgregarProyecto( proyecto : ProyectoInput ): Proyecto
        AgregarUsuario( usuario : UsuarioInput ): Usuario 
        AgregarGestionInscripcion( gestioninscripcion : GestionInscripcionInput  ): GestionInscripcion  
        AgregarGestionAvance( gestionavance : GestionAvanceInput  ): GestionAvance
       
        ActualizarUsuario( usuario : ActualizarUsuarioInput ): Usuario 
        ActualizarUsuarioEstado( usuario : ActualizarEstadoUsuarioInput ): Usuario 
        ActualizarProyecto( proyecto : ProyectoActualizarInput ): Proyecto
        ActualizarProyectoFase( proyecto : ProyectoInputfase ): Proyecto
        ActualizarEstadoProyecto(proyecto: ActualizarEstadoProyectoInput):Proyecto  
        ActualizarEstadoInscripcion(gestioninscripcion: ActualizarEstadoInscripcionInput):GestionInscripcion
        ActualizarAvanceUsuario(gestionAvances:ActualizarAvanceInput ):GestionAvance
        ActualizarAvanceLider(gestionAvances: ActualizarAvanceObserInput ):GestionAvance
    }

     type Proyecto {
         id: ID,
         nombre: String,
         objetivosGenerales: String,
         objetivosEspecificos: [Objetivo],
         presupuesto: Int,
         docLider: Int,
         nombreLider: String,
         estadoProyecto: Boolean,
         faseProyecto: String
     }
     type Objetivo {
         objetivo: String
     }

     input ProyectoInput {
         id: ID! 
        nombre: String,
        objetivosGenerales: String!,
        objetivosEspecificos: [ObjetivoInput]!,
        presupuesto: Int!,
        docLider: Int ,
        nombreLider: String,
        estadoProyecto: Boolean,
        faseProyecto: String,
                
    }
    input ProyectoActualizarInput {
       id: ID!,
       docLider: Int!, 
       nombre: String,
       objetivosGenerales: String!,
       objetivosEspecificos: [ObjetivoInput]!,
       presupuesto: Int!,
         }
    input ProyectoInputfase {
       id: ID!
       docLider: Int!,
       faseProyecto: String!
      

   }

   input ActualizarEstadoProyectoInput{
    id:ID!,
    docLider: Int!,
    faseProyecto: String!,
    estadoProyecto: Boolean
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
        nombreCompleto: String!,
        documento: Int!,
        password: String!,
        estadoUsuario: String!        
    }
    input ActualizarEstadoUsuarioInput {
        id : ID!
        documento: Int! 
        estadoUsuario: String!        
    }
    
    type GestionInscripcion {
        id: ID,
        idProyecto: String,
        nombre: String,
        idEstudiante: String,
        nombreEstudiante: String,
        estadoInscripcion: String, 
        documentoEstudiante: Int       
    }

    input GestionInscripcionInput {
        id: ID!,
        idProyecto: ID,
        nombre: String,
        idEstudiante: ID,
        documentoEstudiante: Int!,
        nombreEstudiante: String,
        estadoInscripcion: String,
    }
    input ActualizarEstadoInscripcionInput{
       
        id: ID!,
        idProyecto: ID!,
        estadoInscripcion:String!
    }
    type GestionAvance {
        id: ID,
        idProyecto: String!,
        nombre: String,
        descripcionAvance : String,
        observaciones: [Observacion],
        idUsuario: String!,
        documentoEstudiante: Int
    }
    type Observacion{
        observacion: String
    }

    input GestionAvanceInput {
        id : ID!
        idProyecto: String!,
        nombre: String!,
        descripcionAvance : String!,
        observaciones: [ObservacionInput]!, 
        idUsuario: String!,
        documentoEstudiante: Int!
    }
    input ObservacionInput{
        observacion: String
    }

    input ActualizarAvanceInput{
        id:ID!,   
        nombre: String!,     
        descripcionAvance:String!,
        observaciones: [ObservacionInput]!,
        documentoEstudiante: Int!
    }
    input ActualizarAvanceObserInput{
        id:ID!,   
        observaciones: [ObservacionInput]!,
        documentoEstudiante: Int!
    }

`; 


const schx = makeExecutableSchema({
    typeDefs : typeDefs,
    resolvers : resolvers
})

export default schx;