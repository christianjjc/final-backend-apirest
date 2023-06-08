import dotenv from "dotenv";
import path from "path";

const pathFile = "./env/" + process.env.NODE_ENV + process.env.TIPO_PERSISTENCIA + ".env";
console.log("ruta completa al archivo --> " + pathFile);

dotenv.config({
  path: path.resolve(pathFile),
});

export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || "8080",
  //SQLITE - MYSQL - POSTGRESS - FIREBASE - MONGO
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || "SQLITE",
  SQLITE3_PATH: process.env.SQLITE3_PATH,
};
