import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import {dbConnection} from "./database/config"
const app = express();


dbConnection();


app.use("/graphql", graphqlHTTP({
     graphiql : true,
     schema : schema
}));

app.listen(4000, () => { 
    console.log("servidor  conectado al puerto 4000");})