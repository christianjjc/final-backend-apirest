import dbInstance from "../../connection/connMysql.js";
import UsuariosBaseDAO from "./usuario_Base_DAO.js";
import moment from "moment";

class UsuarioMYSQL extends UsuariosBaseDAO {
  constructor() {
    super();
    this._db = dbInstance.getConnection();
  }

  getIdUsuario = async (anomes) => {
    try {
      const result = await this._db
        .select("id_usuario")
        .from("usuarios")
        .where("id_usuario", "like", `${anomes}%`)
        .orderBy("id_usuario", "desc")
        .first();
      if (result) {
        return result;
      } else {
        return { id_usuario: `${anomes}0000` };
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getUsuarios = async (id) => {
    try {
      const rows = await this._db
        .select("*")
        .from("usuarios")
        .innerJoin("roles", "usuarios.id_rol", "roles.id_rol")
        .where("id_usuario", id);
      const result = rows.map((row) => {
        return {
          id_usuario: row["id_usuario"],
          nombre_usuario: row["nombre_usuario"],
          pass_usuario: row["pass_usuario"],
          id_rol: row["id_rol"],
          nombre_rol: row["nombre_rol"],
          desc_rol: row["desc_rol"],
          level: row["level"],
        };
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  getUsuariosAll = async (valor) => {
    try {
      const rows = await this._db
        .select("*")
        .from("usuarios")
        .where("nombre_usuario", "like", `%${valor}%`)
        .innerJoin("roles", "usuarios.id_rol", "roles.id_rol")
        .limit(100)
        .orderBy("id_usuario", "asc");
      const result = rows.map((row) => {
        return {
          id_usuario: row["id_usuario"],
          nombre_usuario: row["nombre_usuario"],
          pass_usuario: row["pass_usuario"],
          id_rol: row["id_rol"],
          nombre_rol: row["nombre_rol"],
          desc_rol: row["desc_rol"],
          level: row["level"],
        };
      });
      return result;
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
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteUsuario = async (id) => {
    try {
      const rows = await this._db("usuarios").where("id_usuario", "=", id).del();
      return rows;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default UsuarioMYSQL;
