import mongoose from "mongoose";
const {Schema, model, isValidObjectId} = mongoose

const GestionInscripcionSchema= Schema({      
    idProyecto: {type:String,required:true},
    nombre: {type:String,required:true},
    idEstudiante: {type:String,required:true},
    nombreEstudiante:{type:String,required:true},
    documentoEstudiante:{type:Number,required:true},
    estadoInscripcion:{type:String,required:true},
    fechaIngreso:{type:Date,default: null},
    fechaFinal:{type:Date,default:null}

})
export default model("GestionInscripcion",GestionInscripcionSchema);