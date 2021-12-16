import mongoose from "mongoose";
const {Schema, model, isValidObjectId} = mongoose

const ProyectoSchema= Schema({
    nombre: {type:String,required:true},
    objetivosGenerales: {type:String,required:true},
    objetivosEspecificos: [{
        objetivo:String
    }],
    presupuesto : {type: Number,required:true},
    fechaInicio : {type:Date, default : null},
    fechaFinal : {type:Date, default:null},
    docLider: {type:Number,required:true},
    nombreLider: {type:String, required:true},
    estadoProyecto:{type:Boolean,default: "Inactivo"},
    faseProyecto:{type:String,required:true}

})
export default model("Proyecto",ProyectoSchema);