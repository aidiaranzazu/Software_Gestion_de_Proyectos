// import { cursos } from "../data/cursos"
import GestionAvance from "../models/GestionAvance";
import GestionInscripcion from "../models/GestionInscripcion";
import Proyecto from "../models/Proyecto"
import Usuario from "../models/Usuario";
import bcryp from "bcrypt";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query: {
        Hola: (parent, args) => {
            return "Hola " + args.nombre
        },
        Proyectos(_, args, context) {
            console.log(context)
            if(context.user.auth){
                return Proyecto.find();    
            }else{
                return null
            }
        },
        ProyectoID(_, { id }) {
            return Proyecto.findById(id);
        },
        ProyectoLider(_, { nombreLider }) {
            return Proyecto.find({ nombreLider })
        },

        Usuarios(_,args,context) {
            console.log(context)
            if(context.user.auth){
                return Usuario.find();    
            }else{
                return null
            }
        },
        UsuarioEstudiante(_, { rol }) {
            return Usuario.find({ rol })
        },
        async UsuarioEstado(_, { estadoUsuario }) {
            return Usuario.find({ estadoUsuario })

        },
        GestionInscripciones(_,args,context) {
            console.log(context)
            if(context.user.auth){
                return GestionInscripcion.find();    
            }else{
                return null
            }
        },
        GestionInscripcionByEst(_, { idEstudiante }) {
            return GestionInscripcion.find({ idEstudiante })
        },
        GestionInscripcionByEstadoIns(_, { estadoInscripcion }) {
            return GestionInscripcion.find({ estadoInscripcion })
        },
        GestionAvances(_,args,context) {
            console.log(context)
            if(context.user.auth){
                return GestionAvance.find();    
            }else{
                return null
            }
        },
        GestionAvanceByidPro(_, { idProyecto }) {
            return GestionAvance.find({ idProyecto })
        },
        GestionInscripcionByidEstEstado(_, { idEstudiante, estadoInscripcion }) {
            return GestionInscripcion.find({ idEstudiante, estadoInscripcion })
        },
        async Login(_, { correo, password }) {
            const usuario = await Usuario.findOne({
                correo
            })
            if (!usuario) {
                return "usuario o contraseña incorrecto"
            }
            const validarPassword = bcryp.compareSync(password, usuario.password);
            if (validarPassword) {
                const token = await generarJwt(usuario.id, usuario.nombreCompleto)
                return token;
            } else {
                return "usuario o contraseña incorrecto"
            }
        }
        
},
    Mutation: {
        async AgregarProyecto(_, { proyecto }) {
            const nProyecto = new Proyecto(proyecto)
            return await nProyecto.save();
        },
    async AgregarUsuario(_, { usuario }) {
        const salt = bcryp.genSaltSync();
        const nUsuario = new Usuario({
            nombreCompleto: usuario.nombreCompleto,
            documento: usuario.documento,
            rol: usuario.rol,
            correo : usuario.correo,               
            estadoUsuario : usuario.estadoUsuario            
       });
       nUsuario.password = bcryp.hashSync(usuario.password, salt)
       return  await nUsuario.save();
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
}, async ActualizarEstadoProyecto(_, { proyecto }) {
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
}, async ActualizarFaseProyecto(_, { proyecto }) {
    return await Proyecto.findByIdAndUpdate(
        proyecto.id,
        {
            faseProyecto: proyecto.faseProyecto
        }, {
        new: true
    }
    )
}, async ActualizarProyecto(_, { proyecto }) {
    return await Proyecto.findByIdAndUpdate(
        proyecto.id,
        {
            nombre: proyecto.nombre,
            objetivosGenerales: proyecto.objetivosGenerales,
            presupuesto: proyecto.presupuesto

        }, {
        new: true
    }
    )
}, async ActualizarEstadoInscripcion(_, { gestioninscripcion }) {
    return await GestionInscripcion.findByIdAndUpdate(
        gestioninscripcion.id,
        {
            estadoInscripcion: gestioninscripcion.estadoInscripcion
        }, {
        new: true
    }
    )
}, async ActualizarDescripcionAvance(_, { gestionAvances }) {
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

