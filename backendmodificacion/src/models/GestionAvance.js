import mongoose from "mongoose";
const {Schema, model, isValidObjectId} = mongoose

const GestionAvanceSchema= Schema({  
    idProyecto: {type:String,required:true},
    nombre: {type:String,required:true},
    fechaAvance: {type:Date,default:Date.now()},
    descripcionAvance : {type:String,required:true},
    observaciones:[{
        observacion: String
    }],
    idUsuario: {type:String,required:true},
    documentoEstudiante:{type:Number,required:true}
})
export default model("GestionAvance",GestionAvanceSchema);