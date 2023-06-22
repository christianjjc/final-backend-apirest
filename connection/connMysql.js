import knex from "knex";
import config from "../config.js";

/* console.log("Conectando a db... MYSQL");
const glb_conn = knex({
  client: config.MYSQL_CLIENT,
  connection: {
    host: config.MYSQL_SERVER,
    port: config.MYSQL_PORT,
    user: config.MYSQL_USER,
    password: "",
    database: config.MYSQL_BD,
  },
  useNullAsDefault: true,
});
console.log("...conectado!");

export default glb_conn; */

class DataBase {
  constructor() {
    if (!DataBase.instance) {
      console.log("Conectando a db... MYSQL");
      this.connection = knex({
        client: config.MYSQL_CLIENT,
        connection: {
          host: config.MYSQL_SERVER,
          port: config.MYSQL_PORT,
          user: config.MYSQL_USER,
          password: config.MYSQL_PASSWORD,
          database: config.MYSQL_BD,
        },
        //useNullAsDefault: true,
        pool: { min: 0, max: 10 },
      });
      console.log("...conectado!");

      DataBase.instance = this;
    }
    return DataBase.instance;
  }
  getConnection() {
    return this.connection;
  }
}

const dbInstance = new DataBase();
export default dbInstance;
