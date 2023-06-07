import UsuariosBaseDAO from "./usuario_Base_DAO.js";
import knex from "knex";
import config from "../../config.js";

class UsuarioSQLITE3 extends UsuariosBaseDAO {
  constructor() {
    super();
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

  getIdUsuario = async (anomes) => {
    try {
      let result = await this._db
        .select("id_usuario")
        .from("usuarios")
        .where("id_usuario", "like", `${anomes}%`)
        .orderBy("id_usuario", "desc")
        .first();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  getUsuarios = async (id_usuario) => {
    try {
      if (id_usuario) {
        const rows = await this._db
          .select("*")
          .from("usuarios")
          .innerJoin('roles', 'usuarios.id_rol', 'roles.id_rol')
          .where("id_usuario", id_usuario);
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
      } else {
        const rows = await this._db
          .select("*")
          .from("usuarios")
          .innerJoin('roles', 'usuarios.id_rol', 'roles.id_rol')
          .limit(100)
          .orderBy("id_usuario", "asc");
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
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  saveUsuario = async (obj) => {
    try {
      await this._db("usuarios").insert(obj);
      return obj;
    } catch (error) {
      throw new Error(error);
    }
  };

  updateUsuario = async (obj) => {
    try {
      const rows = await this._db("usuarios")
        .where("id_usuario", "=", obj.id_usuario)
        .update({
            nombre_usuario: obj.nombre_usuario,
            pass_usuario: obj.pass_usuario,
            id_rol: obj.id_rol,
        });
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteUsuario = async (id_usuario) => {
    try {
      const rows = await this._db("usuarios").where("id_usuario", "=", id_usuario).del();
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default UsuarioSQLITE3;
