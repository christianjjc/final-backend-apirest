import knex from "knex";
import config from "../config.js";

class DataBase {
  constructor() {
    if (!DataBase.instance) {
      this.connection = knex({
        client: config.MYSQL_CLIENT,
        connection: {
          host: config.MYSQL_SERVER,
          port: config.MYSQL_PORT,
          user: config.MYSQL_USER,
          password: config.MYSQL_PASSWORD,
          database: config.MYSQL_BD,
        },
        useNullAsDefault: true,
        pool: { min: 0, max: 10 },
      });
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
