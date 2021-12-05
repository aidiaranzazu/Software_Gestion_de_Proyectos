import mongoose from "mongoose"

 export const dbConnection = async () =>{
    try{
        await mongoose.connect('mongodb+srv://CrisPrueba:*q123456@cluster0.8gg2y.mongodb.net/ProyectosInvest');
        console.log("Base de datos conectada")
    }catch(error){
        console.log(error)
    }
}
