import dotenv from "dotenv";
import path from "path";

const pathFile = "./env/" + process.env.NODE_ENV + ".env";
console.log("ruta completa al archivo --> " + pathFile);

dotenv.config({
  path: path.resolve(pathFile),
});

export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || "8080",
  //SQLITE - MYSQL - POSTGRESS - FIREBASE - MONGO
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA,
  SQLITE3_PATH: process.env.SQLITE3_PATH,
  SQLITE3_CLIENT: process.env.SQLITE3_CLIENT,
  MYSQL_SERVER: process.env.MYSQL_SERVER,
  MYSQL_BD: process.env.MYSQL_BD,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_CLIENT: process.env.MYSQL_CLIENT,
};
