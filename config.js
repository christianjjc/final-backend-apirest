import dotenv from 'dotenv';
import path from "path";

console.log("ruta completa al archivo");
console.log("./env/" + process.env.NODE_ENV + ".env");

dotenv.config({
    path: path.resolve(process.cwd(),process.env.NODE_ENV + ".env")
})

export default {
    NODE_ENV: process.env.NODE_ENV || "developmentss",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || "8080",
    //SQLITE - MYSQL - POSTGRESS - FIREBASE - MONGO
    TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || "SQLITE",
}