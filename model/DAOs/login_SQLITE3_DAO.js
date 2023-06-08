import knex from "knex";
import config from "../../config.js";

class LoginSQLITE3 {
  constructor() {
    (async () => {
      console.log("Conectando a db... SQLITE3");
      const db = knex({
        client: "sqlite3",
        connection: {
          filename: config.SQLITE3_PATH,
        },
        useNullAsDefault: true,
      });
      console.log("...conectado!");
      this._db = db;
    })();
  }

  getUsuarios = async (obj) => {
    try {
      const rows = await this._db
        .select("*")
        .from("usuarios")
        .innerJoin("roles", "usuarios.id_rol", "roles.id_rol")
        .where({ nombre_usuario: obj.nombre_usuario, pass_usuario: obj.pass_usuario });
      const usuarios = rows.map((row) => {
        return {
          id_usuario: row["id_usuario"],
          nombre_usuario: row["nombre_usuario"],
          pass_usuario: row["pass_usuario"],
          id_rol: row["id_rol"],
          nombre_rol: row["nombre_rol"],
          desc_rol: row["desc_rol"],
        };
      });
      return usuarios;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default LoginSQLITE3;
