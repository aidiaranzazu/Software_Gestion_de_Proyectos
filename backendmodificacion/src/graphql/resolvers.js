// import { cursos } from "../data/cursos"
import GestionAvance from "../models/GestionAvance.js";
import GestionInscripcion from "../models/GestionInscripcion.js";
import Proyecto from "../models/Proyecto.js";
import Usuario from "../models/Usuario.js";
import bcryp from "bcrypt";
import { generarJwt } from "../helpers/jwt.js";

export const resolvers = {
    Query: {
        Hola: (parent, args) => {
            return "Hola " + args.nombre
        },
        async Proyectos(_,{documento}, context) {
                // if (context.user.auth) {
                const lider = await Usuario.findOne({
                    documento                  
                })
                if(lider && lider.rol ==="Administrador" || lider.rol ==="Estudiante" ){    
                    return Proyecto.find();
                // } else {
                //     return null
                // }              
                }    
        },
        ProyectoID(_, { id }, context) {
            if (context.user.auth) {
                return Proyecto.findById(id);
            } else {
                return null
            }
        },
        async ProyectoLider(_, { docLider }, context) {
            // if (context.user.auth) 
            const lider = await Usuario.findOne({
                documento                  
            })
            if(lider && lider.rol ==="Lider" ){  
                return Proyecto.find({ docLider })
            // } else {
            //     return null
            // }
            }
        },
        ProyectoByLideryEstado(_, { docLider, estadoProyecto }, context) {
            if (context.user.auth) {
                return Proyecto.find({ docLider, estadoProyecto })
            } else {
                return null
            }
        },

        async  Usuarios(_, {documento}, context) {
            // if (context.user.auth ) {
            const lider = await Usuario.findOne({
                documento                  
            })
            if(lider && lider.rol =="Administrador"){   
                return Usuario.find();
            } else {
                return null
            }
            // } else {
                //     return null
           // }   
        },
        async UsuarioEstudiante(_, { rol, documento }, context) {
            // if (context.user.auth) {
            const lider = await Usuario.findOne({
                documento                  
            })
            if(lider && lider.rol =="Lider"){     
                return Usuario.find({ rol })
            // } else {
            //     return null
            // }
            }
         },
        UsuarioEstudianteById(_, { id }, context) {
            console.log(context)
            if (context.user.auth) {
                return Usuario.find({ id })
            } else {
                return null
            }

        },
        UsuarioEstado(_, { estadoUsuario }, context) {
            if (context.user.auth) {
                return Usuario.find({ estadoUsuario })
            } else {
                return null
            }
        },
        GestionInscripciones(_, agrs, context) {
            console.log(context)
            if (context.user.auth) {
                return GestionInscripcion.find();
            } else {
                return null
            }
        },
        GestionInscripcionByEst(_, { idEstudiante }, context) {
            if (context.user.auth) {
                return GestionInscripcion.find({ idEstudiante })
            } else {
                return null
            }
        },
        GestionInscripcionByEstadoIns(_, { estadoInscripcion }, context) {
            if (context.user.auth) {
                return GestionInscripcion.find({ estadoInscripcion })
            } else {
                return null
            }
        },
        async GestionAvancesLider(_,{idProyecto,documentoEstudiante}, context) {
            
            // if (context.user.auth) {
            const lider = await Usuario.findOne({
                documento                  
            })
            if(lider && lider.rol =="Lider"){        
                return GestionAvance.find({idProyecto,documentoEstudiante});
            // } else {
            //     return null
            // }
            }
        },
        async GestionAvanceByidPro(_, { idProyecto,documentoEstudiante }, context) {
            // if (context.user.auth) {
                const lider = await Usuario.findOne({
                    documento                  
                })
                if(lider && lider.rol =="Estudiante"){                    
                    return GestionAvance.find({ idProyecto, documentoEstudiante })
            // } else {
            //     return null
            // }
            }
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
        async AgregarProyecto(_, { proyecto }, context) {
            
            // if (context.user.auth) {
                const lider = await Usuario.findOne({
                    documento: proyecto.docLider, 
                    rol:"Lider"                    
                })
                if (!lider || proyecto.faseProyecto == "Terminado") {
                    return null
                } else {
                    const nProyecto = new Proyecto(proyecto)
                    return await nProyecto.save();
                }
            // } else {
            //     return null
            // }

        },
        async AgregarUsuario(_, { usuario }, context) {

            if (context.user.auth) {
                const salt = bcryp.genSaltSync();
                const nUsuario = new Usuario({
                    nombreCompleto: usuario.nombreCompleto,
                    documento: usuario.documento,
                    rol: usuario.rol,
                    correo: usuario.correo,
                    estadoUsuario: usuario.estadoUsuario
                });
                nUsuario.password = bcryp.hashSync(usuario.password, salt)
                return await nUsuario.save();
            } else {
                return null
            }

        },
        async AgregarGestionInscripcion(_, { gestioninscripcion },context) {
            // if (context.user.auth) {
                 try {
                    
                    const inscripcion = await Proyecto.findById(gestioninscripcion.idProyecto).exec();
                    const estuid = await Usuario.findById(gestioninscripcion.idEstudiante).exec();
                    const coinsidencia = await Usuario.findOne({
                        documento:gestioninscripcion.documentoEstudiante,
                        rol: "Estudiante"
                    }).exec();
                    const coinsidencia2 = await Proyecto.findOne({
                        nombre: gestioninscripcion.nombre,
                        estadoProyecto: true
                    }).exec();
                     
                      const nInscripcion = new GestionInscripcion({
                        idProyecto: gestioninscripcion.idProyecto,
                        nombre: gestioninscripcion.nombre,
                        idEstudiante: gestioninscripcion.idEstudiante,
                        nombreEstudiante: gestioninscripcion.nombreEstudiante,
                        estadoInscripcion: null,
                        fechaIngreso: gestioninscripcion.fechaIngreso,
                        fechaFinal: gestioninscripcion.fechaFinal,
                        documentoEstudiante: gestioninscripcion.documentoEstudiante
                    });
                    if(inscripcion && estuid && coinsidencia && coinsidencia2 ){    
                        return await nInscripcion.save();
                    }else{
                        return null
                   }
                    
                  } catch (error) {
                    return null
                }
            // } else {
            //     return null
            // }       
            
        },
        async AgregarGestionAvance(_, { gestionavance }) {
            // if (context.user.auth) {
                try {                    
                    const fase = await Proyecto.findById(gestionavance.idProyecto).exec();
                    const usuaid = await Usuario.findById(gestionavance.idUsuario).exec();
                    const coinsidencia1 = await Proyecto.findOne({
                        nombre:gestionavance.nombre,
                        estadoProyecto: true                        
                    }).exec();
                    const coinsidencia2 = await Usuario.findOne({
                        documento:gestionavance.documentoEstudiante,
                        rol: "Estudiante"
                    }).exec();

                    if(fase && usuaid && coinsidencia1 && coinsidencia2 ) {  
                        const nAvance = new GestionAvance(gestionavance)
                        return await nAvance.save()                                              
                     }else{
                        return null;                               
                    }
                    
                } catch(error) {
                    return null
                }
            // } else {
            //     return null
            // }    
           
        },
        async ActualizarUsuario(_, { usuario }) {
            
            // if (context.user.auth) {
                if(usuario.rol === "Estudiante" || usuario.rol === "Lider"){
                return await Usuario.findByIdAndUpdate(
                    usuario.id,
                    {
                        documento: usuario.documento,
                        correo: usuario.correo,
                        password: usuario.password,
                        estadoUsuario: usuario.estadoUsuario
                    }, {
                    new: true
                }
                )
            }else{return null}
            // } else {
            //     return null
            // }
            
        },
        async ActualizarUsuarioEstado(_, { usuario }) {
            // if (context.user.auth) {
                const rolu = await Usuario.findOne({
                    documento:usuario.documento,
                    rol:"Administrador"                        
                }).exec();
                if(rolu){
                return await Usuario.findByIdAndUpdate(
                    usuario.id,
                    {
                        estadoUsuario: usuario.estadoUsuario
                    }, {
                    new: true
                }
                )}else{
                    return null
                }
            // } else {
            //     return null
            // }
           
        },
        async ActualizarProyecto(_, { proyecto }) {
            
            // if (context.user.auth) {
            // try {
                const pro = await Usuario.findOne({
                    documento: proyecto.docLider, 
                    rol:"Lider"                    
                })
                if(pro && proyecto.estadoProyecto !== false && proyecto.faseProyecto !== "Terminado"){
                return await Proyecto.findOneAndUpdate(
                    proyecto.id,
                   
                    {
                        nombre: proyecto.nombre,
                        objetivosEspecificos: proyecto.objetivosEspecificos,
                        objetivosGenerales: proyecto.objetivosGenerales,
                        presupuesto: proyecto.presupuesto
                    },{
                    new: true
                }
                )
            }else{
                return null
            }
                
            // } catch (error) {
            //     return null
            // }    
                             
            // } else {
            //     return null
            // }
            
        },
        async ActualizarProyectoFase(_, { proyecto }) {
            // if (context.user.auth) {
                const pro = await Usuario.findOne({
                    documento: proyecto.docLider, 
                    rol:"Administrador"                    
                })
                if (proyecto.faseProyecto = "Terminado") {
                    proyecto.estadoProyecto = false
                    proyecto.fechaFinal= Date.now()  
                } else {
                    proyecto.estadoProyecto = true
                }
                if(pro){
                return await Proyecto.findByIdAndUpdate(
                    proyecto.id,
                    {
                        faseProyecto: proyecto.faseProyecto,
                        estadoProyecto: proyecto.estadoProyecto,
                        fechaFinal: proyecto.fechaFinal
                    }, {
                    new: true
                }
                )}else{
                    return null
                }

            // } else {
            //     return null
            // }            
        },
        async ActualizarEstadoProyecto(_, { proyecto }) {
            // if (context.user.auth) {
                const fase1 = await Proyecto.findOne({
                    id:proyecto.id,                      
                })
                const pro = await Usuario.findOne({
                    documento: proyecto.docLider, 
                    rol:"Administrador"                    
                })           
                
                if(fase1 && proyecto.faseProyecto !=="Terminado" ){
                    proyecto.estadoProyecto = false
                }else{
                    proyecto.estadoProyecto = true
                }

                if(fase1 && proyecto.estadoProyecto === true && proyecto.faseProyecto === null ){
                    proyecto.faseProyecto = "Iniciado"
                    proyecto.fechaInicio= Date.now() 
                }else{
                    proyecto.faseProyecto = null
                }
                if(pro){
                return await Proyecto.findByIdAndUpdate(
                    proyecto.id,
                    {
                        estadoProyecto:proyecto.estadoProyecto,
                        faseProyecto:proyecto.faseProyecto, 
                        fechaInicio: proyecto.fechaInicio 
                    }, {
                    new: true
                }
                )
            }else{
                return null
            }
            
            // } else {
            //     return null
            // }
           
        },

        async ActualizarEstadoInscripcion(_, { gestioninscripcion }) {
            // if (context.user.auth) {
                const fase1 = await Proyecto.findOne({
                    id: gestioninscripcion.idProyecto, 
                    estadoProyecto: false                   
                })
                if (gestioninscripcion.estadoInscripcion ==="Aceptado"&& gestioninscripcion.fechaIngreso!==null) {
                    gestioninscripcion.fechaIngreso = Date.now()
             } else {
                    gestioninscripcion.fechaIngreso =""
             }    
                if(fase1 && gestioninscripcion.estadoInscripcion ==="Aceptado" && gestioninscripcion.fechaFinal !== null){
                    gestioninscripcion.fechaFinal=Date.now()
                }else{
                    gestioninscripcion.fechaFinal= ""
                }           
                          
             return await GestionInscripcion.findByIdAndUpdate(
                 gestioninscripcion.id,
                 
                 {
                     estadoInscripcion: gestioninscripcion.estadoInscripcion,
                     fechaIngreso: gestioninscripcion.fechaIngreso,
                     fechaFinal:gestioninscripcion.fechaFinal
                 }, {
                 new: true
             }
             )
         
            // } else {
            //     return null
            // }
            
        }, 
        async ActualizarAvanceUsuario(_, { gestionAvances }) {
            // if (context.user.auth) {
                const pro = await Usuario.findOne({
                    documento: gestionAvances.documentoEstudiante, 
                    rol:"Estudiante"                    
                })
                if(pro){      
                return await GestionAvance.findByIdAndUpdate(
                    gestionAvances.id,
                    {  
                        nombre: gestionavance.nombre,                    
                        observaciones: gestionAvances.objetivosEspecificos,
                        descripcionAvance: gestionAvances.descripcionAvance
                    }, {
                    new: true
                }
                )}else{
                    return null
                }
            // } else {
            //     return null
            // }
            
        },
        async ActualizarAvanceLider(_, { gestionAvances }) {
            // if (context.user.auth) {
                const pro = await Usuario.findOne({
                    documento: gestionAvances.documentoEstudiante, 
                    rol:"Lider"                    
                })
                const avance = await Proyecto.findOne({
                    docLider: gestionAvances.documentoEstudiante, 
                              
                })
                if(pro && avance){      
                return await GestionAvance.findByIdAndUpdate(
                    gestionAvances.id,
                    {                                             
                        observaciones: gestionAvances.objetivosEspecificos,
                    }, {
                    new: true
                }
                )}else{
                    return null
                }
            // } else {
            //     return null
            // }
            
        }
    }
}


