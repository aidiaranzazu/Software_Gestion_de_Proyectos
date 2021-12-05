// import { cursos } from "../data/cursos"
import GestionAvance from "../models/GestionAvance";
import GestionInscripcion from "../models/GestionInscripcion";
import Proyecto from "../models/Proyecto"
import Usuario from "../models/Usuario";

export const resolvers = {
    Query: {
        Hola: (parent, args) => {
            return "Hola " + args.nombre
        },
        Proyectos() {
            return Proyecto.find();
        },
        ProyectoID(_, { id }) {
            return Proyecto.findById(id);
        },
        ProyectoLider(_, { nombreLider }) {
            return Proyecto.find({ nombreLider })
        },
        // ProyectoYavances(Proyecto,{nombre}){
        //     return GestionAvance.find({nombre:Proyecto.nombre})                    
        // },

        Usuarios() {
            return Usuario.find()
        },
        UsuarioEstudiante(_, { rol }) {
            return Usuario.find({ rol })
        },
        GestionInscripciones() {
            return GestionInscripcion.find()
        },
        GestionInscripcionByEst(_, { idEstudiante }) {
            return GestionInscripcion.find({ idEstudiante })
        },
        GestionInscripcionByEstadoIns(_, { estadoInscripcion }) {
            return GestionInscripcion.find({ estadoInscripcion })
        },
        GestionAvances() {
            return GestionAvance.find()
        },
        GestionAvanceByidPro(_, { idProyecto }) {
            return GestionAvance.find({ idProyecto })
        }
    },
    Mutation: {
        async AgregarProyecto(_, { proyecto }) {
            const nProyecto = new Proyecto(proyecto)
            return await nProyecto.save();
        },
        async AgregarUsuario(_, { usuario }) {
            const nUsuario = new Usuario({
                nombreCompleto: usuario.nombreCompleto,
                documento: usuario.documento,
                rol: usuario.rol,
                correo: usuario.correo,
                password: usuario.password,
                estadoUsuario: usuario.estadoUsuario
            });

            return await nUsuario.save();
        },
        async AgregarGestionInscripcion(_, { gestioninscripcion }) {
            const nInscripcion = new GestionInscripcion({
                idProyecto: gestioninscripcion.idProyecto,
                nombre: gestioninscripcion.nombre,
                idEstudiante: gestioninscripcion.idEstudiante,
                nombreEstudiante: gestioninscripcion.nombreEstudiante,
                estadoInscripcion: gestioninscripcion.estadoInscripcion,
                fechaEgreso: gestioninscripcion.fechaEgreso,
                fechaFinal: gestioninscripcion.fechaFinal
            });

            return await nInscripcion.save();
        },
        async AgregarGestionAvance(_, { gestionAvances }) {
            const nAvance = new GestionAvance(gestionAvances)
            return await nAvance.save();
        },
        async ActualizarUsuario(_, { usuario }) {
            //    console.log("usuario", usuario)
            //    const usr = await Usuario.findById(usuario.id)
            //    console.log(usr)
            return await Usuario.findByIdAndUpdate(
                usuario.id,
                {
                    documento: usuario.documento,
                    rol: usuario.rol,
                    correo: usuario.correo,
                    password: usuario.password,
                    estadoUsuario: usuario.estadoUsuario
                }, {
                new: true
            }
            )
        },
        async ActualizarUsuarioEstado(_, { usuario }) {
            //    console.log("usuario", usuario)
            //    const usr = await Usuario.findById(usuario.id)
            //    console.log(usr)
            return await Usuario.findByIdAndUpdate(
                usuario.id,
                {
                    estadoUsuario: usuario.estadoUsuario
                }, {
                new: true
            }
            )
        },async ActualizarEstadoProyecto(_, { proyecto }) {
            //    console.log("usuario", usuario)
            //    const usr = await Usuario.findById(usuario.id)
            //    console.log(usr)
            return await Proyecto.findByIdAndUpdate(
                proyecto.id,
                {
                    estadoProyecto: proyecto.estadoProyecto
                }, {
                new: true
            }
            )
        },async ActualizarFaseProyecto(_, { proyecto }) {
            return await Proyecto.findByIdAndUpdate(
                proyecto.id,
                {
                    faseProyecto: proyecto.faseProyecto
                }, {
                new: true
            }
            )
        },async ActualizarProyecto(_, { proyecto }) {
            return await Proyecto.findByIdAndUpdate(
                proyecto.id,
                {
                    nombre: proyecto.nombre,
                    objetivosGenerales: proyecto.objetivosGenerales,
                    presupuesto:proyecto.presupuesto
                    
                }, {
                new: true
            }
            )
        },async ActualizarEstadoInscripcion(_, { gestioninscripcion }) {
            return await GestionInscripcion.findByIdAndUpdate(
                gestioninscripcion.id,
                {
                    estadoInscripcion: gestioninscripcion.estadoInscripcion
                }, {
                new: true
            }
            )
        },async ActualizarDescripcionAvance(_, {gestionAvances }) {
            return await GestionAvance.findByIdAndUpdate(
                gestionAvances.id,
                {
                    descripcionAvance: gestionAvances.descripcionAvance
                }, {
                new: true
            }
            )
        }
    }
}

